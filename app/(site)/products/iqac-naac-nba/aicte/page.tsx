import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AICTE Compliance & Approval | Aveon",
  description:
    "Stay compliant with AICTE approval requirements, mandatory disclosures and annual reporting, all from one dashboard.",
};

const compliance = [
  {
    title: "Extension of Approval (EOA)",
    desc: "Prepare and track your annual Extension of Approval application data, ready before the AICTE deadline.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Mandatory Disclosure",
    desc: "Maintain the AICTE-mandated disclosure report with live data on faculty, infrastructure and fees.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Annual Report Submission",
    desc: "Compile the AICTE annual report directly from academic, financial and administrative records.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M6.75 21h9m-9 0a2.25 2.25 0 01-2.25-2.25V6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 011.123-.08m0 0V5.25A2.25 2.25 0 0110.5 3h3A2.25 2.25 0 0115.75 5.25v.166m-6.75 0a48.667 48.667 0 016.75 0" />
      </svg>
    ),
  },
  {
    title: "Anti-Ragging Compliance",
    desc: "Track anti-ragging committee records, affidavits and awareness activities as required by AICTE norms.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Grievance Redressal",
    desc: "Maintain student and staff grievance records with resolution timelines, as required under AICTE regulations.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Faculty & Infrastructure Norms",
    desc: "Track faculty qualification, student-faculty ratio and infrastructure records against AICTE norms.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

export default function AictePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-indigo-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1320px] px-4 pt-14 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pt-20 lg:pb-14">
          <div className="mb-8">
            <Link
              href="/products/iqac-naac-nba"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-indigo-700 hover:text-indigo-800"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to IQAC, NAAC &amp; NBA
            </Link>
          </div>

          <span className="inline-block rounded-full bg-indigo-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-indigo-700">
            AICTE
          </span>
          <h1 className="mt-5 max-w-[820px] text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.08] text-navy-900">
            AICTE Compliance & Approval
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-navy-700">
            Stay compliant with AICTE approval requirements, mandatory disclosures and annual reporting, all from one dashboard.
          </p>
        </div>
      </section>

      {/* Compliance areas */}
      <section className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <h2 className="text-[clamp(26px,3.4vw,38px)] font-extrabold leading-tight text-navy-900">
              What Aveon Tracks for AICTE
            </h2>
            <p className="mt-3.5 text-[16px] leading-relaxed text-navy-700">
              From EOA renewal to mandatory disclosure, every AICTE compliance requirement is tracked and audit-ready.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {compliance.map((c) => (
              <div
                key={c.title}
                className="group flex flex-col rounded-[26px] border border-navy-900/8 bg-white p-6.5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span className="flex h-12.5 w-12.5 items-center justify-center rounded-[18px] bg-gradient-to-br from-indigo-500 to-indigo-700 text-white">
                  {c.icon}
                </span>
                <h3 className="mt-5 text-[17.5px] font-extrabold text-navy-900">{c.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-navy-700">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
