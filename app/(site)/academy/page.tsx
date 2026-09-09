import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aveon Academy",
  description:
    "Aveon Academy trains administrators, faculty and staff to get the most out of the Aveon ERP platform.",
};

const programs = [
  {
    title: "Administrator Certification",
    text: "Deep-dive training for ERP administrators  configuration, user management, reports and troubleshooting.",
    duration: "2 weeks",
  },
  {
    title: "Faculty Essentials",
    text: "Attendance, internal marks, LMS content and student communication for teaching staff.",
    duration: "3 days",
  },
  {
    title: "Office Staff Onboarding",
    text: "Admissions, fees, certificates and day-to-day office workflows on the platform.",
    duration: "1 week",
  },
  {
    title: "COE Operations",
    text: "Examination cell training exam setup, valuation workflows, results and transcripts.",
    duration: "1 week",
  },
];

export default function AcademyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Aveon Academy
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Training That Makes ERP Stick
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Software succeeds when people use it well. Aveon Academy trains every role on your campus.
            </p>
          </div>
          <Image
            src="/products/acd.jpg"
            alt="Aveon Academy"
            width={600}
            height={400}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {programs.map((p) => (
            <div key={p.title} className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-heading text-xl font-bold text-navy-900">{p.title}</h2>
                <span className="shrink-0 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                  {p.duration}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-navy-600">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-primary-700"
          >
            Enquire About Training →
          </Link>
        </div>
      </section>
    </>
  );
}
