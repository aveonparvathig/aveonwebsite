import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "NAAC Accreditation Software | Compliance Tool",
  description:
    "Complete support for NAAC accreditation across all 10 criteria: curriculum, teaching, research, student support, infrastructure, governance, values, finance, alumni and quality assurance.",
};

const criteria = [
  { num: "1", title: "Curriculum Design & Development", features: ["Academic programs", "Learning outcomes", "Industry alignment"] },
  { num: "2", title: "Teaching-Learning & Evaluation", features: ["Faculty data", "Teaching methods", "Assessment records"] },
  { num: "3", title: "Research, Innovations & Extension", features: ["Research projects", "Patents & publications", "Community engagement"] },
  { num: "4", title: "Student Support & Progression", features: ["Scholarships", "Student activities", "Career guidance"] },
  { num: "5", title: "Infrastructure & Learning Resources", features: ["Building details", "Equipment inventory", "Digital resources"] },
  { num: "6", title: "Governance, Leadership & Management", features: ["Policies & procedures", "Admin data", "Staff details"] },
  { num: "7", title: "Institutional Values & Social Responsibility", features: ["Community service", "Green initiatives", "Social programs"] },
  { num: "8", title: "Financial Resources & Management", features: ["Budget planning", "Grants & funding", "Audit records"] },
  { num: "9", title: "Alumni & Stakeholder Engagement", features: ["Alumni network", "Feedback surveys", "Employer connect"] },
  { num: "10", title: "Internal Quality Assurance", features: ["IQAC meetings", "Best practices", "Continuous improvement"] },
];

export default function NaacPage() {
  return (
    <>
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
            NAAC 10-Criteria Framework Support
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-navy-700">
            Complete support for NAAC accreditation across all 10 criteria, from curriculum and teaching to governance and quality assurance, all tracked in one place.
          </p>
        </div>
      </section>

      {/* NAAC 10 Criteria */}
      <section className="bg-purple-50 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
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

      <CTASection />
    </>
  );
}
