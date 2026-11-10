import { baseOpenGraph } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { getStaticPost } from "@/lib/data/static-posts";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import ArticleMeta from "@/components/blog/ArticleMeta";
import AuthorBox from "@/components/blog/AuthorBox";

const post = getStaticPost("nirf-ranking-parameters-explained")!;

export const metadata: Metadata = {
  title: "NIRF Ranking Parameters Explained | Weightages",
  description:
    "How NIRF scores institutions: the five parameters (TLR, RP, GO, OI, PR), their weightages by category, the data each needs and how to improve your inputs.",
  openGraph: { ...baseOpenGraph, type: "article", publishedTime: post.publishedAt, modifiedTime: post.dateModified },
  keywords: [
    "NIRF ranking parameters",
    "NIRF weightage",
    "NIRF TLR RP GO OI PR",
    "how to improve NIRF ranking",
    "NIRF data submission",
    "NIRF ranking India",
  ],
};

const parameters = [
  { code: "TLR", name: "Teaching, Learning and Resources", overall: 30, engineering: 30, college: 40, measures: "Student strength, faculty-student ratio, faculty qualifications and experience, financial resources and their utilisation" },
  { code: "RP", name: "Research and Professional Practice", overall: 30, engineering: 30, college: 15, measures: "Publications, quality of publications (citations), IPR and patents, footprint of projects and professional practice" },
  { code: "GO", name: "Graduation Outcomes", overall: 20, engineering: 20, college: 25, measures: "University exam results, placement and higher studies, median salary, PhD graduates" },
  { code: "OI", name: "Outreach and Inclusivity", overall: 10, engineering: 10, college: 10, measures: "Students from other states and countries, women students and faculty, economically and socially disadvantaged students, facilities for differently-abled" },
  { code: "PR", name: "Perception", overall: 10, engineering: 10, college: 10, measures: "Survey of academic peers and employers; public perception" },
];

const subParams = [
  { param: "TLR", items: ["Student Strength including doctoral students (SS)", "Faculty-Student Ratio with emphasis on permanent faculty (FSR)", "Combined metric for Faculty with PhD and Experience (FQE)", "Financial Resources and their Utilisation (FRU)"] },
  { param: "RP", items: ["Combined metric for Publications (PU)", "Combined metric for Quality of Publications (QP)", "IPR and Patents: published and granted (IPR)", "Footprint of Projects and Professional Practice (FPPP)"] },
  { param: "GO", items: ["Combined metric for Placement and Higher Studies (GPH)", "Metric for University Examinations (GUE)", "Median Salary (GMS)", "Metric for Number of PhD Students Graduated (GPHD)"] },
  { param: "OI", items: ["Percentage of Students from Other States/Countries (RD)", "Percentage of Women (WD)", "Economically and Socially Challenged Students (ESCS)", "Facilities for Physically Challenged Students (PCS)"] },
  { param: "PR", items: ["Peer Perception: academic peers and employers (PR)"] },
];

const dataNeeds = [
  { sub: "SS / FSR", data: "Sanctioned intake, actual enrolment by programme and year, doctoral student count, permanent faculty list with joining dates", owner: "Office, HR" },
  { sub: "FQE", data: "Faculty qualifications (PhD), years of experience, appointment type", owner: "HR" },
  { sub: "FRU", data: "Audited capital and operational expenditure per student for the last three years, excluding hostel and mess", owner: "Accounts" },
  { sub: "PU / QP", data: "Publications indexed in Scopus and Web of Science with faculty affiliation, citations, top-quartile counts", owner: "Research cell, library" },
  { sub: "IPR", data: "Patents published and granted with application numbers and dates", owner: "Research cell" },
  { sub: "FPPP", data: "Sponsored research and consultancy income with sanction letters, executive development programme earnings", owner: "Research cell, accounts" },
  { sub: "GPH / GMS", data: "Graduating batch size, placed count with offer letters, higher-studies count with admission proofs, median salary with evidence", owner: "Placement cell" },
  { sub: "GUE", data: "Students graduating in stipulated time; university results by batch", owner: "COE" },
  { sub: "GPHD", data: "PhD degrees awarded per year (full-time and part-time)", owner: "Research cell, COE" },
  { sub: "RD / WD / ESCS", data: "Student domicile, gender and category data; women faculty count; fee reimbursement and scholarship beneficiaries", owner: "Office" },
  { sub: "PCS", data: "Accessibility audit: ramps, lifts, accessible toilets, assistive resources", owner: "Estate office" },
];

const plan = [
  { when: "Month 1", what: "Download the current NIRF parameter document for your category and map every sub-parameter to a data owner. Reconcile last year's submission against audited sources." },
  { when: "Months 2–3", what: "Fix the record-keeping gaps: faculty appointment types and PhD status in HR, Scopus/WoS author IDs for every faculty member, placement evidence captured at offer time, not at submission time." },
  { when: "Months 4–6", what: "Act on the inputs you can move within a year: fill sanctioned faculty posts, support publication in indexed journals, file patents already in the pipeline, run structured placement drives, document outreach and accessibility." },
  { when: "Months 7–9", what: "Mid-year dry run of the full data capture format from the ERP. Verify expenditure classification with the auditor." },
  { when: "Months 10–11", what: "Prepare the submission with evidence files attached per sub-parameter; publish the data on the institution website as required." },
  { when: "Month 12", what: "Submit; then start the next cycle's gap analysis from the published scores." },
];

export default function NirfGuide() {
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
            NIRF Ranking Parameters Explained: Weightages and the Data Behind Them
          </h1>
          <p className="text-lg text-navy-700">
            What the National Institutional Ranking Framework measures, how much each part counts, and which of the
            inputs an institution can actually move in a year.
          </p>
          <ArticleMeta post={post} />
        </div>

        <div className="prose prose-lg max-w-none text-navy-800">
          <h2>What NIRF is</h2>
          <p>
            The National Institutional Ranking Framework (NIRF) is the Ministry of Education's annual ranking of
            Indian higher education institutions, launched in 2015 and first published in 2016. Institutions submit
            data each year through the NIRF portal; the framework scores them on five parameters, Teaching, Learning
            and Resources; Research and Professional Practice; Graduation Outcomes; Outreach and Inclusivity; and
            Perception, and publishes ranked lists by category: Overall, Universities, Colleges, Engineering,
            Management, Pharmacy, Medical, Law, Architecture and others. Rankings are public, widely reported, and
            increasingly used by applicants, parents, funding bodies and the institutions themselves as a scoreboard.
          </p>

          <h2>The five parameters and their weightages</h2>
          <p>
            Each parameter is scored out of 100 and then weighted. The weights differ by category: research counts
            for less and teaching for more in the Colleges category than in Universities or Engineering. The figures
            below are the published weightages for the Overall/Universities, Engineering and Colleges categories;
            NIRF publishes a parameter document for every category each year on{" "}
            <a href="https://www.nirfindia.org/" target="_blank" rel="noopener noreferrer">
              nirfindia.org
            </a>
            , and that document is the one to work from for your category and year.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Parameter</th>
                  <th className="py-2 pr-4">Universities / Overall</th>
                  <th className="py-2 pr-4">Engineering</th>
                  <th className="py-2 pr-4">Colleges</th>
                  <th className="py-2">What it measures</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((p) => (
                  <tr key={p.code} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">
                      {p.code} · {p.name}
                    </td>
                    <td className="py-2 pr-4">{p.overall}%</td>
                    <td className="py-2 pr-4">{p.engineering}%</td>
                    <td className="py-2 pr-4">{p.college}%</td>
                    <td className="py-2">{p.measures}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Two things follow from the weights. For a university or engineering institution, research and teaching
            resources together decide 60% of the score, and both are driven by faculty: how many, how qualified, and
            how much they publish. For an affiliated college, teaching resources alone carry 40% and graduation
            outcomes 25%, so faculty numbers, expenditure per student, university results and placements dominate.

          </p>

          <h2>The sub-parameters</h2>
          <p>
            Each parameter is built from sub-parameters with their own marks. The names are the ones NIRF uses in its
            data capture format; the marks per sub-parameter vary by category and are set out in each year's
            document.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Parameter</th>
                  <th className="py-2">Sub-parameters</th>
                </tr>
              </thead>
              <tbody>
                {subParams.map((s) => (
                  <tr key={s.param} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold">{s.param}</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4">
                        {s.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How the scores are computed</h2>
          <ul>
            <li>
              <strong>Most sub-parameters are relative.</strong> Scores are scaled against the best-performing
              institution in the category on that metric, so improving in absolute terms does not guarantee a higher
              score if peers improve faster.
            </li>
            <li>
              <strong>Research metrics come from third-party databases.</strong> Publications and citations are drawn
              from Scopus and Web of Science using the institution's affiliation, which is why consistent affiliation
              names and author IDs matter.
            </li>
            <li>
              <strong>Financial data must be audited.</strong> Expenditure figures are taken from audited statements and
              exclude hostel and mess; classification errors are a common reason for low FRU scores.
            </li>
            <li>
              <strong>Submitted data is published.</strong> NIRF publishes each institution's submitted data, and false
              data can lead to disqualification from the ranking.
            </li>
            <li>
              <strong>Perception is surveyed, not submitted.</strong> Peer and employer surveys drive PR; it is the one
              parameter no data entry can improve directly.
            </li>
          </ul>

          <h2>The data behind each sub-parameter</h2>
          <p>
            Almost every low score traces back to data that was never captured, not to performance that was absent.
            This table maps each group of sub-parameters to the records it needs and the office that owns them.
          </p>
          <div className="not-prose overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-navy-900/10 text-left text-navy-900">
                  <th className="py-2 pr-4">Sub-parameter</th>
                  <th className="py-2 pr-4">Records needed</th>
                  <th className="py-2">Owner</th>
                </tr>
              </thead>
              <tbody>
                {dataNeeds.map((d) => (
                  <tr key={d.sub} className="border-b border-navy-900/5 align-top">
                    <td className="py-2 pr-4 font-semibold whitespace-nowrap">{d.sub}</td>
                    <td className="py-2 pr-4">{d.data}</td>
                    <td className="py-2 whitespace-nowrap">{d.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What an institution can move in a year</h2>
          <p>
            Some inputs respond within one cycle; others take years. Spend the year on the first group.
          </p>
          <h3>Within a year</h3>
          <ul>
            <li>
              <strong>Faculty-student ratio and FQE:</strong> fill sanctioned posts with permanent appointments; record
              PhD completions and experience accurately in HR.
            </li>
            <li>
              <strong>Publications:</strong> register every faculty member's Scopus and ORCID IDs with the correct
              affiliation; support submissions to indexed journals; stop counting what the databases will not.
            </li>
            <li>
              <strong>IPR:</strong> file patents already in the pipeline; published applications count.
            </li>
            <li>
              <strong>Placements and median salary:</strong> capture offer letters at the time of offer; follow up
              higher-studies admissions with proof; structured drives raise both GPH and GMS.
            </li>
            <li>
              <strong>Expenditure classification:</strong> work with the auditor so capital and operational spending is
              classified the way NIRF counts it.
            </li>
            <li>
              <strong>Outreach and inclusivity:</strong> record domicile and category data completely; document
              scholarships and fee reimbursements; complete and evidence the accessibility audit.
            </li>
          </ul>
          <h3>Over several years</h3>
          <ul>
            <li>Doctoral programmes and PhD output</li>
            <li>Sponsored research and consultancy income</li>
            <li>Citation quality, which lags publication by two to three years</li>
            <li>Perception, which follows the other four</li>
          </ul>

          <h2>A 12-month NIRF data plan</h2>
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

          <h2>Common mistakes</h2>
          <ul>
            <li>
              <strong>Inconsistent affiliation names</strong> in publications, so the databases do not attribute papers
              to the institution.
            </li>
            <li>
              <strong>Counting contract faculty as permanent,</strong> or omitting faculty who joined mid-year.
            </li>
            <li>
              <strong>Placement data reconstructed at submission time</strong> without offer letters, leading to
              under-reporting or unverifiable claims.
            </li>
            <li>
              <strong>Expenditure that includes hostel and mess,</strong> or that is not reconciled with audited
              accounts.
            </li>
            <li>
              <strong>Treating NIRF, NAAC and AICTE data as three projects</strong> when they draw on the same
              institutional records with different formats.
            </li>
          </ul>

          <h2>How a campus ERP supports NIRF submissions</h2>
          <p>
            NIRF, NAAC and AICTE disclosures are three views of one set of institutional records: students, faculty,
            finance, research and outcomes. When those records live in one system, with offer letters, publication
            IDs and audited expenditure captured as they happen, the annual NIRF data capture becomes a report that
            is checked rather than a data set that is built. Aveon's accreditation module maps records to NIRF
            sub-parameters alongside NAAC and NBA; see the{" "}
            <Link href="/products/iqac-naac-nba/nirf">NIRF data management</Link> page and the related{" "}
            <Link href="/blog/naac-accreditation-checklist">NAAC accreditation checklist</Link>.
          </p>

          <h2>Sources</h2>
          <ul>
            <li>
              <a href="https://www.nirfindia.org/" target="_blank" rel="noopener noreferrer">
                NIRF: ranking methodology, parameter documents and data capture formats by category
              </a>
            </li>
            <li>
              <a href="https://www.education.gov.in/" target="_blank" rel="noopener noreferrer">
                Ministry of Education, Government of India
              </a>
            </li>
          </ul>

          <div className="mt-12 rounded-lg bg-primary-50 p-8">
            <h3 className="mb-4 text-xl font-bold text-navy-900">Capture NIRF data as it happens</h3>
            <p className="mb-6 text-navy-700">
              See how faculty, research, placement and expenditure records map to NIRF sub-parameters in one system.
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
