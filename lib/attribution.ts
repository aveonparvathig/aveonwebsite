/**
 * Ad-click attribution for leads.
 *
 * When a visitor lands from an ad, the URL carries a click id (gclid for
 * Google, fbclid for Meta) and usually utm_* tags. Those are gone by the time
 * the visitor reaches a form, so they are stored on first sight and attached
 * to the lead when a form is submitted. With the click id on the lead, a deal
 * that closes weeks later can be traced to the keyword that produced it (and
 * uploaded to Google Ads as an offline conversion).
 *
 * Stored in localStorage only; nothing is sent anywhere until the visitor
 * submits a form themselves.
 */

const STORAGE_KEY = "aveon_attribution";
/** Google Ads' default click-through conversion window. */
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

const CLICK_ID_PARAMS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid"] as const;
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const TRACKED_PARAMS = [...CLICK_ID_PARAMS, ...UTM_PARAMS];

export const ATTRIBUTION_FIELDS = [...TRACKED_PARAMS, "landing_page", "referrer"] as const;
export type AttributionField = (typeof ATTRIBUTION_FIELDS)[number];
export type Attribution = Partial<Record<AttributionField, string>>;

/** Longest value kept per field; mirrored by the server-side schema. */
export const ATTRIBUTION_MAX_LEN = 300;

type Stored = { at: number; data: Attribution };

function read(): Stored | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Stored;
    if (!parsed?.at || Date.now() - parsed.at > MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Record where this visit came from. A URL carrying a click id or utm tag is a
 * new campaign touch and replaces what was stored; a plain visit only fills in
 * the first landing page and referrer when nothing is stored yet.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const fromUrl: Attribution = {};
    for (const key of TRACKED_PARAMS) {
      const value = params.get(key);
      if (value) fromUrl[key] = value.slice(0, ATTRIBUTION_MAX_LEN);
    }
    const isCampaignTouch = Object.keys(fromUrl).length > 0;
    if (!isCampaignTouch && read()) return;

    const referrer = document.referrer;
    const external = referrer && !referrer.startsWith(window.location.origin);
    const data: Attribution = {
      ...fromUrl,
      landing_page: window.location.pathname.slice(0, ATTRIBUTION_MAX_LEN),
      ...(external ? { referrer: referrer.slice(0, ATTRIBUTION_MAX_LEN) } : {}),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    // Storage blocked (private mode, cookies disabled): leads still submit, just unattributed.
  }
}

/** The stored attribution, or undefined when there is none. Safe on the server. */
export function getAttribution(): Attribution | undefined {
  if (typeof window === "undefined") return undefined;
  return read()?.data;
}
