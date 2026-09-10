import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canteen Management System | Aveon Campus ERP",
  description: "Digital canteen and food service management platform. Online menu, orders, billing, inventory, vendor management, staff scheduling, and health compliance tracking.",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-[800px]">
            <span className="inline-block rounded-full bg-orange-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
              Product
            </span>
            <h1 className="mt-6 text-[clamp(36px,5vw,56px)] font-extrabold leading-tight text-navy-900">
              Canteen & Food Service Management
            </h1>
            <p className="mt-6 text-lg text-navy-700">
              Complete digital platform for canteen operations — menu management, online ordering, billing, inventory, vendor management, and health compliance, all integrated.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-bold text-white hover:bg-orange-700"
              >
                Request Demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-orange-600 px-6 py-3 font-bold text-orange-600 hover:bg-orange-50"
              >
                All Products
              </Link>
            </div>
          </div>
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
                desc: "Create and publish daily menus with nutritional information, allergen details, and pricing.",
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
                desc: "Track ingredients, stock levels, expiry dates, and auto-reorder alerts.",
              },
              {
                icon: "👥",
                title: "Vendor Management",
                desc: "Manage supplier details, purchase orders, invoices, quality ratings, and delivery tracking.",
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
              { icon: "🏥", title: "Food Safety", desc: "Track hygiene standards, food handler certifications, and health inspections." },
              { icon: "🧼", title: "Cleanliness Audit", desc: "Daily checklists for kitchen and dining area cleanliness with photo documentation." },
              { icon: "⚠️", title: "Allergen Management", desc: "Maintain ingredient database with allergen information and track customer allergies." },
              { icon: "🔍", title: "Quality Control", desc: "Record daily inspections, maintain equipment maintenance logs, and manage complaints." },
              { icon: "📋", title: "Compliance Reports", desc: "Generate health department reports and maintain audit trails for compliance." },
              { icon: "📊", title: "Analytics", desc: "Track food waste, meal preferences, and financial metrics for operational optimization." },
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
      <section className="bg-navy-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(28px,4vw,40px)] font-extrabold text-navy-900">
            Daily Workflow in Action
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { time: "Morning", task: "Manager publishes daily menu with prices and nutritional info" },
              { time: "Mid-morning", task: "Students/staff browse menu and place orders via app" },
              { time: "Before lunch", task: "Kitchen receives order list and starts preparation" },
              { time: "Lunch time", task: "Orders collected, payments processed, feedback recorded" },
            ].map((item) => (
              <div key={item.time} className="rounded-lg bg-white p-6">
                <div className="mb-3 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700 w-fit">
                  {item.time}
                </div>
                <p className="text-sm font-bold text-navy-900">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-16 text-center text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <h2 className="text-3xl font-bold">
            Transform Your Canteen Operations
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Streamline food service, improve customer satisfaction, and reduce costs with digital canteen management.
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
