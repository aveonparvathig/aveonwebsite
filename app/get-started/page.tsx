import type { Metadata } from "next";
import LandingPage from "@/components/landing/LandingPage";
import { collegeVariant } from "@/components/landing/variants";

// Paid-ad landing page for the college / campus ERP ads. Not indexed — it
// exists for ad traffic and must not compete with the organic pages. The
// product-specific pages (School, Hostel, Fees) live in ./[product].
export const metadata: Metadata = {
  // absolute: this page is under the root layout, whose title template would
  // otherwise append "| Aveon Infotech" a second time.
  title: { absolute: collegeVariant.metaTitle },
  description: collegeVariant.metaDescription,
  robots: { index: false, follow: false },
  alternates: { canonical: "/get-started" },
};

export default function GetStartedPage() {
  return <LandingPage variant={collegeVariant} />;
}
