import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroImage } from "@/components/ui/OptimizedImage";
import { faqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Grievance Management System for Colleges & Universities",
  description:
    "Student grievance redressal software for colleges and universities: an online grievance cell for registration, tracking, escalation and time-bound resolution that meets the UGC grievance-redressal mandate, with anti-ragging and anonymous complaints.",
  keywords: [
    "Grievance Management System",
    "College Grievance Management System",
    "Student Grievance Redressal Software",
    "Grievance Management Software",
    "Online Grievance System for Colleges",
    "Student Grievance Management System",
    "UGC Grievance Redressal Cell Software",
    "Anti-Ragging Complaint System",
    "Grievance Tracking Software",
  ],
};

const grievanceFaqs = [
  {
    question: "What is a college grievance management system?",
    answer:
      "A college grievance management system is software that lets students raise grievances online and lets the institution register, route, track, escalate and resolve them within a defined time limit. Aveon's student grievance redressal software gives colleges and universities a single online grievance cell covering academic, administrative, hostel, fee, harassment and anti-ragging complaints.",
  },
  {
    question: "Does it meet the UGC grievance redressal requirement?",
    answer:
      "Yes. The UGC (Redressal of Grievances of Students) Regulations require every higher-education institution to operate an online grievance mechanism with a Grievance Redressal Committee and time-bound disposal. Aveon provides the online portal, committee workspace, SLA clock, escalation to the next authority and the audit trail needed to demonstrate compliance.",
  },
  {
    question: "Can students submit grievances anonymously?",
    answer:
      "Yes. Students can file named or anonymous grievances from the student portal, mobile app, SMS or email, with attachments. Anonymous handling and confidentiality encourage students to report issues, including ragging and harassment, early.",
  },
  {
    question: "How does escalation and tracking work?",
    answer:
      "Each grievance is auto-assigned to the right officer or committee with a service-level deadline. The student receives a reference number and sees live status; if the deadline passes, the case escalates automatically to the next authority. Every action is time-stamped in an audit trail.",
  },
  {
    question: "Does it include an anti-ragging complaint channel?",
    answer:
      "Yes. A dedicated, confidential channel captures ragging and safety complaints and routes them to the anti-ragging committee for priority, time-bound action, separate from routine academic or administrative grievances.",
  },
];

export default function GrievanceManagementPage() {
  return (
    <div className="min-h-dvh bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(grievanceFaqs)) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-primary-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-100 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Product
            </span>
            <h1 className="mt-5">
              <span className="block text-balance text-[28px] font-semibold leading-[1.12] tracking-tight text-navy-900 sm:text-[34px] xl:text-[40px]">
                <span className="bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text font-extrabold text-transparent">Aveon</span> Grievance Management System for Colleges
              </span>
              <span aria-hidden className="mt-5 block h-1.5 w-20 rounded-full bg-gradient-to-r from-primary-600 to-accent-500" />
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Unified platform for managing grievances from students, staff and others. Anonymous submissions, automatic routing, real-time tracking and data-driven insights.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.8)] transition-all hover:-translate-y-0.5 hover:bg-primary-600"
              >
                Request Demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center rounded-full border border-primary-600 bg-white px-7.5 py-4 text-[15px] font-bold text-primary-600 transition hover:border-primary-700 hover:text-primary-700"
              >
                All Products
              </Link>
            </div>
          </div>
          <HeroImage
            src="/products/grievance(1).png"
            alt="Grievance and Complaint Management System"
            width={600}
            height={400}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
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
                desc: "Accept grievances through web portal, mobile app, SMS, email and QR codes for easy access.",
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
                desc: "Comprehensive dashboards showing grievance trends, resolution rates and departmental performance.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-lg border border-navy-900/10 p-6 hover:border-primary-600/30 hover:shadow-lg">
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 font-bold text-navy-900">{feature.title}</h3>
                <p className="text-sm text-navy-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto mb-14 max-w-[720px] text-center">
            <span className="inline-block rounded-full bg-white px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700 shadow-sm">
              How It Works
            </span>
            <h2 className="mt-4 text-[clamp(28px,4vw,40px)] font-extrabold leading-tight text-navy-900">
              End-to-End Grievance Resolution Workflow
            </h2>
          </div>

          {(() => {
            const steps = [
              {
                step: 1,
                title: "Submit",
                desc: "Grievant submits via portal, SMS, email, or QR",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                ),
              },
              {
                step: 2,
                title: "Route",
                desc: "System auto-assigns to relevant department",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                ),
              },
              {
                step: 3,
                title: "Acknowledge",
                desc: "Department acknowledges within 24-48 hours",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                ),
              },
              {
                step: 4,
                title: "Resolve",
                desc: "Investigation and resolution by designated team",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                step: 5,
                title: "Follow-up",
                desc: "Satisfaction feedback and closure",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ),
              },
            ];
            return (
              <div className="relative">
                <div aria-hidden className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 sm:block" />
                <div className="relative grid gap-8 sm:grid-cols-5 sm:gap-4">
                  {steps.map((item) => (
                    <div key={item.step} className="relative text-center">
                      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary-50 bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-[0_16px_32px_-14px_rgb(29_111_242_/_0.6)]">
                        {item.icon}
                        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-[11px] font-extrabold text-white ring-2 ring-white">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="mt-4 mb-1.5 font-bold text-navy-900">{item.title}</h3>
                      <p className="text-xs leading-relaxed text-navy-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
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
              { title: "Institutional Integrity", desc: "Transparent, fair and documented resolution process." },
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
            <div className="rounded-lg bg-gradient-to-br from-primary-50 to-primary-100/50 p-8">
              <div className="text-4xl font-bold text-primary-600">↓ 60%</div>
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
      <section className="bg-primary-600 py-16 text-center text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <h2 className="text-3xl font-bold">
            Create a Fair & Transparent Grievance System
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Empower your institution with robust grievance management and redressal.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-primary-600 hover:bg-gray-100"
          >
            Request Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
            Grievance Management System: FAQs
          </h2>
          <div className="mt-10 space-y-3">
            {grievanceFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-navy-100 bg-white p-6 shadow-card [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-navy-900 group-open:text-primary-700">
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
    </div>
  );
}
