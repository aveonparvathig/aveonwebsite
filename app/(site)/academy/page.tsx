import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Aveon Academy",
  description:
    "Aveon Academy trains administrators, faculty and staff to get the most out of the Aveon ERP platform.",
};

const programs = [
  {
    title: "Administrator Certification",
    text: "Deep-dive training for ERP administrators — configuration, user management, reports and troubleshooting.",
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
    text: "Examination cell training — exam setup, valuation workflows, results and transcripts.",
    duration: "1 week",
  },
];

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Aveon Academy"
        title="Training That Makes ERP Stick"
        description="Software succeeds when people use it well. Aveon Academy trains every role on your campus."
      />

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
