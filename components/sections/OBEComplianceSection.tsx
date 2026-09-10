"use client";

import Link from "next/link";

export default function OBEComplianceSection() {
  const features = [
    {
      title: "Outcome-Based Education (OBE) Framework",
      description:
        "Native OBE curriculum mapping and learning outcome tracking aligned with NAAC and AICTE standards.",
      icon: "M12 14l9-5-9-5-9 5m0 0l-9 5 9 5 9-5m0-5v10m0 0l-9 5m9-5l9 5",
    },
    {
      title: "NAAC Accreditation Ready",
      description:
        "Automated NAAC data collection and reporting with compliance built-in for all quality indicators.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "AICTE Compliance",
      description:
        "Integrated AICTE requirements for curriculum, faculty management, and institutional data reporting.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "CBCS Support",
      description:
        "Choice-Based Credit System with flexible course structures and credit tracking for modern institutions.",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 000 4m0-4v2m0-6h6m-6 0h-6m6 0v6m0 0v6m0-6h-6m6 0h6",
    },
    {
      title: "Learning Outcome Analytics",
      description:
        "AI-powered analytics to measure student achievement against learning outcomes and program goals.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14",
    },
    {
      title: "Performance Indicators Dashboard",
      description:
        "Real-time KPI tracking for institutional effectiveness and continuous improvement cycles.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
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