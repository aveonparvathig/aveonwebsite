import { siteConfig } from "./constants";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_TO = process.env.CONTACT_NOTIFY_EMAIL || siteConfig.email;

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
    console.log(`[email:dev] ${subject}\n${text}`);
    return { delivered: false };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Aveon Website <onboarding@resend.dev>",
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
