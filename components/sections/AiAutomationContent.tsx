import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Capability nodes orbiting the AI hub in the intro graphic. */
const AI_NODES = ["Documents", "Data", "Approvals", "Email", "Workflows", "Support", "Systems", "Oversight"];

/** A typical AI-powered workflow, shown as a connected flow. */
const AI_FLOW = ["Input", "AI Understands", "AI Processes", "Decision", "Automation", "Action", "Notification", "Result"];

/** Capability ecosystem — four functional groups. */
const AI_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Document & Data",
    items: ["Document classification", "Data extraction", "Information validation", "Data-entry automation"],
  },
  {
    title: "Workflow & Approvals",
    items: ["Workflow automation", "Request routing", "Intelligent approvals", "Business-rule decisions"],
  },
  {
    title: "Communication & Support",
    items: ["Email classification", "Ticket automation", "Response workflows", "Notifications & follow-ups"],
  },
  {
    title: "Orchestration & Oversight",
    items: ["System integration", "Multi-app workflows", "Human-in-the-loop", "Exception escalation"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship capabilities rendered as expandable accordions. */
const AI_DEEP: DeepModule[] = [
  {
    title: "Intelligent Document Automation",
    summary: "Read the document, understand the information, trigger the process.",
    groups: [
      {
        items: [
          "Document classification",
          "Data extraction",
          "Information validation",
          "Document routing",
          "Approval workflows",
          "Data-entry automation",
          "Document-based decisions",
        ],
      },
    ],
  },
  {
    title: "AI-Powered Workflow Automation",
    summary: "Connect a process from beginning to end — less manual intervention, faster completion.",
    groups: [
      {
        items: [
          "AI reads the request",
          "Classifies the request",
          "Checks information",
          "Routes to the right department",
          "Triggers approval",
          "Updates the system",
          "Notifies the customer",
        ],
      },
    ],
  },
  {
    title: "Intelligent Approvals",
    summary: "AI assists the process. Your business defines the rules.",
    groups: [
      {
        items: ["Purchase approvals", "Expense approvals", "Leave approvals", "Customer & vendor requests", "Document approvals", "Department & management approvals"],
      },
    ],
  },
  {
    title: "AI Data Processing",
    summary: "Turn unstructured information into usable, structured data.",
    groups: [
      {
        label: "From",
        items: ["Email", "PDF", "Document", "Form", "Message", "Uploaded file"],
      },
      {
        label: "To",
        items: ["Structured data", "Business rule", "Workflow", "Action"],
      },
    ],
  },
  {
    title: "Email & Communication Automation",
    summary: "Turn incoming messages into actionable workflows.",
    groups: [
      {
        items: ["Email classification", "Request identification", "Data extraction", "Department routing", "Response workflows", "Notifications & follow-ups"],
      },
    ],
  },
  {
    title: "AI-Powered Customer Service",
    summary: "AI handles the routine. Your team handles what matters.",
    groups: [
      {
        items: ["Customer enquiries", "Support requests", "Complaint registration", "Ticket classification", "Request routing", "FAQ responses", "Follow-up & service notifications"],
      },
    ],
  },
  {
    title: "Workflow Orchestration",
    summary: "One workflow, multiple systems, one connected process.",
    groups: [
      {
        items: ["CRM & ERP", "HRMS & Accounting", "E-commerce & Helpdesk", "Email & Documents", "Databases", "Custom integrations"],
      },
    ],
  },
  {
    title: "AI + Human Collaboration",
    summary: "Automation doesn't replace people — it makes them more effective.",
    groups: [
      {
        label: "AI handles",
        items: ["Reading", "Classifying", "Extracting", "Routing", "Checking", "Summarizing"],
      },
      {
        label: "People handle",
        items: ["Judgment", "Exceptions", "Approvals", "Strategy", "Complex decisions"],
      },
    ],
  },
];

/** Industries served — a horizontal platform, not industry-specific. */
const INDUSTRIES: { name: string; uses: string[] }[] = [
  { name: "Banking & Financial", uses: ["Document processing", "Customer onboarding", "Verification", "Approvals"] },
  { name: "Healthcare", uses: ["Patient documentation", "Claims processing", "Appointments", "Classification"] },
  { name: "Manufacturing", uses: ["Purchase workflows", "Quality processes", "Inventory", "Approvals"] },
  { name: "Education", uses: ["Admissions", "Student services", "HR workflows", "Exam processes"] },
  { name: "Retail & E-Commerce", uses: ["Order processing", "Customer service", "Invoices", "Returns"] },
  { name: "Real Estate", uses: ["Lead processing", "Document management", "Enquiries", "Approvals"] },
  { name: "Logistics", uses: ["Order processing", "Shipment docs", "Delivery workflows", "Invoices"] },
  { name: "IT & Software", uses: ["Service requests", "Support workflows", "Onboarding", "Ticket automation"] },
  { name: "Professional Services", uses: ["Client onboarding", "Document processing", "Approvals", "Reporting"] },
];

/** AI Automation lifecycle — 7 stages across 4 phases, rendered as a staircase. */
const AI_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Input", range: "01–02", steps: ["Capture", "Understand"] },
  { label: "Decision", range: "03–04", steps: ["Validate", "Decide"] },
  { label: "Action", range: "05–06", steps: ["Execute", "Escalate"] },
  { label: "Outcome", range: "07", steps: ["Complete"] },
];
const JOURNEY_OFFSETS = AI_JOURNEY.reduce<number[]>((acc, _g, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + AI_JOURNEY[i - 1].steps.length);
  return acc;
}, []);
const JOURNEY_TOTAL = AI_JOURNEY.reduce((s, g) => s + g.steps.length, 0);

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

/** Departments that benefit from automation. */
const DEPARTMENTS: { name: string; text: string }[] = [
  { name: "Finance", text: "Invoice processing, expense workflows and payment approvals." },
  { name: "HR", text: "Onboarding, leave, recruitment and document processing." },
  { name: "Sales", text: "Lead processing, quotations, follow-ups and communication." },
  { name: "Marketing", text: "Content workflows, campaign processes and lead routing." },
  { name: "Operations", text: "Requests, approvals, task assignment and workflows." },
  { name: "Procurement", text: "Purchase requests, vendor documents and approvals." },
  { name: "Customer Support", text: "Ticket classification, routing, responses and escalation." },
  { name: "Management", text: "Reports, approvals, alerts and operational visibility." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const aiAutomationFaqs: { question: string; answer: string }[] = [
  {
    question: "What is AI Process Automation?",
    answer:
      "AI Process Automation combines artificial intelligence with workflow automation to understand information, process data, make workflow decisions and execute repetitive business processes with reduced manual intervention.",
  },
  {
    question: "What can Aveon AI Process Automation automate?",
    answer:
      "Aveon can be positioned for document processing, approvals, data entry, customer requests, email workflows, employee processes, procurement, support, reporting and other repetitive business workflows.",
  },
  {
    question: "Is Aveon Process Automation only for educational institutions?",
    answer: "No. Aveon AI Process Automation is a cross-industry platform that can be applied to business processes across multiple industries and departments.",
  },
  {
    question: "Can AI work together with human employees?",
    answer: "Yes. AI handles repetitive processing while humans remain responsible for approvals, exceptions, judgment-based decisions and sensitive actions.",
  },
  {
    question: "Can Aveon connect multiple business systems?",
    answer:
      "It can be designed around workflow orchestration and integrations so information can move between different applications and processes, subject to the available connectors and implementation scope.",
  },
  {
    question: "How do I start with AI automation?",
    answer:
      "Identify a repetitive, high-volume process, map the current workflow, define the desired outcome and automate incrementally. Aveon is then configured around your specific workflow requirements.",
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

/** Hub-and-spoke graphic: the AI hub connecting every automation capability. */
function ConnectedAiGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 120;
  const pillH = 38;
  const nodes = AI_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes ai-spin { to { transform: rotate(360deg); } }
        @keyframes ai-flow { to { stroke-dashoffset: -16; } }
        @keyframes ai-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes ai-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .ai-ring { transform-box: fill-box; transform-origin: center; animation: ai-spin 90s linear infinite; }
        .ai-glow { transform-box: fill-box; transform-origin: center; animation: ai-breathe 5s ease-in-out infinite; }
        .ai-flow { stroke-dasharray: 4 12; animation: ai-flow 1.5s linear infinite; }
        .ai-node { transform-box: fill-box; transform-origin: center; animation: ai-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .ai-ring, .ai-glow, .ai-flow, .ai-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon AI connects every automation capability — Documents, Data, Approvals, Email, Workflows, Support, Systems and Oversight — on one platform.">
        <defs>
          <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ai-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="ai-glow" cx={c} cy={c} r={158} fill="url(#ai-glow)" />
        <circle className="ai-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="ai-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="ai-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#ai-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="18" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="10" fontWeight="800" letterSpacing="2" fill="#d9e8ff">AI</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function AiAutomationContent() {
  return (
    <>
      {/* ── Intro / What is ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedAiGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              Intelligent Automation
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Turn Manual Workflows into Intelligent Digital Processes.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Traditional automation follows predefined rules. AI-powered automation goes further — it can understand
                information, analyze documents, classify requests, extract data, make workflow decisions and trigger the
                next action based on your business logic.
              </p>
              <p>
                From small businesses to large enterprises, Aveon automates processes across departments, systems and
                industries — reducing repetitive work and freeing people for higher-value decisions.
              </p>
              <p className="font-semibold text-navy-800">AI that understands your process. Automation that gets work done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Typical workflow flow ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">A Typical AI-Powered Workflow</h2>
          <p className="mt-3 text-lg text-navy-600">From human-driven processes to intelligent, connected workflows.</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {AI_FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-800 shadow-card">{step}</span>
              {i < AI_FLOW.length - 1 && (
                <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Capability ecosystem ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">What Aveon AI Automates</h2>
            <p className="mt-3 text-lg text-navy-600">One AI automation platform — grouped into four connected capability domains.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {AI_GROUPS.map((g) => (
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
        </div>
      </section>

      {/* ── Deep-dive accordions ── */}
      <section className="border-y border-navy-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Explore the Capabilities in Detail</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-navy-600">
              Open any capability to see what&apos;s inside. Each works on its own — and connects into one intelligent
              workflow.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            {AI_DEEP.map((mod) => (
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

      {/* ── Industries ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Automate Processes Across Every Industry</h2>
          <p className="mt-3 text-lg text-navy-600">A horizontal automation platform — not an industry-specific solution.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition hover:border-primary-200 hover:shadow-md">
              <h3 className="text-base font-bold text-navy-900">{ind.name}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {ind.uses.map((u) => (
                  <span key={u} className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">{u}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lifecycle staircase ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-navy-50">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Automation lifecycle</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                Capture. Understand.
                <br />
                Decide. Automate.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                From input to intelligent action, Aveon connects every stage of the automation lifecycle — with people
                in the loop where it matters.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-navy-400">
              <span className="text-5xl font-extrabold leading-none text-navy-900 sm:text-6xl">{JOURNEY_TOTAL}</span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em]">
                lifecycle
                <br />
                stages
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {AI_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">Input</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Intelligent action</span>
          </div>
        </div>
      </section>

      {/* ── AI + Human split ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">AI for Speed. Humans for Judgment.</h2>
          <p className="mt-3 text-lg text-navy-600">Automation doesn&apos;t replace people — it makes them more effective.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">AI Handles</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-navy-700">
              {["Reading", "Classifying", "Extracting", "Routing", "Checking", "Summarizing"].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckIcon />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">People Handle</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-navy-700">
              {["Judgment", "Exceptions", "Approvals", "Strategy", "Complex decisions"].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Departments ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Process Automation for Every Department</h2>
            <p className="mt-3 text-lg text-navy-600">Start with one repetitive process — then expand across the organisation.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENTS.map((d) => (
              <div key={d.name} className="rounded-2xl border border-navy-100 bg-white p-5 shadow-card">
                <h3 className="text-base font-bold text-primary-700">{d.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {aiAutomationFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Automate the Routine. Empower Your People. Accelerate Your Business.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Start with one repetitive process — invoice processing, onboarding, customer requests — and scale
              intelligent automation across your organisation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Request a Demo →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Talk to an AI Automation Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
