import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "NBA Accreditation | Program Assessment Tool",
  description:
    "Prepare Self Assessment Reports and track Program Outcomes for every programme the National Board of Accreditation (NBA) covers.",
};

const nbaGroups = [
  { name: "Engineering", levels: ["UG Tier I (WA)", "UG Tier II", "PG", "Diploma"] },
  { name: "Management", levels: ["PG", "Postgraduate Diploma"] },
  { name: "Pharmacy", levels: ["UG", "PG", "Diploma"] },
];

const nbaSingles = ["MCA", "Architecture", "Hospitality & Tourism Mgmt"];

const tracking = [
  {
    title: "Program Outcomes (PO) Mapping",
    desc: "Define and map graduate attributes and Program Outcomes for every accredited programme.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Course Outcomes (CO) Tracking",
    desc: "Record Course Outcomes for every subject and link them directly to assessments and results.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "CO-PO Attainment Analysis",
    desc: "Automatically calculate CO-PO attainment levels from internal, external and indirect assessments.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Self Assessment Report (SAR)",
    desc: "Auto-generate SAR documentation with data pulled directly from academic and administrative records.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement Records",
    desc: "Track actions taken from attainment gaps, closing the loop for every programme cycle.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Faculty & Infrastructure Data",
    desc: "Maintain faculty qualifications, student-faculty ratio and infrastructure records ready for peer review.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

export default function NbaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1320px] px-4 pt-14 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pt-20 lg:pb-14">
          <div className="mb-8">
            <Link
              href="/products/iqac-naac-nba"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-primary-700 hover:text-primary-800"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to IQAC, NAAC &amp; NBA
            </Link>
          </div>

          <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
            NBA
          </span>
          <h1 className="mt-5 max-w-[820px] text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.08] text-navy-900">
            Ready for NBA Accreditation
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-navy-700">
            Prepare Self Assessment Reports and track Program Outcomes for every programme the National Board of Accreditation (NBA) covers.
          </p>
        </div>
      </section>

      {/* NBA programmes */}
      <section className="bg-gradient-to-b from-white to-navy-50 pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-[0_26px_60px_-34px_rgb(29_111_242_/_0.4)]">
            <Image
              src="/products/nba-banner.png"
              alt="National Board of Accreditation: Promoting international quality standards for technical education in India"
              width={1180}
              height={178}
              className="h-auto w-full"
            />
            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
              {nbaGroups.map((g) => (
                <div key={g.name} className="overflow-hidden rounded-xl border border-navy-900/8">
                  <div className="bg-navy-900 px-4 py-3 text-[15px] font-bold text-white">{g.name}</div>
                  <ul className="space-y-2.5 px-4 py-4">
                    {g.levels.map((l) => (
                      <li key={l} className="flex items-center gap-2.5 text-[14.5px] font-medium text-navy-800">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {nbaSingles.map((n) => (
                <div key={n} className="flex items-center rounded-xl bg-navy-900 px-4 py-3 text-[15px] font-bold text-white sm:min-h-[52px]">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Aveon tracks for NBA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <h2 className="text-[clamp(26px,3.4vw,38px)] font-extrabold leading-tight text-navy-900">
              What Aveon Tracks for NBA
            </h2>
            <p className="mt-3.5 text-[16px] leading-relaxed text-navy-700">
              From Course Outcomes to the final Self Assessment Report, every stage of the NBA cycle is tracked in one platform.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tracking.map((t) => (
              <div
                key={t.title}
                className="group flex flex-col rounded-[26px] border border-navy-900/8 bg-white p-6.5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span className="flex h-12.5 w-12.5 items-center justify-center rounded-[18px] bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                  {t.icon}
                </span>
                <h3 className="mt-5 text-[17.5px] font-extrabold text-navy-900">{t.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-navy-700">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
