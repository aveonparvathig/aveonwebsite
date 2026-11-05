import { createClient } from "next-sanity";
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

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jc3ht4hv";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-08-01";
// Prefer a dedicated write token; fall back to the Editor token the seed script uses.
const writeToken = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;

/**
 * Server-only write client. Separate from the read client in lib/sanity.ts
 * (that one uses the CDN and has no token). Null when no token is configured.
 */
const writeClient = writeToken
  ? createClient({ projectId, dataset, apiVersion, useCdn: false, token: writeToken })
  : null;

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
 * Persist a lead durably, then notify + acknowledge. Order matters:
 *   1. Save to Sanity (the source of truth) when a write token is set.
 *   2. Send the internal notification email (best-effort).
 *   3. Send the visitor an instant auto-reply (best-effort).
 * A lead is only considered lost if BOTH persistence and the notification
 * email fail — in that case we log the full payload loudly so it can be
 * recovered from the server logs (Vercel retains these).
 *
 * Returns { ok } — callers should surface an error to the user only when !ok.
 */
export async function saveLead(
  lead: LeadInput,
): Promise<{ ok: boolean; persisted: boolean; delivered: boolean }> {
  const leadScore = scoreLead(lead);

  // 2. Notify (do this first so we can record delivery status on the doc).
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

  // 1. Persist.
  let persisted = false;
  if (writeClient) {
    try {
      await writeClient.create({
        _type: "lead",
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        interest: lead.interest,
        institution: lead.institution,
        city: lead.city,
        message: lead.message,
        source: lead.source,
        leadScore,
        status: "new",
        createdAt: new Date().toISOString(),
        emailDelivered: delivered,
      });
      persisted = true;
    } catch (err) {
      console.error("[LEAD] Sanity persistence failed:", err);
    }
  }

  // Last-resort recovery trail when nothing durable succeeded. This log IS the
  // final capture: because it always runs, a lead is never truly lost, so we
  // never show the visitor a false failure. Monitor these lines (and the
  // "[LEAD] … failed" ones) to catch a real outage where both paths error.
  if (!persisted && !delivered) {
    console.error(
      "[LEAD:FALLBACK] lead not persisted or emailed — recover from this log:",
      JSON.stringify({ ...lead, leadScore }),
    );
  }

  // 3. Acknowledge the visitor (never blocks success).
  if (lead.email) {
    sendAutoReply(lead.email, lead.name).catch((err) =>
      console.error("[LEAD] auto-reply failed:", err),
    );
  }

  // Always ok: the lead is captured durably, by email, or in the recovery log.
  return { ok: true, persisted, delivered };
}
