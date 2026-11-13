/**
 * Fires paid-channel conversions (Google Ads + Meta Pixel) on a completed lead.
 * Separate from GA4 event tracking (hooks/useAnalytics.ts): those power reporting,
 * these power ad bidding/optimization and retargeting audiences.
 *
 * All calls are safe no-ops when the tags aren't loaded or the env isn't set.
 */

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID; // e.g. "AW-123456789"
export const GOOGLE_ADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL; // conversion label
// Second conversion action for phone/WhatsApp taps ("Call or WhatsApp tap",
// Contact goal, created 13 Nov 2026). Kept separate from the lead label so a
// tap-to-call is never counted as a submitted lead. The label is public (it
// ships in page HTML), so it defaults here; the env var can still override it.
export const GOOGLE_ADS_CONTACT_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL || "O6O3CN-v5bcdEO64j9oB";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export type ConversionType = "demo_lead" | "contact_lead" | "chatbot_lead" | "magnet_lead";

export function trackConversion(type: ConversionType, value = 0): void {
  if (typeof window === "undefined") return;

  try {
    // Google Ads conversion (reuses the gtag.js already on the page).
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag && GOOGLE_ADS_ID && GOOGLE_ADS_LEAD_LABEL) {
      gtag("event", "conversion", {
        send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LEAD_LABEL}`,
        value,
        currency: "INR",
      });
    }

    // Meta Pixel Lead event (also builds the retargeting audience).
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (fbq && META_PIXEL_ID) {
      fbq("track", "Lead", { content_name: type, value, currency: "INR" });
    }
  } catch (err) {
    console.error("[conversions] failed:", err);
  }
}

/**
 * Fires when a visitor taps a phone number or a WhatsApp link. Many buyers
 * call instead of filling a form, so without this the ad platforms see those
 * clicks as non-converting. Sends a GA4 event always, a Google Ads conversion
 * when NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL is set, and Meta's standard
 * `Contact` event when the Pixel is configured.
 */
export function trackContactClick(channel: "phone" | "whatsapp"): void {
  if (typeof window === "undefined") return;
  try {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag("event", `${channel}_click`, { page_path: window.location.pathname });
      if (GOOGLE_ADS_ID && GOOGLE_ADS_CONTACT_LABEL) {
        gtag("event", "conversion", {
          send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONTACT_LABEL}`,
        });
      }
    }
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (fbq && META_PIXEL_ID) {
      fbq("track", "Contact", { content_name: channel });
    }
  } catch (err) {
    console.error("[conversions] contact click failed:", err);
  }
}

/**
 * Fires the Meta Pixel `ViewContent` event for a high-intent page (pricing,
 * the paid landing page). This builds a hotter retargeting audience and gives
 * Meta a stronger optimisation signal than a bare PageView. No-op when the
 * Pixel isn't configured.
 */
export function trackViewContent(name: string): void {
  if (typeof window === "undefined") return;
  try {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (fbq && META_PIXEL_ID) {
      fbq("track", "ViewContent", { content_name: name });
    }
  } catch (err) {
    console.error("[conversions] ViewContent failed:", err);
  }
}
