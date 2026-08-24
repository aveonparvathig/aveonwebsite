import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Function nodes orbiting the hub in the intro graphic. */
const OMS_NODES = ["Orders", "Customers", "Products", "Inventory", "Fulfilment", "Payments", "Tracking", "Returns"];

/** The order lifecycle, shown as a connected flow. */
const OMS_FLOW = ["Order Capture", "Validation", "Confirmation", "Inventory Check", "Processing", "Packing", "Dispatch", "Delivery", "Completion"];

/** Tool ecosystem — four functional groups. */
const OMS_GROUPS: { title: string; items: string[] }[] = [
  { title: "Order Handling", items: ["Order Creation", "Order Processing", "Order Tracking"] },
  { title: "Customers & Products", items: ["Customer Management", "Product & Catalogue", "Payment & Transaction"] },
  { title: "Inventory & Fulfilment", items: ["Inventory Integration", "Order Fulfilment", "Returns & Cancellation"] },
  { title: "Visibility & Comms", items: ["Notifications", "Order Dashboard", "Order Reports"] },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** The twelve order-management tools as expandable accordions. */
const OMS_DEEP: DeepModule[] = [
  {
    title: "Order Creation",
    summary: "Create and manage orders from any business channel.",
    groups: [{ items: ["Manual order entry", "Customer order creation", "Product selection", "Quantity management", "Pricing & discounts", "Order notes & status"] }],
  },
  {
    title: "Order Processing",
    summary: "Move orders through predefined business stages.",
    groups: [{ items: ["Order confirmation", "Processing", "Order modification", "Cancellation", "Order approval", "Status management & history"] }],
  },
  {
    title: "Customer Management",
    summary: "Maintain customer information alongside their orders.",
    groups: [{ items: ["Customer profiles & contact", "Billing & shipping address", "Order history", "Customer transactions", "Customer communication"] }],
  },
  {
    title: "Product & Catalogue",
    summary: "Manage the products associated with your orders.",
    groups: [{ items: ["Product information", "Categories & SKU", "Pricing", "Product availability", "Product search & selection"] }],
  },
  {
    title: "Inventory Integration",
    summary: "Connect orders with stock availability.",
    groups: [{ items: ["Stock availability", "Inventory checking", "Item allocation", "Stock updates", "Inventory movement", "Fulfilment availability"] }],
  },
  {
    title: "Order Fulfilment",
    summary: "Manage the operational journey after an order is confirmed.",
    groups: [{ items: ["Order preparation", "Picking", "Packing", "Dispatch", "Delivery", "Fulfilment status"] }],
  },
  {
    title: "Order Tracking",
    summary: "Track every order from creation to completion.",
    groups: [{ items: ["New → Confirmed", "Processing → Packed", "Dispatched → Delivered", "Status visibility for relevant users"] }],
  },
  {
    title: "Returns & Cancellation",
    summary: "Manage post-order activities through structured workflows.",
    groups: [{ items: ["Cancellation requests", "Return requests", "Returned products", "Replacement", "Refund workflow", "Return status"] }],
  },
  {
    title: "Payment & Transaction",
    summary: "Connect order transactions with supported payment systems.",
    groups: [{ items: ["Payment status", "Transaction records", "Online payments", "Payment confirmation", "Receipts", "Payment history"] }],
  },
  {
    title: "Notifications",
    summary: "Keep customers and internal teams informed.",
    groups: [{ items: ["Order confirmation", "Payment notification", "Processing updates", "Dispatch notification", "Delivery updates", "Cancellation & return updates"] }],
  },
  {
    title: "Order Dashboard",
    summary: "A real-time operational view of order activity.",
    groups: [{ items: ["Total, new & pending orders", "Processing & completed orders", "Cancelled & returned orders", "Order value", "Fulfilment status"] }],
  },
  {
    title: "Order Reports",
    summary: "Turn order information into useful business reports.",
    groups: [{ items: ["Order & sales reports", "Customer-wise & product-wise orders", "Date-wise orders", "Pending & cancelled reports", "Return & fulfilment reports"] }],
  },
];

/** Order workflow — 9 stages across 4 phases, rendered as a staircase. */
const OMS_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Capture", range: "01–03", steps: ["Capture", "Validate", "Confirm"] },
  { label: "Fulfil", range: "04–06", steps: ["Allocate", "Process", "Pack"] },
  { label: "Deliver", range: "07–08", steps: ["Dispatch", "Track"] },
  { label: "Close", range: "09", steps: ["Complete"] },
];
const JOURNEY_OFFSETS = OMS_JOURNEY.reduce<number[]>((acc, _g, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + OMS_JOURNEY[i - 1].steps.length);
  return acc;
}, []);
const JOURNEY_TOTAL = OMS_JOURNEY.reduce((s, g) => s + g.steps.length, 0);

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const CHANNELS = ["Website", "Mobile App", "POS", "E-Commerce", "Marketplace", "Sales Team", "Direct Orders", "B2B Orders"];
const INTEGRATIONS = ["ERP", "CRM", "POS", "Inventory", "Accounting", "E-Commerce", "Payment Gateways", "Shipping", "Support", "Third-Party APIs"];
const AI_ASSISTS = ["Order classification", "Data extraction", "Email-to-order", "Order validation", "Intelligent routing", "Customer requests", "Exception handling", "Automated notifications", "Order summarization"];

const INDUSTRIES: { name: string; text: string }[] = [
  { name: "Retail & E-Commerce", text: "Manage online and offline customer orders." },
  { name: "Wholesale & Distribution", text: "Manage B2B orders and fulfilment." },
  { name: "Manufacturing", text: "Connect customer orders with inventory and production." },
  { name: "Food & Restaurant", text: "Manage orders, preparation and delivery." },
  { name: "Healthcare", text: "Manage applicable product and service order workflows." },
  { name: "Logistics", text: "Manage order and fulfilment-related processes." },
  { name: "Service Businesses", text: "Manage service requests and customer orders." },
];

const WHY: { title: string; text: string }[] = [
  { title: "Complete Order Lifecycle", text: "Manage orders from creation to completion." },
  { title: "Powerful Order Tools", text: "Dedicated tools for orders, customers, products, inventory, fulfilment, tracking and reporting." },
  { title: "Multi-Channel Ready", text: "Bring orders from multiple channels into one platform." },
  { title: "AI Automation", text: "Reduce repetitive order-processing activities with intelligent automation." },
  { title: "Integrated Operations", text: "Connect orders with ERP, CRM, inventory, accounting and other systems." },
  { title: "Scalable", text: "Start with core order management and expand as your business grows." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const orderManagementFaqs: { question: string; answer: string }[] = [
  {
    question: "What is an Order Management System?",
    answer: "An Order Management System is software that manages the complete order lifecycle, including order creation, processing, inventory, fulfilment, delivery, returns and reporting.",
  },
  {
    question: "What tools are included in order management?",
    answer: "Order management can include tools for order creation, processing, customer management, product management, inventory, fulfilment, tracking, returns, payments, notifications, dashboards and reports.",
  },
  {
    question: "Can Aveon manage orders from multiple channels?",
    answer: "Yes. Aveon OMS can be designed to consolidate orders from supported websites, mobile applications, POS systems, e-commerce channels, marketplaces and sales teams.",
  },
  {
    question: "Can AI automate order processing?",
    answer: "Yes. AI can assist with order classification, document/email-based order capture, validation, routing, customer requests and exception handling.",
  },
  {
    question: "Can Order Management integrate with inventory?",
    answer: "Yes. Order management can be connected with inventory systems to provide stock availability and support fulfilment workflows.",
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

function ChipGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
      <h3 className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary-600">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((i) => (
          <span key={i} className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700">{i}</span>
        ))}
      </div>
    </div>
  );
}

/** Hub-and-spoke graphic: the hub connecting every order-management function. */
function ConnectedOrderGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 122;
  const pillH = 38;
  const nodes = OMS_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes oms-spin { to { transform: rotate(360deg); } }
        @keyframes oms-flow { to { stroke-dashoffset: -16; } }
        @keyframes oms-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes oms-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .oms-ring { transform-box: fill-box; transform-origin: center; animation: oms-spin 90s linear infinite; }
        .oms-glow { transform-box: fill-box; transform-origin: center; animation: oms-breathe 5s ease-in-out infinite; }
        .oms-flow { stroke-dasharray: 4 12; animation: oms-flow 1.5s linear infinite; }
        .oms-node { transform-box: fill-box; transform-origin: center; animation: oms-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .oms-ring, .oms-glow, .oms-flow, .oms-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every order function — Orders, Customers, Products, Inventory, Fulfilment, Payments, Tracking and Returns — on one platform.">
        <defs>
          <radialGradient id="oms-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="oms-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="oms-glow" cx={c} cy={c} r={158} fill="url(#oms-glow)" />
        <circle className="oms-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="oms-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="oms-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#oms-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="10" fontWeight="800" letterSpacing="2" fill="#d9e8ff">OMS</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function OrderManagementContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedOrderGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Platform. Every Order.
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Capture Orders. Process Faster. Fulfil Smarter.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Managing orders across customers, sales teams, websites, mobile apps, POS and e-commerce channels gets
                complex as a business grows.
              </p>
              <p>
                Aveon Order Management System brings the complete order lifecycle onto one connected platform — from
                order creation and validation to inventory, fulfilment, delivery, returns and reporting.
              </p>
              <p className="font-semibold text-navy-800">One platform. Every order. Complete visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Order lifecycle flow ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">The Order Lifecycle</h2>
          <p className="mt-3 text-lg text-navy-600">Every stage, from capture to completion, connected on one platform.</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {OMS_FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-800 shadow-card">{step}</span>
              {i < OMS_FLOW.length - 1 && (
                <svg className="h-4 w-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Tool ecosystem ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Complete Order Management Tools</h2>
            <p className="mt-3 text-lg text-navy-600">Twelve tools to manage orders, customers, products, inventory and fulfilment — in four connected domains.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {OMS_GROUPS.map((g) => (
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
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Explore the Tools in Detail</h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-navy-600">
              Open any tool to see what&apos;s inside. Each works on its own — and shares everything with the rest.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            {OMS_DEEP.map((mod) => (
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

      {/* ── Order workflow staircase ── */}
      <section className="relative overflow-hidden border-b border-navy-100 bg-navy-50">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Order workflow</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                From Customer Order.
                <br />
                To Final Delivery.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Capture, process, fulfil, deliver and complete — every order follows one connected workflow.
              </p>
            </div>
            <div className="flex items-baseline gap-3 text-navy-400">
              <span className="text-5xl font-extrabold leading-none text-navy-900 sm:text-6xl">{JOURNEY_TOTAL}</span>
              <span className="text-xs font-semibold uppercase leading-tight tracking-[0.16em]">
                workflow
                <br />
                stages
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {OMS_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">Customer order</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Final delivery</span>
          </div>
        </div>
      </section>

      {/* ── Channels, Integrations & AI ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Multi-Channel, Connected & Intelligent</h2>
          <p className="mt-3 text-lg text-navy-600">Bring every order into one platform, connect your business systems, and let AI handle the repetitive work.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ChipGroup title="Order Channels" items={CHANNELS} />
          <ChipGroup title="Integrations" items={INTEGRATIONS} />
          <ChipGroup title="AI Assists With" items={AI_ASSISTS} />
        </div>
        <p className="mt-4 text-sm text-navy-500">AI handles repetitive tasks. Your team handles the important decisions.</p>
      </section>

      {/* ── Industries ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Order Management for Every Industry</h2>
            <p className="mt-3 text-lg text-navy-600">One order platform, multiple business possibilities.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <div key={ind.name} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-base font-bold text-navy-900">{ind.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{ind.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Aveon ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Why Choose Aveon Order Management?</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-primary-700">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {orderManagementFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Capture Orders. Automate Processes. Deliver Better.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Your order connects your customer, product, inventory, payment, operations and delivery — Aveon brings them
              together on one platform.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Request a Demo →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Talk to an Aveon Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
