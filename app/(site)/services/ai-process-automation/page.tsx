import type { Metadata } from "next";
import Link from "next/link";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import CTASection from "@/components/sections/CTASection";
import AiAutomationContent, { aiAutomationFaqs } from "@/components/sections/AiAutomationContent";

export const metadata: Metadata = {
  title: "AI Process Automation Software | Business Workflow Automation",
  description:
    "Aveon AI Process Automation helps businesses automate repetitive workflows, documents, approvals, data processing and customer processes across industries using AI-powered automation.",
  keywords: [
    "AI Process Automation",
    "AI Workflow Automation",
    "Business Process Automation",
    "Intelligent Process Automation",
    "AI Automation Software",
    "Workflow Automation Software",
    "Document Process Automation",
    "Enterprise Process Automation",
    "Robotic Process Automation",
    "AI Business Automation",
    "Cross-Industry Automation",
  ],
};

export default function AiProcessAutomationPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "AI Process Automation", href: "/services/ai-process-automation" },
    ]),
    faqJsonLd(aiAutomationFaqs),
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
            AI Process Automation
          </span>
          <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
            Automate Work. Connect Processes. Let AI Drive Efficiency.
          </h1>
          <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
            Every business has repetitive work — emails, forms, documents, approvals, data entry and follow-ups. Aveon
            AI Process Automation turns these manual activities into intelligent, automated workflows across departments,
            systems and industries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-700"
            >
              Request a Demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center whitespace-nowrap rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600"
            >
              Talk to an AI Automation Expert
            </Link>
          </div>
        </div>
      </section>

      <AiAutomationContent />

      <CTASection />
    </>
  );
}
