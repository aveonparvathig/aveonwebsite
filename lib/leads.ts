import { sendNotification, sendAutoReply } from "./email";
import { postLeadToM365 } from "./microsoft-leads";

/**
 * A single inbound lead, normalized across the demo form, contact form and chatbot.
 */
export interface LeadInput {
  name: string;
  email?: string;
  phone?: string;
  interest?: string;
  institution?: string;
  city?: string;
  message?: string;
  source: "demo_form" | "contact_form" | "chatbot" | "magnet" | "newsletter" | "other";
  /** Subject line for the notification email. */
  notifySubject: string;
}

/** Simple 0–100 readiness score: email + phone + institution + stated interest. */
export function scoreLead(lead: LeadInput): number {
  let score = 0;
  if (lead.email) score += 20;
  if (lead.phone) score += 30;
  if (lead.institution) score += 25;
  if (lead.interest) score += 25;
  return Math.min(score, 100);
}

/**
 * Capture a lead, then acknowledge the visitor. The lead is delivered to two
 * best-effort sinks in parallel:
 *   - an internal notification email via Resend, and
 *   - the user's Office 365 tenant via a Power Automate flow (Microsoft List +
 *     Teams + Outlook), when POWER_AUTOMATE_LEAD_URL is configured.
 * It then sends the visitor an instant auto-reply. If neither durable sink
 * succeeds, the full payload is logged loudly so the lead can be recovered from
 * the server logs (Vercel retains these).
 *
 * Returns { ok } — callers should surface an error to the user only when !ok.
 */
export async function saveLead(
  lead: LeadInput,
): Promise<{ ok: boolean; delivered: boolean; posted: boolean }> {
  const leadScore = scoreLead(lead);

  // 1. Deliver to both sinks concurrently — each is best-effort.
  const [emailResult, m365Result] = await Promise.all([
    sendNotification(lead.notifySubject, {
      Name: lead.name,
      Email: lead.email || "—",
      Phone: lead.phone || "—",
      "Interested in": lead.interest || "—",
      "Institution / Company": lead.institution || "—",
      "City / Country": lead.city || "—",
      Message: lead.message || "—",
      Source: lead.source,
      "Lead score": String(leadScore),
    }).catch((err) => {
      console.error("[LEAD] notification email failed:", err);
      return { delivered: false };
    }),
    postLeadToM365(lead, leadScore),
  ]);

  const delivered = emailResult.delivered;
  const posted = m365Result.posted;

  // Last-resort recovery trail when NEITHER durable sink succeeded. This log
  // always runs in that case, so a lead is never truly lost and the visitor
  // never sees a false failure. Monitor these lines (and the "[LEAD] … failed"
  // ones) to catch a real outage.
  if (!delivered && !posted) {
    console.error(
      "[LEAD:FALLBACK] lead not emailed or posted — recover from this log:",
      JSON.stringify({ ...lead, leadScore }),
    );
  }

  // 2. Acknowledge the visitor (never blocks success).
  if (lead.email) {
    sendAutoReply(lead.email, lead.name).catch((err) =>
      console.error("[LEAD] auto-reply failed:", err),
    );
  }

  // Always ok: the lead is captured by email, in Office 365, or in the recovery log.
  return { ok: true, delivered, posted };
}
