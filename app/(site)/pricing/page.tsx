import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import DemoBookingForm from "@/components/forms/DemoBookingForm";
import { ContactFormsProvider } from "@/components/forms/FormLockContext";
import { PricingViewTracker } from "@/components/analytics/PricingViewTracker";
import { ViewContentTracker } from "@/components/analytics/ViewContentTracker";
import { BookingsLink } from "@/components/ui/BookingsLink";
import { siteConfig } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "College ERP Pricing in India: How It Works",
  description:
    "How campus ERP pricing works in India: what drives the cost, the three pricing models, the 5-year cost checklist and how to get a transparent quote.",
  alternates: { canonical: "/pricing" },
};

const DRIVERS: { title: string; text: string }[] = [
  {
    title: "Number of students",
    text: "Pricing scales with enrolment, so a 600-student college and a 20,000-student university don't pay the same.",
  },
  {
    title: "Modules you need",
    text: "Start with College ERP and add COE, Library, Hostel, HRM or NAAC/NBA later — you only pay for what you switch on.",
  },
  {
    title: "Deployment",
    text: "Cloud (a predictable annual subscription, no hardware) or on-premise on your own servers — the cost profile differs.",
  },
  {
    title: "Implementation & training",
    text: "A one-time rollout covering data migration, configuration and role-based training for your staff.",
  },
];

const MODELS: { name: string; best: string; text: string }[] = [
  {
    name: "Per-student subscription",
    best: "Best for most colleges",
    text: "An annual fee based on active students. Predictable, scales with you, and includes updates and support.",
  },
  {
    name: "Per-module licensing",
    best: "Best for phased rollouts",
    text: "License only the modules you need now and add more later. Everything shares one database and one login.",
  },
  {
    name: "One-time + AMC",
    best: "Best for on-premise",
    text: "A one-time licence for an on-premise deployment, with an annual maintenance contract for updates and support.",
  },
];

const ROI: { title: string; text: string }[] = [
  {
    title: "Stop duplicate data entry",
    text: "Enter a student once; admissions, exams, fees and the library all read the same record — no re-keying across offices.",
  },
  {
    title: "Faster, cleaner accreditation",
    text: "NAAC, NBA and NIRF data is generated from live records instead of assembled by hand before every audit.",
  },
  {
    title: "Fewer manual hours",
    text: "Automated admissions, attendance, exam processing and fee reconciliation free up staff time every single week.",
  },
  {
    title: "One vendor, one platform",
    text: "Replacing several disconnected tools with one system cuts licensing sprawl and integration headaches.",
  },
];

const TCO: string[] = [
  "Software licence or subscription (per student or per module)",
  "One-time implementation — data migration & configuration",
  "Staff training and onboarding",
  "Annual support / AMC (updates, help desk, new-staff training)",
  "Customisation for your academic & exam workflow",
  "Hosting or on-premise hardware (if not cloud)",
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does a college ERP cost in India?",
    a: "There is no single sticker price because cost depends on your student count, the modules you switch on, and whether you deploy on the cloud or on-premise. After a short scoping call we give you a fixed, itemised quote — no per-seat surprises later.",
  },
  {
    q: "Do you charge per student or a flat fee?",
    a: "Both options exist. Most colleges choose an annual per-student subscription; institutions doing a phased rollout often prefer per-module licensing. We recommend the model that costs you less for how you actually plan to use the system.",
  },
  {
    q: "Is there a separate implementation or setup fee?",
    a: "Yes — a one-time implementation fee covers migrating your existing student, fee and staff data, configuring the system for your workflow, and training your team. It is quoted upfront so there are no hidden charges.",
  },
  {
    q: "Are there ongoing costs after we go live?",
    a: "An annual support/AMC covers software updates, a dedicated support contact and ongoing training for new staff through Aveon Academy. Cloud subscriptions include this; on-premise deployments add it as an annual contract.",
  },
  {
    q: "Can we start small and add modules later?",
    a: "Yes. All fourteen products share one database, so you can begin with, say, College ERP and add COE, Library or NAAC/NBA later without any data migration between modules — and only pay for what you add.",
  },
];

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const tel = siteConfig.phone.replace(/\s/g, "");

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Pricing", href: "/pricing" }]} />
      <PricingViewTracker />
      <ViewContentTracker name="pricing" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <PageHero
        eyebrow="Pricing"
        title="Pricing built around your institution"
        description="Every campus runs differently, so we quote transparently instead of forcing you into a one-size package. Here's exactly how our pricing works and what to budget for."
      />

      {/* What drives the price */}
      <section className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-10">
        <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold text-navy-900">What determines your price</h2>
        <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed text-navy-700">
          Four things shape your quote. Knowing them upfront means no surprises later.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DRIVERS.map((d, i) => (
            <div key={d.title} className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-[0_18px_44px_-32px_rgb(16_26_51_/_0.4)]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-sm font-extrabold text-primary-700">{i + 1}</span>
              <h3 className="mt-4 text-base font-bold text-navy-900">{d.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-navy-600">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing models */}
      <section className="bg-gradient-to-b from-primary-50/60 to-white">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-10">
          <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold text-navy-900">Three ways we price</h2>
          <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed text-navy-700">
            Pick the model that fits how your institution buys. We'll recommend the one that costs you less.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {MODELS.map((m) => (
              <div key={m.name} className="flex flex-col rounded-2xl border border-navy-900/8 bg-white p-7 shadow-[0_18px_44px_-32px_rgb(16_26_51_/_0.4)]">
                <span className="inline-block w-fit rounded-full bg-accent-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-accent-600">{m.best}</span>
                <h3 className="mt-4 text-lg font-extrabold text-navy-900">{m.name}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-relaxed text-navy-600">{m.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy-500">
            We don't publish fixed price tags because quoting an itemised figure for your exact student count and
            modules is fairer than a headline number that rarely matches what you'd actually pay.
          </p>
        </div>
      </section>

      {/* ROI */}
      <section className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-10">
        <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold text-navy-900">What a campus ERP is worth</h2>
        <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed text-navy-700">
          The real question isn't the price — it's the return. Here's where institutions get their money back.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {ROI.map((r) => (
            <div key={r.title} className="flex gap-4 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-[0_18px_44px_-32px_rgb(16_26_51_/_0.4)]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span>
                <span className="block text-base font-bold text-navy-900">{r.title}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-navy-600">{r.text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TCO checklist */}
      <section className="bg-gradient-to-b from-primary-50/60 to-white">
        <div className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 lg:px-10">
          <h2 className="text-[clamp(24px,3vw,34px)] font-extrabold text-navy-900">The full 5-year cost checklist</h2>
          <p className="mt-3 max-w-[680px] text-[16px] leading-relaxed text-navy-700">
            Comparing ERP vendors on licence price alone is misleading. Ask every vendor — including us — to put a
            number against each of these so you're comparing total cost of ownership, not just the sticker.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {TCO.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-navy-900/8 bg-white px-5 py-4 text-[15px] text-navy-700 shadow-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-navy-500">
            Want this side by side with other vendors?{" "}
            <Link href="/comparisons" className="font-semibold text-primary-600 hover:text-primary-700">
              See the comparison scorecard →
            </Link>
          </p>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="mx-auto max-w-[900px] px-4 py-14 sm:px-6 lg:px-10">
        <h2 className="text-center text-[clamp(24px,3vw,34px)] font-extrabold text-navy-900">Pricing questions</h2>
        <div className="mt-8 flex flex-col gap-3">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-[18px] border border-navy-900/8 bg-white shadow-[0_12px_34px_-26px_rgb(16_26_51_/_0.35)]">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-bold text-navy-900 marker:content-none [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <svg className="h-3.5 w-3.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <p className="px-6 pb-5 text-[15px] leading-[1.74] text-navy-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Quote CTA + form */}
      <section className="mx-auto max-w-[1180px] px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid items-center gap-8 rounded-[28px] border border-navy-900/8 bg-gradient-to-br from-[#f4f8ff] to-white p-6 shadow-[0_30px_70px_-44px_rgb(16_26_51_/_0.45)] sm:p-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold leading-tight text-navy-900">
              Get your custom quote
            </h2>
            <p className="mt-4 max-w-[460px] text-[16px] leading-relaxed text-navy-700">
              Tell us your institution and the modules you're considering. We'll come back within one business
              day with a transparent, itemised quote — and a demo if you'd like to see it first.
            </p>
            <p className="mt-5 text-sm text-navy-600">
              Prefer to talk?{" "}
              <a href={`tel:${tel}`} className="font-semibold text-primary-600">{siteConfig.phone}</a>
              {" · "}Mon–Sat, 8:30 AM–6:30 PM IST
            </p>
            <div className="mt-3">
              <BookingsLink />
            </div>
          </div>
          <div className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm sm:p-7">
            <ContactFormsProvider>
              <DemoBookingForm />
            </ContactFormsProvider>
          </div>
        </div>
      </section>
    </>
  );
}
