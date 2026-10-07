# Event Tracking Implementation Guide

## Overview

This guide documents all event tracking implemented for Aveon Infotech's website. All tracking uses Google Analytics 4 (GA4) with GTM as the central tag management system.

**Tracking IDs:**
- GA4 ID: `G-LGVGNJ0SGN`
- GTM ID: `GTM-MCSK995`

---

## Setup & Configuration

### 1. Root Layout (app/layout.tsx)

✅ **DONE** - GA4 and GTM are properly initialized:
- GA4 script loaded via gtag.js
- GTM noscript fallback included
- Removed duplicate GA4 implementations
- Proper initialization with page_path tracking

### 2. Analytics Utilities

- **`lib/analytics.ts`** - Event type definitions and configuration
- **`hooks/useAnalytics.ts`** - React hook for tracking events
- **`hooks/usePageTracking.ts`** - Hook for tracking page views and scroll depth

### 3. Components

- **`components/ui/TrackingButton.tsx`** - Button component with CTA tracking
- **`components/ui/TrackingLink.tsx`** - Link component with click tracking

---

## Implemented Events

### ✅ Form Events (Implemented)

#### DemoBookingForm (components/forms/DemoBookingForm.tsx)

```typescript
// Track when user starts filling the form
EventType.FORM_START
- form_name: "demo_booking"

// Track form submission attempt
EventType.FORM_SUBMIT
- form_name: "demo_booking"
- product: selected product
- institute_type: "unknown"

// Track successful demo request
EventType.DEMO_REQUEST
- form_name: "demo_booking"
- product: selected product
- institute_name: institution name
- city: city/location

// Track form errors
EventType.FORM_ERROR
- form_name: "demo_booking"
- error_message: error details

// Track lead capture (automatic on success)
EventType.CHATBOT_LEAD_CAPTURE (for forms)
- lead_type: "form"
- source: "demo_booking_form"
- value: 50
```

#### ContactForm (components/forms/ContactForm.tsx)

```typescript
// Track when user starts filling the form
EventType.FORM_START
- form_name: "contact_form"

// Track form submission attempt
EventType.FORM_SUBMIT
- form_name: "contact_form"
- subject: email subject

// Track successful contact submission
EventType.CONTACT_CLICK
- form_name: "contact_form"
- subject: email subject

// Track form errors
EventType.FORM_ERROR
- form_name: "contact_form"
- error_message: error details

// Track lead capture (automatic on success)
EventType.FORM_SUBMIT (as lead)
- lead_type: "form"
- source: "contact_form"
- value: 20
```

---

## How to Use Analytics Hook

### Import the hook:
```typescript
import { useAnalytics } from "@/hooks/useAnalytics";
```

### Use in your component:
```typescript
"use client";

export function MyComponent() {
  const { 
    trackEvent, 
    trackCTAClick, 
    trackLead,
    trackProductInteraction,
    trackChatbotInteraction
  } = useAnalytics();

  const handleClick = () => {
    trackCTAClick("My Button", "demo");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### Available Methods:

#### 1. trackEvent(eventName, properties?)
Generic event tracking
```typescript
trackEvent("custom_event", {
  custom_property: "value",
  another_property: 123
});
```

#### 2. trackPageView(pageName, pageLocation?)
Track page views and scroll depth
```typescript
const { trackPageView } = useAnalytics();
useEffect(() => {
  trackPageView("Product Page", window.location.href);
}, []);
```

#### 3. trackCTAClick(ctaName, ctaType)
Track CTA button clicks
```typescript
trackCTAClick("Get Demo", "demo");
trackCTAClick("Contact Us", "contact");
trackCTAClick("Learn More", "learn_more");
```

#### 4. trackLead(leadData)
Track lead capture
```typescript
trackLead({
  leadType: "form", // "form" | "chatbot" | "phone" | "email"
  source: "demo_booking_form",
  value: 50,
  properties: {
    product: "college-erp",
    institution: "ABC College"
  }
});
```

#### 5. trackProductInteraction(productName, action)
Track product engagement
```typescript
trackProductInteraction("College ERP", "view");
trackProductInteraction("College ERP", "click");
trackProductInteraction("College ERP", "compare");
```

#### 6. trackChatbotInteraction(action, properties?)
Track chatbot events
```typescript
trackChatbotInteraction("open");
trackChatbotInteraction("message", { message_type: "question" });
trackChatbotInteraction("qualification", { lead_score: 85 });
trackChatbotInteraction("close");
```

#### 7. trackScrollDepth(depth)
Track scroll depth
```typescript
// Automatically tracked via usePageTracking hook
// Fires at 25%, 50%, 75%, 90% scroll
```

---

## Event Categories & Values

| Event Type | Category | Value | Trigger |
|---|---|---|---|
| DEMO_REQUEST | Lead Generation | 50 | Demo booking form success |
| CHATBOT_LEAD_CAPTURE | Chatbot | 30 | Chatbot lead qualified |
| QUALIFIED_LEAD | Lead Scoring | 100 | High-quality lead identified |
| FORM_SUBMIT | Engagement | 10 | Any form submission |
| CTA_CLICK | Engagement | 5 | Button/link click |
| PAGE_VIEW | Navigation | 0 | Page load |
| SCROLL_DEPTH | Engagement | 0 | At 25%, 50%, 75%, 90% |

---

## Recommended Implementations

### 1. Homepage (app/(site)/page.tsx)
```typescript
"use client";

import { usePageTracking } from "@/hooks/usePageTracking";

export default function HomePage() {
  usePageTracking("Home");
  // Rest of component...
}
```

### 2. Product Pages (app/(site)/products/[slug]/page.tsx)
```typescript
"use client";

import { useAnalytics } from "@/hooks/useAnalytics";
import { usePageTracking } from "@/hooks/usePageTracking";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { trackProductInteraction } = useAnalytics();
  usePageTracking(`Product: ${params.slug}`);

  useEffect(() => {
    trackProductInteraction(params.slug, "view");
  }, [params.slug]);

  return (
    // Product content...
  );
}
```

### 3. Navigation/Menu Clicks
Use `TrackingLink` component:
```typescript
import { TrackingLink } from "@/components/ui/TrackingLink";

<TrackingLink 
  href="/products/college-erp" 
  trackingLabel="College ERP" 
  trackingCategory="product"
>
  College ERP
</TrackingLink>
```

### 4. CTA Buttons
Use `TrackingButton` component:
```typescript
import { TrackingButton } from "@/components/ui/TrackingButton";

<TrackingButton 
  trackingLabel="Book Demo" 
  trackingType="demo"
  href="/contact#demo"
>
  Get Free Demo
</TrackingButton>
```

### 5. Blog Pages (app/(site)/blog/[slug]/page.tsx)
```typescript
"use client";

import { usePageTracking } from "@/hooks/usePageTracking";

export default function BlogPage({ params }: { params: { slug: string } }) {
  usePageTracking(`Blog: ${params.slug}`);
  // Rest of component...
}
```

---

## Chatbot Integration

### Track Chatbot Events
```typescript
import { useAnalytics } from "@/hooks/useAnalytics";

export function ChatWidget() {
  const { trackChatbotInteraction, trackLead } = useAnalytics();

  const handleOpen = () => {
    trackChatbotInteraction("open");
  };

  const handleMessage = (message: string) => {
    trackChatbotInteraction("message", {
      message_length: message.length,
      message_type: "user"
    });
  };

  const handleLeadCapture = (leadData: any) => {
    trackChatbotInteraction("qualification", {
      lead_score: leadData.score,
      qualification_tier: leadData.tier
    });

    trackLead({
      leadType: "chatbot",
      source: "chat_widget",
      value: leadData.score > 80 ? 100 : 30,
      properties: {
        name: leadData.name,
        email: leadData.email,
        city: leadData.city,
        college: leadData.college,
        lead_score: leadData.score
      }
    });
  };

  return (
    // Chatbot UI...
  );
}
```

---

## Pages to Add Tracking To

### Core Pages (Priority: High)
- [ ] Homepage (`app/(site)/page.tsx`) - Add `usePageTracking("Home")`
- [ ] All Product Pages (`app/(site)/products/[slug]/page.tsx`)
- [ ] All Service Pages (`app/(site)/services/*.tsx`)
- [ ] All Solution Pages (`app/(site)/solutions/*.tsx`)
- [ ] Blog Pages (`app/(site)/blog/[slug]/page.tsx`)

### Navigation & Links
- [ ] Navigation menu links - Convert to `TrackingLink`
- [ ] Footer links - Convert to `TrackingLink`
- [ ] CTA buttons sitewide - Convert to `TrackingButton`

### Forms
- [x] Demo Booking Form - ✅ DONE
- [x] Contact Form - ✅ DONE
- [ ] Newsletter signup (if exists) - Track form events
- [ ] Product inquiry form (if exists) - Track form events

### Special Pages
- [ ] Comparison page - Track comparison views
- [ ] Pricing page - Track pricing views
- [ ] Academy page - Track course/training interactions
- [ ] Careers page - Track job inquiry submissions

---

## Testing & Debugging

### 1. Check GA4 in Browser Console
```javascript
// View tracked events
gtag("event", "test_event", { test_property: "value" });
console.log("gtag available:", typeof window.gtag);
```

### 2. Google Analytics Real-Time View
1. Open [Google Analytics](https://analytics.google.com)
2. Go to Realtime > Events
3. Trigger events on your site
4. Events should appear within seconds

### 3. Check Vercel Analytics
1. Deploy to Vercel
2. Go to Analytics tab in Vercel project
3. View Web Vitals and custom events

---

## Best Practices

### ✅ DO:
- Track meaningful user interactions
- Use consistent event naming
- Include relevant context/properties
- Test events before deploying
- Monitor GA4 dashboard regularly
- Set appropriate event values for lead scoring

### ❌ DON'T:
- Track PII (Personally Identifiable Information)
- Track sensitive data (passwords, credit cards)
- Create too many custom events (max ~100 unique events)
- Forget to update GTM when adding new events
- Leave duplicate tracking code

---

## Performance Impact

- **GA4 Script Size:** ~50KB (minimal)
- **GTM Script Size:** ~15KB (minimal)
- **Event Tracking Overhead:** Negligible (<1ms per event)
- **No impact** on page load time or Core Web Vitals

---

## Next Steps

1. ✅ Deploy GA4 & GTM setup
2. ✅ Test forms tracking
3. Add page view tracking to all key pages
4. Add product/service interaction tracking
5. Set up chatbot event tracking
6. Create GA4 dashboards for KPIs
7. Set up alerts for high-value leads
8. Monthly review of tracking data

---

## Support & Questions

For issues with tracking implementation:
1. Check browser console for errors
2. Verify GA4 ID and GTM ID are correct
3. Check Google Analytics Real-Time view
4. Review this guide's implementation examples
5. Test with `gtag("event", "test")` in console

---

**Last Updated:** October 7, 2026  
**Status:** ✅ Ready for Production  
**Maintained By:** Aveon Development Team
