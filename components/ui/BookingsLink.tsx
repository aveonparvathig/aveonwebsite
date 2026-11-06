"use client";

import { useAnalytics } from "@/hooks/useAnalytics";

// Public Microsoft Bookings page. Inlined at build time; when unset the link
// simply doesn't render, so the site is unchanged until Bookings is live.
const BOOKINGS_URL = process.env.NEXT_PUBLIC_BOOKINGS_URL;

interface BookingsLinkProps {
  className?: string;
  label?: string;
}

/**
 * Secondary "schedule a demo" link that sends prospects to the institution's
 * Microsoft Bookings page to self-book a slot. Renders nothing when
 * NEXT_PUBLIC_BOOKINGS_URL isn't set.
 */
export function BookingsLink({
  className = "",
  label = "Prefer to pick a time? Schedule a demo →",
}: BookingsLinkProps) {
  const { trackCTAClick } = useAnalytics();
  if (!BOOKINGS_URL) return null;

  return (
    <a
      href={BOOKINGS_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCTAClick("bookings", "demo")}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition hover:text-primary-700 ${className}`}
    >
      {label}
    </a>
  );
}
