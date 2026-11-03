import type { Metadata } from "next";
import Link from "next/link";
import { getStaticPost } from "@/lib/data/static-posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import ArticleMeta from "@/components/blog/ArticleMeta";
import AuthorBox from "@/components/blog/AuthorBox";

const post = getStaticPost("aicte-approval-compliance-checklist")!;

export const metadata: Metadata = {
  title: "AICTE Approval & Compliance Checklist",
  description:
    "How AICTE approval works for technical institutions: the annual Extension of Approval cycle, the norms the Approval Process Handbook checks, mandatory website disclosures, statutory committees, AISHE/NAD/NIRF submissions, the documents to keep ready and the deficiencies that cost institutions.",
  openGraph: { type: "article", publishedTime: post.publishedAt, modifiedTime: post.dateModified },
  keywords: [
    "AICTE approval process",
    "AICTE extension of approval",
    "AICTE compliance checklist",
    "AICTE mandatory disclosure",
    "AICTE approval process handbook",
    "AICTE norms faculty",
  ],
};

const applications = [
  { type: "Extension of Approval (EoA)", who: "Every existing approved institution, every year", notes: "Continuation of all programmes and intake; conditional EoA is issued where deficiencies remain" },
  { type: "New institution", who: "Trusts or societies starting a technical institution", notes: "Land, building, faculty, finance and facilities verified; security deposit and processing fee apply" },
  { type: "Increase or reduction in intake", who: "Institutions changing seats in an approved programme", notes: "Tied to faculty, infrastructure and past admission performance" },
  { type: "New programme or level", who: "Adding a branch, a PG programme, or a second shift", notes: "Separate norms for each programme; NBA status can be a condition" },
  { type: "Closure of programme or institution", who: "Institutions winding down a branch or the whole institution", notes: "Progressive closure protects enrolled students; no-admission status first" },
  { type: "Change of name, site, trust or merger", who: "Institutions restructuring", notes: "Requires fresh documentation and, often, an inspection" },
];

const norms = [
  { area: "Land and built-up area", checks: "Minimum land area by location category, instructional and administrative built-up area per programme, occupancy certificate, building plan approval" },
  { area: "Faculty", checks: "Faculty-student ratio for each programme (the handbook currently prescribes 1:20 for undergraduate engineering; confirm for your programme), qualifications and cadre ratio as per AICTE norms, AICTE Faculty IDs, salary paid through bank, PAN and Aadhaar verification" },
  { area: "Laboratories and equipment", checks: "Programme-wise laboratories with equipment lists and purchase proofs; workshops for engineering; computing facilities" },
  { area: "Computers, software and internet", checks: "Student-to-computer ratio, licensed software, internet bandwidth per student, Wi-Fi coverage" },
  { area: "Library", checks: "Titles and volumes per programme, journal subscriptions, e-resources, reading-room seating, library automation" },
  { area: "Student facilities", checks: "Hostels where applicable, canteen, medical facility, transport, sports, common rooms, barrier-free access" },
  { area: "Safety and compliance", checks: "Fire safety certificate, structural stability certificate, safety provisions in labs, anti-ragging measures" },
  { area: "Finance", checks: "Audited accounts, bank statements, fixed deposits where required, fee structure approved by the state fee committee" },
];

const disclosures = [
  "Name of the institution, trust or society, with registration details and governing body members",
  "Programmes approved with sanctioned intake, year of approval and current accreditation status",
  "Faculty list with AICTE IDs, qualifications, experience, date of joining and pay scale",
  "Fee structure as approved by the state fee regulatory authority, and the refund policy",
  "Admission procedure and eligibility, with the admission calendar",
  "Infrastructure details: land, built-up area, labs, library, computing, hostels",
  "Student results, placement data and pass percentages for recent batches",
  "Grievance Redressal Committee, Internal Complaints Committee and Anti-Ragging Committee members with contact details",
  "Audited financial statements for recent years",
  "AICTE approval letters (EoA) for the current and previous years",
];

const committees = [
  { body: "Anti-Ragging Committee and Squad", basis: "AICTE regulations on curbing the menace of ragging, 2009; affidavits from students and parents each year" },
  { body: "Internal Complaints Committee", basis: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013" },
  { body: "Grievance Redressal Committee (students) and Ombudsperson", basis: "AICTE grievance redressal regulations; UGC regulations for universities" },
  { body: "SC/ST Committee and Minority Cell", basis: "Statutory welfare provisions; equal-opportunity obligations" },
  { body: "Internal Quality Assurance Cell", basis: "Required by NAAC and expected by AICTE for quality processes" },
  { body: "Industry-Institute and Training & Placement Cell", basis: "Internship policy and placement reporting expectations" },
];

const submissions = [
  { what: "AISHE (All India Survey on Higher Education)", when: "Annually", data: "Students, faculty, finance, infrastructure in the Ministry's survey format" },
  { what: "National Academic Depository (NAD) / DigiLocker", when: "After each convocation", data: "Degrees and certificates uploaded for verification" },
  { what: "NIRF", when: "Annually (participation strongly encouraged)", data: "Teaching, research, outcomes, inclusivity data; see the NIRF guide" },
  { what: "AICTE Faculty and Student data on the portal", when: "During EoA", data: "Faculty with IDs and salary proof; admitted students against intake" },
  { what: "Internship and activity points", when: "Per batch", data: "Internships completed under the AICTE internship policy; activity points where applicable" },
  { what: "State fee committee filings", when: "As notified", data: "Fee proposal with audited accounts" },
];

const deficiencies = [
  { d: "Faculty shortfall against the prescribed ratio, or faculty without valid AICTE IDs", fix: "Reconcile the HR list against intake every quarter; create IDs at appointment, not at EoA time" },
  { d: "Salary not paid through bank, or below the applicable scale", fix: "Bank-transfer payroll with scale mapping in the HR system; keep statements by month" },
  { d: "Mandatory disclosure missing, outdated or inconsistent with the portal data", fix: "Generate the disclosure from the same records used for the EoA; publish and date it" },
  { d: "Lab equipment lists without purchase evidence", fix: "Asset register with invoices attached, per lab, maintained in inventory" },
  { d: "Fire, structural or occupancy certificates expired", fix: "A compliance calendar with renewal dates and owners" },
  { d: "Anti-ragging affidavits incomplete", fix: "Collect at admission through the student portal; track completion per batch" },
  { d: "Admissions above sanctioned intake or in unapproved programmes", fix: "Hard caps in the admission module tied to the EoA letter" },
];

export default function AicteChecklist() {
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
            AICTE Approval and Compliance Checklist for Technical Institutions
          </h1>
          <p className="text-lg text-navy-700">
            The annual approval cycle, what the handbook checks, what must be on your website, and the records that
            keep you out of the deficiency list.
          </p>
          <ArticleMeta post={post} />
        </div>

        <div className="prose prose-lg max-w-none text-navy-800">
          <h2>What AICTE approval is</h2>
          <p>
            The All India Council for Technical Education (AICTE) is the statutory body, created by the AICTE Act,
            1987, that regulates technical education in India: engineering and technology, management, pharmacy,
            architecture, hotel management, applied arts and related fields. Any institution offering these
            programmes, other than universities for certain categories, needs AICTE approval to admit students, and
            that approval is not permanent. It is renewed every year through the Extension of Approval (EoA) process,
            governed by the Approval Process Handbook (APH) that AICTE publishes annually on{" "}
            <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">
              aicte-india.org
            </a>
            . The handbook for the coming academic year is the authoritative source for norms, deadlines and fees;
            this guide explains how the system works and what to keep ready, and defers to the handbook for figures
            that change.
          </p>

          <h2>The annual cycle</h2>
          <p>
            AICTE opens its approval portal once a year, usually in the first quarter, with a calendar of deadlines
            for each application type. Institutions file online on a self-disclosure basis: data entered on the portal
            is treated as a sworn declaration, and false information attracts penalties up to withdrawal of
            approval. Scrutiny committees review applications; an Expert Visit Committee may inspect where the data
            raises questions or for new institutions and major changes. The outcome is an EoA letter listing approved
            programmes and intake, sometimes with conditions, and admissions for the next academic year must stay
            within it.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Application type</th>
                  <th className="py-2 pr-4">Who files it</th>
                  <th className="py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((a) => (
                  <tr key={a.type} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{a.type}</td>
                    <td className="py-2 pr-4">{a.who}</td>
                    <td className="py-2">{a.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What the handbook checks</h2>
          <p>
            The norms are organised by area and, within each, by programme and level. The table summarises what is
            verified; the quantities (areas, ratios, counts) are in the current handbook's appendices.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Area</th>
                  <th className="py-2">What is checked</th>
                </tr>
              </thead>
              <tbody>
                {norms.map((n) => (
                  <tr key={n.area} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">{n.area}</td>
                    <td className="py-2">{n.checks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Faculty is where most institutions fall short, and it is the area AICTE verifies most mechanically:
            every faculty member needs an AICTE Faculty ID, the count is compared with sanctioned intake programme by
            programme, and salary is checked against bank records. A faculty list that is accurate on the day of
            filing but not maintained through the year is the most common route to a conditional EoA.
          </p>

          <h2>Mandatory disclosure on the institution website</h2>
          <p>
            AICTE requires every approved institution to publish a mandatory disclosure on its own website in the
            format given in the handbook, and to keep it current. It is public, it is compared with what is filed on
            the portal, and applicants and parents read it. At minimum it covers:
          </p>
          <ul>
            {disclosures.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>

          <h2>Statutory committees and cells</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Body</th>
                  <th className="py-2">Basis</th>
                </tr>
              </thead>
              <tbody>
                {committees.map((c) => (
                  <tr key={c.body} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{c.body}</td>
                    <td className="py-2">{c.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Each committee needs a constitution order, named members with contact details on the website, minutes of
            meetings, and a record of cases handled. Peer teams, AICTE visits and courts all ask for the same four
            things.
          </p>

          <h2>Recurring data submissions</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Submission</th>
                  <th className="py-2 pr-4">When</th>
                  <th className="py-2">Data</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.what} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{s.what}</td>
                    <td className="py-2 pr-4 whitespace-nowrap">{s.when}</td>
                    <td className="py-2">{s.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Accreditation and approval</h2>
          <p>
            AICTE approval and NBA accreditation are different things: approval is permission to run a programme;
            accreditation is an assessment of its quality and outcomes. AICTE has progressively tied the two,
            encouraging and in some cases requiring institutions of a certain age to apply for NBA accreditation of
            their programmes, and using accreditation status in decisions on intake and new programmes. Check the
            accreditation clause in the current handbook for what applies to your institution, and read our{" "}
            <Link href="/blog/obe-implementation-guide">OBE implementation guide</Link> for what NBA's outcome-based
            assessment requires.
          </p>

          <h2>Document checklist</h2>
          <ul>
            <li>Trust or society registration, bye-laws and list of governing body members</li>
            <li>Land documents, land-use conversion, building plan approval, occupancy and structural stability certificates</li>
            <li>Fire safety certificate and lab safety provisions</li>
            <li>Programme-wise faculty list with AICTE IDs, qualifications, appointment orders and bank salary statements</li>
            <li>Programme-wise laboratory and equipment lists with invoices</li>
            <li>Library holdings, journal and e-resource subscriptions, automation details</li>
            <li>Computing inventory, software licences, bandwidth agreement</li>
            <li>Audited financial statements and bank or fixed-deposit certificates as required</li>
            <li>Previous EoA letters, affiliation letters from the university, state fee committee orders</li>
            <li>Admission records against sanctioned intake, with category-wise data</li>
            <li>Committee constitution orders, minutes and case registers</li>
            <li>Current mandatory disclosure, dated, as published on the website</li>
          </ul>

          <h2>The deficiencies that cost institutions</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Deficiency</th>
                  <th className="py-2">How to prevent it</th>
                </tr>
              </thead>
              <tbody>
                {deficiencies.map((d) => (
                  <tr key={d.d} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{d.d}</td>
                    <td className="py-2">{d.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>A compliance calendar that works</h2>
          <ol>
            <li>
              <strong>Quarterly:</strong> reconcile faculty against intake per programme; renew any certificate expiring
              in the next six months; update the mandatory disclosure.
            </li>
            <li>
              <strong>At admission:</strong> enforce intake caps from the EoA letter; collect anti-ragging affidavits;
              capture category and domicile data for AISHE and NIRF.
            </li>
            <li>
              <strong>Monthly:</strong> payroll through bank with scale mapping; committee meetings minuted.
            </li>
            <li>
              <strong>After convocation:</strong> upload degrees to NAD.
            </li>
            <li>
              <strong>Before the portal opens:</strong> dry-run the EoA data from your records; compare with last
              year's filing and the website disclosure; fix inconsistencies before filing, not after a query.
            </li>
          </ol>

          <h2>How a campus ERP keeps you compliant</h2>
          <p>
            AICTE, NAAC, NBA, NIRF and AISHE all draw on the same institutional records in different formats. When
            faculty appointments carry AICTE IDs and pay scales, payroll runs through the bank from the HR module,
            admissions are capped by the approved intake, assets sit in an inventory with invoices attached, and
            committees keep their minutes in the system, the EoA filing and the mandatory disclosure are generated
            from live data instead of reconstructed each spring. Aveon's accreditation module covers AICTE alongside
            NAAC, NBA and NIRF; see the <Link href="/products/iqac-naac-nba/aicte">AICTE compliance</Link> page, and
            the related <Link href="/blog/naac-accreditation-checklist">NAAC checklist</Link> and{" "}
            <Link href="/blog/nirf-ranking-parameters-explained">NIRF parameters guide</Link>.
          </p>

          <h2>Sources</h2>
          <ul>
            <li>
              <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">
                AICTE: Approval Process Handbook, regulations and notifications
              </a>
            </li>
            <li>
              <a href="https://aishe.gov.in/" target="_blank" rel="noopener noreferrer">
                All India Survey on Higher Education
              </a>
            </li>
            <li>
              <a href="https://nad.gov.in/" target="_blank" rel="noopener noreferrer">
                National Academic Depository
              </a>
            </li>
          </ul>

          <div className="mt-12 rounded-lg bg-primary-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-900">Generate your EoA data from live records</h3>
            <p className="mb-6 text-navy-700">
              See faculty, intake, assets and committees mapped to AICTE's filing format in one system.
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
