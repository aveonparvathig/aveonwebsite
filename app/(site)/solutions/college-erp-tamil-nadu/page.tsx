import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";
import CTASection from "@/components/sections/CTASection";
import ClientLogosCarousel from "@/components/sections/ClientLogosCarousel";
import RelatedGuides from "@/components/blog/RelatedGuides";

export const metadata: Metadata = {
  title: "College ERP Software in Tamil Nadu",
  description:
    "Campus ERP built in Coimbatore for Tamil Nadu colleges: Anna University, Bharathiar and TNAU workflows, autonomous-college exams, NAAC and AICTE evidence.",
  keywords: [
    "College ERP Tamil Nadu",
    "Anna University affiliated college ERP",
    "Bharathiar University college software",
    "College management software Coimbatore",
    "Campus ERP Coimbatore",
    "NAAC software Tamil Nadu",
    "Autonomous college examination software",
    "Higher education software Tamil Nadu",
  ],
};

const regions = [
  {
    region: "Coimbatore",
    institutions: [
      "Coimbatore Institute of Engineering and Technology (CIET)",
      "PSG College of Arts & Science",
      "PSG iTech",
      "Shri Nehru Maha Vidyalaya College of Arts & Science",
      "Kovai Kalaimagal College of Arts & Science",
    ],
  },
  {
    region: "Pollachi",
    institutions: ["Dr. Mahalingam College of Engineering & Technology (Autonomous)", "Vanavarayar Institute of Agriculture"],
  },
  { region: "Perambalur", institutions: ["Dhanalakshmi Srinivasan Engineering College (Autonomous)"] },
  { region: "Nagapattinam", institutions: ["E.G.S. Pillay Engineering College"] },
  { region: "Tiruchengode", institutions: ["Vidya Vikas College of Engineering & Technology"] },
];

const universities = [
  {
    body: "Anna University (affiliated engineering colleges)",
    handles: "Regulation-wise curricula and credits, CGPA with arrears and reappearance, internal-mark rules, university exam timetables and revaluation windows, university return formats",
  },
  {
    body: "Bharathiar University (arts and science colleges)",
    handles: "Semester patterns with CIA and ESE weightages, elective and skill-course structures, practical and project marks, university result imports",
  },
  {
    body: "Tamil Nadu Agricultural University (agricultural colleges)",
    handles: "Course-credit systems, field practicals and RAWE components, TNAU evaluation and reporting formats",
  },
  {
    body: "Autonomous colleges",
    handles: "The college's own Controller of Examinations end to end: question-paper workflow, hall allocation, evaluation, revaluation, grade sheets and consolidated mark statements",
  },
];

const tnLayer = [
  { item: "Admissions", detail: "TNEA and single-window counselling allotments imported against sanctioned intake; management-quota and lateral-entry tracks; category and community data captured for every statutory return" },
  { item: "Scholarships and schemes", detail: "Post-matric scholarship, First Graduate and other Tamil Nadu government scheme eligibility tracked per student, with disbursement reconciled to fee ledgers" },
  { item: "Fee regulation", detail: "Fee structures maintained as approved by the state fee committee, with concessions and refunds recorded against the approved heads" },
  { item: "Accreditation and approval", detail: "NAAC criteria, NBA SAR tables for engineering programmes, AICTE Extension of Approval data and NIRF formats generated from the same records" },
  { item: "Language and communication", detail: "Student and parent notifications in Tamil and English by SMS, WhatsApp and app" },
];

const faqs = [
  { q: "Do you support Anna University affiliated colleges outside Coimbatore?", a: "Yes. The platform configures Anna University regulations, exam patterns and return formats as settings, and our implementation team travels across Tamil Nadu. Current clients span Coimbatore, Pollachi, Perambalur, Nagapattinam and Tiruchengode." },
  { q: "Can an autonomous college run its Controller of Examinations on Aveon?", a: "Yes. Autonomous colleges such as Dr. Mahalingam College and Dhanalakshmi Srinivasan Engineering College run examination workflows on the platform, from question-paper handling to consolidated mark statements." },
  { q: "How is support delivered in Tamil Nadu?", a: "From Coimbatore. Implementation and training happen on campus; after go-live every institution has a named support contact reachable by phone and email, with on-site visits for examination and admission seasons." },
  { q: "How long does a Tamil Nadu college take to go live?", a: "A single college with reasonable data typically follows a four-week playbook: data migration, configuration of the affiliating-university structure, role-based training and a supervised go-live scheduled away from admissions and university exams." },
];

export default function TamilNaduPage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Solutions", href: "/solutions" },
      { name: "By State", href: "/solutions/by-state" },
      { name: "Tamil Nadu", href: "/solutions/college-erp-tamil-nadu" },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="max-w-[820px]">
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Tamil Nadu
            </span>
            <h1 className="mt-5 text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              College ERP Built in Tamil Nadu, for Tamil Nadu Colleges
            </h1>
            <p className="mt-5 max-w-[680px] text-[17.5px] leading-[1.7] text-navy-700">
              Aveon is headquartered in Coimbatore and has run campus ERP for Tamil Nadu institutions since{" "}
              {siteConfig.stats.foundedYear}. Anna University, Bharathiar University and TNAU workflows, autonomous-college
              examinations and the state's scholarship and fee-committee reporting are configuration, not customisation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-600"
              >
                Get a demo on your university's structure
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center whitespace-nowrap rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600"
              >
                Talk to the Coimbatore team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Named clients by region */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">Tamil Nadu institutions running on Aveon</h2>
          <p className="mt-3 max-w-[760px] text-navy-600">
            Engineering, arts and science, and agricultural colleges, affiliated and autonomous, across the state. The
            institutions below also appear on our client wall and in our testimonials; the logo strip shows more.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <div key={r.region} className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
                <p className="text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">{r.region}</p>
                <ul className="mt-3 space-y-2 text-[15px] text-navy-800">
                  {r.institutions.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <ClientLogosCarousel />
      </section>

      {/* Universities handled */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">Affiliating-university workflows, as configuration</h2>
          <p className="mt-3 max-w-[760px] text-navy-600">
            A college's academic structure follows its affiliating university. Aveon carries these as settings, so a new
            regulation year or a change in exam pattern is a configuration update, not a development request.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-navy-900/10 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-50 text-left text-navy-900">
                  <th className="px-4 py-3 font-bold">Body</th>
                  <th className="px-4 py-3 font-bold">What the platform handles</th>
                </tr>
              </thead>
              <tbody>
                {universities.map((u) => (
                  <tr key={u.body} className="border-t border-navy-900/10 align-top">
                    <td className="px-4 py-3 font-semibold text-navy-900">{u.body}</td>
                    <td className="px-4 py-3 text-navy-700">{u.handles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tamil Nadu compliance layer */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">The Tamil Nadu layer</h2>
          <p className="mt-3 max-w-[760px] text-navy-600">
            Beyond the university, Tamil Nadu colleges report to the state. These are built into the same records.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {tnLayer.map((t) => (
              <div key={t.item} className="rounded-2xl border border-navy-100 p-6">
                <p className="font-bold text-navy-900">{t.item}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-700">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local delivery */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy-900">Delivered from Coimbatore</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-navy-700">
                Implementation, training and go-live happen on your campus, run by a team based in Coimbatore. After
                go-live, each institution has a named support contact by phone and email, and on-site visits are
                scheduled around admission and university-examination seasons. Training continues through Aveon
                Academy for new staff.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-navy-700">
                A single college typically goes live in about four weeks: data migration in week one, configuration of
                the affiliating-university structure in week two, role-based training in week three, and a supervised
                go-live in week four, scheduled away from admissions and exams. The full method is in our{" "}
                <Link href="/blog/erp-migration-best-practices" className="font-semibold text-primary-600">
                  migration playbook
                </Link>
                , and the module-by-module detail is on the{" "}
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

      {/* FAQ */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">Questions from Tamil Nadu colleges</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-lg font-bold text-navy-900">{f.q}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-navy-700">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-navy-600">
            Looking for another state?{" "}
            <Link href="/solutions/by-state" className="font-semibold text-primary-600">
              See where Aveon operates
            </Link>
            .
          </p>
        </div>
      </section>

      <RelatedGuides slugs={["naac-accreditation-checklist", "aicte-approval-compliance-checklist", "erp-migration-best-practices"]} />
      <CTASection />
    </>
  );
}
