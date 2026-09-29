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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tag: "Quality Cell",
                title: "IQAC",
                desc: "Manage IQAC cell activities, meetings, action plans and Annual Quality Assurance Reports (AQAR) seamlessly.",
                href: "/products/iqac-naac-nba/iqac",
                from: "from-rose-500",
                to: "to-rose-700",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                tag: "10 Criteria",
                title: "NAAC",
                desc: "Complete support for NAAC accreditation across all 10 criteria, from curriculum and teaching to governance and quality assurance.",
                href: "/products/iqac-naac-nba/naac",
                from: "from-purple-500",
                to: "to-purple-700",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
              {
                tag: "17 Goals",
                title: "UNSDG",
                desc: "Map programmes, research and outreach to all 17 UN Sustainable Development Goals and report your contribution with ease.",
                href: "/products/iqac-naac-nba/unsdg",
                from: "from-emerald-500",
                to: "to-emerald-700",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
                  </svg>
                ),
              },
              {
                tag: "Ranking",
                title: "NIRF",
                desc: "Prepare and submit accurate NIRF data across teaching, research, outreach and perception with automated data collection.",
                href: "/products/iqac-naac-nba/nirf",
                from: "from-orange-500",
                to: "to-orange-700",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.42 9.71 2.25 12 2.25c2.291 0 4.545.17 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35" />
                  </svg>
                ),
              },
              {
                tag: "Accreditation",
                title: "NBA",
                desc: "Specialised support for NBA accreditation of engineering, management, pharmacy and other technical programmes.",
                href: "/products/iqac-naac-nba/nba",
                from: "from-primary-500",
                to: "to-primary-700",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443" />
                  </svg>
                ),
              },
              {
                tag: "Compliance",
                title: "AICTE",
                desc: "Stay compliant with AICTE approval requirements, mandatory disclosures and annual reporting, all from one dashboard.",
                href: "/products/iqac-naac-nba/aicte",
                from: "from-indigo-500",
                to: "to-indigo-700",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((feature) => {
              const cardClass =
                "group flex flex-col rounded-[26px] border border-navy-900/8 bg-white p-6.5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover";
              const content = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <span className={`flex h-12.5 w-12.5 items-center justify-center rounded-[18px] bg-gradient-to-br ${feature.from} ${feature.to} text-white`}>
                      {feature.icon}
                    </span>
                    <span className="rounded-full bg-navy-50 px-3 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.1em] text-navy-600">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[19.5px] font-extrabold text-navy-900">{feature.title}</h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-navy-700">{feature.desc}</p>
                  {feature.href && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-600">
                      Learn more
                      <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  )}
                </>
              );
              return feature.href ? (
                <Link key={feature.title} href={feature.href} className={cardClass}>
                  {content}
                </Link>
              ) : (
                <div key={feature.title} className={cardClass}>
                  {content}
                </div>
              );
            })}
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
