"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface TrackingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  trackingLabel: string;
  trackingCategory?: "product" | "service" | "solution" | "blog" | "navigation" | "other";
}

export function TrackingLink({
  children,
  href,
  trackingLabel,
  trackingCategory = "other",
  onClick,
  ...props
}: TrackingLinkProps) {
  const { trackEvent } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent("link_click", {
      link_text: trackingLabel,
      link_url: href,
      link_category: trackingCategory,
    });

    onClick?.(e);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
