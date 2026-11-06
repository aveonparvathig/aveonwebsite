import { sendNotification, sendAutoReply } from "./email";

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
 * Capture a lead by email, then acknowledge the visitor. Leads are delivered as
 * an internal notification email via Resend; there is no database step.
 *   1. Send the internal notification email (this IS the capture).
 *   2. Send the visitor an instant auto-reply (best-effort).
 * If the notification email does not send, log the full payload loudly so the
 * lead can be recovered from the server logs (Vercel retains these).
 *
 * Returns { ok } — callers should surface an error to the user only when !ok.
 */
export async function saveLead(
  lead: LeadInput,
): Promise<{ ok: boolean; delivered: boolean }> {
  const leadScore = scoreLead(lead);

  // 1. Notify — this is the capture.
  let delivered = false;
  try {
    const res = await sendNotification(lead.notifySubject, {
      Name: lead.name,
      Email: lead.email || "—",
      Phone: lead.phone || "—",
      "Interested in": lead.interest || "—",
      "Institution / Company": lead.institution || "—",
      "City / Country": lead.city || "—",
      Message: lead.message || "—",
      Source: lead.source,
      "Lead score": String(leadScore),
    });
    delivered = res.delivered;
  } catch (err) {
    console.error("[LEAD] notification email failed:", err);
  }

  // Last-resort recovery trail when the notification email did not send. This
  // log always runs in that case, so a lead is never truly lost and the visitor
  // never sees a false failure. Monitor these lines (and the "[LEAD] … failed"
  // ones) to catch a real email outage.
  if (!delivered) {
    console.error(
      "[LEAD:FALLBACK] lead not emailed — recover from this log:",
      JSON.stringify({ ...lead, leadScore }),
    );
  }

  // 2. Acknowledge the visitor (never blocks success).
  if (lead.email) {
    sendAutoReply(lead.email, lead.name).catch((err) =>
      console.error("[LEAD] auto-reply failed:", err),
    );
  }

  // Always ok: the lead is captured by email or in the recovery log.
  return { ok: true, delivered };
}
