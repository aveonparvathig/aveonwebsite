import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Grievance Management System | Aveon Campus ERP",
  description: "Online grievance and complaint management platform for institutions. Anonymous submissions, automatic routing, escalation, resolution tracking, and comprehensive reporting.",
  keywords: [
    "grievance management system",
    "complaint management software",
    "online grievance portal",
    "grievance redressal system",
    "institutional grievance management",
  ],
};

export default function GrievanceManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-blue-700">
              Product
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Grievance & Complaint Management
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Unified platform for managing grievances from students, staff, and others. Anonymous submissions, automatic routing, real-time tracking, and data-driven insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(37_99_235_/_0.8)] transition-all hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Request Demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center rounded-full border border-blue-600 bg-white px-7.5 py-4 text-[15px] font-bold text-blue-600 transition hover:border-blue-700 hover:text-blue-700"
              >
                All Products
              </Link>
            </div>
          </div>
          <Image
            src="/products/grievance.png"
            alt="Grievance and Complaint Management System"
            width={600}
            height={400}
            className="w-full rounded-2xl object-contain"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
              Complete Grievance Resolution Platform
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📱",
                title: "Multi-Channel Submission",
                desc: "Accept grievances through web portal, mobile app, SMS, email, and QR codes for easy access.",
              },
              {
                icon: "🔒",
                title: "Anonymous Reporting",
                desc: "Students and staff can submit grievances anonymously without fear of retaliation.",
              },
              {
                icon: "🤖",
                title: "Automatic Routing",
                desc: "AI-powered intelligent routing assigns grievances to appropriate departments automatically.",
              },
              {
                icon: "⏰",
                title: "SLA Management",
                desc: "Set SLAs for each grievance type and track resolution times automatically.",
              },
              {
                icon: "📊",
                title: "Real-Time Tracking",
                desc: "Track grievance status from submission to resolution with real-time notifications.",
              },
              {
                icon: "📈",
                title: "Analytics & Reports",
                desc: "Comprehensive dashboards showing grievance trends, resolution rates, and departmental performance.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-lg border border-navy-900/10 p-6 hover:border-blue-600/30 hover:shadow-lg">
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 font-bold text-navy-900">{feature.title}</h3>
                <p className="text-sm text-navy-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-blue-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(28px,4vw,40px)] font-extrabold text-navy-900">
            End-to-End Grievance Resolution Workflow
          </h2>
          <div className="grid gap-4 sm:grid-cols-5">
            {[
              { step: 1, title: "Submit", desc: "Grievant submits via portal, SMS, email, or QR" },
              { step: 2, title: "Route", desc: "System auto-assigns to relevant department" },
              { step: 3, title: "Acknowledge", desc: "Department acknowledges within 24-48 hours" },
              { step: 4, title: "Resolve", desc: "Investigation and resolution by designated team" },
              { step: 5, title: "Follow-up", desc: "Satisfaction feedback and closure" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-bold text-navy-900">{item.title}</h3>
                <p className="text-xs text-navy-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
            Benefits for Your Institution
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Faster Resolution", desc: "Reduce grievance resolution time from weeks to days with automated workflow." },
              { title: "Higher Satisfaction", desc: "Anonymous reporting and real-time tracking increase student/staff confidence." },
              { title: "Better Compliance", desc: "Meet accreditation requirements for grievance redressal mechanisms." },
              { title: "Data-Driven Insights", desc: "Identify systemic issues through grievance analytics and trends." },
              { title: "Reduced Burden", desc: "Eliminate manual tracking. Automated reminders and escalations." },
              { title: "Institutional Integrity", desc: "Transparent, fair, and documented resolution process." },
            ].map((benefit) => (
              <div key={benefit.title} className="rounded-lg bg-navy-50 p-6">
                <h3 className="mb-2 font-bold text-navy-900">{benefit.title}</h3>
                <p className="text-sm text-navy-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 text-center sm:px-6">
          <h2 className="mb-12 text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
            Measurable Impact
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 p-8">
              <div className="text-4xl font-bold text-blue-600">↓ 60%</div>
              <p className="mt-3 text-navy-700">Faster grievance resolution</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100/50 p-8">
              <div className="text-4xl font-bold text-green-600">↑ 40%</div>
              <p className="mt-3 text-navy-700">More complaints reported anonymously</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/50 p-8">
              <div className="text-4xl font-bold text-purple-600">↑ 75%</div>
              <p className="mt-3 text-navy-700">Satisfaction with grievance process</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-center text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <h2 className="text-3xl font-bold">
            Create a Fair & Transparent Grievance System
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Empower your institution with robust grievance management and redressal.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-blue-600 hover:bg-gray-100"
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
