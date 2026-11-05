import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { siteConfig } from "@/lib/constants";

const SLUG = "college-erp-buyers-guide";

export const metadata: Metadata = {
  title: "College ERP Buyer's Guide — How to Choose the Right System",
  description:
    "A practical buyer's guide to choosing a college ERP in India: the questions to ask every vendor, the must-have modules, the red flags, and the full cost checklist.",
  alternates: { canonical: `/resources/${SLUG}` },
};

const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "Is it one system or several tools stitched together?",
    a: "A real campus ERP keeps admissions, academics, exams, fees, hostel, library and HR on one database — enter a student once and every office sees the same record. Ask to see two modules sharing data live.",
  },
  {
    q: "Does it handle our affiliation and exam workflow?",
    a: "Affiliated and autonomous colleges run examinations very differently. Confirm the vendor supports your university's exact process — from internal marks to the controller of examinations and results.",
  },
  {
    q: "Is accreditation reporting built in?",
    a: "NAAC, NBA, NIRF and AICTE reports should be generated from live data, not assembled by hand before every audit. Ask to see a sample report pulled from real records.",
  },
  {
    q: "How long is implementation, and what does it include?",
    a: "A single campus should go live in roughly 30 days, covering data migration, configuration and staff training. Get the timeline and what's included in writing.",
  },
  {
    q: "What is the full five-year cost?",
    a: "Licence price alone is misleading. Ask for implementation, training, annual support/AMC, customisation and hosting so you're comparing total cost of ownership.",
  },
  {
    q: "Can we start small and add modules later?",
    a: "You should be able to begin with one module and add others without migrating data between them. Beware systems that force an all-or-nothing purchase.",
  },
  {
    q: "What support do we get after go-live?",
    a: "Look for a named support contact reachable by phone, plus ongoing training for new staff. Ask existing customers how responsive support actually is.",
  },
];

const MUST_HAVE = [
  "Admissions & enquiry management",
  "Student information & academic records",
  "Examinations / Controller of Examinations (COE)",
  "Fees management & online payments",
  "Attendance & timetable",
  "Hostel & mess, library, transport",
  "HR & payroll for staff",
  "NAAC / NBA / NIRF / AICTE reporting",
  "Student, parent & staff mobile portals",
];

const RED_FLAGS = [
  "Separate logins and databases for each module (data gets re-keyed).",
  "No clear implementation timeline or training plan.",
  "Pricing that hides implementation, support or customisation costs.",
  "No live demo with real data — only slides and screenshots.",
  "Can't name comparable institutions already using the system.",
  "Accreditation reports exported to spreadsheets and finished by hand.",
];

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "College ERP Buyer's Guide — How to Choose the Right System",
    author: { "@type": "Organization", name: "Aveon Editorial Team" },
    publisher: {
      "@type": "Organization",
      name: siteConfig.location.legalName,
    },
    mainEntityOfPage: `${siteConfig.url}/resources/${SLUG}`,
  };
}

export default function BuyersGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd()) }}
      />

      <PageHero
        eyebrow="Free Guide"
        title="The College ERP Buyer's Guide"
        description="Choosing a campus ERP is a five-year decision. This guide gives you the questions to ask, the modules to insist on, the red flags to avoid, and the real cost to budget for."
      />

      {/* Email capture */}
      <section className="mx-auto max-w-[900px] px-4 pt-10 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-6 sm:p-7">
          <h2 className="text-lg font-extrabold text-navy-900">Get the checklist + templates by email</h2>
          <p className="mt-1.5 text-sm text-navy-600">
            We'll send you the vendor-evaluation checklist and our implementation templates, plus occasional
            campus-ERP notes. Unsubscribe anytime.
          </p>
          <div className="mt-4">
            <NewsletterSignup source={SLUG} buttonLabel="Send it to me" placeholder="Your work email" successText="Done! The checklist is on its way to your inbox." />
          </div>
        </div>
      </section>

      {/* Guide body */}
      <article className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 lg:px-10">
        <h2 className="text-[clamp(22px,2.6vw,30px)] font-extrabold text-navy-900">7 questions to ask every vendor</h2>
        <div className="mt-6 flex flex-col gap-5">
          {QUESTIONS.map((item, i) => (
            <div key={item.q} className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-sm">
              <h3 className="flex items-start gap-3 text-base font-bold text-navy-900">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-xs font-extrabold text-white">{i + 1}</span>
                {item.q}
              </h3>
              <p className="mt-2 pl-9 text-[15px] leading-relaxed text-navy-700">{item.a}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-[clamp(22px,2.6vw,30px)] font-extrabold text-navy-900">Must-have modules</h2>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {MUST_HAVE.map((m) => (
            <li key={m} className="flex items-start gap-2.5 text-[15px] text-navy-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              {m}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-[clamp(22px,2.6vw,30px)] font-extrabold text-navy-900">Red flags to avoid</h2>
        <ul className="mt-5 flex flex-col gap-2.5">
          {RED_FLAGS.map((r) => (
            <li key={r} className="flex items-start gap-2.5 text-[15px] text-navy-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              {r}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-navy-900/8 bg-navy-50 p-6 sm:p-7">
          <h2 className="text-lg font-extrabold text-navy-900">Work out the real cost</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-navy-700">
            Before you compare quotes, read how campus ERP pricing actually works and use the five-year cost
            checklist so you're comparing total cost of ownership, not just the licence.
          </p>
          <Link href="/pricing" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary-700">
            See how pricing works →
          </Link>
        </div>

        {/* Closing CTA */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-600 p-7 text-center sm:p-9">
          <h2 className="text-[clamp(22px,2.6vw,30px)] font-extrabold text-white">Ready to see it on your campus?</h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-primary-50">
            Put these questions to us directly in a 30-minute walkthrough tailored to your institution.
          </p>
          <Link href="/get-started" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary-700 transition hover:-translate-y-0.5">
            Book a free demo →
          </Link>
        </div>
      </article>
    </>
  );
}
