import { baseOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { getStaticPost } from "@/lib/data/static-posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import ArticleMeta from "@/components/blog/ArticleMeta";
import AuthorBox from "@/components/blog/AuthorBox";

const post = getStaticPost("erp-migration-best-practices")!;

export const metadata: Metadata = {
  title: "ERP Migration Best Practices for Campuses",
  description:
    "A phase-by-phase playbook for migrating a college to a new campus ERP: data audit, cleansing, mapping, parallel runs, cut-over, training and go-live.",
  openGraph: { ...baseOpenGraph, type: "article", publishedTime: post.publishedAt, modifiedTime: post.dateModified },
  keywords: [
    "ERP migration",
    "campus ERP data migration",
    "college ERP implementation",
    "ERP cut-over plan",
    "legacy system migration higher education",
  ],
};

const dataSets = [
  { set: "Students", source: "Admission registers, old ERP, spreadsheets", checks: "Duplicate records, missing category/community, inconsistent programme codes, dropouts still marked active" },
  { set: "Programmes & regulations", source: "University syllabi, Board of Studies minutes", checks: "Regulation year per batch, credit structures, elective groups, arrear rules" },
  { set: "Marks & results", source: "COE records, university mark statements", checks: "Semester-wise completeness, revaluation outcomes, grade-to-mark conversions" },
  { set: "Fees", source: "Accounts package, receipt books", checks: "Opening balances per student, concessions, scholarship adjustments, refunds" },
  { set: "Staff & payroll", source: "HR files, payroll software", checks: "Appointment dates, pay scales, leave balances, statutory IDs" },
  { set: "Library", source: "Existing ILMS or accession register", checks: "Accession number gaps, lost/withdrawn books, member mapping" },
  { set: "Hostel", source: "Warden registers", checks: "Current occupancy, deposits, mess dues" },
];

const timeline = [
  { phase: "Phase 0 · Decide and plan", weeks: "Weeks 1–2", items: ["Name an executive sponsor and a project lead with real authority", "Form the core team: office superintendent, COE, accounts, HR, library, one HOD, IT", "Freeze scope: which modules go live first, which wait", "Pick the go-live window (never admissions or exam season)"] },
  { phase: "Phase 1 · Audit and cleanse", weeks: "Weeks 2–5", items: ["Inventory every data source and owner (table above)", "Run duplicate and completeness reports; assign cleansing to data owners, not IT", "Agree master codes: programmes, departments, fee heads, categories", "Decide the history cut-off: how many past batches to migrate in full"] },
  { phase: "Phase 2 · Map and migrate", weeks: "Weeks 4–7", items: ["Vendor supplies templates; owners fill from cleansed data", "Trial load into a staging environment; reconcile counts and totals", "Fix mapping errors at source, not in the new system", "Second trial load; sign-off by each data owner"] },
  { phase: "Phase 3 · Configure and train", weeks: "Weeks 6–8", items: ["Configure academic structure, workflows, approvals, fee rules, templates", "Role-based training on real (staging) data: each office on its own screens", "Super-users per department trained first; they train the rest", "Write one-page quick guides for the ten most common tasks"] },
  { phase: "Phase 4 · Parallel run and cut-over", weeks: "Weeks 8–10", items: ["Run one real cycle in both systems (a fee collection week, an internal exam)", "Compare outputs line by line; fix configuration gaps", "Final data load, freeze the old system to read-only", "Go-live with the vendor team on campus for the first week"] },
  { phase: "Phase 5 · Stabilise", weeks: "Days 1–90", items: ["Daily stand-up for the first two weeks; log every issue", "Weekly review for the first quarter; close configuration changes", "Retire the old system only after one full academic cycle is reconciled", "Collect feedback and plan module additions"] },
];

const pitfalls = [
  { p: "Migrating dirty data because 'we will clean it later'", fix: "Later never comes. Every duplicate becomes two fee ledgers and two hall tickets." },
  { p: "Letting IT own the migration", fix: "IT runs the tools; the office, COE and accounts own the data and sign off on it." },
  { p: "Going live during admissions or exams", fix: "Choose the quietest six weeks in the calendar and protect them." },
  { p: "Training only once, only on demo data", fix: "Train each role on the institution's own data, then again a week after go-live." },
  { p: "Customising before using", fix: "Run the standard workflow for one cycle; most 'must-have' customisations disappear." },
  { p: "Switching off the old system on go-live day", fix: "Keep it read-only for a full academic cycle to resolve disputes." },
  { p: "No one owns the issue log", fix: "One person triages daily; unresolved items escalate to the sponsor weekly." },
];

export default function ERPMigrationGuide() {
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
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          ← Back to Blog
        </Link>

        <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-extrabold leading-tight text-navy-900">
          ERP Migration Best Practices for Colleges and Universities
        </h1>
        <p className="text-lg text-navy-700">
          A phase-by-phase playbook for moving to a new campus management system without disrupting admissions,
          exams or fee collection.
        </p>
        <ArticleMeta post={post} />

        <div className="prose prose-lg max-w-none text-navy-800 mt-12">
          <h2>Why campus ERP migrations fail</h2>
          <p>
            A campus ERP migration moves every student record, mark, fee ledger, staff file and library accession an
            institution has into a new system, and then asks every office to work differently from the next morning.
            When it goes well, the institution gains one source of truth and reports that generate themselves. When it
            goes badly, it is almost never because of the software. It is because the data was dirty, the go-live date
            collided with admissions, the people who use the system were trained last, or the old system was switched
            off before anyone could reconcile a dispute. This guide is organised around avoiding exactly those
            failures.
          </p>

          <h2>Before you start: three decisions</h2>
          <ol>
            <li>
              <strong>Who is the sponsor?</strong> Migration touches every department, so the sponsor must be able to
              settle disputes between them: the principal, registrar or a trust-level officer. The project lead reports
              to the sponsor, not to IT.
            </li>
            <li>
              <strong>What goes live first?</strong> A phased rollout (student records, attendance and fees first; COE,
              hostel, library and payroll next) is safer for most colleges than a big bang. Universities with a hard
              university-return deadline sometimes need the reverse.
            </li>
            <li>
              <strong>When is the quiet window?</strong> Find the six weeks furthest from admissions, semester exams
              and university returns. Everything else is scheduled backwards from that date.
            </li>
          </ol>

          <h2>Phase 1: the data audit</h2>
          <p>
            Every migration is really a data-cleansing project with software attached. Before any template is filled,
            list each data set, where it currently lives, who owns it, and what is wrong with it. The table below is
            the audit most Indian colleges end up doing.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Data set</th>
                  <th className="py-2 pr-4">Usual sources</th>
                  <th className="py-2">What to check before migrating</th>
                </tr>
              </thead>
              <tbody>
                {dataSets.map((d) => (
                  <tr key={d.set} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">{d.set}</td>
                    <td className="py-2 pr-4">{d.source}</td>
                    <td className="py-2">{d.checks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Two rules make the audit work. The owner of each data set is the office that uses it, never IT, because
            only the office can tell whether a record is wrong. And the history cut-off is decided up front: migrate
            current batches in full, migrate the last few batches' results and fee ledgers, and archive anything older
            as read-only exports rather than forcing it through the new system's validations.
          </p>

          <h2>Phase 2: mapping and trial loads</h2>
          <p>
            The vendor supplies migration templates; the data owners fill them from cleansed data; the vendor loads
            them into a staging copy of the new system. The first trial load always finds mapping problems: programme
            codes that differ between the COE and the office, fee heads that were merged years ago, categories spelled
            three ways. Fix these at source and reload. Do not accept a migration until each owner has reconciled
            their own counts: number of active students by programme, total fee outstanding, total books on shelf,
            total staff on payroll. A second trial load that reconciles to the rupee is the sign-off point.
          </p>

          <h2>Phase 3: configuration and training</h2>
          <p>
            Configuration turns the vendor's standard product into your institution: academic structure, regulations,
            approval workflows, fee rules, certificate templates, roles and permissions. Resist customisation during
            this phase; run the standard workflow for one cycle first, and most requested changes turn out to be habits
            rather than requirements.
          </p>
          <p>
            Train by role, on your own staging data, in this order: super-users from each office first (they become
            the in-house help desk), then every user of that office on their own screens, then a short refresher the
            week after go-live. A one-page quick guide for each office's ten most common tasks does more than a
            200-page manual. See how Aveon structures this in{" "}
            <Link href="/blog/erp-implementation-30-days">Going live in 30 days</Link>.
          </p>

          <h2>Phase 4: parallel run and cut-over</h2>
          <p>
            Before the switch, run one real activity in both systems: a week of fee collection, an internal assessment,
            a payroll cycle. Compare outputs line by line. Differences are either configuration gaps (fix them) or
            errors in the old process (document them). Then do the final data load, set the old system to read-only,
            and go live with the vendor's team on campus for the first week. Nothing reassures an office like a person
            standing next to them on day one.
          </p>

          <h2>The timeline at a glance</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Phase</th>
                  <th className="py-2 pr-4">When</th>
                  <th className="py-2">Key activities</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((t) => (
                  <tr key={t.phase} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">{t.phase}</td>
                    <td className="py-2 pr-4 whitespace-nowrap">{t.weeks}</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4">
                        {t.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Phases overlap: configuration starts while cleansing finishes, and training runs on the second trial load.
            A single college with reasonable data lands at eight to ten weeks from decision to go-live; a university
            with multiple campuses and several legacy systems should plan for a semester.
          </p>

          <h2>The first 90 days after go-live</h2>
          <ul>
            <li>
              <strong>Weeks 1–2:</strong> daily 15-minute stand-up with the super-users and the vendor; one issue log,
              one owner, every item closed or escalated.
            </li>
            <li>
              <strong>Weeks 3–6:</strong> weekly review; freeze further configuration changes except for defects;
              publish the quick guides on the portal.
            </li>
            <li>
              <strong>Weeks 7–12:</strong> first university return or fee-collection cycle from the new system,
              reconciled against the old one; plan the next modules.
            </li>
            <li>
              <strong>After one full academic cycle:</strong> retire the old system. Until then it stays read-only for
              disputes and audits.
            </li>
          </ul>

          <h2>Pitfalls and how to avoid them</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Pitfall</th>
                  <th className="py-2">What to do instead</th>
                </tr>
              </thead>
              <tbody>
                {pitfalls.map((p) => (
                  <tr key={p.p} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{p.p}</td>
                    <td className="py-2">{p.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Migration checklist</h2>
          <ul>
            <li>Sponsor named; project lead reports to the sponsor</li>
            <li>Go-live window chosen away from admissions, exams and returns</li>
            <li>Data audit table completed with an owner per data set</li>
            <li>Master codes agreed across office, COE and accounts</li>
            <li>History cut-off decided and archived exports taken</li>
            <li>Two trial loads reconciled and signed off by owners</li>
            <li>Roles, workflows and templates configured; customisation deferred</li>
            <li>Super-users trained, then every role on staging data</li>
            <li>Parallel run completed and differences resolved</li>
            <li>Old system read-only; vendor on campus for week one</li>
            <li>Issue log with one owner; daily stand-up for two weeks</li>
          </ul>

          <h2>Related reading</h2>
          <ul>
            <li>
              <Link href="/blog/what-is-campus-erp">What is a campus ERP?</Link>
            </li>
            <li>
              <Link href="/comparisons">How to compare campus ERP vendors</Link>
            </li>
            <li>
              <Link href="/blog/benefits-unified-campus-management">The business case for unified campus management</Link>
            </li>
          </ul>

          <div className="mt-12 rounded-lg bg-primary-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-900">Plan your migration with people who have done it</h3>
            <p className="mb-6 text-navy-700">
              Aveon's implementation team runs the data audit with your offices and stays on campus through go-live.
            </p>
            <Link
              href="/contact#demo"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-6 py-3 font-bold text-white hover:bg-primary-600"
            >
              Schedule a consultation
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
