import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Function nodes orbiting the hub in the intro graphic. */
const WMS_NODES = ["Receiving", "Put-Away", "Storage", "Picking", "Packing", "Dispatch", "Transfers", "Returns"];

/** Warehouse workflow, shown as a connected flow. */
const WMS_FLOW = ["Inbound", "Receiving", "Quality Check", "Put Away", "Storage", "Picking", "Packing", "Dispatch", "Returns"];

/** Tool ecosystem — four functional groups. */
const WMS_GROUPS: { title: string; items: string[] }[] = [
  { title: "Setup & Inbound", items: ["Warehouse Setup", "Product & SKU", "Goods Receiving"] },
  { title: "Storage & Control", items: ["Put-Away", "Inventory Control", "Transfer"] },
  { title: "Fulfilment", items: ["Picking", "Packing", "Dispatch"] },
  { title: "Returns & Visibility", items: ["Returns", "Warehouse Dashboard", "Warehouse Reports"] },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** The warehouse tools as expandable accordions. */
const WMS_DEEP: DeepModule[] = [
  {
    title: "Warehouse Setup",
    summary: "Create and manage your warehouse structure.",
    groups: [{ items: ["Warehouse creation", "Warehouse locations", "Zones", "Racks & shelves", "Bins", "Storage locations"] }],
  },
  {
    title: "Product & SKU Management",
    summary: "Organise the products stored within the warehouse.",
    groups: [{ items: ["Product master", "SKU management", "Product categories", "Units", "Product locations", "Stock information"] }],
  },
  {
    title: "Goods Receiving",
    summary: "Record and manage incoming materials.",
    groups: [{ items: ["Inbound receipts", "Purchase-based receiving", "Quantity verification", "Receiving records", "Supplier information", "Goods receipt status"] }],
  },
  {
    title: "Put-Away",
    summary: "Move received products to the right storage locations.",
    groups: [{ items: ["Location assignment", "Put-away tasks", "Bin allocation", "Stock movement", "Storage confirmation"] }],
  },
  {
    title: "Inventory Control",
    summary: "Maintain better visibility of warehouse stock.",
    groups: [{ items: ["Current stock", "Available stock", "Reserved stock", "Stock movement", "Stock adjustments", "Stock verification"] }],
  },
  {
    title: "Picking",
    summary: "Manage collecting products for orders.",
    groups: [{ items: ["Picking requests", "Pick lists", "Item quantities", "Location-based picking", "Picking status", "Pick confirmation"] }],
  },
  {
    title: "Packing",
    summary: "Prepare picked products for dispatch.",
    groups: [{ items: ["Packing orders", "Package details", "Quantity verification", "Packing status", "Dispatch preparation"] }],
  },
  {
    title: "Dispatch",
    summary: "Manage outbound warehouse operations.",
    groups: [{ items: ["Dispatch orders", "Shipment information", "Delivery details", "Dispatch confirmation", "Order status"] }],
  },
  {
    title: "Transfer",
    summary: "Move inventory between warehouse locations.",
    groups: [{ items: ["Warehouse transfer", "Location transfer", "Item transfer", "Quantity transfer", "Transfer status"] }],
  },
  {
    title: "Returns",
    summary: "Manage products returned to the warehouse.",
    groups: [{ items: ["Return requests", "Returned items", "Quantity verification", "Return condition", "Restocking", "Return status"] }],
  },
  {
    title: "Warehouse Dashboard",
    summary: "A quick overview of warehouse operations.",
    groups: [{ items: ["Total stock & incoming goods", "Pending receipts", "Pending picks", "Packing & dispatch status", "Returns", "Warehouse activity"] }],
  },
  {
    title: "Warehouse Reports",
    summary: "Turn warehouse data into operational insights.",
    groups: [{ items: ["Stock, inbound & outbound reports", "Picking & dispatch reports", "Transfer & return reports", "Warehouse-wise reports", "Product-wise reports"] }],
  },
];

/** Warehouse workflow — 9 stages across 4 phases, rendered as a staircase. */
const WMS_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Inbound", range: "01–03", steps: ["Receive", "Verify", "Put Away"] },
  { label: "Store", range: "04–05", steps: ["Store", "Pick"] },
  { label: "Outbound", range: "06–07", steps: ["Pack", "Dispatch"] },
  { label: "Close", range: "08–09", steps: ["Track", "Return"] },
];
const JOURNEY_OFFSETS = WMS_JOURNEY.reduce<number[]>((acc, _g, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + WMS_JOURNEY[i - 1].steps.length);
  return acc;
}, []);
const JOURNEY_TOTAL = WMS_JOURNEY.reduce((s, g) => s + g.steps.length, 0);

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const MULTI_WAREHOUSE = ["Multiple warehouses", "Warehouse locations", "Stock by warehouse", "Inter-warehouse transfers", "Warehouse-wise reports", "Product availability"];
const INTEGRATIONS = ["ERP", "Inventory", "Order Management", "Accounting", "Purchasing", "Dispatch", "Third-Party APIs"];
const AI_ASSISTS = ["Document processing", "Order data extraction", "Stock analysis", "Task prioritization", "Exception detection", "Demand insights", "Automated notifications", "Workflow automation"];

const INDUSTRIES: { name: string; text: string }[] = [
  { name: "Retail & E-Commerce", text: "High-volume receiving, storage, picking, packing and dispatch." },
  { name: "Manufacturing", text: "Connect raw materials, finished goods and warehouse operations." },
  { name: "Wholesale & Distribution", text: "Manage stock across warehouses and customer fulfilment." },
  { name: "Logistics", text: "Organise warehouse and shipment-related operations." },
  { name: "Healthcare", text: "Manage applicable medical supplies and inventory workflows." },
  { name: "Food & FMCG", text: "Manage products and warehouse movements to requirements." },
  { name: "Automotive", text: "Manage parts, components and warehouse inventory." },
];

const WHY: { title: string; text: string }[] = [
  { title: "Centralized Management", text: "Manage warehouse operations through one platform." },
  { title: "Better Stock Visibility", text: "Track inventory across warehouses and locations." },
  { title: "Complete Warehouse Tools", text: "Receiving, put-away, picking, packing, transfers, dispatch and returns." },
  { title: "Multi-Warehouse Ready", text: "Manage multiple warehouse locations in a connected environment." },
  { title: "Order Integration", text: "Connect customer orders with warehouse fulfilment." },
  { title: "AI-Ready & Integrated", text: "Add AI automation and connect with ERP, inventory and order management." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const warehouseFaqs: { question: string; answer: string }[] = [
  {
    question: "What is a Warehouse Management System?",
    answer: "A Warehouse Management System (WMS) is software that helps businesses manage warehouse operations including receiving, storage, inventory movement, picking, packing, dispatch and returns.",
  },
  {
    question: "What tools are included in warehouse management?",
    answer: "Common WMS tools include warehouse setup, product/SKU management, receiving, put-away, inventory control, picking, packing, dispatch, transfers, returns, dashboards and reports.",
  },
  {
    question: "Can Aveon manage multiple warehouses?",
    answer: "Yes. Aveon WMS can be designed to support multiple warehouses and locations based on the business's operational requirements.",
  },
  {
    question: "Can warehouse management connect with order management?",
    answer: "Yes. Warehouse workflows can be integrated with order management so confirmed orders move into picking, packing and dispatch.",
  },
  {
    question: "Can AI be used in warehouse management?",
    answer: "Yes. Depending on the implementation, AI can support document processing, stock analysis, task prioritization, exception detection and workflow automation.",
  },
  {
    question: "Does Aveon support barcode or RFID?",
    answer: "Barcode, RFID and other specialized warehouse technologies are confirmed based on the specific Aveon WMS implementation before being included as a capability.",
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

/** Hub-and-spoke graphic: the hub connecting every warehouse function. */
function ConnectedWarehouseGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 122;
  const pillH = 38;
  const nodes = WMS_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes wms-spin { to { transform: rotate(360deg); } }
        @keyframes wms-flow { to { stroke-dashoffset: -16; } }
        @keyframes wms-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes wms-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .wms-ring { transform-box: fill-box; transform-origin: center; animation: wms-spin 90s linear infinite; }
        .wms-glow { transform-box: fill-box; transform-origin: center; animation: wms-breathe 5s ease-in-out infinite; }
        .wms-flow { stroke-dasharray: 4 12; animation: wms-flow 1.5s linear infinite; }
        .wms-node { transform-box: fill-box; transform-origin: center; animation: wms-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .wms-ring, .wms-glow, .wms-flow, .wms-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every warehouse function — Receiving, Put-Away, Storage, Picking, Packing, Dispatch, Transfers and Returns — on one platform.">
        <defs>
          <radialGradient id="wms-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="wms-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="wms-glow" cx={c} cy={c} r={158} fill="url(#wms-glow)" />
        <circle className="wms-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="wms-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="wms-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#wms-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="20" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="10" fontWeight="800" letterSpacing="2" fill="#d9e8ff">WMS</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function WarehouseContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedWarehouseGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Warehouse. Every Movement.
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Receive. Store. Track. Pick. Dispatch.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                As businesses grow, warehouse operations become more complex — managing inventory, locations, stock
                movement, receiving, picking, packing and dispatch across multiple warehouses takes accuracy and
                real-time visibility.
              </p>
              <p>
                Aveon Warehouse Management System organises warehouse operations on one centralized platform — from
                receiving goods to final dispatch — improving stock visibility and streamlining daily operations.
              </p>
              <p className="font-semibold text-navy-800">One warehouse. Every movement. Complete control.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Warehouse flow ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">The Warehouse Workflow</h2>
          <p className="mt-3 text-lg text-navy-600">From inbound to outbound, every stage connected on one platform.</p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {WMS_FLOW.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-800 shadow-card">{step}</span>
              {i < WMS_FLOW.length - 1 && (
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
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Complete Warehouse Management Tools</h2>
            <p className="mt-3 text-lg text-navy-600">Everything you need to run a warehouse — grouped into four connected domains.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WMS_GROUPS.map((g) => (
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
            {WMS_DEEP.map((mod) => (
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

      {/* ── Warehouse workflow staircase ── */}
      <section className="relative overflow-hidden border-b border-navy-100 bg-navy-50">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Warehouse workflow</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                From Inbound.
                <br />
                To Outbound.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Receive, store, pick, pack, dispatch and return — every movement follows one connected workflow.
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
            {WMS_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">Inbound</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Outbound</span>
          </div>
        </div>
      </section>

      {/* ── Multi-warehouse, Integrations & AI ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Multi-Warehouse, Connected & Intelligent</h2>
          <p className="mt-3 text-lg text-navy-600">Manage multiple locations, connect your business systems, and let AI support the operation.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <ChipGroup title="Multi-Warehouse" items={MULTI_WAREHOUSE} />
          <ChipGroup title="Integrations" items={INTEGRATIONS} />
          <ChipGroup title="AI Assists With" items={AI_ASSISTS} />
        </div>
        <p className="mt-4 text-sm text-navy-500">AI supports the warehouse. Your team controls the operation.</p>
      </section>

      {/* ── Industries ── */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Warehouse Management for Every Industry</h2>
            <p className="mt-3 text-lg text-navy-600">One WMS platform, multiple industries.</p>
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
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Why Choose Aveon Warehouse Management?</h2>
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
            {warehouseFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Receive. Store. Pick. Pack. Dispatch.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              One connected platform for modern warehouse operations — where orders become fulfilment and inventory
              becomes availability.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-700">
                Request a Demo →
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-navy-200 bg-white px-7 py-3 text-sm font-semibold text-navy-800 transition hover:border-primary-400 hover:text-primary-600">
                Talk to a WMS Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
