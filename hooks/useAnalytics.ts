"use client";

import { useCallback } from "react";
import { EventType, EventProperties, getEventValue } from "@/lib/analytics";

export function useAnalytics() {
  const trackEvent = useCallback(
    (eventName: EventType | string, properties?: EventProperties) => {
      if (typeof window === "undefined") return;

      try {
        // Track in Google Analytics 4 via gtag
        if (window.gtag) {
          const eventValue = getEventValue(eventName as EventType);
          window.gtag("event", eventName, {
            value: eventValue,
            currency: "INR",
            ...properties,
          });
        }

        // Log for debugging
        console.debug(`[Analytics] Event: ${eventName}`, properties);
      } catch (error) {
        console.error("[Analytics] Error tracking event:", error);
      }
    },
    []
  );

  const trackPageView = useCallback((pageName: string, pageLocation?: string) => {
    if (typeof window === "undefined") return;

    try {
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_title: pageName,
          page_location: pageLocation || window.location.href,
          page_path: window.location.pathname,
        });
      }
    } catch (error) {
      console.error("[Analytics] Error tracking page view:", error);
    }
  }, []);

  const trackLead = useCallback(
    (leadData: {
      leadType: "form" | "chatbot" | "phone" | "email";
      source: string;
      value?: number;
      properties?: EventProperties;
    }) => {
      const event =
        leadData.leadType === "chatbot"
          ? EventType.CHATBOT_LEAD_CAPTURE
          : EventType.FORM_SUBMIT;

      trackEvent(event, {
        lead_type: leadData.leadType,
        source: leadData.source,
        event_value: leadData.value || getEventValue(event as EventType),
        ...leadData.properties,
      });
    },
    [trackEvent]
  );

  const trackCTAClick = useCallback(
    (ctaName: string, ctaType: "demo" | "contact" | "learn_more" | "other") => {
      const eventType =
        ctaType === "demo"
          ? EventType.DEMO_REQUEST
          : ctaType === "contact"
            ? EventType.CONTACT_CLICK
            : EventType.CTA_CLICK;

      trackEvent(eventType, {
        cta_name: ctaName,
        cta_type: ctaType,
      });
    },
    [trackEvent]
  );

  const trackProductInteraction = useCallback(
    (productName: string, action: "view" | "click" | "compare") => {
      const eventType =
        action === "view"
          ? EventType.PRODUCT_VIEW
          : action === "click"
            ? EventType.PRODUCT_CLICK
            : EventType.COMPARISON_VIEW;

      trackEvent(eventType, {
        product_name: productName,
        action,
      });
    },
    [trackEvent]
  );

  const trackChatbotInteraction = useCallback(
    (action: "open" | "close" | "message" | "qualification", properties?: EventProperties) => {
      const eventType =
        action === "open"
          ? EventType.CHATBOT_OPEN
          : action === "close"
            ? EventType.CHATBOT_CLOSE
            : action === "qualification"
              ? EventType.CHATBOT_QUALIFICATION
              : EventType.CHATBOT_MESSAGE;

      trackEvent(eventType, {
        chatbot_action: action,
        ...properties,
      });
    },
    [trackEvent]
  );

  const trackScrollDepth = useCallback((depth: "25" | "50" | "75" | "100") => {
    trackEvent(EventType.SCROLL_DEPTH, {
      scroll_depth: depth,
      timestamp: new Date().toISOString(),
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackLead,
    trackCTAClick,
    trackProductInteraction,
    trackChatbotInteraction,
    trackScrollDepth,
  };
}
