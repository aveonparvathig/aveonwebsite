import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "IQAC / NAAC / NBA Management System | Aveon",
  description: "Comprehensive institutional quality assurance system. Manage IQAC compliance, NAAC accreditation (10 criteria), NBA accreditation, quality metrics and stakeholder feedback.",
  keywords: [
    "IQAC management system",
    "NAAC accreditation software",
    "NBA accreditation platform",
    "institutional quality assurance",
    "accreditation management",
    "quality indicators",
  ],
};

const nbaGroups = [
  { name: "Engineering", levels: ["UG Tier I (WA)", "UG Tier II", "PG", "Diploma"] },
  { name: "Management", levels: ["PG", "Postgraduate Diploma"] },
  { name: "Pharmacy", levels: ["UG", "PG", "Diploma"] },
];

const nbaSingles = ["MCA", "Architecture", "Hospitality & Tourism Mgmt"];

export default function IqacNaacNbaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-purple-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-purple-700">
              Product
            </span>
            <h1 className="mt-5">
              <span className="block text-balance text-[28px] font-semibold leading-[1.12] tracking-tight text-navy-900 sm:text-[34px] xl:text-[40px]">
                <span className="bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text font-extrabold text-transparent">Aveon</span> IQAC, NAAC &amp; NBA Management System
              </span>
              <span aria-hidden className="mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-500" />
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Unified platform for institutional quality assurance, accreditation compliance and continuous improvement. Manage IQAC, NAAC (10&nbsp;criteria), NBA, NIRF, AICTE and UNSDG.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(168_85_247_/_0.8)] transition-all hover:-translate-y-0.5 hover:bg-purple-700"
              >
                Request Demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center rounded-full border border-purple-600 bg-white px-7.5 py-4 text-[15px] font-bold text-purple-600 transition hover:border-purple-700 hover:text-purple-700"
              >
                All Products
              </Link>
            </div>
          </div>
          <Image
            src="/products/iqac.png"
            alt="IQAC, NAAC and NBA Management System"
            width={600}
            height={400}
            className="w-full rounded-2xl object-contain"
          />
        </div>
      </section>

      {/* NIRF */}
      <section className="px-4 pt-10 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-5 rounded-[28px] bg-gradient-to-br from-purple-700 via-purple-600 to-primary-600 px-6 py-8 text-center text-white shadow-[0_30px_70px_-34px_rgb(88_28_135_/_0.6)] sm:flex-row sm:gap-8 sm:px-10 sm:text-left">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white/15 text-[56px] font-extrabold leading-none">
            6
          </div>
          <div>
            <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-purple-100">NIRF Ranking</p>
            <h2 className="mt-1 text-[clamp(22px,3vw,32px)] font-extrabold leading-tight">6 Colleges Ranked in NIRF</h2>
            <p className="mt-2 max-w-[640px] text-[15.5px] leading-relaxed text-purple-50">
              Six colleges that run on Aveon are ranked in the National Institutional Ranking Framework (NIRF).
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
              Comprehensive Accreditation Management
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📋",
                title: "IQAC Coordination",
                desc: "Manage IQAC cell activities, meetings, action plans and institutional quality monitoring seamlessly.",
              },
              {
                icon: "⭐",
                title: "NAAC Accreditation",
                desc: "Complete support for NAAC accreditation framework with all 10 criteria: curriculum, teaching, research, student support, infrastructure, governance, values, finance, alumni and quality assurance.",
              },
              {
                icon: "🏆",
                title: "NBA Accreditation",
                desc: "Specialized support for NBA accreditation of engineering, architecture and technical programs.",
              },
              {
                icon: "📊",
                title: "Quality Metrics",
                desc: "Track 50+ quality indicators across all institutional dimensions with real-time dashboards.",
              },
              {
                icon: "💬",
                title: "Stakeholder Feedback",
                desc: "Collect and analyze feedback from students, faculty, staff and industry through surveys.",
              },
              {
                icon: "📄",
                title: "Accreditation Reports",
                desc: "Auto-generate comprehensive accreditation reports with data validation and audit trails.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-lg border border-navy-900/10 p-6 hover:border-purple-600/30 hover:shadow-lg">
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 font-bold text-navy-900">{feature.title}</h3>
                <p className="text-sm text-navy-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAAC 10 Criteria */}
      <section className="bg-purple-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-8 text-[clamp(28px,4vw,40px)] font-extrabold text-navy-900">
            NAAC 10-Criteria Framework Support
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
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
            ].map((criteria) => (
              <div key={criteria.num} className="rounded-lg bg-white p-6">
                <div className="mb-2 inline-block rounded-full bg-purple-600 px-3 py-1 text-sm font-bold text-white">
                  Criterion {criteria.num}
                </div>
                <h3 className="mt-3 mb-2 font-bold text-navy-900">{criteria.title}</h3>
                <ul className="space-y-1 text-sm text-navy-700">
                  {criteria.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NBA */}
      <section className="bg-gradient-to-b from-white to-navy-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              NBA
            </span>
            <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold leading-tight text-navy-900">
              Ready for NBA Accreditation
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-navy-700">
              Prepare Self Assessment Reports and track Program Outcomes for every programme the National Board of Accreditation (NBA) covers.
            </p>
          </div>

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

      {/* UN SDG */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-10 max-w-[760px] text-center">
            <span className="inline-block rounded-full bg-purple-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-purple-700">
              UNSDG
            </span>
            <h2 className="mt-4 text-[clamp(28px,4vw,44px)] font-extrabold leading-tight text-navy-900">
              Aligned with the UN Sustainable Development Goals
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-navy-700">
              Map your institution&apos;s programmes, research and outreach to all 17 UN Sustainable Development Goals and report your contribution with ease.
            </p>
          </div>

          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-2xl bg-white p-2 shadow-[0_26px_60px_-34px_rgb(88_28_135_/_0.4)] sm:p-3">
            <Image
              src="/products/unsdg-goals.png"
              alt="The 17 United Nations Sustainable Development Goals"
              width={1714}
              height={854}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
            Benefits of Unified Accreditation Management
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Faster Accreditation", desc: "Reduce accreditation cycle from 6 months to 6 weeks with automated data collection." },
              { title: "Higher Ratings", desc: "Achieve better NAAC/NBA ratings with comprehensive quality metrics and documentation." },
              { title: "Continuous Improvement", desc: "Track progress against quality indicators throughout the year, not just for accreditation." },
              { title: "Compliance Assurance", desc: "Ensure compliance with all accreditation criteria automatically." },
              { title: "Better Decision Making", desc: "Use quality data to make institutional decisions and strategic planning." },
              { title: "Reduced Workload", desc: "Eliminate manual data compilation and reporting. Auto-generate all accreditation documents." },
            ].map((benefit) => (
              <div key={benefit.title} className="rounded-lg bg-navy-50 p-6">
                <h3 className="mb-2 font-bold text-navy-900">{benefit.title}</h3>
                <p className="text-sm text-navy-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="text-center">
            <h2 className="mb-12 text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
              Proven Institutional Impact
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/50 p-8">
                <div className="text-4xl font-bold text-purple-600">↑ 25%</div>
                <p className="mt-3 text-navy-700">Better accreditation ratings on average</p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 p-8">
                <div className="text-4xl font-bold text-blue-600">80%</div>
                <p className="mt-3 text-navy-700">Time saved in accreditation preparation</p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100/50 p-8">
                <div className="text-4xl font-bold text-green-600">99%</div>
                <p className="mt-3 text-navy-700">Data accuracy in accreditation reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-purple-600 py-16 text-center text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <h2 className="text-3xl font-bold">
            Simplify Your Accreditation Journey
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Achieve institutional excellence with unified IQAC, NAAC and NBA management.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-purple-600 hover:bg-gray-100"
          >
            Schedule Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
