import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data/services";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Software Development Services",
  description:
    "Process automation, mobile app development, custom software, order and warehouse management systems, and offshore teams from Aveon Infotech.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:px-10 lg:py-21">
          <span className="inline-block rounded-full bg-accent-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-accent-700">
            Software Development
          </span>
          <h1 className="mt-5 max-w-[800px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
            Software Built Around the Way You Work
          </h1>
          <p className="mt-4.5 max-w-[600px] text-[17.5px] leading-[1.7] text-navy-700">
            Beyond campus ERP, our engineering team builds automation, apps and business
            systems for organisations of every kind.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-accent-500 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(249_115_22_/_0.8)] transition-all hover:-translate-y-0.5 hover:bg-accent-600"
          >
            Talk to an Engineer
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:px-10 lg:py-18">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col rounded-[26px] border border-navy-900/8 bg-white p-7 shadow-card transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-[18px] bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                </svg>
              </span>
              <h2 className="mt-5 text-[21px] font-extrabold text-navy-900">{service.title}</h2>
              <p className="mt-2.5 flex-1 text-[15px] leading-[1.72] text-navy-700">{service.text}</p>
              {service.slug === "process-automation" && (
                <Link
                  href="/services/ai-process-automation"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition hover:gap-2.5"
                >
                  Explore AI Process Automation
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
              {service.slug === "mobile-app-development" && (
                <Link
                  href="/services/mobile-app-development"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition hover:gap-2.5"
                >
                  Explore Mobile App Development
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
              {service.slug === "custom-software-development" && (
                <Link
                  href="/services/custom-software-development"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition hover:gap-2.5"
                >
                  Explore Custom Software Development
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
              {service.slug === "order-management-system" && (
                <Link
                  href="/services/order-management-system"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition hover:gap-2.5"
                >
                  Explore Order Management System
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
              {service.slug === "warehouse-management-system" && (
                <Link
                  href="/services/warehouse-management-system"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition hover:gap-2.5"
                >
                  Explore Warehouse Management System
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
              {service.slug === "offshore-team" && (
                <Link
                  href="/services/offshore-team"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-600 transition hover:gap-2.5"
                >
                  Explore Offshore Development Team
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
