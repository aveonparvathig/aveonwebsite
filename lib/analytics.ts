export const GA_ID = "G-LGVGNJ0SGN";
export const GTM_ID = "GTM-MCSK995";

export interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

export enum EventType {
  // Page & Navigation
  PAGE_VIEW = "page_view",
  NAVIGATE = "navigate",

  // Form & Lead Generation
  FORM_START = "form_start",
  FORM_SUBMIT = "form_submit",
  FORM_ERROR = "form_error",
  FORM_FIELD_CHANGE = "form_field_change",

  // CTA & Button Clicks
  DEMO_REQUEST = "demo_request",
  CTA_CLICK = "cta_click",
  CONTACT_CLICK = "contact_click",
  PRICING_VIEW = "pricing_view",

  // Chatbot Events
  CHATBOT_OPEN = "chatbot_open",
  CHATBOT_CLOSE = "chatbot_close",
  CHATBOT_MESSAGE = "chatbot_message",
  CHATBOT_LEAD_CAPTURE = "chatbot_lead_capture",
  CHATBOT_QUALIFICATION = "chatbot_qualification",

  // Product & Service Engagement
  PRODUCT_VIEW = "product_view",
  PRODUCT_CLICK = "product_click",
  SERVICE_VIEW = "service_view",
  SERVICE_CLICK = "service_click",
  SOLUTION_VIEW = "solution_view",
  SOLUTION_CLICK = "solution_click",

  // Content & Blog
  BLOG_CLICK = "blog_click",
  BLOG_READ = "blog_read",
  RESOURCE_DOWNLOAD = "resource_download",

  // Engagement
  SCROLL_DEPTH = "scroll_depth",
  VIDEO_PLAY = "video_play",
  VIDEO_COMPLETE = "video_complete",
  COMPARISON_VIEW = "comparison_view",

  // Lead Scoring
  HIGH_VALUE_INTERACTION = "high_value_interaction",
  QUALIFIED_LEAD = "qualified_lead",
}

export const eventConfig: Record<string, { label: string; category: string; value: number }> = {
  [EventType.DEMO_REQUEST]: {
    label: "Demo Request",
    category: "Lead Generation",
    value: 50,
  },
  [EventType.FORM_SUBMIT]: {
    label: "Form Submission",
    category: "Engagement",
    value: 10,
  },
  [EventType.CHATBOT_LEAD_CAPTURE]: {
    label: "Chatbot Lead Captured",
    category: "Chatbot",
    value: 30,
  },
  [EventType.QUALIFIED_LEAD]: {
    label: "Qualified Lead",
    category: "Lead Scoring",
    value: 100,
  },
};

export function getEventValue(eventType: EventType | string): number {
  return (eventConfig[eventType] as any)?.value || 0;
}
