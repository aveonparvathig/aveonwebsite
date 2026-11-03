import type { Metadata } from "next";
import Link from "next/link";
import { getStaticPost } from "@/lib/data/static-posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import ArticleMeta from "@/components/blog/ArticleMeta";
import AuthorBox from "@/components/blog/AuthorBox";

const post = getStaticPost("nba-accreditation-guide")!;

export const metadata: Metadata = {
  title: "NBA Accreditation Guide | SAR & Process",
  description:
    "How NBA programme accreditation works for engineering colleges: Tier I vs Tier II, the Washington Accord, eligibility, the twelve Programme Outcomes, the ten SAR criteria and the evidence each needs, the evaluation visit, 6-year and 3-year outcomes, and a 12-month preparation plan.",
  openGraph: { type: "article", publishedTime: post.publishedAt, modifiedTime: post.dateModified },
  keywords: [
    "NBA accreditation",
    "NBA SAR criteria",
    "NBA accreditation process",
    "NBA Tier 1 Tier 2",
    "programme outcomes NBA",
    "CO PO attainment NBA",
    "Washington Accord India",
  ],
};

const programmeOutcomes = [
  "Engineering knowledge",
  "Problem analysis",
  "Design/development of solutions",
  "Conduct investigations of complex problems",
  "Modern tool usage",
  "The engineer and society",
  "Environment and sustainability",
  "Ethics",
  "Individual and team work",
  "Communication",
  "Project management and finance",
  "Life-long learning",
];

const criteria = [
  { num: 1, title: "Vision, Mission and Programme Educational Objectives", focus: "Are the PEOs derived from the vision and mission, published, and reviewed with stakeholders?", evidence: "Vision/mission statements and where they are displayed; PEO statements; stakeholder consultation records; mapping of PEOs to mission" },
  { num: 2, title: "Programme Curriculum and Teaching-Learning Processes", focus: "Does the curriculum deliver the POs, and is teaching designed around outcomes?", evidence: "Curriculum with CO-PO mapping; course files; content beyond syllabus; project-based learning; industry interaction; internships; lab experiences; initiatives to improve quality of teaching" },
  { num: 3, title: "Course Outcomes and Programme Outcomes", focus: "Are COs written, mapped and attained, and do they add up to PO/PSO attainment?", evidence: "CO statements for every course; CO-PO/PSO matrices; question-level assessment tagging; CO attainment per course; PO and PSO attainment with direct and indirect components; targets and gaps" },
  { num: 4, title: "Students' Performance", focus: "Enrolment quality, success rate, academic performance, placement and higher studies, professional activities", evidence: "Admission data vs sanctioned intake; batch-wise pass percentages in stipulated time; CGPA distributions; placement and higher-studies records with proofs; student publications, competitions and professional-society activity" },
  { num: 5, title: "Faculty Information and Contributions", focus: "Faculty numbers, qualifications, cadre ratio, retention, research, development and participation", evidence: "Student-faculty ratio by year; cadre proportion; PhD holders; faculty retention; publications, projects, consultancy; FDP participation; faculty as mentors and in professional bodies" },
  { num: 6, title: "Facilities and Technical Support", focus: "Classrooms, labs, technical staff and safety adequate for the programme", evidence: "Classroom and lab inventories with utilisation; equipment adequacy per experiment; technical support staff; safety measures; additional facilities for the programme" },
  { num: 7, title: "Continuous Improvement", focus: "Is attainment used to improve the programme, and is improvement measurable?", evidence: "Actions taken on CO/PO attainment gaps; improvement in success index and placement over years; curriculum changes and their outcomes" },
  { num: 8, title: "First Year Academics", focus: "How first-year teaching, outcomes and performance are managed", evidence: "First-year faculty data; CO-PO attainment for first-year courses; first-year success rate; bridge courses and mentoring" },
  { num: 9, title: "Student Support Systems", focus: "Mentoring, feedback, co-curricular and career support", evidence: "Mentoring system records; feedback analysis and action; professional-society chapters; entrepreneurship and career guidance; co-curricular participation" },
  { num: 10, title: "Governance, Institutional Support and Financial Resources", focus: "Does the institution's governance and finance sustain the programme?", evidence: "Organisational structure and governing body; delegation of academic and financial powers; budget allocation and utilisation; library and internet resources; institutional quality policy" },
];

const steps = [
  { step: "Register and check eligibility", detail: "The institution registers on the NBA portal. A programme is eligible once at least two batches have graduated and the institution holds the required statutory approval. Pre-qualifier data is submitted first; the SAR invitation follows if it is met." },
  { step: "Submit the Self Assessment Report (SAR)", detail: "The SAR is completed online against the ten criteria for the applicable tier, with data for the current and two previous academic years, and uploaded with supporting evidence." },
  { step: "Evaluation visit", detail: "An NBA team, typically three members per programme over about three days, verifies the SAR on campus: course files, attainment calculations, labs, interaction with students, faculty, alumni and management." },
  { step: "Outcome", detail: "Programmes are accredited for six years, for three years (provisional, with a compliance report required before any extension), or not accredited. Reasons are communicated criterion-wise." },
  { step: "Compliance and re-accreditation", detail: "Three-year accreditations require a compliance report addressing the deficiencies; re-accreditation applications are made before expiry with fresh data." },
];

const plan = [
  { when: "Month 1", what: "Appoint a programme accreditation coordinator and criterion owners; download the current SAR manual for your tier; audit which COs, mappings and attainment data already exist." },
  { when: "Months 2–3", what: "Write or repair CO statements for every course; complete CO-PO/PSO matrices; fix the assessment-tagging process so this semester's data is clean." },
  { when: "Months 4–6", what: "Compute CO, PO and PSO attainment for the last two completed batches; document actions taken on gaps (Criterion 7); assemble faculty, student-performance and facilities data." },
  { when: "Months 7–8", what: "Submit the pre-qualifier; draft the full SAR with evidence indexed by criterion and sub-criterion." },
  { when: "Months 9–10", what: "Internal mock evaluation by faculty from another department or a sister institution; close gaps." },
  { when: "Months 11–12", what: "Submit the SAR; prepare course files, lab readiness and stakeholder briefings for the visit." },
];

const pitfalls = [
  { p: "COs written to fit the question paper after the fact", fix: "Write COs first, tag questions to them when the paper is set, compute attainment from the tags" },
  { p: "Every CO mapped to every PO at level 3", fix: "Honest 1-2-3 mapping with blanks; review at programme level so no PO is left unaddressed" },
  { p: "Attainment computed once, in a spreadsheet, for the SAR", fix: "Attainment in the examination system every semester, with the method written in the programme's OBE policy" },
  { p: "No evidence that attainment changed anything", fix: "A Criterion 7 register: gap, action, owner, result, per course per year" },
  { p: "Faculty data that does not match AICTE and payroll records", fix: "One HR record for faculty; the same list for NBA, AICTE EoA and NIRF" },
  { p: "Placement and higher-studies claims without proofs", fix: "Offer letters and admission letters captured by the placement cell at the time, attached to the student record" },
];

export default function NbaGuide() {
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
            NBA Accreditation Guide: Criteria, SAR Process and Evidence for Engineering Programmes
          </h1>
          <p className="text-lg text-navy-700">
            What the National Board of Accreditation assesses, how the process runs, and the records a programme
            must be able to produce.
          </p>
          <ArticleMeta post={post} />
        </div>

        <div className="prose prose-lg max-w-none text-navy-800">
          <h2>What NBA accreditation is</h2>
          <p>
            The National Board of Accreditation (NBA) accredits individual programmes, not institutions, in
            engineering and technology, management, pharmacy, architecture, hotel management and related technical
            fields in India. It was set up in 1994 under AICTE and became an autonomous body in 2010. In 2014 NBA
            became a permanent signatory of the Washington Accord, the international agreement under which
            accredited undergraduate engineering programmes are recognised as substantially equivalent across member
            countries. NBA's framework is entirely outcome-based: it asks whether a programme defines what graduates
            will be able to do, measures whether they can, and improves the programme using that measurement.
          </p>

          <h2>Tier I and Tier II</h2>
          <p>
            NBA runs two tiers with separate Self Assessment Report (SAR) formats. <strong>Tier I</strong> covers
            programmes offered by institutions with academic autonomy: universities, deemed universities, institutes
            of national importance and autonomous colleges. <strong>Tier II</strong> covers programmes at
            affiliated institutions that follow a university's curriculum and examinations. Washington Accord
            recognition applies to Tier I accredited programmes. The criteria are the same in substance for both
            tiers; the difference is in how much control over curriculum and assessment the institution is expected
            to demonstrate.
          </p>

          <h2>Eligibility</h2>
          <ul>
            <li>The institution holds the required statutory approval (AICTE, and university affiliation for Tier II).</li>
            <li>At least two batches of the programme have graduated.</li>
            <li>Pre-qualifier data on admissions, faculty and facilities meets NBA's thresholds for the tier.</li>
            <li>Data is submitted for the current academic year and the two preceding years.</li>
          </ul>
          <p>
            NAAC accreditation is not a prerequisite for NBA, and the two bodies assess different things: NAAC the
            institution across seven criteria, NBA each programme's outcomes. Our{" "}
            <Link href="/blog/naac-accreditation-checklist">NAAC checklist</Link> covers the former.
          </p>

          <h2>The twelve Programme Outcomes</h2>
          <p>
            For undergraduate engineering, NBA prescribes twelve Programme Outcomes (POs), aligned with the
            Washington Accord graduate attributes. Every programme adopts them as written and adds two to four
            Programme Specific Outcomes (PSOs) of its own.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">PO</th>
                  <th className="py-2">Attribute</th>
                </tr>
              </thead>
              <tbody>
                {programmeOutcomes.map((po, i) => (
                  <tr key={po} className="border-b border-navy-900/5">
                    <td className="py-2 pr-4 font-semibold">PO{i + 1}</td>
                    <td className="py-2">{po}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Each course's Course Outcomes (COs) map to these POs and PSOs, and attainment rolls up from COs to POs.
            The mechanics are in the <Link href="/blog/obe-implementation-guide">OBE implementation guide</Link>.
          </p>

          <h2>The ten SAR criteria</h2>
          <p>
            The SAR for undergraduate engineering is organised in ten criteria, scored out of a total of 1,000 marks
            with weights that differ between tiers. The criteria on course and programme outcomes and on faculty
            carry the most weight, which reflects what NBA is really assessing: whether outcomes are measured and
            whether there are enough qualified people to deliver them. The marks per criterion and sub-criterion are
            in the current SAR manual for your tier on{" "}
            <a href="https://www.nbaind.org/" target="_blank" rel="noopener noreferrer">
              nbaind.org
            </a>
            ; the table below gives the focus of each criterion and the evidence it needs.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">#</th>
                  <th className="py-2 pr-4">Criterion</th>
                  <th className="py-2 pr-4">What it asks</th>
                  <th className="py-2">Evidence to keep</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((c) => (
                  <tr key={c.num} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{c.num}</td>
                    <td className="py-2 pr-4 font-semibold">{c.title}</td>
                    <td className="py-2 pr-4">{c.focus}</td>
                    <td className="py-2">{c.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The process, step by step</h2>
          <ol>
            {steps.map((s) => (
              <li key={s.step}>
                <strong>{s.step}.</strong> {s.detail}
              </li>
            ))}
          </ol>

          <h2>What the visit team actually checks</h2>
          <p>
            Evaluators spend most of their time on Criterion 3. They pick courses, open the course files, and trace a
            CO from its statement to the questions that assess it, the marks those questions produced, the attainment
            computed from them, and the action taken when attainment fell short. If any link in that chain is missing
            or was clearly assembled for the visit, the criterion suffers and so does Criterion 7. They then verify
            faculty records against appointment orders and salary, inspect laboratories against the SAR's equipment
            lists, and talk to students, alumni and employers about whether the PEOs are real.
          </p>

          <h2>Evidence checklist</h2>
          <ul>
            <li>Vision, mission, PEOs, POs and PSOs as published, with stakeholder review minutes</li>
            <li>Curriculum with CO-PO/PSO matrices for every course, by regulation year</li>
            <li>Course files: syllabus, lesson plan, question papers with CO and Bloom's tags, sample answer scripts, attainment sheet, action taken</li>
            <li>Programme-level CO, PO and PSO attainment for the last two graduated batches, with the attainment policy</li>
            <li>Admission, pass-percentage and CGPA data for three years against sanctioned intake</li>
            <li>Placement, higher-studies and entrepreneurship records with proofs</li>
            <li>Faculty list with qualifications, cadre, retention, research output and FDP records, consistent with AICTE and payroll</li>
            <li>Laboratory inventories with experiment-wise adequacy and safety provisions</li>
            <li>Mentoring, feedback and student-support records with analysis and action</li>
            <li>Governance documents, budgets and utilisation for the programme</li>
          </ul>

          <h2>A 12-month preparation plan</h2>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">When</th>
                  <th className="py-2">What to do</th>
                </tr>
              </thead>
              <tbody>
                {plan.map((p) => (
                  <tr key={p.when} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">{p.when}</td>
                    <td className="py-2">{p.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Twelve months is realistic only if attainment data already exists for the last two batches. If it does
            not, the honest sequence is: implement OBE properly for two full academic years, then apply.
          </p>

          <h2>Why programmes get three years instead of six</h2>
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

          <h2>How a campus ERP supports NBA</h2>
          <p>
            NBA rewards programmes where outcome measurement is routine rather than a project. When COs, mappings and
            question tags live in the examination system, attainment is computed from the marks faculty already
            enter, the Criterion 7 register is a report of actions logged against gaps, and faculty, placement and
            facilities data are the same records used for AICTE and NIRF. Aveon's OBE and accreditation modules are
            built around that chain; see the <Link href="/products/iqac-naac-nba/nba">NBA accreditation</Link> page
            and the <Link href="/products/college-erp">College ERP</Link> overview.
          </p>

          <h2>Sources and further reading</h2>
          <ul>
            <li>
              <a href="https://www.nbaind.org/" target="_blank" rel="noopener noreferrer">
                National Board of Accreditation: SAR manuals, Programme Outcomes and accreditation process
              </a>
            </li>
            <li>
              <a href="https://www.ieagreements.org/accords/washington/" target="_blank" rel="noopener noreferrer">
                International Engineering Alliance: the Washington Accord
              </a>
            </li>
            <li>
              Related: <Link href="/blog/obe-implementation-guide">OBE implementation guide</Link> ·{" "}
              <Link href="/blog/aicte-approval-compliance-checklist">AICTE compliance checklist</Link> ·{" "}
              <Link href="/blog/nirf-ranking-parameters-explained">NIRF parameters</Link>
            </li>
          </ul>

          <div className="mt-12 rounded-lg bg-primary-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-900">See CO-PO attainment computed from real marks</h3>
            <p className="mb-6 text-navy-700">
              A demo of outcome definition, question tagging, attainment and the Criterion 7 register on your programme
              structure.
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
