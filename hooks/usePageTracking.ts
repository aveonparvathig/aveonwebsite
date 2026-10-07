"use client";

import { useEffect, useRef } from "react";
import { useAnalytics } from "./useAnalytics";

export function usePageTracking(pageName: string) {
  const { trackPageView, trackScrollDepth } = useAnalytics();
  const scrollDepthTracked = useRef<Set<string>>(new Set());

  useEffect(() => {
    trackPageView(pageName);
  }, [pageName, trackPageView]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.round(
        ((scrollTop + windowHeight) / docHeight) * 100
      );

      if (scrollPercent >= 25 && !scrollDepthTracked.current.has("25")) {
        trackScrollDepth("25");
        scrollDepthTracked.current.add("25");
      }
      if (scrollPercent >= 50 && !scrollDepthTracked.current.has("50")) {
        trackScrollDepth("50");
        scrollDepthTracked.current.add("50");
      }
      if (scrollPercent >= 75 && !scrollDepthTracked.current.has("75")) {
        trackScrollDepth("75");
        scrollDepthTracked.current.add("75");
      }
      if (scrollPercent >= 90 && !scrollDepthTracked.current.has("100")) {
        trackScrollDepth("100");
        scrollDepthTracked.current.add("100");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trackScrollDepth]);
}
