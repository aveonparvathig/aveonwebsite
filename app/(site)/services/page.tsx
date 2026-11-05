import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroImage } from "@/components/ui/OptimizedImage";
import { services } from "@/lib/data/services";
import CTASection from "@/components/sections/CTASection";
import { faqJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Software Development Company in Coimbatore | Aveon",
  description:
    "Aveon is a software development company in Coimbatore building custom software, mobile apps, AI process automation and dedicated offshore teams. Based in Coimbatore since " +
    `${siteConfig.stats.foundedYear}, serving clients across India and abroad.`,
  keywords: [
    "Software Development Company in Coimbatore",
    "Custom Software Development",
    "Software Development Services in Coimbatore",
    "Custom Software Development Company",
    "Mobile App Development Company Coimbatore",
    "Software Company in Coimbatore",
    "Offshore Software Development India",
    "Custom Software Development Services",
  ],
};

const servicesFaqs = [
  {
    question: "What does Aveon's software development company in Coimbatore do?",
    answer:
      "Aveon is a Coimbatore-based software development company. Alongside our campus ERP products, our engineering team builds custom software, Android and iOS mobile apps, AI process automation, and order and warehouse management systems, and provides dedicated offshore development teams that work as an extension of yours.",
  },
  {
    question: "Do you work with clients outside Coimbatore?",
    answer:
      "Yes. We are based in Coimbatore, Tamil Nadu and deliver to clients across India and overseas. Local clients get on-site meetings; remote clients work with us over video, shared tooling and a named project lead.",
  },
  {
    question: "How much does custom software development cost in India?",
    answer:
      "Cost depends on scope, integrations and timeline rather than a fixed price list. Aveon offers fixed-scope, time-and-material and dedicated-team models, with implementation and a clear estimate quoted after a short requirement study. See the custom software development page for the pricing models and representative timelines.",
  },
  {
    question: "Which technologies do you build with?",
    answer:
      "Modern web and mobile stacks for web applications, SaaS products, mobile apps and integrations, chosen to fit the project and to stay maintainable by your team. Details are on the custom software development page.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(servicesFaqs)) }}
      />
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 pt-14 pb-8 sm:px-6 sm:pb-10 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pt-20 lg:pb-10">
          <div>
            <span className="inline-block rounded-full bg-accent-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-accent-700">
              Software Development Company · Coimbatore
            </span>
            <h1 className="mt-5 max-w-[800px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Software Built Around the Way You Work
            </h1>
            <p className="mt-5 max-w-[600px] text-[17.5px] leading-[1.7] text-navy-700">
              Aveon is a software development company in Coimbatore. Beyond campus ERP, our
              engineering team builds custom software, mobile apps, AI automation and dedicated
              offshore teams for organisations across India and abroad.
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
          <HeroImage
            src="/products/custom-software-team.webp"
            alt="Software development services"
            width={1248}
            height={848}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
            className="w-full rounded-2xl object-contain"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 pt-6 pb-12 sm:px-6 sm:pt-8 lg:px-10 lg:pt-8 lg:pb-18">
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

      {/* Local — Coimbatore */}
      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="text-3xl font-bold text-navy-900">
              A Software Development Company Based in Coimbatore
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-navy-700">
              Aveon has built software from Coimbatore since {siteConfig.stats.foundedYear}. Local
              clients get face-to-face requirement studies and on-site go-lives; clients elsewhere in
              India and overseas work with a dedicated project lead over video and shared tooling. The
              same team that runs campus ERP at 200+ institutions builds custom web and mobile
              applications, AI automation and offshore engineering squads.
            </p>
            <Link
              href="/contact#demo"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-accent-600"
            >
              Talk to our Coimbatore team →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { v: siteConfig.stats.yearsExperience, l: `Years building software, since ${siteConfig.stats.foundedYear}` },
              { v: siteConfig.stats.institutions, l: "Institutions and clients served" },
              { v: "Coimbatore", l: "Head office, Tamil Nadu" },
              { v: "India + abroad", l: "Delivery coverage" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-navy-100 bg-white p-6 text-center">
                <p className="text-2xl font-bold text-primary-600">{s.v}</p>
                <p className="mt-2 text-sm font-semibold text-navy-700">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
          Software Development in Coimbatore: FAQs
        </h2>
        <div className="mt-10 space-y-3">
          {servicesFaqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-navy-100 bg-navy-50 p-6 shadow-card [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-navy-900 group-open:text-primary-700">
                  {faq.question}
                </h3>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition group-open:rotate-180 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
