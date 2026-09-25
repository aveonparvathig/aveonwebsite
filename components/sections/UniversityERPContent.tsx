import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Department nodes orbiting the platform hub in the intro graphic. */
const UNI_NODES = ["Admissions", "Academics", "Examinations", "Research", "Placement", "Hostel", "Library", "Fees"];

/** Module ecosystem — four functional groups. */
const UNI_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Academic & Student",
    items: ["Admission Management", "Student Information", "Academic Management", "Attendance", "OBE", "CBCS & Open Elective", "Learning Management (LMS)"],
  },
  {
    title: "Examination & Assessment",
    items: ["Controller of Examination", "Question Papers", "Exam Scheduling", "Hall & Seating", "Marks & Moderation", "Result Processing", "Revaluation & Supplementary"],
  },
  {
    title: "Administration & Operations",
    items: ["Fee Management", "Library", "Hostel & Mess", "HR Management", "Payroll", "Transport", "Communication"],
  },
  {
    title: "Institutional Development",
    items: ["Research & Activities", "NAAC Data", "Placement", "Alumni", "Feedback & Grievance", "Reports & Analytics"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship modules rendered as expandable accordions. */
const UNI_DEEP: DeepModule[] = [
  {
    title: "Admission Management",
    summary: "Turn every enquiry into an enrolled student, organised from first contact to conversion.",
    groups: [
      {
        items: [
          "Online & offline admission",
          "Candidate enquiry & application",
          "Candidate profile & qualifications",
          "Course preference",
          "Certificate verification",
          "Online payment & candidate conversion",
          "Scholarship management",
          "Bulk student & photo import",
          "Admission reports & strength analysis",
        ],
      },
    ],
  },
  {
    title: "Student Information Management",
    summary: "One student, one complete digital record, consistent across every department.",
    groups: [
      {
        label: "Student Record",
        items: [
          "Personal & contact details",
          "Academic information & qualifications",
          "Certificates & registration / roll number",
          "Programme, department, batch & class",
          "Scholarship, discipline, leave & grievance",
        ],
      },
      {
        label: "Student Self-Service",
        items: ["Attendance & marks", "Timetable & fees", "Assignments & feedback", "Library & examination information"],
      },
    ],
  },
  {
    title: "Academic Management",
    summary: "Bring academic planning and execution into one workflow, from curriculum to performance.",
    groups: [
      {
        items: [
          "Academic year & calendar",
          "Department, programme, batch & class",
          "Subject, regulation & syllabus",
          "Faculty allocation & timetable",
          "Working hours & lesson planning",
          "Lesson-plan approval & teaching methods",
          "Learning materials & student leave",
          "Holiday, staff replacement & performance",
        ],
      },
    ],
  },
  {
    title: "OBE, CBCS & Open Elective",
    summary: "Connect curriculum, teaching and outcomes with real credit-based flexibility.",
    groups: [
      {
        label: "Outcome Based Education (OBE)",
        items: ["PEO", "PO", "PEO–PO Mapping", "CO", "LO", "CO–LO Mapping", "TLO"],
      },
      {
        label: "CBCS & Open Elective",
        items: ["Subject creation & syllabus", "Faculty & student allocation", "Student subject selection", "Timetable & attendance", "Topic, lesson-plan & syllabus coverage"],
      },
    ],
  },
  {
    title: "Learning Management System",
    summary: "Extend learning beyond the classroom with assignments, assessments and digital interaction.",
    groups: [
      {
        items: ["Online assignments", "Feedback", "Online examinations", "Learning activities", "Assignment submission", "Digital learning interaction"],
      },
    ],
  },
  {
    title: "Controller of Examination (COE)",
    summary: "Run the entire examination lifecycle: planning to final mark sheet in one workflow.",
    groups: [
      {
        label: "Administration & Configuration",
        items: [
          "COE / student / evaluator / parent access",
          "Student data import & nominal roll",
          "Examination master & types",
          "Academic sessions, subjects & regulations",
          "Marks configuration",
        ],
      },
      {
        label: "Question Papers & Scheduling",
        items: [
          "Question entry, upload, types & patterns",
          "Question generation & approval",
          "Exam dates, programme & semester selection",
          "Theory, online & student-wise timetables",
        ],
      },
      {
        label: "Halls, Evaluation & Results",
        items: [
          "Exam rooms, layouts & automatic seating (row / column / zig-zag)",
          "Internal & external marks, moderation",
          "Result processing, analysis & revaluation",
          "Supplementary exams & mark sheets",
          "Consolidated mark sheets & completion certificates",
        ],
      },
    ],
  },
  {
    title: "Fee Management",
    summary: "Bring student fees into one structured, transparent digital workflow.",
    groups: [
      {
        items: [
          "Fee types, frequency, groups & variables",
          "Fee structures & application",
          "Bulk receipts & receipt import",
          "Mess fees, bus fees & route-wise fees",
          "Student & advance receipts",
          "Online fee payment",
        ],
      },
    ],
  },
  {
    title: "Library Management",
    summary: "Manage knowledge resources digitally with catalogue, circulation and discovery.",
    groups: [
      {
        items: [
          "Catalogue, accession & author management",
          "Book quantity & supplier management",
          "Catalogue import & stock verification",
          "Journals, newspapers, magazines & subscriptions",
          "Question papers & project materials",
          "Patron categories & circulation rules",
          "Gate register, OPAC & online book search",
        ],
      },
    ],
  },
  {
    title: "Hostel & Mess Management",
    summary: "Manage campus living end to end, including accommodation, attendance and full mess operations.",
    groups: [
      {
        label: "Hostel",
        items: [
          "Application, student & guardian details",
          "Building, wing, room & bed management",
          "Room allocation & vacancy",
          "Attendance (incl. biometric) & leave",
          "Permission, gate pass & outing permission",
          "Complaint management",
        ],
      },
      {
        label: "Mess",
        items: ["Mess attendance & meal timing", "Menu calendar & members", "Billing cycle & calculation", "Extra sales & raw-material stock", "Recipe cards, purchase & payments"],
      },
    ],
  },
  {
    title: "HR & Payroll",
    summary: "Manage the people behind your institution, from recruitment to payslips.",
    groups: [
      {
        label: "HR Management",
        items: ["Staff profiles, education & experience", "Certificates & pay scale", "Recruitment & interview management", "Candidate registration", "Appraisal & performance management"],
      },
      {
        label: "Payroll",
        items: ["Attendance, leave, permission & overtime", "Salary structure, allowances & deductions", "Salary increments & calculation", "Advances, payments & payslips"],
      },
    ],
  },
  {
    title: "Research & Academic Activities",
    summary: "Build a stronger digital record of research and capture contributions as they happen.",
    groups: [
      {
        items: [
          "Research projects & consultancy",
          "Publications & awards",
          "Conferences, workshops & seminars",
          "FDP & professional activities",
          "Academic memberships",
          "Student research activities",
        ],
      },
    ],
  },
  {
    title: "NAAC & Institutional Data",
    summary: "Build accreditation readiness into everyday operations all year, not the last minute.",
    groups: [
      {
        label: "Department",
        items: ["Research, conferences & workshops", "Seminars & consultancy", "Extension activities, MoUs & linkages", "BOS & student visits"],
      },
      {
        label: "Students & Faculty",
        items: ["Research, publications & awards", "Fellowships, internships & higher studies", "Employment records", "Faculty memberships, FDP & books/chapters"],
      },
    ],
  },
  {
    title: "Placement & Alumni",
    summary: "Connect students with opportunity and stay connected beyond graduation.",
    groups: [
      {
        items: [
          "Employer & position management",
          "Candidate filtering & online tests",
          "Interview management & qualification",
          "Student positions & placement results",
          "Alumni registration",
        ],
      },
    ],
  },
  {
    title: "Transport & Communication",
    summary: "Keep the campus moving and informed, with routes on time and the right message to the right people.",
    groups: [
      {
        label: "Transport",
        items: ["Bus types & driver details", "Vehicle services & insurance renewal", "Routes, route paths & trip sheets", "Passenger & vehicle information"],
      },
      {
        label: "Communication",
        items: ["SMS templates, email & group SMS", "Absence & attendance communication", "Circulars, news & events", "Notifications & reminders"],
      },
    ],
  },
  {
    title: "Dashboards & Analytics",
    summary: "Turn institutional data into decisions and see what's happening and what needs action.",
    groups: [
      {
        items: [
          "Admissions & student attendance",
          "Fee collection",
          "COE marks & subjects",
          "Result analysis",
          "Staff & student management",
          "Payroll & pending tasks",
        ],
      },
    ],
  },
];

/** Student lifecycle — 16 stages grouped into 4 phases, rendered as a staircase. */
const UNI_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Onboarding", range: "01–04", steps: ["Enquiry", "Application", "Admission", "Registration"] },
  { label: "Academics", range: "05–08", steps: ["Academics", "Attendance", "Learning", "Assessment"] },
  { label: "Examinations", range: "09–12", steps: ["Examination", "Results", "Fees", "Library"] },
  { label: "Campus & Outcome", range: "13–16", steps: ["Hostel", "Placement", "Graduation", "Alumni"] },
];

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const UNI_STAKEHOLDERS = [
  { role: "University Management", line: "See the university as one institution.", text: "Visibility across admissions, academics, examinations, students, staff, finance and institutional activity." },
  { role: "Administration", line: "Simplify everyday operations.", text: "Bring information and workflows together in one structured, connected environment." },
  { role: "Faculty", line: "Spend more time on education.", text: "Manage academic activities, attendance, lesson plans, marks and student interaction in one place." },
  { role: "Examination Teams", line: "Bring structure to exams.", text: "Run examination operations end to end through a connected COE workflow." },
  { role: "Students", line: "Every service, digital.", text: "Attendance, timetable, marks, fees, assignments and examinations on any device." },
  { role: "Parents", line: "Stay informed.", text: "Receive relevant student and institutional communication, without chasing anyone." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const universityErpFaqs: { question: string; answer: string }[] = [
  {
    question: "What is University ERP software?",
    answer:
      "University ERP software is an integrated platform that helps institutions manage academic, administrative and operational activities through one centralized digital system, replacing the disconnected tools most universities juggle today.",
  },
  {
    question: "What is a University Management System?",
    answer:
      "A University Management System connects functions such as admissions, academics, students, examinations, fees, library, hostel, HR, placement and institutional administration on a single connected platform.",
  },
  {
    question: "What modules are included in Aveon University Management System?",
    answer:
      "Aveon covers admission, student management, academics, attendance, OBE, CBCS, LMS, COE, fees, library, hostel, mess, HR, payroll, research activities, NAAC data, transport, placement, alumni, communication and dashboards.",
  },
  {
    question: "Does Aveon have a Controller of Examination module?",
    answer:
      "Yes, in depth. Aveon's COE covers examination fees, subject management, question papers, scheduling, online examinations, exam halls, seating, marks, moderation, results, revaluation, supplementary examinations and mark sheets.",
  },
  {
    question: "Does Aveon support OBE?",
    answer: "Yes. Aveon supports Outcome Based Education end to end, covering PEO, PO, PEO–PO mapping, CO, LO, CO–LO mapping and TLO.",
  },
  {
    question: "Does Aveon support CBCS?",
    answer:
      "Yes. The CBCS and Open Elective functionality covers subject management, faculty allocation, student selection, timetable, attendance and academic coverage.",
  },
  {
    question: "Does Aveon support hostel management?",
    answer:
      "Yes. Aveon manages hostel applications, buildings, rooms, beds, allocation, attendance, leave, permissions, gate passes and complaints, plus full mess operations.",
  },
  {
    question: "Does Aveon include HR and Payroll?",
    answer:
      "Yes. Aveon covers staff information, recruitment, appraisal, attendance, leave, salary structures, allowances, deductions, salary calculation, advances, payments and payslips.",
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

/** Hub-and-spoke graphic: the platform hub connecting every university function. */
function ConnectedUniversityGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 120;
  const pillH = 38;
  const nodes = UNI_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes uni-spin { to { transform: rotate(360deg); } }
        @keyframes uni-flow { to { stroke-dashoffset: -16; } }
        @keyframes uni-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes uni-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .uni-ring { transform-box: fill-box; transform-origin: center; animation: uni-spin 90s linear infinite; }
        .uni-glow { transform-box: fill-box; transform-origin: center; animation: uni-breathe 5s ease-in-out infinite; }
        .uni-flow { stroke-dasharray: 4 12; animation: uni-flow 1.5s linear infinite; }
        .uni-node { transform-box: fill-box; transform-origin: center; animation: uni-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .uni-ring, .uni-glow, .uni-flow, .uni-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every university function: Admissions, Academics, Examinations, Research, Placement, Hostel, Library and Fees on one platform.">
        <defs>
          <radialGradient id="uni-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="uni-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="uni-glow" cx={c} cy={c} r={158} fill="url(#uni-glow)" />
        <circle className="uni-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="uni-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="uni-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="13" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#uni-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="9" fontWeight="700" letterSpacing="2" fill="#d9e8ff">UMS</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function UniversityERPContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedUniversityGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Platform. Fully Connected.
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              One University. Every Function. One Connected Platform.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                A university doesn&apos;t run through one department. It runs through an interconnected network of
                schools, programmes, faculty, students, examinations, finance, libraries, hostels, research and
                placement, all operating at once.
              </p>
              <p>
                Aveon University Management System connects them on one platform, from admission and registration to
                academics, examinations, fees, library, hostel, HR, research and placement, so your team stops
                coordinating between silos and starts acting on shared information.
              </p>
              <p className="font-semibold text-navy-800">Reduce complexity. Connect information. Improve visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module ecosystem ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">University Management System Modules</h2>
          <p className="mt-3 text-lg text-navy-600">
            Everything your university needs to run its digital operations, grouped into four connected domains,
            tied together by one student record.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {UNI_GROUPS.map((g) => (
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
              Open any module to see what&apos;s inside. Each one works on its own and shares everything with the rest.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            {UNI_DEEP.map((mod) => (
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
                One Connected University Journey.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                A student&apos;s journey crosses many departments. Aveon connects every major stage from the first
                enquiry to lifelong alumni.
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
            {UNI_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">Alumni</span>
          </div>
        </div>
      </section>

      {/* ── Stakeholders ── */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Built for Every University Stakeholder</h2>
            <p className="mt-3 text-lg text-navy-600">
              Web-based, mobile-ready and role-based: everyone signs in to exactly what matters to them.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {UNI_STAKEHOLDERS.map((s) => (
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
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">From Departmental Systems to a Connected University</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">The Old Way</h3>
            <p className="mt-4 text-navy-700">
              Separate systems for admission, academics, examination, fees, library, hostel, HR and placement, with none of
              them talking to each other.
            </p>
            <p className="mt-4 font-semibold text-navy-900">Information stays in different places</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
              {["Repeated data entry", "Scattered information", "Manual coordination & delayed reports", "Communication gaps", "Limited management visibility"].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">The Aveon Way</h3>
            <p className="mt-4 text-navy-700">
              Admission, student, academics, examination, finance, library, hostel, HR and placement all read from and
              write to one live record.
            </p>
            <p className="mt-4 font-semibold text-primary-800">One connected university</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
              {["Integrated management", "Connected workflows", "Digital operations & less paperwork", "Reporting & dashboards", "Complete institutional visibility"].map((x) => (
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
            {universityErpFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[0_20px_44px_-22px_rgb(29_111_242_/_0.35)] open:border-primary-200 open:shadow-[0_20px_44px_-24px_rgb(29_111_242_/_0.28)] [&_summary::-webkit-details-marker]:hidden"
              >
                <span aria-hidden className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-open:scale-y-100" />
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 transition-colors duration-200 group-hover:text-primary-700 group-open:text-primary-700">{faq.question}</h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition-all duration-300 group-hover:scale-110 group-hover:border-primary-300 group-hover:bg-primary-50 group-hover:text-primary-600 group-open:rotate-180 group-open:scale-100 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white group-open:shadow-[0_8px_18px_-6px_rgb(29_111_242_/_0.6)]">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 to-white p-8 text-center">
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">One University. One Platform. Everything Connected.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Connect your students, faculty, departments, examinations, administration and data on one University ERP
              built around the way universities actually work.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-600">
                Request a Personalized Demo →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Talk to Aveon Infotech
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
