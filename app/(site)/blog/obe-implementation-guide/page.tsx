import type { Metadata } from "next";
import Link from "next/link";
import { getStaticPost } from "@/lib/data/static-posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import ArticleMeta from "@/components/blog/ArticleMeta";
import AuthorBox from "@/components/blog/AuthorBox";

const post = getStaticPost("obe-implementation-guide")!;

export const metadata: Metadata = {
  title: "OBE Implementation Guide for Institutions",
  description:
    "Step-by-step Outcome-Based Education guide for Indian colleges: the PEO, PO, PSO and CO hierarchy, Bloom's taxonomy verbs, CO-PO mapping, attainment calculation, a 10-step rollout plan and how OBE feeds NAAC and NBA accreditation.",
  openGraph: { type: "article", publishedTime: post.publishedAt, modifiedTime: post.dateModified },
  keywords: [
    "outcome-based education",
    "OBE implementation",
    "CO PO mapping",
    "CO attainment",
    "NBA accreditation OBE",
    "NAAC OBE",
    "learning outcomes",
  ],
};

const bloomLevels = [
  { level: "Remember", verbs: "define, list, recall, identify, state", example: "List the stages of the software development life cycle." },
  { level: "Understand", verbs: "explain, describe, summarise, classify", example: "Explain why normalisation reduces redundancy in a relational database." },
  { level: "Apply", verbs: "apply, compute, solve, demonstrate, use", example: "Compute the time complexity of a given sorting algorithm." },
  { level: "Analyse", verbs: "analyse, compare, differentiate, examine", example: "Compare two network protocols for a given throughput requirement." },
  { level: "Evaluate", verbs: "evaluate, justify, critique, recommend", example: "Recommend a database design for a stated workload and justify the choice." },
  { level: "Create", verbs: "design, develop, construct, formulate", example: "Design and implement a REST API for a stated business process." },
];

const mapping = [
  { co: "CO1", pos: ["3", "2", "-", "-", "1", "-"] },
  { co: "CO2", pos: ["3", "3", "2", "-", "-", "-"] },
  { co: "CO3", pos: ["2", "3", "3", "1", "-", "-"] },
  { co: "CO4", pos: ["1", "2", "3", "3", "2", "1"] },
  { co: "CO5", pos: ["-", "1", "2", "3", "3", "2"] },
];

const steps = [
  { title: "Secure leadership ownership", text: "OBE changes how every teacher plans and assesses. Name a sponsor at the principal or dean level and an OBE coordinator in each department before any outcomes are written." },
  { title: "Write the Vision, Mission and PEOs", text: "Programme Educational Objectives describe what graduates should achieve three to five years after graduation. Derive them from the institution's mission and from employer and alumni input." },
  { title: "Adopt POs and define PSOs", text: "For engineering, adopt the twelve NBA Programme Outcomes verbatim. For other disciplines, draft eight to twelve POs. Add two to four Programme Specific Outcomes that distinguish your programme." },
  { title: "Write Course Outcomes for every course", text: "Three to six COs per course, each starting with a measurable Bloom's verb, each achievable within the course and each assessable with the tools you actually use." },
  { title: "Map COs to POs and PSOs", text: "Rate each CO against each PO on a 1 (slight), 2 (moderate), 3 (substantial) scale, leaving blanks where there is no relationship. Review the matrix at department level so no PO is left unaddressed across a programme." },
  { title: "Align assessment to outcomes", text: "Tag every question in internal tests, assignments, labs and end-semester papers to a CO and a Bloom's level. Without question-level tagging, attainment cannot be computed honestly." },
  { title: "Set attainment targets and thresholds", text: "Decide, per course, what 'attained' means: for example, at least 60% of students scoring at least 60% of the marks in CO-tagged questions. Record the rule in the department's OBE policy so it is consistent across years." },
  { title: "Collect direct and indirect evidence", text: "Direct evidence is assessment performance. Indirect evidence is course-exit surveys, programme-exit surveys, alumni and employer feedback. Weight them explicitly, commonly 80:20." },
  { title: "Compute CO, PO and PSO attainment", text: "CO attainment comes from tagged assessment data. PO attainment is the weighted average of the attainments of all COs mapped to that PO, using the 1-2-3 mapping strengths as weights, combined with the indirect component." },
  { title: "Close the loop and document it", text: "Where attainment falls short of target, record the action: content changes, teaching-method changes, remedial classes, revised assessment. The documented action is what accreditors look for." },
];

export default function OBEGuide() {
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
            Outcome-Based Education (OBE): A Complete Implementation Guide for Indian Institutions
          </h1>
          <p className="text-lg text-navy-700">
            From writing Course Outcomes to computing PO attainment and documenting the loop for NAAC and NBA.
          </p>
          <ArticleMeta post={post} />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-navy-800">
          <h2>What is Outcome-Based Education?</h2>
          <p>
            Outcome-Based Education (OBE) is an approach to designing and running academic programmes in which every
            course, assessment and teaching decision is organised around clearly stated outcomes: what a student should
            know, be able to do and value by the end of a course and a programme. Instead of asking "what content was
            covered?", OBE asks "what can the student demonstrably do, and how do we know?". Outcomes are written in
            measurable language, every assessment is tied to an outcome, attainment is measured, and the results are
            used to improve the programme.
          </p>

          <h2>Why OBE matters in India</h2>
          <ul>
            <li>
              <strong>NBA accreditation requires it.</strong> The National Board of Accreditation became a permanent
              signatory of the Washington Accord in 2014, and its accreditation of engineering and technical programmes
              is built entirely on outcome attainment: PEOs, POs, PSOs, COs and documented continuous improvement.
            </li>
            <li>
              <strong>NAAC assesses it.</strong> Under NAAC's Criterion 1 and Criterion 2, institutions are asked whether
              programme and course outcomes are stated, communicated, and whether their attainment is evaluated and used.
            </li>
            <li>
              <strong>NEP 2020 expects it.</strong> The National Education Policy emphasises learning outcomes,
              multidisciplinary programmes and competency-based assessment, all of which presume an outcome framework.
            </li>
            <li>
              <strong>Employers and students benefit.</strong> Outcomes make the promise of a programme explicit, so
              gaps between what is taught and what graduates need become visible and fixable.
            </li>
          </ul>

          <h2>The outcome hierarchy</h2>
          <p>OBE works through a chain of nested statements, each derived from the one above it:</p>
          <ol>
            <li>
              <strong>Vision and Mission</strong> of the institution and department.
            </li>
            <li>
              <strong>Programme Educational Objectives (PEOs):</strong> broad statements of what graduates are expected
              to achieve a few years into their careers.
            </li>
            <li>
              <strong>Programme Outcomes (POs):</strong> what students can do at graduation. For engineering, NBA
              prescribes twelve POs covering engineering knowledge, problem analysis, design, investigation, modern tool
              use, the engineer and society, environment and sustainability, ethics, teamwork, communication, project
              management and lifelong learning.
            </li>
            <li>
              <strong>Programme Specific Outcomes (PSOs):</strong> two to four outcomes particular to the discipline.
            </li>
            <li>
              <strong>Course Outcomes (COs):</strong> what a student can do at the end of a specific course. These are the
              unit of measurement for everything above.
            </li>
          </ol>

          <h2>Writing measurable Course Outcomes</h2>
          <p>
            A usable CO has four properties: it begins with an observable action verb, it names the content or context,
            it is achievable in the course, and it can be assessed with the tools you use. "Understand databases" fails
            on every count; "Design a normalised relational schema for a given business requirement" passes. Bloom's
            taxonomy provides the verbs. Aim for most COs at the Apply level or above in professional programmes.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Bloom's level</th>
                  <th className="py-2 pr-4">Typical verbs</th>
                  <th className="py-2">Example CO</th>
                </tr>
              </thead>
              <tbody>
                {bloomLevels.map((b) => (
                  <tr key={b.level} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">{b.level}</td>
                    <td className="py-2 pr-4">{b.verbs}</td>
                    <td className="py-2">{b.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>CO-PO mapping</h2>
          <p>
            Each CO is rated against each PO and PSO on a three-point scale: 1 for a slight contribution, 2 for moderate,
            3 for substantial, and blank where there is no relationship. The matrix for one course looks like this:
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-center text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-navy-900">
                  <th className="py-2 text-left">CO</th>
                  {["PO1", "PO2", "PO3", "PO4", "PO5", "PSO1"].map((h) => (
                    <th key={h} className="py-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mapping.map((row) => (
                  <tr key={row.co} className="border-b border-navy-900/5">
                    <td className="py-2 text-left font-semibold">{row.co}</td>
                    {row.pos.map((v, i) => (
                      <td key={i} className="py-2">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Review mapping at programme level, not just course by course. If a PO such as "ethics" or "lifelong learning"
            has only slight mappings across the whole curriculum, it cannot be attained, and an accreditor will notice.
          </p>

          <h2>Measuring attainment</h2>
          <p>
            Attainment turns the mapping into numbers. A common and defensible scheme, which each institution should
            write into its own OBE policy, works like this:
          </p>
          <ol>
            <li>
              <strong>Tag every assessment question</strong> to one CO. For a CO-tagged question set, compute the
              percentage of students who scored at or above a threshold (for example 60% of the marks).
            </li>
            <li>
              <strong>Convert to an attainment level.</strong> For example: 70% or more of students crossing the threshold
              = level 3; 60 to 69% = level 2; 50 to 59% = level 1; below 50% = not attained.
            </li>
            <li>
              <strong>Combine direct and indirect evidence.</strong> Direct attainment from assessments is typically
              weighted 80%, and indirect attainment from course-exit and programme-exit surveys 20%.
            </li>
            <li>
              <strong>Roll COs up to POs.</strong> PO attainment is the average of the attainments of all COs mapped to
              that PO, weighted by the 1-2-3 mapping strength, across all courses in the programme.
            </li>
            <li>
              <strong>Compare with targets</strong> set in advance, and record the gap.
            </li>
          </ol>
          <p>
            The exact thresholds matter less than consistency: use the same rule across courses and years so trends are
            meaningful, and state the rule in your SSR or SAR.
          </p>

          <h2>A 10-step implementation roadmap</h2>
          <ol>
            {steps.map((s) => (
              <li key={s.title}>
                <strong>{s.title}.</strong> {s.text}
              </li>
            ))}
          </ol>

          <h2>Common pitfalls</h2>
          <ul>
            <li>
              <strong>Outcomes written after the fact.</strong> COs retro-fitted to an existing question paper produce
              mapping that looks complete and measures nothing.
            </li>
            <li>
              <strong>Every CO mapped to every PO at 3.</strong> Inflated matrices hide real gaps and are easy for a peer
              team to spot.
            </li>
            <li>
              <strong>Attainment computed in spreadsheets once a year.</strong> It is error-prone, impossible to audit and
              too late to act on. Attainment should be visible during the semester.
            </li>
            <li>
              <strong>No action on gaps.</strong> A low-attainment CO with no recorded response is worse, for
              accreditation, than one with a documented remedial plan.
            </li>
            <li>
              <strong>Faculty treated as data-entry staff.</strong> OBE succeeds when teachers own their COs; it fails
              when it is experienced as paperwork imposed before an accreditation visit.
            </li>
          </ul>

          <h2>How a campus ERP supports OBE</h2>
          <p>
            The hard part of OBE is not the philosophy but the bookkeeping: thousands of question-to-CO tags, mapping
            matrices for every course, attainment arithmetic every semester and evidence for every improvement. Aveon's
            OBE module stores PEOs, POs, PSOs and COs; lets teachers tag questions as they create assessments; computes
            CO, PO and PSO attainment automatically from marks already in the examination system; captures indirect
            survey data; and produces the attainment reports and action-taken records that NAAC and NBA ask for. See the{" "}
            <Link href="/products/college-erp">college ERP software</Link> page for the OBE and CBCS workflow.
          </p>

          <h2>Sources and further reading</h2>
          <ul>
            <li>
              <a href="https://www.nbaind.org/" target="_blank" rel="noopener noreferrer">
                National Board of Accreditation: SAR manuals and Programme Outcomes
              </a>
            </li>
            <li>
              <a href="https://www.naac.gov.in/" target="_blank" rel="noopener noreferrer">
                NAAC: Assessment and Accreditation manuals
              </a>
            </li>
            <li>
              Related guide: <Link href="/blog/naac-accreditation-checklist">NAAC accreditation checklist</Link>
            </li>
          </ul>

          <div className="mt-12 rounded-lg bg-primary-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-900">Ready to implement OBE at your institution?</h3>
            <p className="mb-6 text-navy-700">
              Aveon's OBE-ready campus ERP computes attainment from the marks you already record. Let us show you how.
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
