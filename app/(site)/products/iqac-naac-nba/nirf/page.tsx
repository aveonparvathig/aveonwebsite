import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "NIRF Rankings | Institutional Assessment",
  description:
    "Prepare and submit accurate NIRF data across Teaching, Research, Graduation Outcomes, Outreach and Perception with automated data collection.",
};

const parameters = [
  {
    code: "TLR",
    title: "Teaching, Learning & Resources",
    desc: "Track student strength, faculty ratio, faculty qualifications, financial resources and infrastructure metrics.",
  },
  {
    code: "RP",
    title: "Research & Professional Practice",
    desc: "Log publications, citations, patents, sponsored research projects and consultancy income by department.",
  },
  {
    code: "GO",
    title: "Graduation Outcomes",
    desc: "Track graduation rate, placement and higher-studies data, and examination performance across programmes.",
  },
  {
    code: "OI",
    title: "Outreach & Inclusivity",
    desc: "Record regional and gender diversity, economically and socially challenged students, and facilities for differently-abled students.",
  },
  {
    code: "PR",
    title: "Perception",
    desc: "Capture peer perception survey data and employer, academic and public reputation inputs for the ranking cycle.",
  },
];

export default function NirfPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-orange-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-orange-500/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1320px] px-4 pt-14 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pt-20 lg:pb-14">
          <div className="mb-8">
            <Link
              href="/products/iqac-naac-nba"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-orange-700 hover:text-orange-800"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to IQAC, NAAC &amp; NBA
            </Link>
          </div>

          <span className="inline-block rounded-full bg-orange-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-orange-700">
            NIRF
          </span>
          <h1 className="mt-5 max-w-[820px] text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.08] text-navy-900">
            National Institutional Ranking Framework
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-navy-700">
            Prepare and submit accurate NIRF data across Teaching, Research, Graduation Outcomes, Outreach and Perception, with automated data collection.
          </p>
        </div>
      </section>

      {/* Ranking highlight */}
      <section className="px-4 pt-10 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-5 rounded-[28px] bg-gradient-to-br from-orange-600 via-orange-500 to-accent-500 px-6 py-8 text-center text-white shadow-[0_30px_70px_-34px_rgb(234_88_12_/_0.6)] sm:flex-row sm:gap-8 sm:px-10 sm:text-left">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white/15 text-[56px] font-extrabold leading-none">
            6
          </div>
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-orange-100">NIRF Ranking</p>
            <h2 className="mt-1 text-[clamp(22px,3vw,32px)] font-extrabold leading-tight">6 Colleges Ranked in NIRF</h2>
            <p className="mt-2 max-w-[640px] text-[15.5px] leading-relaxed text-orange-50">
              Six colleges that run on Aveon are ranked in the National Institutional Ranking Framework (NIRF).
            </p>
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <h2 className="text-[clamp(26px,3.4vw,38px)] font-extrabold leading-tight text-navy-900">
              The 5 NIRF Ranking Parameters
            </h2>
            <p className="mt-3.5 text-[16px] leading-relaxed text-navy-700">
              Aveon tracks the data behind every parameter, so your NIRF submission is a report, not a scramble.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {parameters.map((p) => (
              <div
                key={p.code}
                className="group flex flex-col rounded-[26px] border border-navy-900/8 bg-white p-6.5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span className="flex h-12.5 w-12.5 items-center justify-center rounded-[18px] bg-gradient-to-br from-orange-500 to-orange-700 text-[13px] font-extrabold text-white">
                  {p.code}
                </span>
                <h3 className="mt-5 text-[17.5px] font-extrabold text-navy-900">{p.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-navy-700">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
