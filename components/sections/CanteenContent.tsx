import Link from "next/link";

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

const MODULES: { n: string; title: string }[] = [
  { n: "01", title: "Digital Menu & Daily Offerings" },
  { n: "02", title: "Online Order & Pre-Order" },
  { n: "03", title: "Cashless Payment (ID Card / RFID)" },
  { n: "04", title: "Wallet & Parent Top-Up" },
  { n: "05", title: "GST Billing & Receipts" },
  { n: "06", title: "Counter & POS Operations" },
  { n: "07", title: "Inventory & Stock" },
  { n: "08", title: "Vendor & Supplier Management" },
  { n: "09", title: "Recipe & Raw-Material Costing" },
  { n: "10", title: "Staff Scheduling & Attendance" },
  { n: "11", title: "Mess Integration" },
  { n: "12", title: "Reports, Analytics & Dashboards" },
];

type Segment = { title: string; intro: string; items: string[] };

const SEGMENTS: Segment[] = [
  {
    title: "Cashless campus canteen",
    intro:
      "Students and staff pay with the same ID card or RFID tag they already carry, so the counter queue moves without cash, change or long waits.",
    items: [
      "ID-card and RFID tap-to-pay at every counter",
      "Prepaid wallet with online and parent top-up",
      "Daily and per-item spending limits for students",
      "No cash handling, so no reconciliation errors at close",
      "Instant GST receipts by SMS, email or print",
    ],
  },
  {
    title: "Cafeteria and food-court operations",
    intro:
      "Run one counter or a multi-vendor food court from a single system: menus, pricing, stock and settlement for each outlet in one place.",
    items: [
      "Per-outlet menus, pricing and timing",
      "Vendor-wise sales and settlement reports",
      "Pre-order and scheduled pickup to cut peak-hour rush",
      "Stock-out alerts and automatic reorder levels",
      "Recipe cards and raw-material costing per dish",
    ],
  },
  {
    title: "Hostel mess and subsidised canteen",
    intro:
      "For residential campuses, the canteen connects to the hostel mess so meal plans, attendance and billing stay in sync with the student record.",
    items: [
      "Mess membership, meal plans and attendance",
      "Subsidy and institution-funded meal handling",
      "Cycle-based mess billing posted to student fees",
      "Extra-sales and guest-meal capture",
      "Consumption reports for planning and waste control",
    ],
  },
];

const BENEFITS = [
  {
    role: "Management",
    text: "Live dashboards on daily sales, footfall, stock value and vendor settlement, so the canteen runs on numbers rather than guesswork.",
  },
  {
    role: "Canteen in-charge",
    text: "Menus, counters, stock and staff rosters in one screen, with automatic billing and end-of-day totals that reconcile themselves.",
  },
  {
    role: "Students & parents",
    text: "A prepaid wallet parents top up online, spending limits they control, and a faster queue because every payment is a single tap.",
  },
  {
    role: "Accounts",
    text: "GST-ready receipts, vendor-wise settlement and a clean daily close with no cash drawer to count or correct.",
  },
];

export const canteenFaqs: { question: string; answer: string }[] = [
  {
    question: "What is a canteen management system?",
    answer:
      "A canteen management system is software that runs a campus canteen or cafeteria end to end: digital menus, ordering, cashless payment, GST billing, inventory, vendor management and reporting. Aveon's canteen management system replaces cash, registers and spreadsheets with one connected platform that links to the student record and hostel mess.",
  },
  {
    question: "How does cashless canteen payment work?",
    answer:
      "Students and staff pay by tapping the same ID card or RFID tag they use on campus against a prepaid wallet. Parents top the wallet up online, institutions can set daily or per-item spending limits, and every transaction produces an instant GST receipt. No cash means no change at the counter and no drawer to reconcile at close.",
  },
  {
    question: "Does it support a multi-vendor food court?",
    answer:
      "Yes. Each outlet gets its own menu, pricing, timings and stock, while the institution sees consolidated sales and vendor-wise settlement. Pre-order and scheduled pickup reduce the peak-hour rush across every counter.",
  },
  {
    question: "Can the canteen connect to the hostel mess?",
    answer:
      "Yes. For residential campuses the canteen links to the hostel mess so meal plans, mess attendance and cycle-based billing stay in sync with the student record, and mess dues post straight to the fee ledger.",
  },
  {
    question: "Does the canteen software handle GST billing and inventory?",
    answer:
      "Yes. It issues GST-compliant receipts, tracks raw-material stock with reorder alerts, costs each dish from its recipe, and manages vendors and suppliers, giving accounts a clean daily close and a full audit trail.",
  },
  {
    question: "Is Aveon canteen management part of the campus ERP?",
    answer:
      "Yes. It is one module of the Aveon campus platform, so student IDs, fees and hostel data are already shared. You can run it alongside the college or university ERP or as a standalone canteen system.",
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

export default function CanteenContent() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-white to-navy-50">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 sm:pb-14 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-600">
              Cashless Campus Canteen
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              One Canteen Management System for the Whole Campus
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>
                A campus canteen loses time and money at three points: the cash queue, the stock
                room and the end-of-day reconciliation. Aveon&apos;s canteen management system
                removes all three. Students pay by tapping their ID card, stock and recipes are
                tracked automatically, and the day closes with GST-ready totals that already balance.
              </p>
              <p>
                It is cashless canteen software, cafeteria management software and mess billing in
                one platform, connected to the same student record your college or university ERP
                already uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Complete Canteen Management Modules
          </h2>
          <p className="mt-3 text-lg text-navy-600">
            Twelve connected modules covering the counter, the kitchen, the store and the accounts
            desk.
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

      {/* Segments */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Built for Campus Canteens, Food Courts and Hostel Mess
          </h2>
          <p className="mt-3 text-lg text-navy-600">
            One system, configured to how your campus actually feeds its students.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {SEGMENTS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-primary-700">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.intro}</p>
              <ul className="mt-4 space-y-1.5">
                {s.items.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm text-navy-700">
                    <CheckIcon />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Everyone Gets a Faster, Cleaner Canteen
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b) => (
              <div key={b.role} className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-lg font-bold text-primary-700">{b.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-navy-600">
            The canteen is one module of the{" "}
            <Link href="/products/college-erp" className="font-semibold text-primary-600 hover:underline">
              college ERP software
            </Link>{" "}
            and connects to{" "}
            <Link href="/products/hostel-mess" className="font-semibold text-primary-600 hover:underline">
              hostel &amp; mess management
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-navy-100 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {canteenFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-navy-100 bg-navy-50 p-6 shadow-card [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 group-hover:text-primary-700 group-open:text-primary-700">
                    {faq.question}
                  </h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-200 text-navy-500 transition group-open:rotate-180 group-open:border-primary-600 group-open:bg-primary-600 group-open:text-white">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
