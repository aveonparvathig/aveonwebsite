"use client";

import { ReactNode } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface TrackingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  trackingLabel: string;
  trackingType?: "demo" | "contact" | "learn_more" | "other";
  href?: string;
}

export function TrackingButton({
  children,
  trackingLabel,
  trackingType = "other",
  href,
  onClick,
  ...props
}: TrackingButtonProps) {
  const { trackCTAClick } = useAnalytics();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    trackCTAClick(trackingLabel, trackingType);

    if (href) {
      window.location.href = href;
    }

    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
