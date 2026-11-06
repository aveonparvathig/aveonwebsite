import type { LeadInput } from "./leads";

/**
 * Sends a lead to the user's Office 365 tenant via a Power Automate cloud flow
 * (an HTTP-triggered flow that writes to a Microsoft List, alerts Teams and
 * emails Outlook). Keeping this out of the codebase means the whole lead board
 * lives in their tenant and can change without a redeploy.
 *
 * Best-effort and env-gated: a no-op when POWER_AUTOMATE_LEAD_URL is unset, and
 * it never throws to the caller. The shared secret lets the flow reject anything
 * that didn't come from us.
 */
const FLOW_URL = process.env.POWER_AUTOMATE_LEAD_URL;
const FLOW_SECRET = process.env.POWER_AUTOMATE_LEAD_SECRET;

export async function postLeadToM365(
  lead: LeadInput,
  leadScore: number,
): Promise<{ posted: boolean }> {
  if (!FLOW_URL) return { posted: false };

  try {
    const res = await fetch(FLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(FLOW_SECRET ? { "x-lead-secret": FLOW_SECRET } : {}),
      },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email ?? "",
        phone: lead.phone ?? "",
        interest: lead.interest ?? "",
        institution: lead.institution ?? "",
        city: lead.city ?? "",
        message: lead.message ?? "",
        source: lead.source,
        leadScore,
        receivedAt: new Date().toISOString(),
      }),
    });
    if (!res.ok) {
      console.error(`[LEAD] Power Automate POST failed (${res.status})`);
      return { posted: false };
    }
    return { posted: true };
  } catch (err) {
    console.error("[LEAD] Power Automate POST error:", err);
    return { posted: false };
  }
}
