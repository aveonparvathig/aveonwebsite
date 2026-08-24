import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Function nodes orbiting the platform hub in the intro graphic. */
const HRM_NODES = ["Recruitment", "Onboarding", "Attendance", "Leave", "Payroll", "Compliance", "Appraisal", "Self-Service"];

/** Module ecosystem — four functional groups. */
const HRM_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Core HR",
    items: ["Recruitment", "Onboarding", "Employee Records", "Documents", "Appraisal", "Performance"],
  },
  {
    title: "Time & Attendance",
    items: ["Attendance", "Biometric Integration", "Shifts", "Leave", "Permission", "Overtime"],
  },
  {
    title: "Payroll & Compensation",
    items: ["Salary Structure", "Allowances", "Deductions", "Payroll Processing", "Payslips", "Loans & Advances"],
  },
  {
    title: "Compliance & Self-Service",
    items: ["PF / ESI / PT / TDS", "Form 16 & Challans", "Employee Portal", "Tax Declaration", "Reports & Dashboards"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship modules rendered as expandable accordions. */
const HRM_DEEP: DeepModule[] = [
  {
    title: "Recruitment & Onboarding",
    summary: "Turn a vacancy into a productive hire — from requisition to first payslip.",
    groups: [
      {
        items: [
          "Job requisition & posting",
          "Candidate registration & shortlisting",
          "Interview management & scheduling",
          "Offer generation",
          "Document collection & verification",
          "Onboarding checklist & employee ID",
        ],
      },
    ],
  },
  {
    title: "Employee Records",
    summary: "One employee, one complete digital file — accurate and role-accessible.",
    groups: [
      {
        items: [
          "Staff profile & personal details",
          "Contact, education & experience",
          "Certificates & documents",
          "Department, designation & pay scale",
          "Confidential information",
          "Employment history & status",
        ],
      },
    ],
  },
  {
    title: "Attendance Management",
    summary: "Capture time accurately — and feed it straight into payroll.",
    groups: [
      {
        items: [
          "Daily attendance & biometric / device integration",
          "Shifts & roster management",
          "On-duty (OD) & permission",
          "Overtime & regularization",
          "Attendance-to-payroll linkage",
          "Attendance reports",
        ],
      },
    ],
  },
  {
    title: "Leave & Permission",
    summary: "Clear leave policy, self-service application and approvals in one flow.",
    groups: [
      {
        items: [
          "Leave types & policy configuration",
          "Leave balance & accrual",
          "Online leave application & approval workflow",
          "Permission & compensatory off",
          "Holiday & weekly-off management",
          "Leave reports",
        ],
      },
    ],
  },
  {
    title: "Salary Structure & Compensation",
    summary: "Design pay the way your institution works — components, CTC and revisions.",
    groups: [
      {
        items: [
          "Pay scale & salary structure",
          "Earnings & allowances",
          "Deductions & salary components",
          "CTC configuration",
          "Salary revisions & arrears",
        ],
      },
    ],
  },
  {
    title: "Payroll Processing",
    summary: "Run accurate, on-time payroll — attendance in, payslips and bank advice out.",
    groups: [
      {
        items: [
          "Attendance-linked salary calculation",
          "Bulk payroll processing",
          "Arrears, bonus & incentives",
          "Payslip generation",
          "Bank transfer advice",
          "Payroll registers & reports",
        ],
      },
    ],
  },
  {
    title: "Statutory Compliance",
    summary: "Stay audit-ready all year — statutory deductions, filings and forms handled.",
    groups: [
      {
        items: [
          "Provident Fund (PF)",
          "ESI & Professional Tax (PT)",
          "Income Tax / TDS",
          "Form 16 & challans",
          "Statutory reports",
        ],
      },
    ],
  },
  {
    title: "Loans & Advances",
    summary: "Manage salary advances and staff loans with automatic recovery.",
    groups: [
      {
        items: ["Salary advances", "Loan management", "EMI scheduling & recovery", "Advance & loan reports"],
      },
    ],
  },
  {
    title: "Appraisal & Performance",
    summary: "Connect performance to growth — appraisals, increments and promotions.",
    groups: [
      {
        items: ["Appraisal cycles", "KRA / KPI & performance management", "Staff appraisal", "Salary increments", "Promotions"],
      },
    ],
  },
  {
    title: "Employee Self-Service",
    summary: "Give every employee their HR desk on any device.",
    groups: [
      {
        items: [
          "Employee portal",
          "Payslip download",
          "Leave application & balance",
          "Attendance view",
          "Tax declaration",
          "Profile & document updates",
        ],
      },
    ],
  },
  {
    title: "Reports & Analytics",
    summary: "Turn workforce data into decisions — cost, compliance and headcount at a glance.",
    groups: [
      {
        items: [
          "Payroll register & salary cost",
          "Headcount & attrition",
          "Attendance & leave analytics",
          "Statutory & compliance reports",
          "HR dashboards",
        ],
      },
    ],
  },
];

/** Employee lifecycle — 16 stages grouped into 4 phases, rendered as a staircase. */
const HRM_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Hiring", range: "01–04", steps: ["Requisition", "Interview", "Offer", "Onboarding"] },
  { label: "Working", range: "05–08", steps: ["Attendance", "Leave", "Overtime", "Appraisal"] },
  { label: "Payroll", range: "09–12", steps: ["Salary Structure", "Payroll Run", "Deductions", "Payslip"] },
  { label: "Growth & Exit", range: "13–16", steps: ["Compliance", "Increment", "Promotion", "Exit"] },
];

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const HRM_STAKEHOLDERS = [
  { role: "Management", line: "See your workforce & cost.", text: "Visibility into headcount, payroll cost, attendance and compliance — decide with facts." },
  { role: "HR Team", line: "Less admin, more people.", text: "Recruitment, records, leave and appraisals in one connected environment." },
  { role: "Finance & Payroll", line: "Accurate, on-time pay.", text: "Salary processing, statutory compliance and bank advice, without spreadsheets." },
  { role: "Department Heads", line: "Approve and track your team.", text: "Attendance, leave approvals and team performance in one view." },
  { role: "Employees", line: "Everything self-service.", text: "Payslips, leave, attendance and tax declaration — on any device." },
  { role: "Auditors & Compliance", line: "Audit-ready records.", text: "Statutory reports, PF / ESI / TDS and Form 16 available on demand." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const hrmPayrollFaqs: { question: string; answer: string }[] = [
  {
    question: "What is HR & Payroll software?",
    answer:
      "HR & Payroll software (HRMS) is an integrated platform that manages recruitment, employee records, attendance, leave, salary structures, payroll processing, statutory compliance, payslips and employee self-service in one place.",
  },
  {
    question: "Does Aveon handle statutory compliance like PF, ESI and TDS?",
    answer: "Yes. Aveon covers Provident Fund (PF), ESI, Professional Tax (PT), Income Tax / TDS, Form 16 and statutory challans and reports.",
  },
  {
    question: "Can attendance integrate with payroll?",
    answer:
      "Yes. Attendance — including biometric / device data, shifts, overtime and leave — feeds directly into salary calculation, so payroll reflects actual time worked.",
  },
  {
    question: "Does it support employee self-service?",
    answer: "Yes. Employees get a self-service portal to download payslips, apply for leave, view attendance, submit tax declarations and update their profile.",
  },
  {
    question: "Can Aveon manage leave and attendance policies?",
    answer: "Yes. Aveon supports configurable leave types and policies, leave balances, online applications and approval workflows, plus daily attendance, shifts, permission and overtime.",
  },
  {
    question: "Does it generate payslips and Form 16?",
    answer: "Yes. Aveon generates payslips per payroll run and supports Form 16 along with statutory challans and reports.",
  },
  {
    question: "Is Aveon HR & Payroll suitable for educational institutions?",
    answer:
      "Yes. Aveon HR & Payroll is built for institutions of every size and connects with the wider Aveon campus platform, so staff, attendance and payroll stay in sync with the rest of your operations.",
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

/** Hub-and-spoke graphic: the platform hub connecting every HR & payroll function. */
function ConnectedHrmGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 122;
  const pillH = 38;
  const nodes = HRM_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes hrm-spin { to { transform: rotate(360deg); } }
        @keyframes hrm-flow { to { stroke-dashoffset: -16; } }
        @keyframes hrm-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes hrm-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .hrm-ring { transform-box: fill-box; transform-origin: center; animation: hrm-spin 90s linear infinite; }
        .hrm-glow { transform-box: fill-box; transform-origin: center; animation: hrm-breathe 5s ease-in-out infinite; }
        .hrm-flow { stroke-dasharray: 4 12; animation: hrm-flow 1.5s linear infinite; }
        .hrm-node { transform-box: fill-box; transform-origin: center; animation: hrm-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .hrm-ring, .hrm-glow, .hrm-flow, .hrm-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every HR and payroll function — Recruitment, Onboarding, Attendance, Leave, Payroll, Compliance, Appraisal and Self-Service — on one platform.">
        <defs>
          <radialGradient id="hrm-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hrm-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="hrm-glow" cx={c} cy={c} r={158} fill="url(#hrm-glow)" />
        <circle className="hrm-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="hrm-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="hrm-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#hrm-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="9" fontWeight="700" letterSpacing="2" fill="#d9e8ff">HRMS</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function HrmPayrollContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedHrmGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              HR &amp; Payroll, Connected
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              One System. Every Employee. From Hire to Payslip.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Managing people means connecting recruitment, records, attendance, leave, payroll and compliance —
                usually spread across spreadsheets and disconnected tools.
              </p>
              <p>
                Aveon HR &amp; Payroll brings the entire employee lifecycle onto one platform. Attendance flows into
                payroll, leave and compliance stay in sync, and every employee gets self-service — so HR spends less
                time on admin and more time on people.
              </p>
              <p className="font-semibold text-navy-800">Hire faster. Pay accurately. Stay compliant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module ecosystem ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Complete HR &amp; Payroll Modules</h2>
          <p className="mt-3 text-lg text-navy-600">
            Everything you need to manage your workforce — grouped into four connected domains, tied together by one
            employee record.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HRM_GROUPS.map((g) => (
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
            {HRM_DEEP.map((mod) => (
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

      {/* ── Employee journey ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Employee lifecycle</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                One Employee.
                <br />
                One Connected Record.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                From the first interview to every payslip, Aveon connects each stage of an employee&apos;s time with
                you — hiring, attendance, payroll and growth.
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
            {HRM_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">First interview</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Every payslip</span>
          </div>
        </div>
      </section>

      {/* ── Stakeholders ── */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Built for Everyone in HR &amp; Payroll</h2>
            <p className="mt-3 text-lg text-navy-600">
              Web-based, mobile-ready and role-based — everyone signs in to exactly what matters to them.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HRM_STAKEHOLDERS.map((s) => (
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
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">From Spreadsheet Payroll to One Connected HR System</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">The Old Way</h3>
            <p className="mt-4 text-navy-700">
              Attendance in one sheet, leave in another, salary in a third, compliance done by hand — nothing talks to
              anything.
            </p>
            <p className="mt-4 font-semibold text-navy-900">= Manual, error-prone payroll</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
              {["Re-keying attendance into payroll", "Manual leave & balance tracking", "Compliance calculated by hand", "Payslips emailed one by one", "Little workforce visibility"].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">The Aveon Way</h3>
            <p className="mt-4 text-navy-700">
              Recruitment, attendance, leave, payroll, compliance and self-service all read from — and write to — one
              employee record.
            </p>
            <p className="mt-4 font-semibold text-primary-800">= Accurate, on-time, compliant payroll</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
              {["Attendance flows straight to payroll", "Automated leave & balances", "PF / ESI / TDS handled automatically", "Payslips & self-service on any device", "Live cost & compliance dashboards"].map((x) => (
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
            {hrmPayrollFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">One System for Your Entire Workforce.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              From hire to payslip — recruitment, attendance, payroll, compliance and self-service on one connected HR &amp;
              Payroll platform.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Get a Free Demo →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Talk to an HR &amp; Payroll Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
