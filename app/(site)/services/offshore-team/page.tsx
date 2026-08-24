import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import CTASection from "@/components/sections/CTASection";
import OffshoreContent, { offshoreFaqs } from "@/components/sections/OffshoreContent";

export const metadata: Metadata = {
  title: "Offshore Development Team | Dedicated Developers from India",
  description:
    "Build a dedicated offshore development team with Aveon. Access developers, designers, QA, DevOps and AI specialists from India at competitive rates with flexible engagement models.",
  keywords: [
    "Offshore Development Team",
    "Offshore Development Company",
    "Offshore Software Development",
    "Dedicated Development Team",
    "Offshore Developers India",
    "Dedicated Developers India",
    "Remote Development Team",
    "Offshore Development Center",
    "Offshore IT Outsourcing",
    "AI Development Team India",
  ],
};

export default function OffshoreTeamPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Offshore Development Team", href: "/services/offshore-team" },
    ]),
    faqJsonLd(offshoreFaqs),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
            Offshore Development Team
          </span>
          <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
            Build Your Dedicated Offshore Team with Aveon.
          </h1>
          <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
            Access skilled technology professionals from India — developers, designers, QA, DevOps and AI specialists —
            through a flexible, cost-effective engagement model that works as an extension of your team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Build Your Team
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center whitespace-nowrap rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600"
            >
              Request Team Pricing
            </Link>
          </div>
        </div>
      </section>

      <OffshoreContent />

      <CTASection />
    </>
  );
}
