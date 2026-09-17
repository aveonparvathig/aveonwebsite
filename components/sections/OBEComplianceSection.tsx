"use client";

import Link from "next/link";

export default function OBEComplianceSection() {
  const features = [
    {
      title: "Outcome-Based Education (OBE) Framework",
      description:
        "Native OBE curriculum mapping and learning outcome tracking aligned with NAAC and AICTE standards.",
      icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    },
    {
      title: "NAAC Accreditation Ready",
      description:
        "Automated NAAC data collection and reporting with compliance built-in for all quality indicators.",
      icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    },
    {
      title: "AICTE Compliance",
      description:
        "Integrated AICTE requirements for curriculum, faculty management, and institutional data reporting.",
      icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      title: "CBCS Support",
      description:
        "Choice-Based Credit System with flexible course structures and credit tracking for modern institutions.",
      icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    },
    {
      title: "Learning Outcome Analytics",
      description:
        "AI-powered analytics to measure student achievement against learning outcomes and program goals.",
      icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    },
    {
      title: "Performance Indicators Dashboard",
      description:
        "Real-time KPI tracking for institutional effectiveness and continuous improvement cycles.",
      icon: "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6zM13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-tight text-navy-900">
            Outcome-Based Education
            <span className="block text-primary-600">
              Compliance & Analytics
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-relaxed text-navy-700 sm:mt-6">
            Built-in OBE framework with NAAC, AICTE, and CBCS compliance. Track learning outcomes and institutional effectiveness with AI-powered analytics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-navy-900/8 bg-white p-6 sm:p-8 transition-all hover:border-primary-600/30 hover:shadow-[0_20px_60px_-10px_rgb(29_111_242_/_0.15)]"
            >
              <svg
                className="mb-4 h-8 w-8 text-primary-600 transition-transform group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={feature.icon}
                />
              </svg>

              <h3 className="mb-2 text-lg font-bold text-navy-900">
                {feature.title}
              </h3>
              <p className="text-sm text-navy-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:mt-16">
          <p className="text-center text-sm text-navy-700">
            Ready to implement OBE and achieve NAAC accreditation?
          </p>
          <Link
            href="/contact#demo"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary-600 px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-700"
          >
            Book a Consultation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}