import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Canteen Management System | Aveon Campus ERP",
  description: "Digital canteen and food service management platform. Online menu, orders, billing, inventory, vendor management, staff scheduling and health compliance tracking.",
  keywords: [
    "canteen management system",
    "food service management",
    "mess management software",
    "cafeteria management",
    "online canteen portal",
  ],
};

export default function CanteenManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-orange-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-orange-700">
              Product
            </span>
            <h1 className="mt-5">
              <span className="block text-balance text-[28px] font-semibold leading-[1.12] tracking-tight text-navy-900 sm:text-[34px] xl:text-[40px]">
                <span className="bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text font-extrabold text-transparent">Aveon</span> Canteen &amp; Food Service Management
              </span>
              <span aria-hidden className="mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-500" />
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Complete digital platform for canteen operations: menu management, online ordering, billing, inventory, vendor management and health compliance, all integrated.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(234_88_12_/_0.8)] transition-all hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Request Demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center rounded-full border border-orange-600 bg-white px-7.5 py-4 text-[15px] font-bold text-orange-600 transition hover:border-orange-700 hover:text-orange-700"
              >
                All Products
              </Link>
            </div>
          </div>
          <Image
            src="/products/canteen-dashboard.webp"
            alt="Canteen and Food Service Management System"
            width={1380}
            height={1140}
            className="w-full rounded-2xl object-contain"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
              Modern Canteen Operations Platform
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🍽️",
                title: "Digital Menu",
                desc: "Create and publish daily menus with nutritional information, allergen details and pricing.",
              },
              {
                icon: "📱",
                title: "Online Ordering",
                desc: "Students and staff place orders via mobile app or web portal with pre-booking and scheduled delivery.",
              },
              {
                icon: "💳",
                title: "Billing & Payments",
                desc: "Integrated billing with multiple payment options (wallet, card, bank transfer). Monthly statements.",
              },
              {
                icon: "📦",
                title: "Inventory Management",
                desc: "Track ingredients, stock levels, expiry dates and auto-reorder alerts.",
              },
              {
                icon: "👥",
                title: "Vendor Management",
                desc: "Manage supplier details, purchase orders, invoices, quality ratings and delivery tracking.",
              },
              {
                icon: "⏱️",
                title: "Staff Scheduling",
                desc: "Create schedules for canteen staff, track attendance, manage roles and permissions.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-lg border border-navy-900/10 p-6 hover:border-orange-600/30 hover:shadow-lg">
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 font-bold text-navy-900">{feature.title}</h3>
                <p className="text-sm text-navy-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Compliance */}
      <section className="bg-orange-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(28px,4vw,40px)] font-extrabold text-navy-900">
            Health, Safety & Compliance
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🏥", title: "Food Safety", desc: "Track hygiene standards, food handler certifications and health inspections." },
              { icon: "🧼", title: "Cleanliness Audit", desc: "Daily checklists for kitchen and dining area cleanliness with photo documentation." },
              { icon: "⚠️", title: "Allergen Management", desc: "Maintain ingredient database with allergen information and track customer allergies." },
              { icon: "🔍", title: "Quality Control", desc: "Record daily inspections, maintain equipment maintenance logs and manage complaints." },
              { icon: "📋", title: "Compliance Reports", desc: "Generate health department reports and maintain audit trails for compliance." },
              { icon: "📊", title: "Analytics", desc: "Track food waste, meal preferences and financial metrics for operational optimization." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-white p-6">
                <div className="mb-3 text-3xl">{item.icon}</div>
                <h3 className="mb-2 font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm text-navy-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
            Benefits for Your Canteen
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg bg-navy-50 p-8">
              <h3 className="mb-3 text-xl font-bold text-navy-900">For Management</h3>
              <ul className="space-y-2 text-sm text-navy-700">
                <li>✓ 40% reduction in operational workload</li>
                <li>✓ Better inventory control and cost savings</li>
                <li>✓ Real-time financial tracking and reporting</li>
                <li>✓ Staff productivity monitoring</li>
                <li>✓ Compliance documentation and audits</li>
              </ul>
            </div>
            <div className="rounded-lg bg-orange-50 p-8">
              <h3 className="mb-3 text-xl font-bold text-navy-900">For Users</h3>
              <ul className="space-y-2 text-sm text-navy-700">
                <li>✓ Convenient online ordering anytime</li>
                <li>✓ Know nutritional and allergen information</li>
                <li>✓ Quick payment and billing online</li>
                <li>✓ Order tracking and notifications</li>
                <li>✓ Feedback and rating system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 text-center sm:px-6">
          <h2 className="mb-12 text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
            Proven Results
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-orange-50 to-orange-100/50 p-8">
              <div className="text-4xl font-bold text-orange-600">↓ 40%</div>
              <p className="mt-3 text-navy-700">Admin & operational workload reduced</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100/50 p-8">
              <div className="text-4xl font-bold text-green-600">↑ 35%</div>
              <p className="mt-3 text-navy-700">Orders through digital channel</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 p-8">
              <div className="text-4xl font-bold text-blue-600">↑ 50%</div>
              <p className="mt-3 text-navy-700">Cost savings through inventory optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Workflow */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <span className="inline-block rounded-full bg-white px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-orange-700 shadow-sm">
              How It Works
            </span>
            <h2 className="mt-4 text-[clamp(28px,4vw,40px)] font-extrabold leading-tight text-navy-900">
              Daily Workflow in Action
            </h2>
          </div>

          {(() => {
            const steps = [
              {
                time: "Morning",
                task: "Manager publishes daily menu with prices and nutritional info",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                ),
              },
              {
                time: "Mid-morning",
                task: "Students/staff browse menu and place orders via app",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v3m0 0v3m0-3h3m-3 0h-3" />
                  </svg>
                ),
              },
              {
                time: "Before lunch",
                task: "Kitchen receives order list and starts preparation",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                time: "Lunch time",
                task: "Orders collected, payments processed, feedback recorded",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                ),
              },
            ];
            return (
              <div className="relative">
                <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 lg:block" />
                <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {steps.map((item, i) => (
                    <div
                      key={item.time}
                      className="group relative flex flex-col rounded-[22px] border border-navy-900/8 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover lg:items-center lg:text-center"
                    >
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-orange-50 bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-[0_14px_28px_-12px_rgb(234_88_12_/_0.55)]">
                        {item.icon}
                        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[11px] font-extrabold text-white ring-2 ring-white">
                          {i + 1}
                        </span>
                      </div>
                      <div className="mt-4 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                        {item.time}
                      </div>
                      <p className="mt-3 text-sm font-bold leading-relaxed text-navy-900">{item.task}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 text-center text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <h2 className="text-3xl font-bold">
            Transform Your Canteen Operations
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Streamline food service, improve customer satisfaction and reduce costs with digital canteen management.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-orange-600 hover:bg-gray-100"
          >
            Request Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
