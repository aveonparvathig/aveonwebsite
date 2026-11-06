"use client";

import { useEffect } from "react";
import { trackViewContent } from "@/lib/analytics-conversions";

/**
 * Fires the Meta Pixel `ViewContent` event once on mount, for high-intent pages
 * (pricing, the paid landing page). Strengthens retargeting audiences and Meta's
 * optimisation. No-op when the Pixel isn't configured.
 */
export function ViewContentTracker({ name }: { name: string }) {
  useEffect(() => {
    trackViewContent(name);
  }, [name]);
  return null;
}
