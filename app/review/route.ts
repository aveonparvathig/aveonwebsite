import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/constants";

/**
 * Short, shareable link (aveoninfotech.com/review) that sends a happy client
 * straight to the Google review form. Set NEXT_PUBLIC_GBP_REVIEW_URL to the
 * exact "write a review" link from the Business Profile; until then it falls
 * back to the Maps listing, where the Review button is still one tap away.
 */
export function GET() {
  const url = process.env.NEXT_PUBLIC_GBP_REVIEW_URL || siteConfig.location.mapUrl;
  return NextResponse.redirect(url, 302);
}
