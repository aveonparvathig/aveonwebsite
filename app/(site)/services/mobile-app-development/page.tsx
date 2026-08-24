import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import CTASection from "@/components/sections/CTASection";
import MobileAppContent, { mobileAppFaqs } from "@/components/sections/MobileAppContent";

export const metadata: Metadata = {
  title: "Mobile App Development Company | Android & iOS App Development",
  description:
    "Aveon Infotech provides custom mobile app development for Android, iOS and cross-platform applications, including UI/UX design, API integration, AI, testing, deployment and support.",
  keywords: [
    "Mobile App Development",
    "Mobile App Development Company",
    "Android App Development",
    "iOS App Development",
    "Cross Platform App Development",
    "Custom Mobile App Development",
    "Enterprise Mobile App Development",
    "Mobile App Design",
    "Mobile App Development Services",
    "AI Mobile App Development",
  ],
};

export default function MobileAppDevelopmentPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
    ]),
    faqJsonLd(mobileAppFaqs),
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
            Mobile App Development
          </span>
          <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
            Custom Mobile App Development for the Digital-First Business.
          </h1>
          <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
            Build powerful Android, iOS and cross-platform applications that connect your customers, employees and
            business processes — from UI/UX design and development to API integration, AI, testing and launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Start Your App Project
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center whitespace-nowrap rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600"
            >
              Request a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <MobileAppContent />

      <CTASection />
    </>
  );
}
