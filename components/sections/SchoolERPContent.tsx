import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Function nodes orbiting the platform hub in the intro graphic. */
const SCHOOL_NODES = ["Admissions", "Academics", "Attendance", "Exams", "Fees", "Transport", "Library", "Parents"];

/** Module ecosystem — four functional groups. */
const SCHOOL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Student & Academic",
    items: ["Admission Management", "Student Information", "Class & Section", "Academic Management", "Subject & Timetable", "Attendance", "Assignments", "Teacher Management"],
  },
  {
    title: "Examination & Assessment",
    items: ["Examination Management", "Exam Scheduling", "Marks Management", "Result Management", "Report Cards", "Student Performance"],
  },
  {
    title: "Administration & Operations",
    items: ["Fee Management", "Staff Management", "Payroll", "Library", "Transport", "Communication", "Notifications", "Reports & Dashboards"],
  },
  {
    title: "Parent & Student Services",
    items: ["Student Portal", "Parent Access", "Attendance Updates", "Academic Information", "Fee Information", "School Communication"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship modules rendered as expandable accordions. */
const SCHOOL_DEEP: DeepModule[] = [
  {
    title: "Admission Management",
    summary: "Turn admission enquiries into enrollments — organised from first contact to registration.",
    groups: [
      {
        items: [
          "Online admission & enquiry",
          "Application management",
          "Candidate information & registration",
          "Student profile & qualifications",
          "Document details",
          "Admission reports & data management",
        ],
      },
    ],
  },
  {
    title: "Student Information Management",
    summary: "One student, one complete digital record — organised and role-accessible.",
    groups: [
      {
        items: [
          "Student profile & personal information",
          "Parent / guardian information & contacts",
          "Academic information, class & section",
          "Admission information & student status",
          "Certificates & documents",
          "Student services",
        ],
      },
    ],
  },
  {
    title: "Academic Management",
    summary: "Plan, teach, monitor and improve — structured tools for everyday academics.",
    groups: [
      {
        items: [
          "Academic year & calendar",
          "Classes, sections & subjects",
          "Teachers & subject allocation",
          "Timetable & lesson planning",
          "Learning activities & academic materials",
          "Class management & student performance",
          "Academic reports",
        ],
      },
    ],
  },
  {
    title: "Timetable Management",
    summary: "Build better timetables with less effort — classes, teachers and periods in sync.",
    groups: [
      {
        items: [
          "Class & teacher timetable",
          "Subject allocation",
          "Working hours & periods",
          "Class divisions",
          "Academic schedules",
          "Timetable changes",
        ],
      },
    ],
  },
  {
    title: "Attendance Management",
    summary: "Make attendance a connected part of student management — and keep parents in the loop.",
    groups: [
      {
        items: [
          "Daily, class-wise & subject-wise attendance",
          "Attendance reports & history",
          "Leave management",
          "Student absence information",
          "Attendance communication to parents",
        ],
      },
    ],
  },
  {
    title: "Examination Management",
    summary: "Manage exams from schedule to report card — one structured workflow.",
    groups: [
      {
        items: [
          "Examination creation & schedule",
          "Subject selection & exam timetable",
          "Student examination records",
          "Marks entry & management",
          "Result processing & analysis",
          "Report cards & performance reports",
        ],
      },
    ],
  },
  {
    title: "Fee Management",
    summary: "Simple for admins, transparent for parents — fee collection in one place.",
    groups: [
      {
        items: [
          "Fee types, structures & groups",
          "Fee collection & student fee records",
          "Fee receipts & outstanding fees",
          "Payment records & fee reports",
          "Online payment support (where configured)",
        ],
      },
    ],
  },
  {
    title: "Staff, HR & Payroll",
    summary: "Manage the people behind your school — from records to payslips.",
    groups: [
      {
        label: "Staff Management",
        items: ["Staff profiles & contacts", "Education & experience", "Department & designation", "Attendance, leave & permissions", "Staff performance & records"],
      },
      {
        label: "HR & Payroll",
        items: ["Salary structure, allowances & deductions", "Salary calculation & advances", "Salary payments & payslips"],
      },
    ],
  },
  {
    title: "Library Management",
    summary: "Connect students with knowledge — catalogue, circulation and search.",
    groups: [
      {
        items: [
          "Book catalogue & accession",
          "Author & supplier information",
          "Book quantity & stock verification",
          "Subscription management",
          "Patron management & circulation",
          "Library rules, book search & reports",
        ],
      },
    ],
  },
  {
    title: "Transport Management",
    summary: "From route planning to daily operations — manage school transport digitally.",
    groups: [
      {
        items: [
          "Vehicle & bus details",
          "Driver details",
          "Routes & route paths",
          "Student / passenger information",
          "Trip management",
          "Vehicle service & insurance",
          "Transport reports",
        ],
      },
    ],
  },
  {
    title: "Communication & Notifications",
    summary: "The right information to the right parent at the right time.",
    groups: [
      {
        items: [
          "SMS & email",
          "Notifications & reminders",
          "Circulars & announcements",
          "Events",
          "Attendance communication",
          "Group communication",
        ],
      },
    ],
  },
  {
    title: "Student & Parent Portal",
    summary: "Essential school information in one place — for students and families.",
    groups: [
      {
        label: "Student Services",
        items: ["Attendance & timetable", "Academic information & marks", "Examination information", "Assignments, fees & notifications"],
      },
      {
        label: "Parent Services",
        items: ["Student attendance & academic updates", "Examination information", "Fee information", "School communication & notifications"],
      },
    ],
  },
  {
    title: "Dashboards & Reports",
    summary: "Turn school data into decisions — see what's happening and what needs action.",
    groups: [
      {
        items: [
          "Student strength & admissions",
          "Attendance & fees",
          "Academic performance & exam results",
          "Staff & student information",
          "Pending activities & operational reports",
        ],
      },
    ],
  },
];

/** Student lifecycle — 16 stages grouped into 4 phases, rendered as a staircase. */
const SCHOOL_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Onboarding", range: "01–04", steps: ["Enquiry", "Application", "Admission", "Registration"] },
  { label: "Classroom", range: "05–08", steps: ["Class Allocation", "Timetable", "Attendance", "Learning"] },
  { label: "Assessment", range: "09–12", steps: ["Assignments", "Examination", "Results", "Report Cards"] },
  { label: "Outcome", range: "13–16", steps: ["Fees", "Communication", "Promotion", "Next Year"] },
];

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const SCHOOL_STAKEHOLDERS = [
  { role: "School Management", line: "See the school at a glance.", text: "Important information through dashboards, reports and centralized records — decide with facts." },
  { role: "Principal", line: "Lead with visibility.", text: "Monitor academics, students, attendance, fees, examinations, staff and daily operations." },
  { role: "Administration", line: "Simplify daily operations.", text: "Bring information and workflows together in one structured, connected environment." },
  { role: "Teachers", line: "More time teaching.", text: "Manage classes, attendance, academic activities, marks and student information in one place." },
  { role: "Students", line: "School services, digital.", text: "Academic information, attendance, timetable, examinations and assignments — on any device." },
  { role: "Parents", line: "Stay connected.", text: "Timely updates on attendance, academics, examinations, fees and school communication." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const schoolErpFaqs: { question: string; answer: string }[] = [
  {
    question: "What is School ERP software?",
    answer:
      "School ERP software is an integrated digital platform that helps schools manage student information, admissions, academics, attendance, examinations, fees, staff, communication and other operations in one place.",
  },
  {
    question: "What is a School Management System?",
    answer: "A School Management System connects the academic, administrative and operational activities of a school through one centralized platform.",
  },
  {
    question: "What modules are included in Aveon School ERP?",
    answer:
      "Aveon School ERP covers admission, student management, academics, attendance, examinations, fees, staff and HR, payroll, library, transport, communication, parent/student services and dashboards.",
  },
  {
    question: "Can teachers use Aveon School ERP?",
    answer: "Yes. Teacher-facing functions support academic activities, attendance, marks, timetable and other relevant school processes.",
  },
  {
    question: "Can parents access school information?",
    answer: "Yes. Parent-facing services provide relevant information such as attendance, academic updates, examinations, fees and school communication.",
  },
  {
    question: "Can schools manage transportation?",
    answer: "Yes. Aveon includes transport capabilities such as vehicle, driver, route, trip and passenger management.",
  },
  {
    question: "Can the system manage staff and payroll?",
    answer:
      "Yes. Aveon includes employee attendance, leave, salary structures, allowances, deductions, salary calculation, advances, payments and payslips.",
  },
];

/* ──────────────────────────────────────────────────────────────
   Presentational helpers
   ────────────────────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/** Hub-and-spoke graphic: the platform hub connecting every school function. */
function ConnectedSchoolGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 120;
  const pillH = 38;
  const nodes = SCHOOL_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes sch-spin { to { transform: rotate(360deg); } }
        @keyframes sch-flow { to { stroke-dashoffset: -16; } }
        @keyframes sch-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes sch-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .sch-ring { transform-box: fill-box; transform-origin: center; animation: sch-spin 90s linear infinite; }
        .sch-glow { transform-box: fill-box; transform-origin: center; animation: sch-breathe 5s ease-in-out infinite; }
        .sch-flow { stroke-dasharray: 4 12; animation: sch-flow 1.5s linear infinite; }
        .sch-node { transform-box: fill-box; transform-origin: center; animation: sch-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .sch-ring, .sch-glow, .sch-flow, .sch-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every school function — Admissions, Academics, Attendance, Exams, Fees, Transport, Library and Parents — on one platform.">
        <defs>
          <radialGradient id="sch-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sch-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="sch-glow" cx={c} cy={c} r={158} fill="url(#sch-glow)" />
        <circle className="sch-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="sch-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="sch-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="13" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#sch-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="8.5" fontWeight="700" letterSpacing="1.5" fill="#d9e8ff">SCHOOL</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function SchoolERPContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedSchoolGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Connected School
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              One School. One Platform. Everything Connected.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Running a modern school means bringing together students, teachers, parents, academics, examinations,
                fees, attendance, transport, communication and administration.
              </p>
              <p>
                Aveon School ERP connects the essential functions on one integrated platform — from admission and
                academics to attendance, examinations, fees, communication and administration — so your school stops
                moving information between systems and starts running as one.
              </p>
              <p className="font-semibold text-navy-800">Manage smarter. Teach better. Connect everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module ecosystem ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Complete School ERP Modules</h2>
          <p className="mt-3 text-lg text-navy-600">
            Everything your school needs — grouped into four connected domains, tied together by one student record.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SCHOOL_GROUPS.map((g) => (
            <div key={g.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary-600">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-navy-800">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Deep-dive accordions ── */}
      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Explore the Modules in Detail</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-navy-600">
              Open any module to see what&apos;s inside. Each one works on its own — and shares everything with the rest.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            {SCHOOL_DEEP.map((mod) => (
              <details
                key={mod.title}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_24px_50px_-20px_rgb(29_111_242_/_0.38)] open:-translate-y-0 open:border-primary-200 open:shadow-[0_24px_50px_-22px_rgb(29_111_242_/_0.3)] [&_summary::-webkit-details-marker]:hidden"
              >
                <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-open:scale-y-100" />
                <summary className="flex cursor-pointer items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 transition-colors duration-200 group-hover:text-primary-700 group-open:text-primary-700">{mod.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{mod.summary}</p>
                  </div>
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-300 group-hover:bg-primary-50 group-hover:text-primary-600 group-open:rotate-45 group-open:scale-100 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white group-open:shadow-[0_8px_18px_-6px_rgb(29_111_242_/_0.6)]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-navy-100 px-6 py-5">
                  <div className="space-y-5">
                    {mod.groups.map((g, gi) => (
                      <div key={g.label ?? gi}>
                        {g.label && <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary-600">{g.label}</h4>}
                        <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                          {g.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                              <CheckIcon />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student journey ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Student lifecycle</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                One Student.
                <br />
                One Connected Digital Journey.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                A student&apos;s school journey creates information across many departments. Aveon brings that journey
                together — from the first enquiry to the next academic year.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-navy-400">
              <span className="text-5xl font-extrabold leading-none text-navy-900 sm:text-6xl">16</span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em]">
                connected
                <br />
                stages
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {SCHOOL_JOURNEY.map((group, gi) => (
              <div key={group.label} className={STAIR_OFFSET[gi]}>
                <div className="flex items-baseline gap-2 border-b-2 border-primary-600 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy-900">{group.label}</span>
                  <span className="ml-auto text-xs tracking-wide text-navy-400">{group.range}</span>
                </div>
                <ul>
                  {group.steps.map((step, si) => (
                    <li key={step} className="flex items-center gap-4 border-b border-navy-100 py-3 last:border-0">
                      <span className="w-6 text-xs tabular-nums text-navy-400">{String(gi * 4 + si + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-semibold text-navy-900">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
            <span className="shrink-0">First enquiry</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Next academic year</span>
          </div>
        </div>
      </section>

      {/* ── Stakeholders ── */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Built for Everyone in Your School</h2>
            <p className="mt-3 text-lg text-navy-600">
              Web-based, mobile-ready and role-based — everyone signs in to exactly what matters to them.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SCHOOL_STAKEHOLDERS.map((s) => (
              <div key={s.role} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-primary-700">{s.role}</h3>
                <p className="mt-1 font-semibold text-navy-800">{s.line}</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before → After ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">From Multiple Processes to One Connected School</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">Traditional School Management</h3>
            <p className="mt-4 text-navy-700">
              Separate processes for admission, academics, attendance, examination, fees, library, transport and staff —
              none of them connected.
            </p>
            <p className="mt-4 font-semibold text-navy-900">= Different processes, different information</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
              {["More administrative work", "Repeated data entry", "Manual coordination", "Communication gaps", "Delayed reports"].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">With Aveon School ERP</h3>
            <p className="mt-4 text-navy-700">
              Admission, students, academics, attendance, examination, fees, library, transport, staff and parents all
              connect through one platform.
            </p>
            <p className="mt-4 font-semibold text-primary-800">= One connected school</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
              {["Complete school management", "Centralized student information", "Connected operations", "Digital workflows & less paperwork", "Better parent communication"].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {schoolErpFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[0_20px_44px_-22px_rgb(29_111_242_/_0.35)] open:border-primary-200 open:shadow-[0_20px_44px_-24px_rgb(29_111_242_/_0.28)] [&_summary::-webkit-details-marker]:hidden"
              >
                <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-open:scale-y-100" />
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 transition-colors duration-200 group-hover:text-primary-700 group-open:text-primary-700">{faq.question}</h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-300 group-hover:bg-primary-50 group-hover:text-primary-600 group-open:rotate-45 group-open:scale-100 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white group-open:shadow-[0_8px_18px_-6px_rgb(29_111_242_/_0.6)]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-8 text-center">
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">One School. One Platform. Everything Connected.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Less paperwork, less repetition, better communication and clearer visibility — a smarter way to manage your
              school, built around the way schools actually work.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Get a Free Demo →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Talk to a School ERP Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
