import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Lifecycle nodes orbiting the platform hub in the intro graphic. */
const COE_NODES = ["Students", "Subjects", "Fees", "Question Papers", "Schedule", "Halls", "Evaluation", "Results"];

/** Module ecosystem — four functional groups. */
const COE_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Setup & Access",
    items: ["COE / Student / Evaluator / Parent login", "Student data import", "Nominal roll generation", "Subject allocation & approval", "Regulation & syllabus", "CBCS & open electives"],
  },
  {
    title: "Fees & Question Papers",
    items: ["Fee configuration & auto-generation", "Bulk fee application & fines", "Due-date extension & reports", "Question entry, upload & types", "Question patterns & generation", "Question approval"],
  },
  {
    title: "Scheduling & Halls",
    items: ["Examination master & dates", "Theory, online & dept timetables", "Session & student-wise timetables", "Exam rooms & hall layouts", "Automatic & manual seating", "Row / column / zig-zag arrangement"],
  },
  {
    title: "Evaluation & Results",
    items: ["Internal & external marks", "Moderation", "Result processing & analysis", "Revaluation & supplementary", "Semester & consolidated mark sheets", "Course completion certificates"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship modules rendered as expandable accordions. */
const COE_DEEP: DeepModule[] = [
  {
    title: "Student & Examination Management",
    summary: "Start with accurate data — prepare the right students for the right examination.",
    groups: [
      {
        items: [
          "Student data import & examination records",
          "Subject allocation",
          "Programme, batch & semester",
          "Regulation & syllabus",
          "Nominal roll generation",
          "Subject approval",
        ],
      },
    ],
  },
  {
    title: "Examination Fee Management",
    summary: "Configure once, generate accurately, track efficiently.",
    groups: [
      {
        items: ["Fee configuration", "Automatic fee generation", "Bulk fee application", "Fine generation", "Due-date extension", "Fee reports"],
      },
    ],
  },
  {
    title: "Question Paper Management",
    summary: "Create → configure → generate → review → approve, with controlled access.",
    groups: [
      {
        items: ["Question entry & upload", "Question types", "Examination types", "Question patterns", "Question generation", "Question approval"],
      },
    ],
  },
  {
    title: "Examination Scheduling",
    summary: "One examination calendar — coordinated across programmes, batches and departments.",
    groups: [
      {
        items: [
          "Examination master & dates",
          "Programme, batch & semester selection",
          "Theory & online examination timetables",
          "Department-wise & session-wise timetables",
          "Individual student timetable",
        ],
      },
    ],
  },
  {
    title: "Online Examination",
    summary: "Create, configure and conduct digital examinations through a structured workflow.",
    groups: [
      {
        items: ["Online exam creation", "Question selection & preview", "Passcode generation", "Time validity", "Student examination"],
      },
    ],
  },
  {
    title: "Examination Hall Management",
    summary: "Organise every hall and allocate every seat — automatically.",
    groups: [
      {
        items: [
          "Exam room creation & hall layouts",
          "Room selection",
          "Automatic seating arrangement",
          "Manual room selection",
          "Row-wise, column-wise & zig-zag seating",
          "Hall allocation reports",
        ],
      },
    ],
  },
  {
    title: "Evaluation & Marks",
    summary: "Accurate marks, structured processing, better result management.",
    groups: [
      {
        items: ["Internal marks", "External marks", "Marks processing", "Moderation", "Result preparation", "Result analysis"],
      },
    ],
  },
  {
    title: "Result Processing",
    summary: "Turn examination data into official academic results.",
    groups: [
      {
        items: ["Result processing & analysis", "Semester results", "Mark sheets", "Consolidated mark sheets", "Course completion certificates"],
      },
    ],
  },
  {
    title: "Revaluation & Supplementary",
    summary: "Manage post-result processes — examinations don't end at publication.",
    groups: [
      {
        items: ["Revaluation activities", "Supplementary examination", "Eligibility handling", "Additional result processing"],
      },
    ],
  },
  {
    title: "Mark Sheets & Academic Documents",
    summary: "From examination data to official academic documentation.",
    groups: [
      {
        items: ["Semester mark sheets", "Consolidated mark sheets", "Course completion certificates"],
      },
    ],
  },
  {
    title: "COE User Management",
    summary: "Different users, appropriate access — role-based throughout.",
    groups: [
      {
        items: ["Controller of Examination", "Students", "Evaluators", "Parents", "Role-based permissions"],
      },
    ],
  },
  {
    title: "Dashboard & Reports",
    summary: "See the examination process, understand the data, act with confidence.",
    groups: [
      {
        items: [
          "Examination subjects & schedules",
          "Student information",
          "Examination marks & result analysis",
          "Fee information",
          "Hall allocation",
          "Pending activities",
        ],
      },
    ],
  },
];

/** Examination lifecycle — 11 stages across 4 phases, rendered as a staircase. */
const COE_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Preparation", range: "01–03", steps: ["Student Preparation", "Subject Allocation", "Examination Fees"] },
  { label: "Papers & Schedule", range: "04–06", steps: ["Question Papers", "Exam Schedule", "Hall Allocation"] },
  { label: "Conduct & Evaluate", range: "07–09", steps: ["Examination", "Evaluation", "Result Processing"] },
  { label: "Publish", range: "10–11", steps: ["Post-Result", "Academic Records"] },
];
/** Cumulative start index per group, so numbering runs 1..N across uneven groups. */
const JOURNEY_OFFSETS = COE_JOURNEY.reduce<number[]>((acc, _g, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + COE_JOURNEY[i - 1].steps.length);
  return acc;
}, []);
const JOURNEY_TOTAL = COE_JOURNEY.reduce((s, g) => s + g.steps.length, 0);

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const COE_STAKEHOLDERS = [
  { role: "Controller of Examination", line: "Centralize examination operations.", text: "Manage configuration, scheduling, question papers, halls, marks and results from one system." },
  { role: "Examination Staff", line: "Simplify daily administration.", text: "Reduce repetitive work through structured, connected digital workflows." },
  { role: "Evaluators", line: "Support the evaluation process.", text: "Manage relevant evaluation and marks activities through the examination system." },
  { role: "Students", line: "Stay informed.", text: "Access examination schedules, subjects, marks and results in one place." },
  { role: "Parents", line: "Follow examination progress.", text: "Access relevant examination information where configured." },
  { role: "Management", line: "See the whole exam process.", text: "Dashboards on subjects, marks, results, fees and pending activities — decide with facts." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const coeFaqs: { question: string; answer: string }[] = [
  {
    question: "What is COE software?",
    answer:
      "COE software, or Controller of Examination software, is a specialized examination management system used by colleges and universities to manage examination activities — from student preparation and scheduling to evaluation and results.",
  },
  {
    question: "What does Aveon COE software manage?",
    answer:
      "Aveon COE covers student and subject preparation, examination fees, question papers, examination scheduling, online examinations, exam halls, seating arrangements, marks, moderation, results, revaluation, supplementary examinations and academic documents.",
  },
  {
    question: "Does Aveon support examination fee management?",
    answer: "Yes. The COE module includes fee configuration, automatic fee generation, bulk fee application, fine generation, due-date extension and fee reports.",
  },
  {
    question: "Does Aveon support question paper management?",
    answer: "Yes. It includes question entry, question upload, question types, examination types, question patterns, question generation and approval.",
  },
  {
    question: "Can Aveon generate examination timetables?",
    answer:
      "Yes. Aveon supports examination dates, programme and batch selection, theory and online examination timetables, department-wise and session-wise schedules, and individual student timetables.",
  },
  {
    question: "Does Aveon support online examinations?",
    answer: "Yes. It includes online examination creation, question selection, question preview, passcode generation, time validity and student examination functionality.",
  },
  {
    question: "Can Aveon manage examination hall seating?",
    answer: "Yes. Aveon supports automatic and manual room selection, row-wise, column-wise and zig-zag seating arrangements, along with hall allocation reports.",
  },
  {
    question: "Does Aveon support revaluation and supplementary examinations?",
    answer: "Yes. Revaluation and supplementary examination functionality is part of the post-examination workflow.",
  },
  {
    question: "Can Aveon generate mark sheets?",
    answer: "Yes. Aveon generates semester mark sheets, consolidated mark sheets and course completion certificates.",
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

/** Hub-and-spoke graphic: the platform hub connecting every examination stage. */
function ConnectedCoeGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 124;
  const pillH = 38;
  const nodes = COE_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes coe-spin { to { transform: rotate(360deg); } }
        @keyframes coe-flow { to { stroke-dashoffset: -16; } }
        @keyframes coe-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes coe-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .coe-ring { transform-box: fill-box; transform-origin: center; animation: coe-spin 90s linear infinite; }
        .coe-glow { transform-box: fill-box; transform-origin: center; animation: coe-breathe 5s ease-in-out infinite; }
        .coe-flow { stroke-dasharray: 4 12; animation: coe-flow 1.5s linear infinite; }
        .coe-node { transform-box: fill-box; transform-origin: center; animation: coe-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .coe-ring, .coe-glow, .coe-flow, .coe-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every examination stage — Students, Subjects, Fees, Question Papers, Schedule, Halls, Evaluation and Results — on one platform.">
        <defs>
          <radialGradient id="coe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="coe-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="coe-glow" cx={c} cy={c} r={158} fill="url(#coe-glow)" />
        <circle className="coe-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="coe-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="coe-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#coe-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="9" fontWeight="700" letterSpacing="2" fill="#d9e8ff">COE</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function CoeContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedCoeGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Connected COE Platform
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Plan. Conduct. Evaluate. Publish.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                The Controller of Examination is one of the most critical and tightly controlled functions in higher
                education — every stage demands accuracy, confidentiality and coordination.
              </p>
              <p>
                Aveon COE brings the entire examination lifecycle onto one platform — from eligibility and fees to
                question papers, scheduling, hall seating, evaluation, results, revaluation and mark sheets — so nothing
                slips between spreadsheets.
              </p>
              <p className="font-semibold text-navy-800">One examination. One workflow. Complete control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module ecosystem ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Complete COE Management Modules</h2>
          <p className="mt-3 text-lg text-navy-600">
            Everything the examination department needs — grouped into four connected domains, from setup to mark sheets.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COE_GROUPS.map((g) => (
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
            {COE_DEEP.map((mod) => (
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

      {/* ── Examination lifecycle ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Examination lifecycle</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                One Examination.
                <br />
                One Connected Workflow.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Every exam crosses many hands. Aveon connects each stage — from student preparation to academic records
                — into one controlled workflow.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-navy-400">
              <span className="text-5xl font-extrabold leading-none text-navy-900 sm:text-6xl">{JOURNEY_TOTAL}</span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em]">
                connected
                <br />
                stages
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {COE_JOURNEY.map((group, gi) => (
              <div key={group.label} className={STAIR_OFFSET[gi]}>
                <div className="flex items-baseline gap-2 border-b-2 border-primary-600 pb-3">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-navy-900">{group.label}</span>
                  <span className="ml-auto text-xs tracking-wide text-navy-400">{group.range}</span>
                </div>
                <ul>
                  {group.steps.map((step, si) => (
                    <li key={step} className="flex items-center gap-4 border-b border-navy-100 py-3 last:border-0">
                      <span className="w-6 text-xs tabular-nums text-navy-400">{String(JOURNEY_OFFSETS[gi] + si + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-semibold text-navy-900">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-400">
            <span className="shrink-0">Student preparation</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Academic records</span>
          </div>
        </div>
      </section>

      {/* ── Stakeholders ── */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Built for Every Examination Stakeholder</h2>
            <p className="mt-3 text-lg text-navy-600">
              Web-based, mobile-ready and role-based — everyone signs in to exactly what matters to them.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COE_STAKEHOLDERS.map((s) => (
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
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">From Manual Examination Administration to Digital COE</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">Traditional Approach</h3>
            <p className="mt-4 text-navy-700">
              Student lists, subjects, fees, question papers, timetables, hall plans, seating and marks — each kept
              separately, coordinated by hand.
            </p>
            <p className="mt-4 font-semibold text-navy-900">= Multiple records, more effort</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
              {["Scattered examination records", "Manual seating & timetables", "Marks re-keyed between sheets", "Slow result processing", "Little examination-wide visibility"].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">With Aveon COE</h3>
            <p className="mt-4 text-navy-700">
              Students, subjects, fees, question papers, timetables, halls, evaluation, results and mark sheets all
              connect through one system.
            </p>
            <p className="mt-4 font-semibold text-primary-800">= One connected examination system</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
              {["Centralized examination information", "Automatic seating & scheduling", "Structured evaluation & moderation", "Faster, systematic result processing", "Live examination dashboards"].map((x) => (
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
            {coeFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Plan. Conduct. Evaluate. Publish.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              One connected COE platform for modern higher education — the whole examination lifecycle, from preparation
              to mark sheets, under complete control.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Request a COE Demo →
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
