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
    summary: "Connect a process from beginning to end: less manual intervention, faster completion.",
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
    summary: "Automation doesn't replace people: it makes them more effective.",
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

/** Industries served — a horizontal platform not industry-specific. */
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

/** Modern line-style workflow step icons */
function WorkflowIcon({ type }: { type: string }) {
  const iconProps = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "input":
      return (
        <svg {...iconProps} aria-label="Input">
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M12 7v5m0 0v3m0-8h3m-3 0H9" />
        </svg>
      );
    case "understand":
      return (
        <svg {...iconProps} aria-label="Understand">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path d="M12 8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
          <path d="M12 14c-1.657 0-3 .896-3 2s1.343 2 3 2 3-.896 3-2-1.343-2-3-2z" />
        </svg>
      );
    case "analyze":
      return (
        <svg {...iconProps} aria-label="Analyze">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case "decide":
      return (
        <svg {...iconProps} aria-label="Decide">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "automate":
      return (
        <svg {...iconProps} aria-label="Automate">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
      );
    case "execute":
      return (
        <svg {...iconProps} aria-label="Execute">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "notify":
      return (
        <svg {...iconProps} aria-label="Notify">
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      );
    case "result":
      return (
        <svg {...iconProps} aria-label="Result">
          <path d="M9 12l2 2 4-4m7 8a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps} aria-label="Step">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
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
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon AI connects every automation capability: Documents, Data, Approvals, Email, Workflows, Support, Systems and Oversight on one platform.">
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
                Traditional automation follows predefined rules. AI-powered automation goes further: it can understand
                information, analyze documents, classify requests, extract data, make workflow decisions and trigger the
                next action based on your business logic.
              </p>
              <p>
                From small businesses to large enterprises, Aveon automates processes across departments, systems and
                industries, reducing repetitive work and freeing people for higher-value decisions.
              </p>
              <p className="font-semibold text-navy-800">AI that understands your process. Automation that gets work done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Typical workflow flow ── */}
      <section className="border-t border-navy-100 bg-gradient-to-b from-white via-navy-50/40 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">A Typical AI-Powered Workflow</h2>
            <p className="mt-4 text-lg text-navy-600">From human-driven processes to intelligent, connected workflows.</p>
          </div>

          {/* Workflow Illustration - Zigzag Flow with Numbered Diamonds */}
          <div className="mt-14 hidden lg:block">
            <div className="mx-auto max-w-7xl">
              <svg viewBox="0 0 1440 380" className="h-auto w-full" role="img" aria-label="Complete AI workflow from input to result">
                {(() => {
                  const flowSteps = [
                    { title: "Input", desc: "Request arrives", color: "#3B82F6" },
                    { title: "Understand", desc: "AI analyzes", color: "#0EA5E9" },
                    { title: "Analyze", desc: "Data extracted", color: "#14B8A6" },
                    { title: "Decide", desc: "Route determined", color: "#8B5CF6" },
                    { title: "Automate", desc: "Execute action", color: "#F59E0B" },
                    { title: "Execute", desc: "System updated", color: "#F97316" },
                    { title: "Notify", desc: "Complete", color: "#10B981" },
                  ];
                  const startX = 110;
                  const xGap = 205;
                  const midY = 190;
                  const amp = 60;
                  const boxW = 150;
                  const boxH = 60;

                  const pts = flowSteps.map((_, i) => ({
                    x: startX + i * xGap,
                    y: i % 2 === 0 ? midY - amp : midY + amp,
                  }));

                  return (
                    <>
                      {/* Connecting curved arrows */}
                      {pts.slice(0, -1).map((p, i) => {
                        const next = pts[i + 1];
                        const x1 = p.x + boxW / 2;
                        const x2 = next.x - boxW / 2;
                        const cx1 = x1 + (x2 - x1) * 0.5;
                        const cx2 = x1 + (x2 - x1) * 0.5;
                        return (
                          <g key={`arrow-${i}`}>
                            <path
                              d={`M ${x1} ${p.y} C ${cx1} ${p.y}, ${cx2} ${next.y}, ${x2 - 10} ${next.y}`}
                              stroke={flowSteps[i].color}
                              strokeWidth="2.5"
                              fill="none"
                            />
                            <polygon
                              points={`${x2 - 10},${next.y - 5} ${x2},${next.y} ${x2 - 10},${next.y + 5}`}
                              fill={flowSteps[i].color}
                            />
                          </g>
                        );
                      })}

                      {flowSteps.map((step, i) => {
                        const p = pts[i];
                        const isUp = i % 2 === 0;
                        const diamondY = isUp ? p.y - boxH / 2 - 26 : p.y + boxH / 2 + 26;
                        const descY = isUp ? diamondY - 26 : diamondY + 32;
                        const numberLabel = String(i + 1).padStart(2, "0");

                        return (
                          <g key={step.title}>
                            {/* Rounded box */}
                            <rect
                              x={p.x - boxW / 2}
                              y={p.y - boxH / 2}
                              width={boxW}
                              height={boxH}
                              rx="14"
                              fill="white"
                              stroke={step.color}
                              strokeWidth="2.5"
                            />
                            <text x={p.x} y={p.y + 6} textAnchor="middle" fontSize="17" fontWeight="700" fill="#1a2a4a">
                              {step.title}
                            </text>

                            {/* Diamond number badge */}
                            <g transform={`translate(${p.x}, ${diamondY}) rotate(45)`}>
                              <rect x="-16" y="-16" width="32" height="32" rx="6" fill={step.color} />
                            </g>
                            <text x={p.x} y={diamondY + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="white">
                              {numberLabel}
                            </text>

                            {/* Description */}
                            <text x={p.x} y={descY} textAnchor="middle" fontSize="13.5" fontWeight="600" fill="#374151">
                              {step.desc}
                            </text>
                          </g>
                        );
                      })}
                    </>
                  );
                })()}
              </svg>
            </div>
          </div>

          {/* Mobile: Vertical flow with connecting lines */}
          <div className="mt-10 lg:hidden">
            <div className="max-w-lg mx-auto space-y-0">
              {AI_FLOW.map((step, i) => {
                const descriptions = [
                  "Request arrives",
                  "AI analyzes",
                  "Data extracted",
                  "Route determined",
                  "Execute action",
                  "System updated",
                  "Stakeholder notified",
                  "Complete"
                ];
                const isBluePhase = i < 4;
                const iconTypes = ["input", "understand", "analyze", "decide", "automate", "execute", "notify", "result"];

                return (
                  <div key={step} className="relative">
                    {/* Connecting line to next step */}
                    {i < AI_FLOW.length - 1 && (
                      <div className={`absolute left-7 top-16 h-8 w-0.5 ${isBluePhase ? "bg-gradient-to-b from-primary-400 to-primary-300" : "bg-gradient-to-b from-accent-400 to-accent-300"}`} />
                    )}

                    {/* Step card */}
                    <div className="relative flex gap-4 pb-6">
                      {/* Icon circle */}
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 shadow-md ${
                        isBluePhase
                          ? "bg-gradient-to-br from-primary-100 to-primary-50 border-primary-400"
                          : "bg-gradient-to-br from-accent-100 to-accent-50 border-accent-400"
                      }`}>
                        <div className={isBluePhase ? "text-primary-600" : "text-accent-600"}>
                          <WorkflowIcon type={iconTypes[i]} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <h4 className={`font-bold text-base ${isBluePhase ? "text-primary-700" : "text-accent-700"}`}>
                          {step}
                        </h4>
                        <p className="text-sm text-navy-600 mt-1">{descriptions[i]}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Phases Summary */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { phase: "Phase 1", title: "Capture", desc: "Input & Understanding", steps: "Steps 1-2", color: "primary" },
              { phase: "Phase 2", title: "Analyze", desc: "Analysis & Decision", steps: "Steps 3-4", color: "primary" },
              { phase: "Phase 3", title: "Execute", desc: "Automation & Action", steps: "Steps 5-6", color: "accent" },
              { phase: "Phase 4", title: "Complete", desc: "Notification & Result", steps: "Steps 7-8", color: "accent" }
            ].map((p, i) => (
              <div key={p.phase} className={`rounded-2xl border-2 p-5 transition-all ${
                p.color === "primary"
                  ? "border-primary-200 bg-primary-50/40 hover:border-primary-400 hover:bg-primary-50/60"
                  : "border-accent-200 bg-accent-50/40 hover:border-accent-400 hover:bg-accent-50/60"
              }`}>
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  p.color === "primary" ? "text-primary-600" : "text-accent-600"
                }`}>{p.phase}</span>
                <h4 className="mt-2 font-bold text-navy-900 text-lg">{p.title}</h4>
                <p className="mt-1 text-sm text-navy-600">{p.desc}</p>
                <p className="mt-2 text-xs text-navy-500 font-medium">{p.steps}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capability ecosystem ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">What Aveon AI Automates</h2>
            <p className="mt-3 text-lg text-navy-600">One AI automation platform grouped into four connected capability domains.</p>
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
              Open any capability to see what&apos;s inside. Each works on its own and connects into one intelligent
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
          <p className="mt-3 text-lg text-navy-600">A horizontal automation platform, not an industry-specific solution.</p>
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
                From input to intelligent action, Aveon connects every stage of the automation lifecycle with people
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
          <p className="mt-3 text-lg text-navy-600">Automation doesn&apos;t replace people: it makes them more effective.</p>
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
            <p className="mt-3 text-lg text-navy-600">Start with one repetitive process, then expand across the organisation.</p>
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Automate the Routine. Empower Your People. Accelerate Your Business.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Start with one repetitive process (invoice processing, onboarding, customer requests) and scale
              intelligent automation across your organisation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-600">
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
