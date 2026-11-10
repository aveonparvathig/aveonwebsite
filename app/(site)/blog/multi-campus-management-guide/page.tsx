import { baseOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { getStaticPost } from "@/lib/data/static-posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import ArticleMeta from "@/components/blog/ArticleMeta";
import AuthorBox from "@/components/blog/AuthorBox";

const post = getStaticPost("multi-campus-management-guide")!;

export const metadata: Metadata = {
  title: "Multi-Campus Management Guide for Trusts",
  description:
    "How education trusts run several colleges and schools on one platform: operating models, what to centralise, data architecture, compliance and rollout.",
  openGraph: { ...baseOpenGraph, type: "article", publishedTime: post.publishedAt, modifiedTime: post.dateModified },
  keywords: [
    "multi-campus management",
    "education trust ERP",
    "group of institutions management software",
    "multi-institution ERP India",
    "centralised campus management",
    "multi-campus university ERP",
  ],
};

const models = [
  { model: "Centralised", how: "One head-office team runs admissions, finance, HR and IT for every institution; campuses execute", suits: "Groups with similar institutions (several schools, or several colleges under one university), strong central leadership", risk: "Slow response to campus-level needs; academic staff feel managed from afar" },
  { model: "Federated", how: "Each institution runs itself on the shared platform; the trust sets policies, sees consolidated data and intervenes by exception", suits: "Mixed groups: a university, affiliated colleges and schools with different regulators", risk: "Standards drift between campuses unless the policy layer is real" },
  { model: "Hybrid", how: "Finance, HR, procurement and IT centralised; academics, examinations and student services local", suits: "Most Indian trusts with three or more institutions", risk: "Requires clear ownership of every function; ambiguity shows up as duplicated work" },
];

const functions = [
  { fn: "Chart of accounts and fee heads", where: "Centralise", why: "Consolidated finance is impossible if every campus names fee heads differently" },
  { fn: "Fee collection and receipts", where: "Local execution, central visibility", why: "Collection happens on campus; dues and daily collection roll up to the trust" },
  { fn: "Admissions enquiry handling", where: "Either", why: "A shared call centre works for schools; college counselling is usually local" },
  { fn: "Academic structure, timetables, attendance", where: "Local", why: "Each institution follows its own board or affiliating university" },
  { fn: "Examinations and results", where: "Local", why: "Regulations, patterns and revaluation rules differ by university" },
  { fn: "OBE and accreditation data", where: "Local data, central templates", why: "Each institution files its own NAAC, NBA, AICTE and NIRF; the trust standardises the method" },
  { fn: "HR policies, pay scales, appraisal", where: "Centralise", why: "Staff mobility between institutions and consistent compliance depend on one HR record" },
  { fn: "Payroll", where: "Centralise", why: "One run, one set of statutory filings, campus-wise cost centres" },
  { fn: "Procurement and inventory", where: "Centralise purchasing, local stores", why: "Volume pricing and audit control at the trust; issue and stock at the campus" },
  { fn: "IT, hosting, security, backups", where: "Centralise", why: "One platform, one access policy, one audit log" },
  { fn: "Placement and alumni", where: "Either", why: "Group-level drives attract larger recruiters; relationships stay local" },
  { fn: "Reporting and dashboards", where: "Central by design", why: "The reason the group moved to one platform" },
];

const kpis = [
  { kpi: "Enrolment against sanctioned intake", per: "Institution, programme", cadence: "Weekly during admissions" },
  { kpi: "Fee billed, collected, outstanding", per: "Institution, programme, batch", cadence: "Daily" },
  { kpi: "Attendance shortfall count", per: "Institution, department", cadence: "Weekly" },
  { kpi: "Faculty-student ratio and vacancies", per: "Institution, department", cadence: "Monthly" },
  { kpi: "Results and pass percentage", per: "Institution, programme", cadence: "Per exam cycle" },
  { kpi: "Placement and higher-studies rate", per: "Institution, programme", cadence: "Per batch" },
  { kpi: "Accreditation readiness: metrics with evidence", per: "Institution", cadence: "Quarterly" },
  { kpi: "Operating cost per student", per: "Institution", cadence: "Quarterly" },
];

const rollout = [
  { step: "Pick the pilot", detail: "One institution with clean data, a supportive principal and no accreditation visit in the next six months. Not the largest, not the most political." },
  { step: "Build the group template", detail: "Chart of accounts, fee-head taxonomy, HR policies, role definitions, report formats. Decide what is locked by the trust and what each campus may configure." },
  { step: "Go live at the pilot", detail: "Follow the standard migration playbook. Measure the five KPIs before and after; fix the template, not the pilot." },
  { step: "Replicate in waves", detail: "Two or three institutions per wave, same template, local configuration only where the regulator differs. Each wave gets its own quiet window." },
  { step: "Switch on consolidation", detail: "Group dashboards and consolidated finance come live once two or more institutions run on the template; before that they only show one campus." },
  { step: "Institutionalise", detail: "A small group IT and quality cell owns the template, releases changes on a calendar, and runs the quarterly readiness review." },
];

const faqs = [
  { q: "Do all institutions in a group have to use the same modules?", a: "No. A school and an engineering college under the same trust need different academic modules and the same finance, HR and reporting layer. The platform should let each institution switch on what it uses while the shared functions stay common." },
  { q: "Can a group platform handle different universities and boards?", a: "It has to. Each college follows its affiliating university's regulations, exam patterns and result formats, and each school its board. These are institution-level configuration on one platform, not reasons for separate systems." },
  { q: "Does centralising data change who files accreditation?", a: "No. Each institution files its own NAAC, NBA, AICTE and NIRF submissions. What changes is that the trust can standardise the method, see readiness across institutions, and reuse evidence formats, so the second institution's cycle is easier than the first." },
];

export default function MultiCampusGuide() {
  const jsonLd = [
    articleJsonLd(post),
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Blog", href: "/blog" },
      { name: post.title, href: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <article className="min-h-dvh bg-white py-16 sm:py-20 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            ← Back to Blog
          </Link>
          <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-extrabold leading-tight text-navy-900">
            Multi-Campus Management: Running Several Institutions on One Platform
          </h1>
          <p className="text-lg text-navy-700">
            For education trusts, groups and multi-campus universities: how to get consolidated control without
            taking autonomy away from the campuses that need it.
          </p>
          <ArticleMeta post={post} />
        </div>

        <div className="prose prose-lg max-w-none text-navy-800">
          <h2>What multi-campus management means</h2>
          <p>
            Multi-campus management is the practice of running two or more institutions, or two or more campuses
            of one institution, on a single platform and a single set of policies, so that the governing body sees
            consolidated finance, enrolment, staffing and quality data while each campus keeps the academic
            structure its regulator requires. In India the typical case is an educational trust running an
            engineering college, an arts and science college, a polytechnic and two schools, each under a different
            university or board, each with its own principal, and each, until now, with its own software. The
            problem is not that the institutions are different; it is that the trust cannot see across them.
          </p>

          <h2>Three operating models</h2>
          <p>
            Before any software decision, a group has to decide how it wants to operate. Most settle on a hybrid.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Model</th>
                  <th className="py-2 pr-4">How it works</th>
                  <th className="py-2 pr-4">Suits</th>
                  <th className="py-2">Main risk</th>
                </tr>
              </thead>
              <tbody>
                {models.map((m) => (
                  <tr key={m.model} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">{m.model}</td>
                    <td className="py-2 pr-4">{m.how}</td>
                    <td className="py-2 pr-4">{m.suits}</td>
                    <td className="py-2">{m.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What to centralise and what to keep local</h2>
          <p>
            The hybrid model only works if every function has an explicit owner. The table below is the split most
            groups arrive at; the reasoning column matters more than the answer, because your group may differ.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Function</th>
                  <th className="py-2 pr-4">Where</th>
                  <th className="py-2">Why</th>
                </tr>
              </thead>
              <tbody>
                {functions.map((f) => (
                  <tr key={f.fn} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{f.fn}</td>
                    <td className="py-2 pr-4 whitespace-nowrap">{f.where}</td>
                    <td className="py-2">{f.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The data architecture that makes consolidation work</h2>
          <ul>
            <li>
              <strong>One database, institution as a dimension.</strong> Every record (student, staff, fee receipt,
              asset, result) carries the institution and campus it belongs to. Consolidation is then a filter, not an
              integration.
            </li>
            <li>
              <strong>Shared master data where it must be shared.</strong> Chart of accounts, fee-head taxonomy,
              designations and pay scales, document types. Local master data where the regulator differs:
              programmes, regulations, exam patterns, grading.
            </li>
            <li>
              <strong>Role-based access by institution.</strong> A principal sees their institution; a trust officer
              sees all; a shared-services clerk sees their function across institutions and nothing else.
            </li>
            <li>
              <strong>Staff mobility without re-entry.</strong> One HR record per person, with assignments to
              institutions over time, so a faculty member moving between colleges keeps their history and the group
              keeps its headcount honest.
            </li>
            <li>
              <strong>Consolidated reporting from the same records.</strong> Group dashboards read the transactional
              data directly. There is no month-end extract and no reconciliation between a group spreadsheet and the
              campus systems.
            </li>
            <li>
              <strong>One audit log.</strong> Every change, by whom, when, at which institution.
            </li>
          </ul>

          <h2>Compliance at scale</h2>
          <p>
            Consolidation does not change who files what. Each college still files its own NAAC, NBA, AICTE and
            NIRF submissions; each school still reports to its board. What a group platform changes is the method:
            the same metric mapping, the same evidence formats and the same data discipline apply everywhere, and
            the trust can see accreditation readiness across institutions on one screen. The second and third
            institutions' cycles become repetitions of the first. The{" "}
            <Link href="/blog/naac-accreditation-checklist">NAAC checklist</Link>,{" "}
            <Link href="/blog/aicte-approval-compliance-checklist">AICTE checklist</Link> and{" "}
            <Link href="/blog/nirf-ranking-parameters-explained">NIRF guide</Link> describe the data each body needs;
            a group should capture it once, in the same shape, for all.
          </p>

          <h2>The group dashboard</h2>
          <p>
            A trust dashboard should answer, in one view, the questions a governing body actually asks. Eight KPIs
            cover most of them.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">KPI</th>
                  <th className="py-2 pr-4">Broken down by</th>
                  <th className="py-2">Refresh</th>
                </tr>
              </thead>
              <tbody>
                {kpis.map((k) => (
                  <tr key={k.kpi} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{k.kpi}</td>
                    <td className="py-2 pr-4">{k.per}</td>
                    <td className="py-2 whitespace-nowrap">{k.cadence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>A rollout sequence for groups</h2>
          <ol>
            {rollout.map((r) => (
              <li key={r.step}>
                <strong>{r.step}.</strong> {r.detail}
              </li>
            ))}
          </ol>
          <p>
            The single-institution mechanics of each wave are in the{" "}
            <Link href="/blog/erp-migration-best-practices">ERP migration playbook</Link>.
          </p>

          <h2>Pitfalls particular to groups</h2>
          <ul>
            <li>
              <strong>Centralising academics.</strong> A head office that tries to standardise timetables or exam
              rules across different universities creates work and resentment. Standardise finance, HR and data;
              leave academics to the regulator and the principal.
            </li>
            <li>
              <strong>No template owner.</strong> If each campus configures freely, consolidation breaks within a
              year. The trust needs a small cell that owns the shared configuration.
            </li>
            <li>
              <strong>Starting with the hardest institution.</strong> The flagship college with the most history and
              the strongest opinions is the worst pilot and the best third wave.
            </li>
            <li>
              <strong>Dashboards before data discipline.</strong> A group dashboard built on inconsistent fee heads
              shows confident, wrong numbers.
            </li>
            <li>
              <strong>Ignoring the schools.</strong> Schools have the simplest academics and the most parent
              interaction; they are often the quickest win and the best proof for the colleges.
            </li>
          </ul>

          <h2>Frequently asked questions</h2>
          {faqs.map((f) => (
            <section key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </section>
          ))}

          <h2>How Aveon runs multi-institution groups</h2>
          <p>
            Aveon's platform treats the institution and campus as dimensions of every record, with shared master
            data for finance and HR and institution-level configuration for academics and examinations. Trusts get
            consolidated dashboards and one audit log; principals keep control of their academic structure. See the{" "}
            <Link href="/solutions/multi-campus-management">multi-campus management</Link> solution and the{" "}
            <Link href="/products/university-erp">University ERP</Link> overview, or start with{" "}
            <Link href="/blog/what-is-campus-erp">what a campus ERP is</Link>.
          </p>

          <div className="mt-12 rounded-lg bg-primary-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-900">See one platform across your institutions</h3>
            <p className="mb-6 text-navy-700">
              A demo configured for your group: consolidated finance and dashboards, with each institution's own
              academic structure.
            </p>
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-6 py-3 font-bold text-white hover:bg-primary-600"
            >
              Request a demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
        <AuthorBox />
      </div>
    </article>
  );
}
