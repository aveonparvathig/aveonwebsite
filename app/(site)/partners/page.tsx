import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Partnership Opportunities",
  description:
    "Partner with Aveon Infotech: reseller, implementation and technology partnerships for education ERP, with sales enablement and certification.",
};

const models = [
  {
    title: "Reseller Partners",
    text: "Bring Aveon ERP to institutions in your region with sales enablement, marketing support and attractive margins.",
    forWhom: "Regional sales agencies, education consultants and IT vendors who already work with schools and colleges.",
    includes: [
      "Deal registration and protected margins",
      "Product and sales enablement training",
      "Co-branded marketing collateral and demo access",
      "Pre-sales support on scoping and proposals",
    ],
  },
  {
    title: "Implementation Partners",
    text: "Certified partners who deliver data migration, configuration and training for campuses on our platform.",
    forWhom: "System integrators and services firms with delivery teams who want to own campus roll-outs.",
    includes: [
      "Hands-on implementation certification",
      "Access to configuration tooling and documentation",
      "Migration playbooks refined across 200+ institutions",
      "Escalation path to Aveon's product engineers",
    ],
  },
  {
    title: "Technology Partners",
    text: "Integrate your product with the Aveon platform: payment gateways, biometric devices, SMS/WhatsApp and more.",
    forWhom: "Product companies whose tools sit alongside campus ERP: fintech, hardware, communication and analytics.",
    includes: [
      "Documented APIs and integration support",
      "Joint solution briefs for shared prospects",
      "Listing in the Aveon integrations ecosystem",
      "Co-selling into each other's customer base",
    ],
  },
];

const steps = [
  {
    no: "01",
    title: "Apply",
    text: "Tell us about your organization, the regions you cover and the partnership model you have in mind.",
  },
  {
    no: "02",
    title: "Enablement",
    text: "We align on commercials, then train your team on the platform, demos and implementation playbooks.",
  },
  {
    no: "03",
    title: "Go to market",
    text: "You start registering deals and running campaigns with our pre-sales and marketing support behind you.",
  },
  {
    no: "04",
    title: "Grow together",
    text: "Shared pipeline reviews, renewals and new modules keep the relationship compounding over time.",
  },
];

const whyPartner = [
  {
    title: "One platform, fourteen modules",
    text: "A single integrated product to sell instead of stitching point solutions together, from admissions to accreditation.",
  },
  {
    title: "A proven delivery model",
    text: "Implementation playbooks refined across 200+ institutions and more than a decade of campus deployments.",
  },
  {
    title: "Local-first support",
    text: "An India-based team that understands affiliating universities, NAAC/AICTE compliance and campus workflows.",
  },
];

const faqs = [
  {
    question: "What does it cost to become an Aveon partner?",
    answer:
      "There is no fixed joining fee. Commercials depend on the partnership model and are agreed during onboarding. Reseller partners earn margins on the deals they bring; implementation partners are compensated for delivery.",
  },
  {
    question: "Which regions can partners operate in?",
    answer:
      "We work with partners across India and select international markets. Reseller territories are protected through deal registration so partners are not competing on the same opportunities.",
  },
  {
    question: "Do I need a technical team to become a partner?",
    answer:
      "Reseller partners do not: Aveon handles implementation. Implementation partners should have a delivery team, which we certify on the platform. Technology partners need engineers to build and maintain the integration.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most partners complete enablement within a few weeks. Reseller onboarding is quickest; implementation certification takes longer because it includes hands-on configuration and migration training.",
  },
];

export default function PartnersPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Partners", href: "/partners" },
    ]),
    faqJsonLd(faqs),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 pt-14 pb-8 sm:px-6 sm:pb-10 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:pt-20 lg:pb-10">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Partners
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Grow With the Aveon Ecosystem
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              We work with resellers, implementation specialists and technology providers across India and beyond to
              bring unified campus management to more institutions. Partners get the training, tools and pre-sales
              support to win and deliver education-ERP deals with confidence.
            </p>
          </div>
          <Image
            src="/products/partners-hero.webp"
            alt="Aveon partners collaborating on an education ERP rollout"
            width={1220}
            height={677}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Partnership models */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Three ways to partner</h2>
          <p className="mt-3 text-navy-600">
            Whether you sell, implement or build software, there is a model that fits how you already work.
          </p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {models.map((m) => (
            <div key={m.title} className="flex flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
              <h3 className="font-heading text-xl font-bold text-navy-900">{m.title}</h3>
              <p className="mt-3 leading-relaxed text-navy-600">{m.text}</p>
              <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.12em] text-primary-700">Best for</p>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-navy-700">{m.forWhom}</p>
              <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.12em] text-navy-500">What you get</p>
              <ul className="mt-2.5 space-y-2">
                {m.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-navy-700">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.6} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why partner with Aveon */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Why partner with Aveon</h2>
            <p className="mt-3 text-navy-600">
              A product and a delivery model built specifically for Indian higher education.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {whyPartner.map((w) => (
              <div key={w.title} className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
                <h3 className="text-lg font-bold text-navy-900">{w.title}</h3>
                <p className="mt-2.5 leading-relaxed text-navy-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">How the partnership works</h2>
          <p className="mt-3 text-navy-600">From first conversation to a growing shared pipeline.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.no} className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <span aria-hidden className="text-[34px] font-extrabold leading-none text-primary-100">{s.no}</span>
              <h3 className="mt-2 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-navy-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">Partner FAQs</h2>
          <dl className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.question} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <dt className="font-bold text-navy-900">{f.question}</dt>
                <dd className="mt-2 leading-relaxed text-navy-600">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Become a Partner
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-navy-600">
            Tell us about your organization and the partnership model you&apos;re
            interested in. Our partnerships team will get back within two
            business days.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-600"
          >
            Start the Conversation →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
