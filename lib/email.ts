import { siteConfig } from "./constants";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_TO = process.env.CONTACT_NOTIFY_EMAIL || siteConfig.email;
// Verified sender domain, once set up in Resend (e.g. "Aveon <hello@aveoninfotech.com>").
// Falls back to Resend's shared onboarding sender, which only reaches the Resend account owner.
const FROM = process.env.RESEND_FROM || "Aveon Website <onboarding@resend.dev>";

/**
 * Send a notification email via Resend. When RESEND_API_KEY is not set
 * (local dev / before Phase 4 setup), logs the payload instead so forms
 * still work end-to-end.
 */
export async function sendNotification(
  subject: string,
  lines: Record<string, string>,
): Promise<{ delivered: boolean }> {
  const text = Object.entries(lines)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  if (!RESEND_API_KEY) {
    console.warn(`[email] RESEND_API_KEY unset — not delivered, logged only:\n${subject}\n${text}`);
    return { delivered: false };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [NOTIFY_TO],
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend failed (${res.status}): ${body}`);
  }
  return { delivered: true };
}

/**
 * Send the visitor an instant acknowledgement so they know we received their
 * request and when to expect contact. Best-effort: no-ops (logs) when Resend
 * isn't configured, and never throws in a way that should fail the submission.
 */
export async function sendAutoReply(
  to: string,
  name: string,
): Promise<{ delivered: boolean }> {
  const firstName = name.trim().split(/\s+/)[0] || "there";
  const subject = "We've received your request — Aveon Infotech";
  const text = [
    `Hi ${firstName},`,
    "",
    "Thanks for reaching out to Aveon Infotech. We've received your request and a member of our team will contact you within one business day.",
    "",
    `Need us sooner? Message us on WhatsApp: https://wa.me/${siteConfig.whatsapp}`,
    `Or call ${siteConfig.phone} (Mon–Sat, 8:30 AM–6:30 PM IST).`,
    "",
    "— Team Aveon Infotech",
    siteConfig.url,
  ].join("\n");

  if (!RESEND_API_KEY) {
    console.warn(`[email] auto-reply skipped (RESEND_API_KEY unset) → ${to}`);
    return { delivered: false };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to: [to], subject, text }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend auto-reply failed (${res.status}): ${body}`);
  }
  return { delivered: true };
}
