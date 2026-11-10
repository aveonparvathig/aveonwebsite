import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import RelatedGuides from "@/components/blog/RelatedGuides";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "NAAC Accreditation Software | SSR, AQAR & DVV",
  description:
    "NAAC accreditation software that captures evidence across all seven criteria year-round and prepares your SSR, AQAR and DVV data from one IQAC workspace.",
  keywords: [
    "NAAC Accreditation Software",
    "NAAC Software",
    "IQAC Software",
    "NAAC SSR Software",
    "AQAR Software",
    "NAAC DVV Software",
    "Accreditation Management Software",
    "NAAC Criteria Software",
    "Quality Assurance Software for Colleges",
    "IQAC Management System",
    "IQAC Export Software",
    "IQAC Data Collection Software",
  ],
};

const naacFaqs = [
  {
    question: "What is NAAC accreditation software?",
    answer:
      "NAAC accreditation software helps a college or university collect evidence against all seven NAAC criteria throughout the year and assemble it into the Self Study Report (SSR), the Annual Quality Assurance Report (AQAR) and the Data Validation and Verification (DVV) response. Aveon captures the data as it happens, so the IQAC is not reconstructing years of records weeks before a visit.",
  },
  {
    question: "Does it prepare the SSR, AQAR and DVV?",
    answer:
      "Yes. Criterion-wise metrics, qualitative and quantitative, map to the current NAAC framework, so the SSR assembles from live records, the AQAR is generated each year, and the DVV clarifications are answered from the same evidence trail. Figures should always be confirmed against the current NAAC manual before submission.",
  },
  {
    question: "How does it help the IQAC?",
    answer:
      "The IQAC gets a single workspace: metric owners across departments, deadlines, document uploads and a live view of how complete each criterion is. Quality initiatives, meetings and best practices are recorded continuously rather than compiled at the last minute.",
  },
  {
    question: "What activities does the IQAC module capture for NAAC?",
    answer:
      "Departments log the evidence NAAC asks for as it happens: MOUs and linkages, conferences, workshops and seminars, M.Phil and Ph.D guidance, consultancy, extension activities, staff research projects and grants, and Board of Studies records. Each is tagged by academic year, department and type, and can be exported with its supporting attachments for any date range to assemble the SSR, AQAR or DVV response.",
  },
  {
    question: "Is NAAC support part of the campus ERP?",
    answer:
      "Yes. Because admissions, examinations, research, student support and governance already run on Aveon, much of the NAAC evidence is generated automatically from day-to-day operations instead of being entered a second time for accreditation.",
  },
];

// Activity records the IQAC module logs year-round across departments, each
// tagged to the NAAC criterion it supports (mirrors the live IQAC form types).
const iqacActivities = [
  { name: "MOUs & Linkages", criterion: "Criterion 3" },
  { name: "Conferences, Workshops & Seminars", criterion: "Criterion 3" },
  { name: "M.Phil & Ph.D Guidance", criterion: "Criteria 2 & 3" },
  { name: "Consultancy", criterion: "Criterion 3" },
  { name: "Extension Activities", criterion: "Criterion 3" },
  { name: "Staff Research Projects & Grants", criterion: "Criterion 3" },
  { name: "Board of Studies (BoS)", criterion: "Criterion 1" },
];

// NAAC's seven assessment criteria (Revised Accreditation Framework).
const criteria = [
  { num: "1", title: "Curricular Aspects", features: ["Academic programs", "Learning outcomes & OBE mapping", "Curriculum feedback & revision"] },
  { num: "2", title: "Teaching-Learning & Evaluation", features: ["Faculty profiles & workload", "Student-centric teaching methods", "Assessment & results records"] },
  { num: "3", title: "Research, Innovations & Extension", features: ["Research projects & grants", "Patents & publications", "Extension & community engagement"] },
  { num: "4", title: "Infrastructure & Learning Resources", features: ["Physical & ICT infrastructure", "Library & digital resources", "Equipment & maintenance records"] },
  { num: "5", title: "Student Support & Progression", features: ["Scholarships & support schemes", "Placement & progression data", "Alumni engagement"] },
  { num: "6", title: "Governance, Leadership & Management", features: ["Policies & strategic plans", "Financial management & audits", "IQAC meetings & quality initiatives"] },
  { num: "7", title: "Institutional Values & Best Practices", features: ["Gender equity & inclusion", "Green campus initiatives", "Best practices & distinctiveness"] },
];

export default function NaacPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(naacFaqs)) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-purple-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1320px] px-4 pt-14 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pt-20 lg:pb-14">
          <div className="mb-8">
            <Link
              href="/products/iqac-naac-nba"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-purple-700 hover:text-purple-800"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to IQAC, NAAC &amp; NBA
            </Link>
          </div>

          <span className="inline-block rounded-full bg-purple-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-purple-700">
            NAAC
          </span>
          <h1 className="mt-5 max-w-[820px] text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.08] text-navy-900">
            NAAC Seven-Criteria Framework Support
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-navy-700">
            Complete support for NAAC accreditation across all seven criteria, from curricular aspects and teaching-learning to governance and institutional values, all tracked in one place.
          </p>
        </div>
      </section>

      {/* NAAC criteria */}
      <section className="bg-purple-50 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mb-8 max-w-[760px]">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              All Seven NAAC Criteria, Captured Year-Round
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-navy-700">
              Aveon maps to every criterion of NAAC&apos;s Revised Accreditation Framework, so the
              evidence for each one builds up through the year instead of being assembled in a rush
              before the peer-team visit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {criteria.map((c) => (
              <div key={c.num} className="rounded-lg bg-white p-6">
                <div className="mb-2 inline-block rounded-full bg-purple-600 px-3 py-1 text-sm font-bold text-white">
                  Criterion {c.num}
                </div>
                <h3 className="mt-3 mb-2 font-bold text-navy-900">{c.title}</h3>
                <ul className="space-y-1 text-sm text-navy-700">
                  {c.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IQAC data capture & export */}
      <section className="border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10">
          <div className="max-w-[760px]">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Year-Round IQAC Data Capture, One-Click Export
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-navy-700">
              The hardest NAAC evidence to reconstruct is the research, extension and collaboration
              record. Aveon lets departments log each activity as it happens, tagged by academic year,
              department, type and form type, so the IQAC exports exactly the records it needs instead
              of chasing documents across departments weeks before a visit.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {iqacActivities.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-card"
              >
                <span className="text-sm font-semibold text-navy-900">{a.name}</span>
                <span className="shrink-0 rounded-full bg-purple-100 px-2.5 py-0.5 text-[11px] font-bold text-purple-700">
                  {a.criterion}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-navy-600">
            Records export by academic year, department, activity type and form type, and the supporting
            attachments download for any date range, ready to attach to the SSR, AQAR or DVV response.
          </p>
        </div>
      </section>

      {/* SSR / AQAR / DVV */}
      <section className="mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="max-w-[760px]">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            From Daily Records to SSR, AQAR and DVV
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-navy-700">
            The reports NAAC asks for are only as easy as the data behind them. Aveon keeps that data
            live, so each submission assembles itself.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { t: "Self Study Report (SSR)", d: "Criterion-wise qualitative and quantitative metrics assemble from live admission, examination, research and student-support records." },
            { t: "AQAR, every year", d: "The Annual Quality Assurance Report is generated from the IQAC workspace without re-collecting a year of data." },
            { t: "DVV clarifications", d: "Data Validation and Verification queries are answered from the same evidence trail and document uploads, with a clear audit history." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-purple-700">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{x.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-navy-600">
          Figures and templates should be confirmed against the current NAAC manual before
          submission. See the{" "}
          <Link href="/blog/naac-accreditation-checklist" className="font-semibold text-purple-700 hover:underline">
            NAAC accreditation checklist
          </Link>{" "}
          for the full criterion-by-criterion guide.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-navy-100 bg-purple-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
            NAAC Accreditation Software: FAQs
          </h2>
          <div className="mt-10 space-y-3">
            {naacFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 group-open:text-purple-700">
                    {faq.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition group-open:rotate-180 group-open:border-purple-600 group-open:bg-purple-600 group-open:text-white">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedGuides slugs={["naac-accreditation-checklist", "obe-implementation-guide", "nirf-ranking-parameters-explained"]} />
      <CTASection />
    </>
  );
}
