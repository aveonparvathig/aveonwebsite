import type { Metadata } from "next";
import Link from "next/link";
import { getStaticPost } from "@/lib/data/static-posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import ArticleMeta from "@/components/blog/ArticleMeta";
import AuthorBox from "@/components/blog/AuthorBox";

const post = getStaticPost("naac-accreditation-checklist")!;

export const metadata: Metadata = {
  title: "NAAC Accreditation Checklist | Compliance",
  description:
    "NAAC accreditation checklist for Indian colleges: the seven criteria and their weightages, the IIQA, SSR, DVV and peer-team process, grading bands, a 12-month preparation timeline and the documents to keep ready.",
  openGraph: { type: "article", publishedTime: post.publishedAt, modifiedTime: post.dateModified },
  keywords: [
    "NAAC accreditation",
    "NAAC checklist",
    "NAAC criteria weightage",
    "SSR NAAC",
    "DVV NAAC",
    "NAAC compliance",
  ],
};

const criteria = [
  {
    num: 1,
    title: "Curricular Aspects",
    college: 100,
    university: 150,
    checklist: [
      "Programme and course outcomes (POs, PSOs, COs) published for every programme",
      "Academic calendar, Board of Studies minutes and curriculum feedback records",
      "Evidence of curriculum enrichment: value-added, add-on and skill courses",
      "Cross-cutting issues (gender, environment, ethics, human values) mapped to courses",
      "Feedback from students, teachers, employers and alumni, with action taken",
    ],
  },
  {
    num: 2,
    title: "Teaching-Learning and Evaluation",
    college: 350,
    university: 200,
    checklist: [
      "Admission data by category and programme, with sanctioned-strength comparison",
      "Student-teacher ratio, faculty qualifications (PhD, NET/SET) and experience",
      "Student-centric methods: experiential, participative and problem-solving learning",
      "ICT-enabled teaching evidence (LMS logs, e-content, smart classrooms)",
      "Internal assessment mechanism, grievance redressal and result analysis",
      "CO and PO attainment reports; pass-percentage trends; Student Satisfaction Survey",
    ],
  },
  {
    num: 3,
    title: "Research, Innovations and Extension",
    college: 110,
    university: 250,
    checklist: [
      "Research grants, seed money and sponsored projects with sanction letters",
      "Publications in UGC-CARE / Scopus / Web of Science journals, books and chapters",
      "Patents, consultancy income and incubation or IPR activities",
      "Extension and outreach programmes with participation counts and photographs",
      "MoUs and collaborations with evidence of activities actually carried out",
    ],
  },
  {
    num: 4,
    title: "Infrastructure and Learning Resources",
    college: 100,
    university: 100,
    checklist: [
      "Classrooms, labs, seminar halls and sports facilities with utilisation records",
      "Library automation (ILMS), e-resources, annual expenditure and usage statistics",
      "IT infrastructure: bandwidth, student-computer ratio, Wi-Fi coverage",
      "Audited expenditure on infrastructure and maintenance for the last five years",
      "Maintenance policies and procedures for physical and academic facilities",
    ],
  },
  {
    num: 5,
    title: "Student Support and Progression",
    college: 140,
    university: 100,
    checklist: [
      "Scholarships and freeships from government and institution, by year",
      "Capacity-building: soft skills, language, ICT, yoga and life-skills programmes",
      "Placement, higher-education progression and competitive-exam qualifiers",
      "Student council, representation in committees and grievance redressal",
      "Alumni association registration, contributions and engagement activities",
    ],
  },
  {
    num: 6,
    title: "Governance, Leadership and Management",
    college: 100,
    university: 100,
    checklist: [
      "Vision, mission, strategic plan and organisational structure with evidence of deployment",
      "E-governance in administration, finance, admissions and examinations",
      "Welfare measures, performance appraisal and faculty development participation",
      "Audited financial statements, mobilisation of funds and internal/external audits",
      "IQAC composition, minutes, Annual Quality Assurance Reports (AQAR) and quality initiatives",
    ],
  },
  {
    num: 7,
    title: "Institutional Values and Best Practices",
    college: 100,
    university: 100,
    checklist: [
      "Gender-equity, inclusion and divyangjan-friendly facilities",
      "Energy, water and waste management; green audit and environment audit reports",
      "Constitutional obligations, code of conduct and national/international day celebrations",
      "Two documented best practices in the NAAC format",
      "Institutional distinctiveness statement with supporting evidence",
    ],
  },
];

const grades = [
  { cgpa: "3.51 – 4.00", grade: "A++", status: "Accredited" },
  { cgpa: "3.26 – 3.50", grade: "A+", status: "Accredited" },
  { cgpa: "3.01 – 3.25", grade: "A", status: "Accredited" },
  { cgpa: "2.76 – 3.00", grade: "B++", status: "Accredited" },
  { cgpa: "2.51 – 2.75", grade: "B+", status: "Accredited" },
  { cgpa: "2.01 – 2.50", grade: "B", status: "Accredited" },
  { cgpa: "1.51 – 2.00", grade: "C", status: "Accredited" },
  { cgpa: "≤ 1.50", grade: "D", status: "Not accredited" },
];

const timeline = [
  { when: "12 months before", what: "Constitute or reactivate the IQAC. Assign a criterion owner for each of the seven criteria. Start collecting five years of data into one system." },
  { when: "9 months before", what: "Run an internal gap analysis against every Key Indicator. Fix data that does not exist yet (feedback records, MoU activity logs, audits)." },
  { when: "6 months before", what: "Draft the SSR qualitative narratives. Commission green, energy and academic audits. Register on the NAAC portal and prepare the IIQA." },
  { when: "3 months before", what: "Submit the IIQA. Freeze the Extended Profile numbers and reconcile every quantitative metric with supporting documents." },
  { when: "SSR window", what: "Upload the SSR within the allowed period after IIQA acceptance, with every data template and supporting document linked." },
  { when: "After SSR", what: "Respond to DVV clarifications within the deadline, publish the student list for the Student Satisfaction Survey, and prepare for the peer-team visit." },
];

export default function NAACChecklist() {
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
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            ← Back to Blog
          </Link>
          <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-extrabold leading-tight text-navy-900">
            NAAC Accreditation Checklist: Criteria, Weightages, Process and Documents
          </h1>
          <p className="text-lg text-navy-700">
            A practical, criterion-by-criterion checklist for colleges and universities preparing for NAAC assessment.
          </p>
          <ArticleMeta post={post} />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-navy-800">
          <h2>What is NAAC accreditation?</h2>
          <p>
            The National Assessment and Accreditation Council (NAAC) is an autonomous institution of the University
            Grants Commission (UGC), established in 1994 and headquartered in Bengaluru. It assesses and accredits
            higher education institutions in India against a published framework of seven criteria. Accreditation is
            valid for five years, after which an institution applies for its next cycle. NAAC grades, or the absence of
            one, affect UGC and state funding eligibility, autonomy applications, NIRF perception scores and, increasingly,
            parents' admission decisions.
          </p>

          <h2>Which framework applies to you?</h2>
          <p>
            Since 2017 NAAC has assessed institutions under the Revised Accreditation Framework (RAF): seven criteria
            broken into Key Indicators and metrics, with an institution-type-specific manual (Affiliated/Constituent
            Colleges, Autonomous Colleges, Universities, and specialised institutions). In 2024 NAAC announced a
            transition to <strong>Binary Accreditation</strong> (Accredited / Not Accredited) followed by
            <strong> Maturity-Based Graded Levels</strong> (Level 1 to Level 5) in place of the letter grades. The
            metrics, data templates and transition dates are published by NAAC, and the manual that applies to your
            institution is the one in force on the date you submit your IIQA. Before you plan, download the current
            manual for your institution type from{" "}
            <a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer">
              naac.gov.in
            </a>{" "}
            and confirm which framework your cycle falls under. The checklist below is built on the RAF criteria, which
            continue to define what evidence an institution must be able to produce.
          </p>

          <h2>Eligibility and cycles</h2>
          <ul>
            <li>
              An institution becomes eligible once it has completed six years of existence <em>or</em> two batches of
              students have graduated, whichever is earlier.
            </li>
            <li>Institutions must be recognised by the relevant statutory body (UGC, AICTE, or a state act) and offer programmes of at least one year.</li>
            <li>Accreditation is valid for five years. Re-accreditation (Cycle 2, 3 and beyond) is applied for before the current grade expires.</li>
            <li>Affiliated colleges apply as institutions; the parent university applies separately.</li>
          </ul>

          <h2>The NAAC process, step by step</h2>
          <ol>
            <li>
              <strong>Registration and IIQA.</strong> The institution registers on the NAAC portal and submits the
              Institutional Information for Quality Assessment, a short profile with basic eligibility data and fees.
              NAAC accepts or returns it with observations.
            </li>
            <li>
              <strong>Self Study Report (SSR).</strong> Within the window that opens after IIQA acceptance, the
              institution uploads the SSR: an Extended Profile (headline numbers such as student and teacher counts and
              expenditure), quantitative metrics (QnM) with data templates, and qualitative metrics (QlM) with narrative
              responses and documents.
            </li>
            <li>
              <strong>Data Validation and Verification (DVV).</strong> NAAC's DVV partner checks every quantitative
              metric against the uploaded evidence and raises clarifications. Institutions get a short response window.
              Metrics without acceptable evidence are reduced or set to zero. The DVV-validated score must cross NAAC's
              pre-qualifier threshold for the process to continue.
            </li>
            <li>
              <strong>Student Satisfaction Survey (SSS).</strong> NAAC emails a survey to a sample of students from the
              list the institution provides. The result feeds Criterion 2.
            </li>
            <li>
              <strong>Peer Team Visit.</strong> A peer team visits the campus (two to three days for most colleges),
              verifies qualitative metrics, meets stakeholders and inspects facilities. Quantitative metrics are not
              re-evaluated during the visit.
            </li>
            <li>
              <strong>Result.</strong> The quantitative score from DVV and the qualitative score from the peer team are
              combined into a Cumulative Grade Point Average (CGPA) and the grade or accreditation outcome is declared.
            </li>
          </ol>

          <h2>Grading bands under the RAF</h2>
          <p>
            Under the letter-grade system, the CGPA on a four-point scale maps to a grade as follows. Institutions
            assessed under the newer binary and maturity-level framework receive an accreditation status and level
            instead; check your manual for the thresholds that apply.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">CGPA</th>
                  <th className="py-2 pr-4">Grade</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((g) => (
                  <tr key={g.grade} className="border-b border-navy-900/5">
                    <td className="py-2 pr-4">{g.cgpa}</td>
                    <td className="py-2 pr-4 font-semibold">{g.grade}</td>
                    <td className="py-2">{g.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The seven criteria and their weightages</h2>
          <p>
            Each criterion carries a weightage out of 1,000. The split differs by institution type: affiliated colleges
            are weighted heavily on teaching-learning, while universities carry more weight on research. The figures
            below follow the RAF manuals for Affiliated/Constituent Colleges and for Universities; confirm them against
            the manual edition that applies to your cycle.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">#</th>
                  <th className="py-2 pr-4">Criterion</th>
                  <th className="py-2 pr-4">Affiliated colleges</th>
                  <th className="py-2">Universities</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c) => (
                  <tr key={c.num} className="border-b border-navy-900/5">
                    <td className="py-2 pr-4">{c.num}</td>
                    <td className="py-2 pr-4">{c.title}</td>
                    <td className="py-2 pr-4">{c.college}</td>
                    <td className="py-2">{c.university}</td>
                  </tr>
                ))}
                <tr className="font-semibold text-navy-900">
                  <td className="py-2 pr-4" />
                  <td className="py-2 pr-4">Total</td>
                  <td className="py-2 pr-4">1000</td>
                  <td className="py-2">1000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Two consequences follow. For a college, Criterion 2 alone is worth more than Criteria 1, 4, 6 and 7
            combined, so admission data, faculty records, assessment processes and outcome attainment deserve the most
            preparation time. And because the majority of marks sit in quantitative metrics that are validated by DVV
            before any visit, the single biggest risk is a number you cannot prove with a document.
          </p>

          <h2>Criterion-wise checklist</h2>
          {criteria.map((c) => (
            <section key={c.num}>
              <h3>
                Criterion {c.num}: {c.title}
              </h3>
              <ul>
                {c.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <h2>Master document list</h2>
          <p>Keep these ready, indexed by metric number, before the SSR is uploaded:</p>
          <ul>
            <li>Five years of audited financial statements and utilisation certificates</li>
            <li>Admission registers, category-wise enrolment and sanctioned-intake approvals</li>
            <li>Faculty appointment orders, qualification certificates and FDP participation certificates</li>
            <li>Examination results, revaluation records and internal-assessment policies</li>
            <li>Research sanction letters, publication proofs with DOIs or ISBNs, and patent filings</li>
            <li>MoUs plus evidence of activities conducted under each one</li>
            <li>Library and IT purchase invoices, e-resource subscription receipts and usage logs</li>
            <li>Scholarship disbursement lists with sanction orders</li>
            <li>Placement letters, higher-education admission proofs and competitive-exam results</li>
            <li>IQAC minutes, AQARs submitted to NAAC, and action-taken reports</li>
            <li>Green, energy, environment and academic/administrative audit reports</li>
            <li>Geo-tagged photographs and event reports for extension, outreach and value-based activities</li>
          </ul>

          <h2>A 12-month preparation timeline</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">When</th>
                  <th className="py-2">What to do</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((t) => (
                  <tr key={t.when} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">{t.when}</td>
                    <td className="py-2">{t.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Where institutions lose marks</h2>
          <ul>
            <li>
              <strong>Numbers without documents.</strong> DVV reduces any metric whose evidence is missing, illegible or
              undated. Every number in a data template needs a signed, dated proof.
            </li>
            <li>
              <strong>Inconsistent counts.</strong> Student and teacher totals in the Extended Profile must match the
              figures used in every criterion. A mismatch invites clarifications across the whole SSR.
            </li>
            <li>
              <strong>MoUs with no activity.</strong> A signed agreement earns nothing unless you can show what was
              actually done under it.
            </li>
            <li>
              <strong>Feedback collected but never acted on.</strong> NAAC looks for the analysis and the action-taken
              report, not just the forms.
            </li>
            <li>
              <strong>Outcome statements without attainment.</strong> Publishing COs and POs is the start; Criterion 2
              asks how attainment is measured and what changed because of it.
            </li>
            <li>
              <strong>Late IQAC activity.</strong> AQARs that stop for a few years, or an IQAC that only meets before
              the visit, are visible in the record.
            </li>
          </ul>

          <h2>How a campus ERP removes the data problem</h2>
          <p>
            Most of the pain in NAAC preparation is retrospective: assembling five years of records from registers,
            spreadsheets and email. When admissions, attendance, examinations, fees, HR, library and research data live in
            one system from the start, the quantitative metrics become reports rather than projects. Aveon's accreditation
            module maps institutional data to NAAC metric numbers, keeps the supporting documents attached to each
            record, generates data templates in the required format, and tracks CO and PO attainment for Criterion 2.
            See the <Link href="/products/iqac-naac-nba/naac">NAAC accreditation software</Link> page for the full
            workflow.
          </p>

          <h2>Sources and further reading</h2>
          <ul>
            <li>
              <a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer">
                NAAC: Assessment and Accreditation manuals, notifications and data templates
              </a>
            </li>
            <li>
              <a href="https://www.ugc.gov.in/" target="_blank" rel="noopener noreferrer">
                University Grants Commission
              </a>
            </li>
            <li>
              Related guide: <Link href="/blog/obe-implementation-guide">Outcome-Based Education implementation</Link>
            </li>
          </ul>

          <div className="mt-12 rounded-lg bg-primary-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-900">Preparing for NAAC? Get expert support</h3>
            <p className="mb-6 text-navy-700">
              Aveon's accreditation module keeps every metric and its evidence in one place, so the SSR becomes a report
              instead of a scramble.
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
