import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Function nodes orbiting the platform hub in the intro graphic. */
const HST_NODES = ["Rooms", "Beds", "Allocation", "Attendance", "Leave", "Gate Pass", "Complaints", "Mess"];

/** Module ecosystem — four functional groups. */
const HST_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Accommodation",
    items: ["Hostel Application", "Building & Wing", "Room & Bed", "Room Allocation", "Vacancy Management", "Student & Guardian"],
  },
  {
    title: "Attendance & Movement",
    items: ["Hostel Attendance", "Biometric Attendance", "Leave", "Permission", "Gate Pass & Outing", "Complaints"],
  },
  {
    title: "Mess Members & Meals",
    items: ["Mess Members", "Mess Attendance", "Meal Timing", "Menu Calendar", "Recipe Cards"],
  },
  {
    title: "Mess Billing & Stock",
    items: ["Billing Cycle", "Bill Calculation", "Extra Sales", "Raw-Material Stock", "Purchase", "Payments"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship modules rendered as expandable accordions. */
const HST_DEEP: DeepModule[] = [
  {
    title: "Hostel Application & Allocation",
    summary: "From application to a made bed — manage accommodation end to end.",
    groups: [
      {
        items: [
          "Hostel application",
          "Student & guardian details",
          "Building, wing, room & bed management",
          "Room allocation",
          "Vacancy management",
        ],
      },
    ],
  },
  {
    title: "Hostel Attendance",
    summary: "Know who's in — with manual and biometric attendance.",
    groups: [
      {
        items: ["Hostel attendance", "Biometric attendance", "Attendance records"],
      },
    ],
  },
  {
    title: "Leave, Permission & Gate Pass",
    summary: "Structured student movement — leave, permission and outings.",
    groups: [
      {
        items: ["Leave application & approval", "Permission management", "Gate pass", "Outing permission"],
      },
    ],
  },
  {
    title: "Complaint Management",
    summary: "Every concern deserves a structured response.",
    groups: [
      {
        items: ["Student complaints", "Complaint records", "Hostel-related concerns"],
      },
    ],
  },
  {
    title: "Mess Member Management",
    summary: "Know who is using the mess — accurate member information.",
    groups: [
      {
        items: ["Mess members", "Student details", "Mess participation", "Member records"],
      },
    ],
  },
  {
    title: "Mess Attendance",
    summary: "Track meal participation — and understand daily requirements.",
    groups: [
      {
        items: ["Mess attendance", "Meal-related attendance records", "Member attendance"],
      },
    ],
  },
  {
    title: "Meal Timing & Menu Calendar",
    summary: "Organise daily meal schedules and plan the menu.",
    groups: [
      {
        label: "Meal Timing",
        items: ["Meal timings", "Mess schedules", "Meal-related information"],
      },
      {
        label: "Menu Calendar",
        items: ["Menu calendar", "Meal planning", "Daily menu information"],
      },
    ],
  },
  {
    title: "Mess Billing & Bill Calculation",
    summary: "Turn mess activity into structured billing information.",
    groups: [
      {
        items: ["Billing cycle", "Bill calculation", "Mess member information", "Extra sales", "Mess-related billing"],
      },
    ],
  },
  {
    title: "Extra Sales Management",
    summary: "Track additional mess sales beyond regular meals.",
    groups: [
      {
        items: ["Extra sales", "Sales information", "Mess-related transactions"],
      },
    ],
  },
  {
    title: "Raw-Material Stock",
    summary: "Know what you have — plan what you need.",
    groups: [
      {
        items: ["Raw-material stock", "Food inventory", "Stock information"],
      },
    ],
  },
  {
    title: "Recipe Cards",
    summary: "Standardise food preparation information.",
    groups: [
      {
        items: ["Recipe cards", "Food preparation information", "Ingredient-related information"],
      },
    ],
  },
  {
    title: "Mess Purchase & Payment",
    summary: "Organise food procurement and keep mess finance in order.",
    groups: [
      {
        label: "Purchase",
        items: ["Purchases", "Purchase information", "Food-related procurement records"],
      },
      {
        label: "Payment",
        items: ["Mess payments", "Payment records", "Purchase-related payments"],
      },
    ],
  },
];

/** Residential lifecycle — 16 stages grouped into 4 phases, rendered as a staircase. */
const HST_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Move In", range: "01–04", steps: ["Application", "Guardian Details", "Allocation", "Room & Bed"] },
  { label: "Daily Life", range: "05–08", steps: ["Attendance", "Leave", "Permission", "Gate Pass"] },
  { label: "Mess Setup", range: "09–12", steps: ["Mess Member", "Meal Timing", "Menu", "Mess Attendance"] },
  { label: "Mess Ops", range: "13–16", steps: ["Billing", "Stock", "Purchase", "Payment"] },
];

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const HST_STAKEHOLDERS = [
  { role: "Hostel Administrators", line: "Run residential ops.", text: "Monitor accommodation, allocation, attendance, leave, permissions and complaints from one place." },
  { role: "Wardens", line: "Stay connected.", text: "Manage relevant attendance, leave, permission and student movement." },
  { role: "Students", line: "Essential hostel services.", text: "Submit applications, leave requests and permissions through structured digital workflows." },
  { role: "Mess Administrators", line: "Manage the mess.", text: "Organise attendance, menus, billing, stock, purchases and payments in one place." },
  { role: "Accounts Team", line: "Organised mess finance.", text: "Handle billing cycles, bill calculation, extra sales and payment records." },
  { role: "Institution Management", line: "Residential visibility.", text: "Access organised information across accommodation and mess operations." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const hostelFaqs: { question: string; answer: string }[] = [
  {
    question: "What is Hostel Management Software?",
    answer:
      "Hostel Management Software is a digital system that helps institutions manage student accommodation, rooms, beds, attendance, leave, permissions, gate passes, complaints and related residential operations.",
  },
  {
    question: "What is Aveon Hostel & Mess Management System?",
    answer: "Aveon Hostel & Mess Management System is an integrated ERP module that helps institutions manage hostel accommodation and mess operations through one centralized platform.",
  },
  {
    question: "What hostel features are available in Aveon?",
    answer:
      "Aveon's hostel module includes hostel applications, student and guardian details, building, wing, room and bed management, room allocation, vacancy, attendance, biometric attendance, leave, permission, gate pass, outing permission and complaints.",
  },
  {
    question: "Does Aveon support biometric hostel attendance?",
    answer: "Yes. Biometric attendance is included under Aveon's hostel management.",
  },
  {
    question: "Can Aveon manage room and bed allocation?",
    answer: "Yes. Aveon includes building, wing, room and bed management, along with room allocation and vacancy functionality.",
  },
  {
    question: "Can students apply for hostel leave and permission?",
    answer: "Yes. The hostel module includes leave and permission functionality, including gate pass and outing permission.",
  },
  {
    question: "What mess management features are available?",
    answer:
      "Aveon supports mess management, mess attendance, meal timing, menu calendar, mess members, billing cycle, bill calculation, extra sales, raw-material stock, recipe cards, purchases and payments.",
  },
  {
    question: "Can Aveon manage mess billing?",
    answer: "Yes. The mess module includes billing cycle and bill calculation functionality, along with extra sales.",
  },
  {
    question: "Can the system manage food stock?",
    answer: "Yes. Aveon's mess module includes raw-material stock management.",
  },
  {
    question: "Does Aveon support recipe management?",
    answer: "Yes. Recipe cards are included within the mess management functionality.",
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

/** Hub-and-spoke graphic: the platform hub connecting every hostel & mess function. */
function ConnectedHostelGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 120;
  const pillH = 38;
  const nodes = HST_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes hst-spin { to { transform: rotate(360deg); } }
        @keyframes hst-flow { to { stroke-dashoffset: -16; } }
        @keyframes hst-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes hst-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .hst-ring { transform-box: fill-box; transform-origin: center; animation: hst-spin 90s linear infinite; }
        .hst-glow { transform-box: fill-box; transform-origin: center; animation: hst-breathe 5s ease-in-out infinite; }
        .hst-flow { stroke-dasharray: 4 12; animation: hst-flow 1.5s linear infinite; }
        .hst-node { transform-box: fill-box; transform-origin: center; animation: hst-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .hst-ring, .hst-glow, .hst-flow, .hst-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every hostel and mess function — Rooms, Beds, Allocation, Attendance, Leave, Gate Pass, Complaints and Mess — on one platform.">
        <defs>
          <radialGradient id="hst-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hst-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="hst-glow" cx={c} cy={c} r={158} fill="url(#hst-glow)" />
        <circle className="hst-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="hst-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="hst-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#hst-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="8.5" fontWeight="700" letterSpacing="1.5" fill="#d9e8ff">HOSTEL</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function HostelContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedHostelGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Platform for Campus Living
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Manage Accommodation. Organize Dining. Connect Campus Life.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                A hostel is more than rooms and a mess is more than meals. From application and room allocation to
                attendance, leave, complaints, menus, billing and stock, residential life involves hundreds of daily
                activities.
              </p>
              <p>
                Aveon Hostel &amp; Mess Management brings accommodation and dining onto one platform — part of the wider
                Aveon Campus ERP, so hostel residents stay connected to their student, academic and fee records.
              </p>
              <p className="font-semibold text-navy-800">One connected residential management system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module ecosystem ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Complete Hostel &amp; Mess Modules</h2>
          <p className="mt-3 text-lg text-navy-600">
            Everything residential life needs — grouped into four connected domains, from move-in to mess operations.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HST_GROUPS.map((g) => (
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
            {HST_DEEP.map((mod) => (
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

      {/* ── Residential lifecycle ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Residential lifecycle</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                From Application.
                <br />
                To Residential Life.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Aveon connects the whole residential journey — hostel move-in, daily life, and the mess that keeps it
                running — into one workflow.
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
            {HST_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">Hostel application</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Mess payment</span>
          </div>
        </div>
      </section>

      {/* ── Stakeholders ── */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Built for Every Hostel Stakeholder</h2>
            <p className="mt-3 text-lg text-navy-600">
              Web-based, mobile-ready and role-based — everyone signs in to exactly what matters to them.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HST_STAKEHOLDERS.map((s) => (
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
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">From Manual Hostel Administration to Digital Residential Management</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">Traditional Approach</h3>
            <p className="mt-4 text-navy-700">
              Hostel registers, room-allocation sheets, attendance registers, leave forms, gate-pass records, complaint
              and mess registers — all kept separately.
            </p>
            <p className="mt-4 font-semibold text-navy-900">= Multiple records, manual coordination</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
              {["Paper room-allocation sheets", "Manual attendance & gate passes", "Leave & complaints on forms", "Mess billing by hand", "Little residential visibility"].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">With Aveon Hostel &amp; Mess</h3>
            <p className="mt-4 text-navy-700">
              Students, hostels, rooms, beds, attendance, leave, permissions, mess, billing and stock all connect
              through one system — inside the campus ERP.
            </p>
            <p className="mt-4 font-semibold text-primary-800">= One connected residential management system</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
              {["Centralized hostel information", "Room, bed & vacancy visibility", "Biometric hostel attendance", "Structured leave, permission & gate pass", "Integrated mess billing & stock"].map((x) => (
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
            {hostelFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Manage Accommodation. Organize Dining. Connect Campus Life.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              One platform for complete hostel &amp; mess management — connected to the wider Aveon Campus ERP.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Request a Demo →
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
