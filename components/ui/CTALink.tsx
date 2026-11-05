"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface CTALinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  /** Label reported to analytics, e.g. "hero_book_demo". */
  trackingLabel: string;
  /** Maps to demo_request / cta_click / contact_click (see useAnalytics). */
  trackingType?: "demo" | "contact" | "learn_more" | "other";
}

/**
 * A real Next.js <Link> (keeps prefetch + crawlable href) that fires the
 * proper conversion event on click. Use for primary CTAs so demo_request /
 * cta_click show up in GA4.
 */
export function CTALink({
  href,
  children,
  trackingLabel,
  trackingType = "other",
  onClick,
  ...props
}: CTALinkProps) {
  const { trackCTAClick } = useAnalytics();

  return (
    <Link
      href={href}
      onClick={(e) => {
        trackCTAClick(trackingLabel, trackingType);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
