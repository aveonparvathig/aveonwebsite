import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";
import RelatedGuides from "@/components/blog/RelatedGuides";

export const metadata: Metadata = {
  title: "College ERP Software in Karnataka",
  description:
    "Campus ERP for Karnataka colleges: autonomous-college examinations, Bengaluru and VTU workflows, NAAC and NBA evidence. Running at Kristu Jayanti College.",
  keywords: [
    "College ERP Karnataka",
    "College management software Bengaluru",
    "Autonomous college ERP Karnataka",
    "VTU college ERP",
    "Bengaluru North University college software",
    "NAAC software Karnataka",
  ],
};

const handles = [
  { body: "Autonomous colleges", detail: "The college's own Controller of Examinations: question-paper workflow, hall allocation, evaluation, revaluation and consolidated grade sheets, with outcome attainment for NAAC and NBA" },
  { body: "Bengaluru North and Bengaluru City Universities", detail: "Affiliated arts, science and commerce programme structures, internal-assessment rules and university result imports" },
  { body: "Visvesvaraya Technological University", detail: "Engineering regulations and credit structures, CGPA and backlog handling, university exam schedules and return formats" },
  { body: "University of Mysore and other state universities", detail: "Configured per affiliating university as a setting rather than a custom build" },
];

const faqs = [
  { q: "Which Karnataka institutions use Aveon today?", a: "Kristu Jayanti College, Bengaluru, an autonomous college affiliated to Bengaluru North University and NAAC-accredited, runs on the Aveon platform. It is our reference deployment in the state." },
  { q: "How do you support a college in Karnataka from Coimbatore?", a: "Implementation and training are on campus, with the team travelling from Coimbatore. After go-live, support is by phone and email through a named contact, with scheduled on-site visits for examination and admission periods." },
  { q: "Do you handle KEA/CET admissions and Karnataka scholarship schemes?", a: "Admission allotments are imported against sanctioned intake and category data is captured for statutory returns; state scholarship and fee-reimbursement schemes are tracked per student and reconciled to fee ledgers." },
];

export default function KarnatakaPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Solutions", href: "/solutions" },
      { name: "By State", href: "/solutions/by-state" },
      { name: "Karnataka", href: "/solutions/college-erp-karnataka" },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div className="relative mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="max-w-[820px]">
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Karnataka
            </span>
            <h1 className="mt-5 text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              College ERP for Karnataka Colleges
            </h1>
            <p className="mt-5 max-w-[680px] text-[17.5px] leading-[1.7] text-navy-700">
              Aveon's campus ERP runs at Kristu Jayanti College, Bengaluru, an autonomous, NAAC-accredited college
              affiliated to Bengaluru North University. The same platform configures VTU and state-university
              structures as settings, with implementation delivered on campus from our Coimbatore team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-600"
              >
                Get a demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center whitespace-nowrap rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">Reference deployment: Kristu Jayanti College, Bengaluru</h2>
          <p className="mt-3 max-w-[760px] text-[16px] leading-relaxed text-navy-700">
            An autonomous college with its own examination system, NAAC accreditation and a large multi-stream student
            body is the most demanding configuration a campus ERP faces: outcome-based course structures, internal and
            end-semester evaluation, revaluation, and accreditation evidence all in one place. Kristu Jayanti is our
            first Karnataka deployment and the reference for how we configure autonomous colleges in the state.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-navy-900/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-50 text-left text-navy-900">
                  <th className="px-4 py-3 font-bold">Structure</th>
                  <th className="px-4 py-3 font-bold">What the platform handles</th>
                </tr>
              </thead>
              <tbody>
                {handles.map((h) => (
                  <tr key={h.body} className="border-t border-navy-900/10 align-top">
                    <td className="px-4 py-3 font-semibold text-navy-900">{h.body}</td>
                    <td className="px-4 py-3 text-navy-700">{h.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-900">How we work in Karnataka</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-navy-700">
                Our implementation team comes to your campus for data migration, configuration, role-based training and
                a supervised go-live, scheduled away from admissions and university exams. After go-live, support runs
                by phone and email through a named contact, with on-site visits for examination and admission seasons.
                We are candid that Karnataka is a newer market for us than Tamil Nadu; the reference deployment above
                is open to a conversation with prospective colleges. The platform itself is described module by
                module on the{" "}
                <Link href="/products/college-erp" className="font-semibold text-primary-600">
                  college ERP software
                </Link>{" "}
                page.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { v: siteConfig.stats.institutions, l: "Institutions across India" },
                { v: siteConfig.stats.yearsExperience, l: `Years, since ${siteConfig.stats.foundedYear}` },
                { v: String(siteConfig.stats.products), l: "Integrated products" },
                { v: "4 weeks", l: "Typical single-college go-live" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-navy-100 bg-white p-6 text-center">
                  <p className="text-4xl font-bold text-primary-600">{s.v}</p>
                  <p className="mt-2 text-sm font-semibold text-navy-700">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">Questions from Karnataka colleges</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-bold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-navy-700">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-navy-600">
            See also our flagship{" "}
            <Link href="/solutions/college-erp-tamil-nadu" className="font-semibold text-primary-600">
              Tamil Nadu page
            </Link>{" "}
            and{" "}
            <Link href="/solutions/by-state" className="font-semibold text-primary-600">
              where Aveon operates
            </Link>
            .
          </p>
        </div>
      </section>

      <RelatedGuides slugs={["naac-accreditation-checklist", "nba-accreditation-guide", "obe-implementation-guide"]} />
      <CTASection />
    </>
  );
}
