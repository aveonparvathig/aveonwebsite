import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Compare Campus ERP Vendors | Scorecard",
  description:
    "A weighted 12-criterion scorecard for comparing campus ERP vendors in India: integration, academic fit, OBE, accreditation, implementation, data ownership, hosting, support and five-year cost. With Aveon's answers to each.",
  keywords: [
    "campus ERP comparison",
    "how to choose college ERP",
    "ERP vendor evaluation scorecard",
    "college ERP vendors India",
    "Aveon vs MasterSoft",
    "education ERP selection criteria",
  ],
};

const criteria = [
  {
    name: "Single database",
    weight: 15,
    good: "Every module reads and writes the same student, staff and finance records; no sync jobs between products.",
    ask: "Show a student's fee dues from the attendance screen, live.",
    flag: "Separate logins or 'nightly sync' between modules.",
    aveon: "Fourteen products on one database and one login; adding a module later needs no migration.",
  },
  {
    name: "Indian academic fit",
    weight: 12,
    good: "Affiliating-university exam patterns, CBCS, arrears and revaluation, reservation categories and scholarship schemes handled as configuration.",
    ask: "Configure our university's internal-mark rule and revaluation window in the demo.",
    flag: "'We will customise that' for standard Indian workflows.",
    aveon: "Built in Coimbatore for Indian institutions since 2012; Anna University, VTU, JNTU and state-board patterns ship as configuration.",
  },
  {
    name: "OBE attainment",
    weight: 10,
    good: "Question-level CO tagging and automatic CO, PO and PSO attainment from marks already in the exam module.",
    ask: "Show CO attainment for a real course from last semester's marks.",
    flag: "Attainment is 'exported to Excel'.",
    aveon: "Native OBE module: outcomes, CO-PO mapping, question tagging, direct and indirect attainment and action-taken records.",
  },
  {
    name: "Accreditation reporting",
    weight: 10,
    good: "NAAC data templates by metric number with evidence attached, NBA SAR tables, AICTE and NIRF formats.",
    ask: "Generate NAAC Criterion 2 templates for the last five years in the demo.",
    flag: "A generic 'reports' module with no accreditation mapping.",
    aveon: "IQAC / NAAC / NBA module maps records to metrics with documents attached; AICTE and NIRF formats included.",
  },
  {
    name: "Implementation method",
    weight: 10,
    good: "A written week-by-week plan with named responsibilities for data cleaning, configuration, training and go-live.",
    ask: "Give us the plan and tell us who cleans the data.",
    flag: "No fixed plan, or a timeline that depends on 'your IT team'.",
    aveon: "Four-week playbook: migration, configuration, role-based training through Aveon Academy, supervised go-live on campus.",
  },
  {
    name: "Data ownership and exit",
    weight: 8,
    good: "Full export in open formats at any time, written into the contract, with a defined exit process.",
    ask: "Export all our data now, in the demo, and show the exit clause.",
    flag: "Export 'on request' or in proprietary formats only.",
    aveon: "Institution owns its data; full export available at any time; exit terms in the agreement.",
  },
  {
    name: "Hosting, backup and security",
    weight: 8,
    good: "Named cloud region, daily backups with tested restores, published uptime, role-based access and audit logs.",
    ask: "When was a restore last tested, and what was the uptime last year?",
    flag: "No restore testing; no audit log; shared admin accounts.",
    aveon: "Cloud-hosted with daily backups, role-based access and audit trails; on-premise available where mandated.",
  },
  {
    name: "Student and parent experience",
    weight: 7,
    good: "Mobile apps, online fee payment with multiple gateways, SMS and WhatsApp alerts, self-service certificates.",
    ask: "Pay a fee and download a bonafide certificate from the student app.",
    flag: "Parents and students get only a desktop portal.",
    aveon: "Student and parent portals, online payments, notifications, and an AI assistant that answers from live ERP data.",
  },
  {
    name: "Support model",
    weight: 6,
    good: "A named support contact, response targets in writing, and on-site help during exams and admissions.",
    ask: "Who do we call at 9 am on results day, and how fast do they answer?",
    flag: "Ticket-only support in another time zone.",
    aveon: "Dedicated support contact by phone and email; implementation team based in Coimbatore.",
  },
  {
    name: "Breadth beyond academics",
    weight: 5,
    good: "HR and payroll, hostel, library, inventory, canteen and grievance on the same database, available when you need them.",
    ask: "Which of these are the same product, and which are partner integrations?",
    flag: "Operations modules are resold third-party products.",
    aveon: "All fourteen modules are Aveon products on one database.",
  },
  {
    name: "References",
    weight: 5,
    good: "Three institutions of similar type, size and affiliating university who will take a call.",
    ask: "Give us three references we choose from your client list.",
    flag: "Only curated testimonials; no phone references.",
    aveon: `${siteConfig.stats.institutions} institutions; references from Tamil Nadu colleges and universities on request.`,
  },
  {
    name: "Five-year total cost",
    weight: 4,
    good: "One table covering licence or subscription, implementation, customisation, training, AMC, gateway charges and year-two modules.",
    ask: "Fill in our five-year cost template, not your price list.",
    flag: "A headline per-student price with everything else 'extra'.",
    aveon: "Quoted as a five-year total on request, scoped to your modules and enrolment.",
  },
];

const tcoRows = [
  "Licence or subscription (per year)",
  "Implementation and data migration",
  "Customisation",
  "Training",
  "Annual maintenance / support",
  "Payment-gateway and SMS charges",
  "Modules added in year 2–3",
  "Hosting (if on-premise: hardware, backup, admin)",
];

const faqs = [
  {
    q: "Which campus ERP vendors are commonly shortlisted in India?",
    a: "Institutions evaluating a campus ERP in India typically look at Aveon, MasterSoft, Camu, Creatrix Campus, Jupsoft, iCloudEMS, Academia ERP and Fedena, among others. The scorecard above applies to all of them; the useful comparison is each vendor's answers to the same questions in a live demo on your own data, not a feature checklist.",
  },
  {
    q: "Why not compare features in a tick-box table?",
    a: "Because every serious vendor ticks every box. A tick says nothing about whether a module shares the same database, handles your affiliating university's exam rules, or computes OBE attainment automatically. The questions in the scorecard are designed to surface those differences in a demo.",
  },
  {
    q: "How should we weight the criteria?",
    a: "The weights above suit a typical affiliated college. A university with heavy research reporting might raise accreditation and breadth; a school group might raise parent experience and multi-campus control. Agree the weights before the demos so vendors cannot influence them.",
  },
  {
    q: "What is a reasonable price for a college ERP in India?",
    a: "There is no single answer: pricing depends on modules, enrolment and whether it is cloud or on-premise. Insist on a five-year total using the template above from every vendor, and compare those totals.",
  },
];

export default function Comparisons() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", href: "/" },
    { name: "Compare campus ERP vendors", href: "/comparisons" },
  ]);

  return (
    <div className="min-h-dvh bg-white py-16 sm:py-20 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-extrabold leading-tight text-navy-900">
            How to Compare Campus ERP Vendors
          </h1>
          <p className="mx-auto max-w-[720px] text-lg text-navy-700">
            A weighted scorecard you can apply to any vendor, the question that exposes each criterion in a demo, and
            Aveon's answer to every one.
          </p>
        </div>

        <div className="prose prose-lg mx-auto max-w-[800px] text-navy-800">
          <h2>How to use this page</h2>
          <p>
            Feature checklists do not separate campus ERP vendors, because every serious vendor ticks every box. What
            separates them is whether the modules share one database, whether Indian academic rules are configuration
            or customisation, whether outcome attainment is computed or exported, and what the five-year cost really is.
            The scorecard below gives you twelve criteria with suggested weights, the single question that reveals each
            one in a live demo, and the answer that should worry you. Score each vendor from 0 to 5 per criterion,
            multiply by the weight, and compare totals. If you are new to the category, start with{" "}
            <Link href="/blog/what-is-campus-erp">what a campus ERP is</Link>.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-lg border border-navy-900/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-50 text-left text-navy-900">
                <th className="px-4 py-3 font-bold">Criterion</th>
                <th className="px-4 py-3 font-bold">Weight</th>
                <th className="px-4 py-3 font-bold">What good looks like</th>
                <th className="px-4 py-3 font-bold">Ask in the demo</th>
                <th className="px-4 py-3 font-bold">Red flag</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.name} className="border-t border-navy-900/10 align-top">
                  <td className="px-4 py-3 font-semibold text-navy-900">{c.name}</td>
                  <td className="px-4 py-3 text-navy-900">{c.weight}</td>
                  <td className="px-4 py-3 text-navy-700">{c.good}</td>
                  <td className="px-4 py-3 text-navy-700">{c.ask}</td>
                  <td className="px-4 py-3 text-navy-700">{c.flag}</td>
                </tr>
              ))}
              <tr className="border-t border-navy-900/10 bg-navy-50 font-semibold text-navy-900">
                <td className="px-4 py-3">Total</td>
                <td className="px-4 py-3">{criteria.reduce((s, c) => s + c.weight, 0)}</td>
                <td className="px-4 py-3" colSpan={3}>
                  Score 0–5 per criterion × weight; a perfect score is {criteria.reduce((s, c) => s + c.weight, 0) * 5}.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-lg mx-auto mt-14 max-w-[800px] text-navy-800">
          <h2>Aveon's answer to each criterion</h2>
          <p>
            We are one of the vendors you will score, so here are our answers in the same order. Every one of them can
            be checked in a demo on your own programme structure.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-[800px] overflow-x-auto rounded-lg border border-navy-900/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-50 text-left text-navy-900">
                <th className="px-4 py-3 font-bold">Criterion</th>
                <th className="px-4 py-3 font-bold">Aveon</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c) => (
                <tr key={c.name} className="border-t border-navy-900/10 align-top">
                  <td className="px-4 py-3 font-semibold text-navy-900 whitespace-nowrap">{c.name}</td>
                  <td className="px-4 py-3 text-navy-700">{c.aveon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose prose-lg mx-auto mt-14 max-w-[800px] text-navy-800">
          <h2>Five-year cost template</h2>
          <p>
            Give this table to every vendor and ask them to fill it in for your enrolment and module list. Compare the
            totals, not the headline price.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-[800px] overflow-x-auto rounded-lg border border-navy-900/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-50 text-left text-navy-900">
                <th className="px-4 py-3 font-bold">Cost line</th>
                {["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"].map((y) => (
                  <th key={y} className="px-4 py-3 text-center font-bold">
                    {y}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tcoRows.map((row) => (
                <tr key={row} className="border-t border-navy-900/10">
                  <td className="px-4 py-3 text-navy-900">{row}</td>
                  {[1, 2, 3, 4, 5].map((y) => (
                    <td key={y} className="px-4 py-3 text-center text-navy-400">
                      ₹
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-navy-900/10 bg-navy-50 font-semibold text-navy-900">
                <td className="px-4 py-3">Five-year total</td>
                <td className="px-4 py-3 text-center" colSpan={5}>
                  ₹
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose prose-lg mx-auto mt-14 max-w-[800px] text-navy-800">
          <h2>Running the comparison</h2>
          <ol>
            <li>Agree the weights internally before any vendor demo; adjust them to your institution type.</li>
            <li>Send every shortlisted vendor the same programme structure, a sample of real (anonymised) data and the cost template.</li>
            <li>Ask each vendor the twelve demo questions in the same order; score 0–5 immediately after each demo.</li>
            <li>Call three references per vendor that you choose from their client list.</li>
            <li>Compare weighted totals and five-year costs side by side, then negotiate with the top two.</li>
          </ol>

          <h2>Frequently asked questions</h2>
          {faqs.map((f) => (
            <section key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </section>
          ))}

          <h2>Related reading</h2>
          <ul>
            <li>
              <Link href="/blog/what-is-campus-erp">What is a campus ERP?</Link>
            </li>
            <li>
              <Link href="/blog/integrated-erp-vs-point-solutions">Why integrated ERP beats point solutions</Link>
            </li>
            <li>
              <Link href="/blog/erp-migration-best-practices">ERP migration best practices</Link>
            </li>
            <li>
              <Link href="/products/college-erp">Aveon College ERP</Link> ·{" "}
              <Link href="/products/university-erp">University ERP</Link> ·{" "}
              <Link href="/products/school-erp">School ERP</Link>
            </li>
          </ul>
        </div>

        <div className="mt-14 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">Score Aveon on your own data</h2>
          <p className="mb-8 text-lg opacity-90">
            A demo configured for your programme structure and affiliating university, with the twelve questions
            answered live.
          </p>
          <Link
            href="/contact#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-primary-600 hover:bg-gray-100"
          >
            Book a scorecard demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
