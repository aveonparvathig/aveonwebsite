import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** The 20-module ecosystem shown as a numbered grid. */
const MODULES: { n: string; title: string }[] = [
  { n: "01", title: "Admission Management" },
  { n: "02", title: "Student Information" },
  { n: "03", title: "Academic Management" },
  { n: "04", title: "Attendance Management" },
  { n: "05", title: "OBE Management" },
  { n: "06", title: "CBCS & Open Elective" },
  { n: "07", title: "LMS & Digital Learning" },
  { n: "08", title: "Controller of Examination" },
  { n: "09", title: "Fee Management" },
  { n: "10", title: "Library Management" },
  { n: "11", title: "Hostel & Mess" },
  { n: "12", title: "HR & Payroll" },
  { n: "13", title: "Feedback & Grievance" },
  { n: "14", title: "NAAC & Institutional Data" },
  { n: "15", title: "Transport Management" },
  { n: "16", title: "Placement Management" },
  { n: "17", title: "Alumni Management" },
  { n: "18", title: "Communication" },
  { n: "19", title: "Organization Management" },
  { n: "20", title: "Dashboards & Reports" },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = {
  title: string;
  summary: string;
  groups: ModuleGroup[];
};

/** Flagship modules rendered as expandable accordions with full feature lists. */
const DEEP_MODULES: DeepModule[] = [
  {
    title: "Admission Management",
    summary: "Turn every enquiry into an enrolled student — and see exactly where each applicant stands.",
    groups: [
      {
        items: [
          "Online & offline admission",
          "Application sales",
          "Candidate enquiry & profile",
          "Qualification & contact details",
          "Course preference",
          "Candidate-to-student conversion",
          "Certificate verification",
          "Website enquiry",
          "Online payment",
          "Bulk student import (Excel & photo)",
          "Scholarship management",
          "Admission reports & student strength analysis",
        ],
      },
    ],
  },
  {
    title: "Student Information Management",
    summary: "One student, one record — academics, fees and history in a single profile that spans every year.",
    groups: [
      {
        items: [
          "Student profile & contact information",
          "Academic information & qualifications",
          "Certificates & registration / roll number",
          "Department, programme, batch, class & section",
          "Scholarship & student status",
          "Disciplinary actions, leave & grievance",
          "Self-service access to marks, timetable, attendance",
          "Library circulation history, fees, assignments & feedback",
        ],
      },
    ],
  },
  {
    title: "Academic Management",
    summary: "Bring order to the academic year — syllabus, timetables, lesson plans and performance in one place.",
    groups: [
      {
        items: [
          "Academic year & calendar",
          "Department, programme, batch & class",
          "Subject, regulation & syllabus",
          "Faculty allocation & timetable",
          "Working hours & lesson planning",
          "Lesson plan approval",
          "Teaching methods, aids & learning material",
          "Student & holiday / weekly-off management",
          "Staff replacement & student performance",
        ],
      },
    ],
  },
  {
    title: "OBE, CBCS & Open Elective",
    summary: "Prove what students actually learn — map every course to outcomes, with real credit-based choice.",
    groups: [
      {
        label: "Outcome Based Education (OBE)",
        items: ["PEO", "PO", "PEO–PO Mapping", "CO", "LO", "CO–LO Mapping", "TLO"],
      },
      {
        label: "CBCS & Open Elective",
        items: [
          "Subject creation & syllabus",
          "Faculty allocation",
          "Student allocation limits & selection",
          "Timetable & attendance",
          "Topic & lesson-plan-based coverage",
          "Syllabus-based coverage",
        ],
      },
    ],
  },
  {
    title: "Controller of Examination (COE)",
    summary: "Run the entire exam season — from question paper to final mark sheet — without a single spreadsheet.",
    groups: [
      {
        label: "Administration & Fees",
        items: [
          "COE / student / evaluator / parent logins",
          "Student data import & nominal roll",
          "Fee configuration & automatic generation",
          "Bulk fee application, fine & due-date extension",
        ],
      },
      {
        label: "Question Papers & Scheduling",
        items: [
          "Question upload, entry, types & patterns",
          "Question generation & approval",
          "Exam master & examination dates",
          "Theory, online, department & session timetables",
          "Individual student timetable",
        ],
      },
      {
        label: "Halls, Evaluation & Results",
        items: [
          "Exam rooms, layouts & automatic seating (row / column / zig-zag)",
          "Hall allocation reports",
          "Internal & external marks, moderation",
          "Result processing, analysis & revaluation",
          "Supplementary exams & mark sheets",
          "Consolidated mark sheets & course completion certificate",
        ],
      },
    ],
  },
  {
    title: "Fee Management",
    summary: "Collect fees with less friction and full transparency — structures, receipts and online payment in one flow.",
    groups: [
      {
        items: [
          "Fee types, frequency, groups & variables",
          "Fee structures & application",
          "Bulk receipts & receipt import",
          "Mess fees, bus fees & route-wise fees",
          "Student & advance receipts",
          "Online payment",
        ],
      },
    ],
  },
  {
    title: "Library Management",
    summary: "Put your whole collection at students' fingertips — catalogue, circulation and OPAC search, fully digital.",
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
    summary: "From room application to mess billing — manage residential life end to end, beds and meals included.",
    groups: [
      {
        label: "Hostel",
        items: [
          "Online application & student / guardian profile",
          "Building, wing, room & bed management",
          "Room allocation & vacancy",
          "Attendance (incl. biometric) & leave",
          "Permission, gate pass & outing permission",
          "Complaint management",
        ],
      },
      {
        label: "Mess",
        items: [
          "Mess attendance & meal timing",
          "Menu calendar & member management",
          "Billing cycle & bill calculation",
          "Extra sales & raw material stock",
          "Standard recipe cards, purchase & payments",
        ],
      },
    ],
  },
  {
    title: "HR & Payroll",
    summary: "Manage the people who run your institution — from recruitment and appraisals to payslips.",
    groups: [
      {
        label: "HR Management",
        items: [
          "Staff profile, contact, education & experience",
          "Certificates, pay scale & confidential info",
          "External staff & recruitment",
          "Interview & candidate registration",
          "Staff appraisal & performance management",
        ],
      },
      {
        label: "Payroll",
        items: [
          "Attendance, leave, permission & overtime",
          "Salary structure, allowances & deductions",
          "Salary increments & calculation",
          "Advances, salary payment & payslips",
        ],
      },
    ],
  },
  {
    title: "NAAC & Institutional Data",
    summary: "Stop scrambling before accreditation — capture NAAC data as it happens, all year, every year.",
    groups: [
      {
        label: "Department",
        items: [
          "Research projects, conferences & workshops",
          "Seminars, consultancy & extension activities",
          "MoUs, linkages, BOS & student visits",
        ],
      },
      {
        label: "Students & Faculty",
        items: [
          "Research, publications, awards & fellowships",
          "Internships, higher studies & employment",
          "Faculty memberships, FDP & indexing",
          "Books, chapters & resource-person records",
        ],
      },
    ],
  },
  {
    title: "Transport, Placement & Communication",
    summary: "Keep buses on route, students on career paths and the whole campus in the loop.",
    groups: [
      {
        label: "Transport",
        items: [
          "Bus types & driver details",
          "Services, insurance renewals & routes",
          "Trip sheets & passenger details",
        ],
      },
      {
        label: "Placement",
        items: [
          "Employer & position management",
          "Candidate filtering & online tests",
          "Interview management & placement results",
          "Alumni registration",
        ],
      },
      {
        label: "Communication",
        items: [
          "SMS templates, email & group SMS",
          "Daily / first-hour / monthly absence alerts",
          "Circulars, news, events & reminders",
        ],
      },
    ],
  },
];

/** Student lifecycle — 16 stages grouped into 4 phases, rendered as a staircase. */
const JOURNEY_GROUPS: { label: string; range: string; steps: string[] }[] = [
  { label: "Joining", range: "01–04", steps: ["Enquiry", "Application", "Admission", "Student Profile"] },
  { label: "Studying", range: "05–08", steps: ["Academics", "Timetable", "Attendance", "Learning"] },
  { label: "Assessment", range: "09–12", steps: ["Assessment", "Examination", "Results", "Fees"] },
  { label: "Campus & outcome", range: "13–16", steps: ["Library", "Hostel", "Placement", "Graduation"] },
];

/** Desktop-only ascending offset per column — echoes the original staircase. */
const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

/** Department nodes orbiting the platform hub in the intro graphic. */
const CAMPUS_NODES = [
  "Admissions",
  "Academics",
  "Exams",
  "Fees",
  "Library",
  "Hostel",
  "HR",
  "Placement",
];

const STAKEHOLDERS = [
  {
    role: "Management",
    line: "See it. Understand it. Lead it.",
    text: "Live dashboards on admissions, fees, results and staff — so you lead with facts, not guesswork.",
  },
  {
    role: "Administrators",
    line: "Less paperwork. Better control.",
    text: "Centralize records and automate the daily grind — fewer files, fewer errors, tighter control.",
  },
  {
    role: "Faculty",
    line: "Less admin. More education.",
    text: "One login for attendance, lesson plans, marks and messaging — so teaching gets the hours it deserves.",
  },
  {
    role: "Students",
    line: "Campus services at their fingertips.",
    text: "Attendance, timetable, marks, fees and assignments — everything they need, on any device.",
  },
  {
    role: "Parents",
    line: "Stay connected to the journey.",
    text: "Timely updates on attendance, results and campus news — they stay informed without chasing anyone.",
  },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const collegeErpFaqs: { question: string; answer: string }[] = [
  {
    question: "What is a College ERP?",
    answer:
      "A College ERP is an integrated platform that runs a college's academic, administrative and operational processes in one place — from admission to graduation — replacing the dozens of disconnected tools most institutions juggle today.",
  },
  {
    question: "What is the difference between College ERP and a Campus Management System?",
    answer:
      "A College ERP integrates the institution's business processes, while a Campus Management System connects academic, student and operational activities. Aveon delivers both in a single platform, so you never have to choose between them.",
  },
  {
    question: "What modules are included in Aveon College ERP?",
    answer:
      "Aveon College ERP includes admission, student management, academics, attendance, OBE, CBCS, LMS, COE, fees, library, hostel & mess, HR & payroll, feedback, NAAC data, transport, placement, alumni, communication and dashboards — twenty modules on one platform.",
  },
  {
    question: "Does Aveon College ERP include a COE system?",
    answer:
      "Yes — and in depth. Aveon's Controller of Examination module covers examination fees, subject allocation, question papers, scheduling, online examinations, exam halls, seating arrangements, attendance, internal and external marks, moderation, results, revaluation, supplementary examinations and mark sheets.",
  },
  {
    question: "Does Aveon support OBE?",
    answer:
      "Yes. Aveon supports Outcome Based Education end to end — PEO, PO, PEO–PO mapping, CO, LO, CO–LO mapping and TLO.",
  },
  {
    question: "Does Aveon support CBCS and Open Electives?",
    answer:
      "Yes. Aveon handles subject creation, syllabus, staff and student allocation, student selection, timetable, attendance and topic coverage for CBCS and Open Elective programmes.",
  },
  {
    question: "Does Aveon include Hostel and Mess Management?",
    answer:
      "Yes. Aveon manages hostel applications, buildings, rooms, beds, allocation, attendance, leave, gate passes, permissions and complaints — plus full mess operations: billing, recipes, raw materials and purchases.",
  },
  {
    question: "Does Aveon provide HR and Payroll?",
    answer:
      "Yes. Aveon covers the full employee lifecycle — staff records, recruitment, appraisals, attendance, leave, salary structures, allowances, deductions, salary processing, advances, payments and payslips.",
  },
  {
    question: "Can students access the system?",
    answer:
      "Yes. Every student gets a secure login for marks, timetable, attendance, assignments, feedback, library circulation history and fee details — on web and mobile.",
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

/** Hub-and-spoke graphic: the platform hub connecting every campus department. */
function ConnectedCampusGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 118;
  const pillH = 38;
  const nodes = CAMPUS_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes cc-spin { to { transform: rotate(360deg); } }
        @keyframes cc-flow { to { stroke-dashoffset: -16; } }
        @keyframes cc-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes cc-hubpulse { 0% { opacity:.55; transform: scale(1); } 70%,100% { opacity:0; transform: scale(1.5); } }
        @keyframes cc-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .cc-ring   { transform-box: fill-box; transform-origin: center; animation: cc-spin 90s linear infinite; }
        .cc-glow   { transform-box: fill-box; transform-origin: center; animation: cc-breathe 5s ease-in-out infinite; }
        .cc-hubpulse { transform-box: fill-box; transform-origin: center; animation: cc-hubpulse 3s ease-out infinite; }
        .cc-flow   { stroke-dasharray: 4 12; animation: cc-flow 1.5s linear infinite; }
        .cc-node   { transform-box: fill-box; transform-origin: center; animation: cc-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .cc-ring, .cc-glow, .cc-hubpulse, .cc-flow, .cc-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full"
        role="img"
        aria-label="Aveon connects every campus department — Admissions, Academics, Exams, Fees, Library, Hostel, HR and Placement — on one platform."
      >
        <defs>
          <radialGradient id="cc-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cc-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>

        {/* ambient glow (breathing) */}
        <circle className="cc-glow" cx={c} cy={c} r={158} fill="url(#cc-glow)" />
        {/* perimeter ring the nodes sit on (slow rotation) */}
        <circle className="cc-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />

        {/* base spokes */}
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {/* animated energy pulses flowing hub → node */}
        {nodes.map((n, i) => (
          <line
            key={`f-${n.label}`}
            className="cc-flow"
            x1={c}
            y1={c}
            x2={n.x}
            y2={n.y}
            stroke="#599aff"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }}
          />
        ))}

        {/* department pills (staggered entrance) */}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="cc-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect
              x={n.x - pillW / 2}
              y={n.y - pillH / 2}
              width={pillW}
              height={pillH}
              rx={pillH / 2}
              fill="#ffffff"
              stroke="#e8ecf6"
              strokeWidth="1.5"
            />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text
              x={n.x - pillW / 2 + 30}
              y={n.y + 1}
              dominantBaseline="central"
              fontSize="13.5"
              fontWeight="600"
              fill="#2a3a5f"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* platform hub */}
        <circle className="cc-hubpulse" cx={c} cy={c} r="52" fill="none" stroke="#3376ff" strokeWidth="2" />
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#cc-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">
          Aveon
        </text>
        <text
          x={c}
          y={c + 15}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="9"
          fontWeight="700"
          letterSpacing="2"
          fill="#d9e8ff"
        >
          PLATFORM
        </text>
      </svg>
    </div>
  );
}

export default function CollegeERPContent() {
  return (
    <>
      {/* ── One Digital Ecosystem — narrative intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Left: connected-campus graphic */}
          <div className="order-2 lg:order-1">
            <ConnectedCampusGraphic />
          </div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Connected Campus
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              One Platform. Every Department. One Connected Campus.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                A college doesn&apos;t run on departments. It runs on how well they talk to each
                other — how fast information moves from admission to classroom, exam hall to mark
                sheet, fee counter to management review.
              </p>
              <p>
                Aveon College ERP connects all of it on one platform. Every department, every record
                and every decision in a single system — so your team stops chasing information and
                starts acting on it.
              </p>
              <p className="font-semibold text-navy-800">
                Plan better. Operate smarter. Communicate faster. Decide with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module ecosystem grid ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Complete College ERP Modules
          </h2>
          <p className="mt-3 text-lg text-navy-600">
            Twenty modules covering every corner of campus life — tied together by one student record
            that follows the journey from enquiry to alumni.
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

      {/* ── Deep-dive modules (accordions) ── */}
      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Explore the Modules in Detail
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-navy-600">
              Open any module to see what&apos;s inside. Each one works on its own — and shares
              everything with the rest.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            {DEEP_MODULES.map((mod) => (
              <details
                key={mod.title}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_24px_50px_-20px_rgb(29_111_242_/_0.38)] open:-translate-y-0 open:border-primary-200 open:shadow-[0_24px_50px_-22px_rgb(29_111_242_/_0.3)] [&_summary::-webkit-details-marker]:hidden"
              >
                {/* sliding left accent bar */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-open:scale-y-100"
                />
                <summary className="flex cursor-pointer items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 transition-colors duration-200 group-hover:text-primary-700 group-open:text-primary-700">
                      {mod.title}
                    </h3>
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
                        {g.label && (
                          <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary-600">
                            {g.label}
                          </h4>
                        )}
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

      {/* ── Student journey — grouped staircase ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-white">
        {/* dotted-grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* top accent rule */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          {/* header */}
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Student lifecycle</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                One Student.
                <br />
                One Digital Journey.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Every stage of a student&apos;s time with you — connected, recorded and visible, from
                the first enquiry to the final degree.
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

          {/* grouped columns */}
          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {JOURNEY_GROUPS.map((group, gi) => (
              <div key={group.label} className={STAIR_OFFSET[gi]}>
                <div className="flex items-baseline gap-2 border-b-2 border-primary-600 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy-900">
                    {group.label}
                  </span>
                  <span className="ml-auto text-xs tracking-wide text-navy-400">{group.range}</span>
                </div>
                <ul>
                  {group.steps.map((step, si) => (
                    <li
                      key={step}
                      className="flex items-center gap-4 border-b border-navy-100 py-3 last:border-0"
                    >
                      <span className="w-6 text-xs tabular-nums text-navy-400">
                        {String(gi * 4 + si + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-semibold text-navy-900">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* footer rail */}
          <div className="mt-12 flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
            <span className="shrink-0">First enquiry</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Final degree</span>
          </div>
        </div>
      </section>

      {/* ── Built for every stakeholder ── */}
      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Built for Every Stakeholder
            </h2>
            <p className="mt-3 text-lg text-navy-600">
              Web-based, mobile-ready and role-based — everyone signs in to exactly what matters to
              them, and nothing that doesn&apos;t.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STAKEHOLDERS.map((s) => (
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
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            One Campus. One Platform. Everything Connected.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">Before</h3>
            <p className="mt-4 text-navy-700">
              Separate tools for admissions, academics, fees, exams, HR, hostel, library and
              placement — none of them talking to each other.
            </p>
            <p className="mt-4 font-semibold text-navy-900">= Disconnected information</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
              {[
                "Repeated data entry",
                "Fragmented information",
                "Manual processes & delayed reporting",
                "Communication gaps",
                "Limited management visibility",
              ].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">
              With Aveon
            </h3>
            <p className="mt-4 text-navy-700">
              Admissions, academics, COE, fees, library, hostel, HR and placement all read from — and
              write to — one live record.
            </p>
            <p className="mt-4 font-semibold text-primary-800">= One connected campus</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
              {[
                "Centralized information",
                "Connected workflows",
                "Digital operations & less paperwork",
                "Dashboards & reporting",
                "Complete campus perspective",
              ].map((x) => (
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
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {collegeErpFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-[0_20px_44px_-22px_rgb(29_111_242_/_0.35)] open:border-primary-200 open:shadow-[0_20px_44px_-24px_rgb(29_111_242_/_0.28)] [&_summary::-webkit-details-marker]:hidden"
              >
                {/* sliding left accent bar */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-400 to-primary-600 transition-transform duration-300 ease-out group-hover:scale-y-100 group-open:scale-y-100"
                />
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 transition-colors duration-200 group-hover:text-primary-700 group-open:text-primary-700">
                    {faq.question}
                  </h3>
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

          {/* Closing line + inline CTA */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 text-center border border-primary-100">
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">
              Build Your Connected Digital Campus with Aveon
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              One platform for admissions, academics, COE, fees, library, hostel, HR, placements,
              NAAC and analytics. See how it fits your campus in a 30-minute demo.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700"
              >
                Get a Personalized Demo →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600"
              >
                Talk to an ERP Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
