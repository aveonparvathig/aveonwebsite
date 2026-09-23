import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

/** Function nodes orbiting the hub in the intro graphic. */
const OMS_NODES = ["Orders", "Customers", "Products", "Inventory", "Fulfilment", "Payments", "Tracking", "Returns"];

/** The order lifecycle, shown as a connected flow with icons and descriptions. */
const OMS_FLOW = [
  { step: 1, title: "Order Capture", icon: "📋", description: "Order is captured via omnichannel sources" },
  { step: 2, title: "Validation", icon: "🔍", description: "Data is validated; customer details, pricing." },
  { step: 3, title: "Confirmation", icon: "✓", description: "System confirms the order with customer." },
  { step: 4, title: "Inventory Check", icon: "📦", description: "Order details sent to fulfillment process" },
  { step: 5, title: "Processing", icon: "⚙️", description: "Items are picked and sorted from warehouse." },
  { step: 6, title: "Packing", icon: "📬", description: "Items packed and prepared for shipment." },
  { step: 7, title: "Dispatch", icon: "🚚", description: "Package is tagged and shipped out." },
  { step: 8, title: "Delivery", icon: "🎯", description: "Package tracked and delivered to customer." },
  { step: 9, title: "Completion", icon: "✅", description: "Order is successfully completed." }
];

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

/** Warehouse workflow — professional flow with icons and descriptions */
const WAREHOUSE_FLOW_PROFESSIONAL = [
  { step: 1, title: "Order Capture", icon: "📋", description: "Order is captured via omnichannel sources" },
  { step: 2, title: "Validation", icon: "🔍", description: "Data is validated; customer details, pricing." },
  { step: 3, title: "Confirmation", icon: "👍", description: "System confirms the order with details confirmed." },
  { step: 4, title: "Inventory Check", icon: "📦", description: "Order details are present and sent to the fulfil process" },
  { step: 5, title: "Processing", icon: "⚙", description: "Items are picked, sorted, and appropriate materials included." },
  { step: 6, title: "Packing", icon: "📬", description: "Items are packed, sorted, and appropriate materials included." },
  { step: 7, title: "Dispatch", icon: "🚚", description: "Package is tagged, carrier, and shipped out." },
  { step: 8, title: "Delivery", icon: "🎯", description: "Package is tracked, in transit, and nearing final delivery." },
  { step: 9, title: "Completion", icon: "✓", description: "Order is successfully completed." }
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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Order Lifecycle</h2>
          <p className="mt-4 text-lg text-navy-600">Complete order journey from receiving inventory to managing returns</p>
        </div>

        {/* Order Lifecycle Linear Flow Diagram - Desktop */}
        <div className="hidden lg:block overflow-x-auto">
          <svg viewBox="0 0 1200 300" className="w-full h-auto min-w-max" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="orderGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
              <linearGradient id="orderGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#DC2626" />
              </linearGradient>
              <linearGradient id="orderGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="orderGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>

            {/* Step 1: Order Capture */}
            <g>
              <rect x="20" y="80" width="100" height="100" rx="8" fill="white" stroke="url(#orderGrad1)" strokeWidth="2.5"/>
              <text x="70" y="120" textAnchor="middle" fontSize="32">📋</text>
              <text x="70" y="155" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Order</text>
              <text x="70" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Capture</text>
              <circle cx="70" cy="45" r="20" fill="url(#orderGrad1)" />
              <text x="70" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">1</text>
            </g>
            <line x1="120" y1="130" x2="150" y2="130" stroke="#3B82F6" strokeWidth="2.5" />
            <polygon points="150,130 142,126 142,134" fill="#3B82F6" />

            {/* Step 2: Validation */}
            <g>
              <rect x="150" y="80" width="100" height="100" rx="8" fill="white" stroke="url(#orderGrad1)" strokeWidth="2.5"/>
              <text x="200" y="125" textAnchor="middle" fontSize="32">🔍</text>
              <text x="200" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Validation</text>
              <circle cx="200" cy="45" r="20" fill="url(#orderGrad1)" />
              <text x="200" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">2</text>
            </g>
            <line x1="250" y1="130" x2="280" y2="130" stroke="#3B82F6" strokeWidth="2.5" />
            <polygon points="280,130 272,126 272,134" fill="#3B82F6" />

            {/* Step 3: Confirmation */}
            <g>
              <rect x="280" y="80" width="100" height="100" rx="8" fill="white" stroke="url(#orderGrad2)" strokeWidth="2.5"/>
              <text x="330" y="120" textAnchor="middle" fontSize="32">✓</text>
              <text x="330" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Confirmation</text>
              <circle cx="330" cy="45" r="20" fill="url(#orderGrad2)" />
              <text x="330" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">3</text>
            </g>
            <line x1="380" y1="130" x2="410" y2="130" stroke="#EF4444" strokeWidth="2.5" />
            <polygon points="410,130 402,126 402,134" fill="#EF4444" />

            {/* Step 4: Inventory Check */}
            <g>
              <rect x="410" y="80" width="100" height="100" rx="8" fill="white" stroke="url(#orderGrad2)" strokeWidth="2.5"/>
              <text x="460" y="120" textAnchor="middle" fontSize="32">📦</text>
              <text x="460" y="155" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Inventory</text>
              <text x="460" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Check</text>
              <circle cx="460" cy="45" r="20" fill="url(#orderGrad2)" />
              <text x="460" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">4</text>
            </g>
            <line x1="510" y1="130" x2="540" y2="130" stroke="#EF4444" strokeWidth="2.5" />
            <polygon points="540,130 532,126 532,134" fill="#EF4444" />

            {/* Step 5: Processing */}
            <g>
              <rect x="540" y="80" width="100" height="100" rx="8" fill="white" stroke="url(#orderGrad3)" strokeWidth="2.5"/>
              <text x="590" y="125" textAnchor="middle" fontSize="32">⚙️</text>
              <text x="590" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Processing</text>
              <circle cx="590" cy="45" r="20" fill="url(#orderGrad3)" />
              <text x="590" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">5</text>
            </g>
            <line x1="640" y1="130" x2="670" y2="130" stroke="#10B981" strokeWidth="2.5" />
            <polygon points="670,130 662,126 662,134" fill="#10B981" />

            {/* Step 6: Packing */}
            <g>
              <rect x="670" y="80" width="100" height="100" rx="8" fill="white" stroke="url(#orderGrad3)" strokeWidth="2.5"/>
              <text x="720" y="125" textAnchor="middle" fontSize="32">📬</text>
              <text x="720" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Packing</text>
              <circle cx="720" cy="45" r="20" fill="url(#orderGrad3)" />
              <text x="720" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">6</text>
            </g>
            <line x1="770" y1="130" x2="800" y2="130" stroke="#10B981" strokeWidth="2.5" />
            <polygon points="800,130 792,126 792,134" fill="#10B981" />

            {/* Step 7: Dispatch */}
            <g>
              <rect x="800" y="80" width="100" height="100" rx="8" fill="white" stroke="url(#orderGrad4)" strokeWidth="2.5"/>
              <text x="850" y="125" textAnchor="middle" fontSize="32">🚚</text>
              <text x="850" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Dispatch</text>
              <circle cx="850" cy="45" r="20" fill="url(#orderGrad4)" />
              <text x="850" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">7</text>
            </g>
            <line x1="900" y1="130" x2="930" y2="130" stroke="#F59E0B" strokeWidth="2.5" />
            <polygon points="930,130 922,126 922,134" fill="#F59E0B" />

            {/* Step 8: Delivery */}
            <g>
              <rect x="930" y="80" width="100" height="100" rx="8" fill="white" stroke="url(#orderGrad4)" strokeWidth="2.5"/>
              <text x="980" y="125" textAnchor="middle" fontSize="32">🎯</text>
              <text x="980" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Delivery</text>
              <circle cx="980" cy="45" r="20" fill="url(#orderGrad4)" />
              <text x="980" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">8</text>
            </g>
            <line x1="1030" y1="130" x2="1060" y2="130" stroke="#F59E0B" strokeWidth="2.5" />
            <polygon points="1060,130 1052,126 1052,134" fill="#F59E0B" />

            {/* Step 9: Completion */}
            <g>
              <rect x="1060" y="80" width="100" height="100" rx="8" fill="white" stroke="#10B981" strokeWidth="2.5"/>
              <text x="1110" y="125" textAnchor="middle" fontSize="32">✅</text>
              <text x="1110" y="160" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1F2937">Completion</text>
              <circle cx="1110" cy="45" r="20" fill="#10B981" />
              <text x="1110" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">9</text>
            </g>
          </svg>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-4">
          {OMS_FLOW.map((item, i) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-white border-4 border-primary-300 shadow-md">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{item.step}</div>
                </div>
                {i < OMS_FLOW.length - 1 && (
                  <div className="w-1 h-10 bg-gradient-to-b from-primary-300 to-primary-200 mt-2" />
                )}
              </div>
              <div className="flex-1 pt-1">
                <h4 className="font-bold text-navy-900">{item.title}</h4>
                <p className="text-sm text-navy-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Lifecycle Steps - Grid View */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OMS_FLOW.map((item) => (
            <div key={item.step} className="rounded-lg border border-navy-100 bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-50 border-2 border-primary-200">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary-600 text-white text-xs font-bold">{item.step}</span>
                    <h4 className="font-bold text-navy-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-navy-600 mt-2">{item.description}</p>
                </div>
              </div>
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

      {/* ── Warehouse Workflow — Professional Design with Icons ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-5xl">
          {/* Heading and subtitle */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">The Warehouse Workflow</h2>
            <p className="mt-6 text-lg text-primary-600 font-medium">From inbound to outbound, every stage connected on one platform.</p>
          </div>

          {/* Desktop flow with circles and line */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line background */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary-300 via-primary-400 to-emerald-400" style={{ zIndex: 0 }} />

              {/* Steps container */}
              <div className="relative flex items-start justify-between gap-3 pb-12" style={{ zIndex: 1 }}>
                {WAREHOUSE_FLOW_PROFESSIONAL.map((item) => (
                  <div key={`warehouse-${item.step}`} className="flex flex-col items-center flex-1">
                    {/* Circle with icon and number */}
                    <div className={`relative w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl shadow-lg border-4 mb-6 transition-all ${
                      item.step === 9
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                        : 'bg-primary-50 border-primary-400 text-primary-700 hover:shadow-xl'
                    }`}>
                      <span>{item.icon}</span>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{item.step}</div>
                    </div>

                    {/* Title and description */}
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-navy-900 mb-2">{item.title}</h3>
                      <p className="text-xs text-navy-600 leading-relaxed max-w-[100px]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical flow */}
          <div className="lg:hidden space-y-6">
            {WAREHOUSE_FLOW_PROFESSIONAL.map((item, i) => (
              <div key={`warehouse-mobile-${item.step}`}>
                <div className="flex gap-4">
                  {/* Circle with icon and number */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`relative w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg shadow-md border-4 transition-all ${
                      item.step === 9
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                        : 'bg-primary-50 border-primary-400 text-primary-700'
                    }`}>
                      <span>{item.icon}</span>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{item.step}</div>
                    </div>
                    {i < WAREHOUSE_FLOW_PROFESSIONAL.length - 1 && (
                      <div className="w-1 h-8 bg-gradient-to-b from-primary-300 to-primary-200 mt-2" />
                    )}
                  </div>

                  {/* Title and description */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-bold text-navy-900">{item.title}</h3>
                    <p className="text-sm text-navy-600 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
            <h3 className="text-xl font-bold text-navy-900 sm:text-2xl">Capture Orders. Automate Processes. Deliver Better.</h3>
            <p className="mx-auto mt-3 max-w-xl text-navy-600">
              Your order connects your customer, product, inventory, payment, operations and delivery — Aveon brings them
              together on one platform.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact#demo" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgb(29_111_242_/_0.4)] transition hover:bg-primary-600">
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
