import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

const MODULES: { n: string; title: string }[] = [
  { n: "01", title: "Online Grievance Registration" },
  { n: "02", title: "Anonymous & Named Complaints" },
  { n: "03", title: "Multi-Channel Intake (Portal, SMS, Email)" },
  { n: "04", title: "Category & Committee Routing" },
  { n: "05", title: "Auto-Assignment to Officers" },
  { n: "06", title: "Time-Bound Escalation & SLA" },
  { n: "07", title: "Status Tracking for the Student" },
  { n: "08", title: "Resolution, Closure & Appeal" },
  { n: "09", title: "Anti-Ragging & Safety Complaints" },
  { n: "10", title: "Grievance Redressal Committee Workspace" },
  { n: "11", title: "Audit Trail & Confidentiality" },
  { n: "12", title: "Reports, Analytics & KPIs" },
];

type Flow = { step: string; title: string; text: string };

const FLOW: Flow[] = [
  { step: "01", title: "Register", text: "A student raises a grievance from the portal, app, SMS or email, named or anonymous, with attachments." },
  { step: "02", title: "Route", text: "The system classifies it and routes it to the right committee or officer by category automatically." },
  { step: "03", title: "Track", text: "The student gets a reference number and sees live status; the officer works to a defined SLA clock." },
  { step: "04", title: "Escalate", text: "If the deadline passes, it escalates to the next authority so nothing is left unresolved." },
  { step: "05", title: "Resolve", text: "The committee records the resolution, the student can accept or appeal, and the case closes with a full audit trail." },
];

const WHY = [
  {
    title: "Meets the UGC grievance mandate",
    text: "The UGC (Redressal of Grievances of Students) Regulations require every institution to run an online grievance mechanism with a redressal committee and time-bound disposal. Aveon gives you exactly that, on the record and ready for inspection.",
  },
  {
    title: "Nothing slips",
    text: "Every grievance has an owner, an SLA and an escalation path, so complaints are resolved on time instead of lost in email and registers.",
  },
  {
    title: "Safe to speak up",
    text: "Anonymous submission, confidential handling and a dedicated anti-ragging channel mean students raise issues early, when they are still easy to fix.",
  },
  {
    title: "Evidence for accreditation",
    text: "Grievance volumes, resolution times and outcomes export straight into NAAC and NBA student-support evidence, with no scramble before a review.",
  },
];

export const grievanceFaqs: { question: string; answer: string }[] = [
  {
    question: "What is a college grievance management system?",
    answer:
      "A college grievance management system is software that lets students raise grievances online and lets the institution register, route, track, escalate and resolve them within a defined time limit. Aveon's student grievance redressal software gives colleges and universities a single online grievance cell covering academic, administrative, hostel, fee, harassment and anti-ragging complaints.",
  },
  {
    question: "Does it meet the UGC grievance redressal requirement?",
    answer:
      "Yes. The UGC (Redressal of Grievances of Students) Regulations require every higher-education institution to operate an online grievance mechanism with a Grievance Redressal Committee and time-bound disposal. Aveon provides the online portal, committee workspace, SLA clock, escalation to the next authority and the audit trail needed to demonstrate compliance.",
  },
  {
    question: "Can students submit grievances anonymously?",
    answer:
      "Yes. Students can file named or anonymous grievances from the student portal, mobile app, SMS or email, with attachments. Anonymous handling and confidentiality encourage students to report issues, including ragging and harassment, early.",
  },
  {
    question: "How does escalation and tracking work?",
    answer:
      "Each grievance is auto-assigned to the right officer or committee with a service-level deadline. The student receives a reference number and sees live status; if the deadline passes, the case escalates automatically to the next authority. Every action is time-stamped in an audit trail.",
  },
  {
    question: "Does it include an anti-ragging complaint channel?",
    answer:
      "Yes. A dedicated, confidential channel captures ragging and safety complaints and routes them to the anti-ragging committee for priority, time-bound action, separate from routine academic or administrative grievances.",
  },
  {
    question: "Is it part of the Aveon campus ERP?",
    answer:
      "Yes. Grievance management is one module of the Aveon campus platform, so it already knows your students, departments and committees. You can run it with the college or university ERP or as a standalone online grievance system.",
  },
];

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-primary-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function GrievanceContent() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 sm:pb-14 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              UGC-Ready Grievance Cell
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              An Online Grievance Management System Built for Colleges
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Every college and university in India has to run an online student grievance
                mechanism with a redressal committee and time-bound disposal. Done on email and
                registers, it is impossible to prove and easy to let slip. Aveon&apos;s grievance
                management system turns it into a clean workflow: students register online, each
                case has an owner and a deadline, and anything overdue escalates on its own.
              </p>
              <p>
                It is student grievance redressal software, an anti-ragging complaint channel and a
                committee workspace in one, connected to the same student record your campus ERP
                already uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Complete Grievance Redressal Modules
          </h2>
          <p className="mt-3 text-lg text-navy-600">
            Twelve connected parts, from the student&apos;s first complaint to the committee&apos;s
            final report.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <div
              key={m.n}
              className="group flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 shadow-card transition hover:border-primary-300 hover:shadow-md"
            >
              <span className="text-sm font-extrabold tabular-nums text-primary-400 transition group-hover:text-primary-600">
                {m.n}
              </span>
              <span className="text-sm font-semibold text-navy-800">{m.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Flow */}
      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              From Complaint to Closure, on the Record
            </h2>
            <p className="mt-3 text-lg text-navy-600">
              A single time-bound path that satisfies the UGC redressal requirement.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FLOW.map((f) => (
              <li key={f.step} className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
                <span className="text-sm font-extrabold tabular-nums text-primary-400">{f.step}</span>
                <p className="mt-1 font-bold text-navy-900">{f.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-navy-600">{f.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Why Colleges Move Grievances Onto Aveon
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-primary-700">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{w.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-navy-600">
          Grievance management is one module of the{" "}
          <Link href="/products/college-erp" className="font-semibold text-primary-600 hover:underline">
            college ERP software
          </Link>
          ; the data also feeds{" "}
          <Link href="/products/iqac-naac-nba/naac" className="font-semibold text-primary-600 hover:underline">
            NAAC
          </Link>{" "}
          student-support evidence.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {grievanceFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 group-hover:text-primary-700 group-open:text-primary-700">
                    {faq.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition group-open:rotate-180 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
