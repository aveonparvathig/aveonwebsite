"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";
import { trackContactClick } from "@/lib/analytics-conversions";

/**
 * Mounted once in the root layout. Renders nothing; it
 *  1. stores the ad click id / utm tags the visitor arrived with, so a later
 *     form submission can carry them (lib/attribution.ts), and
 *  2. reports taps on any tel: or wa.me link as a contact conversion. One
 *     delegated listener covers every phone number and WhatsApp button on the
 *     site, including ones added later, without wrapping each link.
 */
export function LeadSignals() {
  useEffect(() => {
    captureAttribution();

    function onClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) trackContactClick("phone");
      else if (href.includes("wa.me/") || href.includes("api.whatsapp.com/")) trackContactClick("whatsapp");
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
