"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { EventType } from "@/lib/analytics";

/** Fires the pricing_view event once when the pricing page mounts. */
export function PricingViewTracker() {
  const { trackEvent } = useAnalytics();
  useEffect(() => {
    trackEvent(EventType.PRICING_VIEW, { page: "pricing" });
  }, [trackEvent]);
  return null;
}
