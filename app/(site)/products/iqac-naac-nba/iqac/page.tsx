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

      <CTASection />
    </>
  );
}
