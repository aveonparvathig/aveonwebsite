import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Internal Quality Assurance Cell (IQAC) | Aveon",
  description:
    "Coordinate IQAC meetings, action plans and Annual Quality Assurance Reports (AQAR), all tracked in one place and ready for NAAC review.",
};

const activities = [
  {
    title: "IQAC Composition & Meetings",
    desc: "Maintain member records, meeting schedules, minutes and action-item tracking for every IQAC meeting.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Annual Quality Assurance Report",
    desc: "Auto-compile AQAR data from academic and administrative records, ready for yearly NAAC submission.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Academic & Administrative Audit",
    desc: "Track internal audit findings, corrective actions and compliance status across every department.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Initiatives Tracking",
    desc: "Log quality-improvement projects, timelines, owners and outcomes across the institution.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Stakeholder Feedback Analysis",
    desc: "Collect and analyse feedback from students, faculty, parents, alumni and employers through surveys.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Best Practices Documentation",
    desc: "Document institutional best practices with supporting evidence, ready for accreditation review.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const cycle = [
  {
    title: "Plan",
    desc: "Define annual quality goals and department-wise action plans.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M10.5 8.25h3m-3 0a1.5 1.5 0 01-1.5-1.5v-.75a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5m-3 0h3m-9 3h9.75M8.25 3v1.5M15.75 3v1.5" />
      </svg>
    ),
  },
  {
    title: "Implement",
    desc: "Roll out quality initiatives and track progress across departments.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Monitor",
    desc: "Track quality indicators and departmental compliance in real time.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Collect Feedback",
    desc: "Gather structured feedback from students, faculty and employers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: "Compile AQAR",
    desc: "Auto-generate the Annual Quality Assurance Report from tracked data.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Faster AQAR Preparation",
    desc: "Pull data automatically from academic and administrative records instead of chasing every department each year.",
  },
  {
    title: "Audit-Ready Records",
    desc: "Every meeting, initiative and feedback response is stored with evidence, ready for NAAC peer review at any time.",
  },
  {
    title: "Continuous Improvement",
    desc: "Close the loop from feedback to action to measurable outcomes, cycle after cycle.",
  },
];

export default function IqacDetailPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-rose-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-rose-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-[1320px] px-4 pt-14 pb-10 sm:px-6 sm:pb-12 lg:px-10 lg:pt-20 lg:pb-14">
          <div className="mb-8">
            <Link
              href="/products/iqac-naac-nba"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-rose-700 hover:text-rose-800"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to IQAC, NAAC &amp; NBA
            </Link>
          </div>

          <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-rose-700">
            IQAC
          </span>
          <h1 className="mt-5 max-w-[820px] text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[1.08] text-navy-900">
            Internal Quality Assurance Cell
          </h1>
          <p className="mt-5 max-w-[680px] text-[17px] leading-relaxed text-navy-700">
            Coordinate IQAC meetings, action plans and Annual Quality Assurance Reports (AQAR), all tracked in one place and ready for NAAC review.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 hover:to-rose-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(225_29_72_/_0.5)] transition-all hover:-translate-y-0.5"
            >
              Request Demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/products/iqac-naac-nba"
              className="inline-flex items-center rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition hover:border-rose-400 hover:text-rose-700"
            >
              Explore NAAC &amp; NBA
            </Link>
          </div>

          <div className="mt-11 grid max-w-[680px] grid-cols-3 gap-4 border-t border-navy-900/8 pt-7">
            <div>
              <p className="text-[26px] font-extrabold leading-none text-rose-600">Annual</p>
              <p className="mt-1.5 text-[12.5px] font-semibold leading-snug text-navy-600">AQAR submission cycle</p>
            </div>
            <div>
              <p className="text-[26px] font-extrabold leading-none text-rose-600">10 Criteria</p>
              <p className="mt-1.5 text-[12.5px] font-semibold leading-snug text-navy-600">Aligned with NAAC framework</p>
            </div>
            <div>
              <p className="text-[26px] font-extrabold leading-none text-rose-600">100%</p>
              <p className="mt-1.5 text-[12.5px] font-semibold leading-snug text-navy-600">Digital, audit-ready records</p>
            </div>
          </div>
        </div>
      </section>

      {/* The IQAC Cycle */}
      <section className="bg-rose-50/60 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <span className="inline-block rounded-full bg-white px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-rose-700 shadow-sm">
              How It Works
            </span>
            <h2 className="mt-4 text-[clamp(26px,3.4vw,38px)] font-extrabold leading-tight text-navy-900">
              The IQAC Cycle
            </h2>
          </div>

          <div className="relative">
            <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200 lg:block" />
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {cycle.map((c, i) => (
                <div key={c.title} className="relative text-center">
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-rose-50 bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-[0_16px_32px_-14px_rgb(225_29_72_/_0.55)]">
                    {c.icon}
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[11px] font-extrabold text-white ring-2 ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 mb-1.5 font-bold text-navy-900">{c.title}</h3>
                  <p className="text-xs leading-relaxed text-navy-700">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-12 lg:pb-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <h2 className="text-[clamp(26px,3.4vw,38px)] font-extrabold leading-tight text-navy-900">
              What Aveon Tracks for IQAC
            </h2>
            <p className="mt-3.5 text-[16px] leading-relaxed text-navy-700">
              From meeting minutes to the final AQAR, every IQAC activity is logged and ready to hand over for accreditation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <div
                key={a.title}
                className="group flex flex-col rounded-[26px] border border-navy-900/8 bg-white p-6.5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover"
              >
                <span className="flex h-12.5 w-12.5 items-center justify-center rounded-[18px] bg-gradient-to-br from-rose-500 to-rose-700 text-white">
                  {a.icon}
                </span>
                <h3 className="mt-5 text-[17.5px] font-extrabold text-navy-900">{a.title}</h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-navy-700">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-navy-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <h2 className="text-[clamp(26px,3.4vw,38px)] font-extrabold leading-tight text-navy-900">
              Why It Matters
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-navy-900/8 bg-white p-6.5">
                <h3 className="text-[17px] font-extrabold text-navy-900">{b.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-navy-700">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
