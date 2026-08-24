import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Function nodes orbiting the platform hub in the intro graphic. */
const INV_NODES = ["Items", "Categories", "Stores", "Suppliers", "Purchases", "Issues", "Transfers", "Reports"];

/** Module ecosystem — four functional groups. */
const INV_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Inventory Setup",
    items: ["Item Management", "Item Categories", "Units", "Store Management", "Location Management", "Supplier Management"],
  },
  {
    title: "Stock Operations",
    items: ["Opening Stock", "Stock Receipt", "Stock Issue", "Stock Transfer", "Stock Return", "Stock Adjustment", "Stock Verification"],
  },
  {
    title: "Purchase Management",
    items: ["Purchase Requests", "Purchase Records", "Supplier Records", "Purchase Receipts", "Purchase Tracking"],
  },
  {
    title: "Inventory Visibility",
    items: ["Current Stock", "Stock Movement", "Item-Wise Reports", "Store-Wise Reports", "Department-Wise", "Inventory Reports"],
  },
];

type ModuleGroup = { label?: string; items: string[] };
type DeepModule = { title: string; summary: string; groups: ModuleGroup[] };

/** Flagship modules rendered as expandable accordions. */
const INV_DEEP: DeepModule[] = [
  {
    title: "Item Management",
    summary: "One item, one record — better inventory visibility from the start.",
    groups: [
      {
        items: ["Item information", "Item category & type", "Unit of measurement", "Item description", "Stock information", "Store information"],
      },
    ],
  },
  {
    title: "Category Management",
    summary: "Organise stock into meaningful categories so information is easy to locate.",
    groups: [
      {
        label: "Example categories",
        items: ["Stationery", "Laboratory Materials", "Office Supplies", "Electrical Items", "Maintenance Materials", "Academic Resources", "Consumables", "General Supplies"],
      },
    ],
  },
  {
    title: "Store & Location Management",
    summary: "Know what you have — and where it belongs, across stores and locations.",
    groups: [
      {
        items: ["Institution", "Store", "Location", "Item", "Stock by location"],
      },
    ],
  },
  {
    title: "Supplier Management",
    summary: "Keep procurement information organised and connected to inventory.",
    groups: [
      {
        items: ["Supplier information & records", "Purchased items", "Purchase-related information", "Supplier transactions"],
      },
    ],
  },
  {
    title: "Purchase Management",
    summary: "Bring procurement and inventory together — purchase, receive, record, manage.",
    groups: [
      {
        items: ["Purchase requests", "Purchase information", "Supplier & items", "Quantities", "Purchase records", "Received materials"],
      },
    ],
  },
  {
    title: "Stock Receipt",
    summary: "Every receipt becomes part of your inventory record.",
    groups: [
      {
        items: ["Received items & quantities", "Supplier information", "Receipt details", "Store / location", "Stock updates"],
      },
    ],
  },
  {
    title: "Stock Issue",
    summary: "Every issue, every quantity, every destination — recorded.",
    groups: [
      {
        items: ["Item issues & quantities", "Receiving department", "Store information", "Issue records", "Stock balance"],
      },
    ],
  },
  {
    title: "Stock Transfer",
    summary: "Move inventory between stores, departments or locations — accurately.",
    groups: [
      {
        items: ["Transfer requests", "Source & destination location", "Items & quantities", "Transfer records"],
      },
    ],
  },
  {
    title: "Stock Return",
    summary: "Keep returned inventory accounted for and stock current.",
    groups: [
      {
        items: ["Returned items & quantities", "Return records", "Store updates", "Stock balances"],
      },
    ],
  },
  {
    title: "Stock Adjustment & Verification",
    summary: "Keep digital records aligned with physical stock.",
    groups: [
      {
        items: ["Stock verification", "Quantity checking", "Inventory reconciliation", "Stock adjustments", "Verification records"],
      },
    ],
  },
  {
    title: "Department-Wise Inventory",
    summary: "Connect stores with the departments they serve.",
    groups: [
      {
        items: ["Department", "Store", "Location", "Item", "Quantity", "Issue records"],
      },
    ],
  },
  {
    title: "Reports & Analytics",
    summary: "Turn stock data into useful information — what you have, and where it moved.",
    groups: [
      {
        items: [
          "Item-wise & store-wise inventory",
          "Stock movement",
          "Purchase information",
          "Issue & transfer information",
          "Return information",
          "Stock availability",
        ],
      },
    ],
  },
];

/** Inventory lifecycle — 16 stages grouped into 4 phases, rendered as a staircase. */
const INV_JOURNEY: { label: string; range: string; steps: string[] }[] = [
  { label: "Procurement", range: "01–04", steps: ["Requirement", "Purchase", "Supplier", "Purchase Record"] },
  { label: "Stock Entry", range: "05–08", steps: ["Receipt", "Store", "Inventory", "Opening Stock"] },
  { label: "Movement", range: "09–12", steps: ["Issue", "Department", "Usage", "Stock Balance"] },
  { label: "Control", range: "13–16", steps: ["Transfer", "Return", "Verification", "Reports"] },
];

const STAIR_OFFSET = ["lg:mt-[72px]", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

const INV_STAKEHOLDERS = [
  { role: "Store Manager", line: "Manage stock with control.", text: "Maintain item information, receipts, issues and stock movement in one place." },
  { role: "Purchase Team", line: "Connect procurement.", text: "Keep supplier and purchase-related information organised and close to inventory." },
  { role: "Department Heads", line: "Know what you receive.", text: "Maintain visibility into materials issued to your department." },
  { role: "Finance & Administration", line: "Connect the operations.", text: "Access relevant purchase and inventory information across the institution." },
  { role: "Faculty & Staff", line: "Use resources with ease.", text: "Requisition and receive institutional resources through structured workflows." },
  { role: "Management", line: "See the bigger picture.", text: "Use inventory reports to understand institutional resource utilization." },
];

/** FAQ — exported so the page can emit matching FAQPage JSON-LD (AEO). */
export const inventoryFaqs: { question: string; answer: string }[] = [
  {
    question: "What is Inventory Management Software?",
    answer:
      "Inventory Management Software is a digital system that helps organizations manage items, stock, purchases, receipts, issues, transfers, returns and inventory information through a centralized platform.",
  },
  {
    question: "What is Aveon Inventory Management System?",
    answer: "Aveon Inventory Management System is an ERP-based inventory solution designed to help educational institutions organize institutional stock and inventory-related processes digitally.",
  },
  {
    question: "Who can use Aveon Inventory Management?",
    answer: "Schools, colleges, universities and other educational institutions that need to manage centralized or departmental stock.",
  },
  {
    question: "What can an institution manage through Inventory Management?",
    answer:
      "Depending on the configured module, institutions can organize item information, categories, suppliers, stores, purchases, stock receipts, issues, transfers, returns, verification and inventory reports.",
  },
  {
    question: "Can inventory be managed department-wise?",
    answer:
      "Yes, where department / location-based workflows are configured, stock movement and issue information can be organized by the relevant department or location.",
  },
  {
    question: "Can Inventory Management integrate with other Aveon ERP modules?",
    answer:
      "Yes. Aveon is an integrated educational ERP platform, so inventory operations can form part of the wider institutional management environment.",
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

/** Hub-and-spoke graphic: the platform hub connecting every inventory function. */
function ConnectedInventoryGraphic() {
  const size = 480;
  const c = size / 2;
  const r = 176;
  const pillW = 120;
  const pillH = 38;
  const nodes = INV_NODES.map((label, i) => {
    const angle = (-90 + i * 45) * (Math.PI / 180);
    return { label, x: c + r * Math.cos(angle), y: c + r * Math.sin(angle) };
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <style>{`
        @keyframes inv-spin { to { transform: rotate(360deg); } }
        @keyframes inv-flow { to { stroke-dashoffset: -16; } }
        @keyframes inv-breathe { 0%,100% { opacity:.5; transform: scale(1); } 50% { opacity:.95; transform: scale(1.07); } }
        @keyframes inv-in { from { opacity:0; transform: scale(.85); } to { opacity:1; transform: scale(1); } }
        .inv-ring { transform-box: fill-box; transform-origin: center; animation: inv-spin 90s linear infinite; }
        .inv-glow { transform-box: fill-box; transform-origin: center; animation: inv-breathe 5s ease-in-out infinite; }
        .inv-flow { stroke-dasharray: 4 12; animation: inv-flow 1.5s linear infinite; }
        .inv-node { transform-box: fill-box; transform-origin: center; animation: inv-in .55s cubic-bezier(.2,.8,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .inv-ring, .inv-glow, .inv-flow, .inv-node { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
      <svg viewBox={`0 0 ${size} ${size}`} className="h-auto w-full" role="img" aria-label="Aveon connects every inventory function — Items, Categories, Stores, Suppliers, Purchases, Issues, Transfers and Reports — on one platform.">
        <defs>
          <radialGradient id="inv-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d9e8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d9e8ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="inv-hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3376ff" />
            <stop offset="100%" stopColor="#153fd6" />
          </linearGradient>
        </defs>
        <circle className="inv-glow" cx={c} cy={c} r={158} fill="url(#inv-glow)" />
        <circle className="inv-ring" cx={c} cy={c} r={r} fill="none" stroke="#ccd6ea" strokeWidth="1.5" strokeDasharray="3 8" />
        {nodes.map((n) => (
          <line key={`l-${n.label}`} x1={c} y1={c} x2={n.x} y2={n.y} stroke="#dbe3f1" strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line key={`f-${n.label}`} className="inv-flow" x1={c} y1={c} x2={n.x} y2={n.y} stroke="#599aff" strokeWidth="2" strokeLinecap="round" style={{ animationDelay: `${(i * 0.18).toFixed(2)}s` }} />
        ))}
        {nodes.map((n, i) => (
          <g key={`n-${n.label}`} className="inv-node" style={{ animationDelay: `${(0.15 + i * 0.09).toFixed(2)}s` }}>
            <rect x={n.x - pillW / 2} y={n.y - pillH / 2} width={pillW} height={pillH} rx={pillH / 2} fill="#ffffff" stroke="#e8ecf6" strokeWidth="1.5" />
            <circle cx={n.x - pillW / 2 + 17} cy={n.y} r="3.5" fill="#1d6ff2" />
            <text x={n.x - pillW / 2 + 30} y={n.y + 1} dominantBaseline="central" fontSize="12.5" fontWeight="600" fill="#2a3a5f">{n.label}</text>
          </g>
        ))}
        <circle cx={c} cy={c} r="56" fill="none" stroke="#bcd7ff" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx={c} cy={c} r="52" fill="url(#inv-hub)" />
        <text x={c} y={c - 5} textAnchor="middle" dominantBaseline="central" fontSize="18" fontWeight="800" fill="#ffffff">Aveon</text>
        <text x={c} y={c + 15} textAnchor="middle" dominantBaseline="central" fontSize="8" fontWeight="700" letterSpacing="1.2" fill="#d9e8ff">INVENTORY</text>
      </svg>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────────── */

export default function InventoryContent() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-12 pt-6 sm:pb-14 sm:pt-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="order-2 lg:order-1">
            <ConnectedInventoryGraphic />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              One Digital Inventory
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Know What You Have. Where It Is. What You Need.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                Managing inventory across a school, college or university is much more than a stock register.
                Institutions handle stationery, lab resources, office supplies, consumables and equipment across
                departments, stores and locations.
              </p>
              <p>
                Aveon Inventory Management brings items, suppliers, purchases, receipts, issues, transfers and returns
                into one centralized digital workflow — part of the wider Aveon ERP ecosystem.
              </p>
              <p className="font-semibold text-navy-800">Manage stock. Track movement. Improve visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Module ecosystem ── */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Complete Inventory Management Modules</h2>
          <p className="mt-3 text-lg text-navy-600">
            Everything you need to organise institutional inventory — grouped into four connected domains, from setup to
            reports.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INV_GROUPS.map((g) => (
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
            {INV_DEEP.map((mod) => (
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

      {/* ── Inventory workflow ── */}
      <section className="relative overflow-hidden border-y border-navy-100 bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(16,26,51,0.07) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-primary-600" />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-navy-400">
                <span className="block h-px w-8 bg-navy-300" />
                <span>Inventory workflow</span>
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-navy-900 sm:text-4xl xl:text-5xl">
                From Purchase.
                <br />
                To Consumption.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-600">
                Aveon connects the whole inventory journey — procurement, stock entry, movement and control — into one
                digital record.
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
            {INV_JOURNEY.map((group, gi) => (
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
            <span className="shrink-0">Requirement</span>
            <span className="h-px flex-1 bg-navy-200" />
            <span className="shrink-0">Reports</span>
          </div>
        </div>
      </section>

      {/* ── Stakeholders ── */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Built for Every Inventory Stakeholder</h2>
            <p className="mt-3 text-lg text-navy-600">
              Web-based, mobile-ready and role-based — everyone signs in to exactly what matters to them.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INV_STAKEHOLDERS.map((s) => (
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
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">From Manual Stock Registers to Digital Inventory Management</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-navy-500">Traditional Approach</h3>
            <p className="mt-4 text-navy-700">
              Purchase records, stock registers, issue registers, department records, transfer records and physical
              verification — all kept separately.
            </p>
            <p className="mt-4 font-semibold text-navy-900">= More registers, more searching</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
              {["Paper stock & issue registers", "Hard to answer 'what do we have?'", "Manual purchase tracking", "Disconnected department records", "Slow physical verification"].map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-600">With Aveon Inventory</h3>
            <p className="mt-4 text-navy-700">
              Items, suppliers, purchases, stores, stock, issues, transfers, returns and reports all connect through one
              system — inside the campus ERP.
            </p>
            <p className="mt-4 font-semibold text-primary-800">= One connected inventory system</p>
            <ul className="mt-4 space-y-1.5 text-sm text-navy-700">
              {["Centralized inventory information", "Stock visibility by store & location", "Structured receipts, issues & returns", "Connected procurement", "Department-level visibility & reports"].map((x) => (
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
            {inventoryFaqs.map((faq) => (
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Know Your Stock. Track Every Movement. Manage with Confidence.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Bring items, suppliers, purchases, stores and stock together — and build a more organised digital inventory
              inside the Aveon ERP.
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
