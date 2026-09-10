import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-Powered Student Retention Prediction System | Aveon",
  description: "Predict at-risk students before they drop out. AI-powered analytics identify struggling students early for targeted interventions. Improve retention and graduation rates.",
  keywords: [
    "student retention prediction",
    "at-risk student identification",
    "dropout prediction AI",
    "student success analytics",
    "retention analytics software",
  ],
};

export default function StudentRetentionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-[800px]">
            <span className="inline-block rounded-full bg-green-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
              Feature
            </span>
            <h1 className="mt-6 text-[clamp(36px,5vw,56px)] font-extrabold leading-tight text-navy-900">
              Predict & Prevent Student Dropouts
            </h1>
            <p className="mt-6 text-lg text-navy-700">
              AI-powered predictive analytics identify at-risk students before they drop out. Enable timely interventions and improve institutional retention rates.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
              >
                See It In Action
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
            How AI Prediction Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { number: "1", title: "Data Collection", desc: "Gather academic, behavioral, and engagement data" },
              { number: "2", title: "AI Analysis", desc: "Machine learning models identify patterns" },
              { number: "3", title: "Risk Scoring", desc: "Calculate risk score for each student" },
              { number: "4", title: "Intervention", desc: "Alert advisors for targeted support" },
            ].map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600">
                  {step.number}
                </div>
                <h3 className="mb-2 font-bold text-navy-900">{step.title}</h3>
                <p className="text-sm text-navy-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Factors */}
      <section className="bg-navy-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-8 text-[clamp(28px,4vw,40px)] font-extrabold text-navy-900">
            What the System Analyzes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "📚", title: "Academic Performance", desc: "GPA trends, grade changes, course failures" },
              { icon: "📊", title: "Attendance", desc: "Class attendance patterns and absences" },
              { icon: "💬", title: "Engagement", desc: "LMS activity, participation, interaction levels" },
              { icon: "💰", title: "Financial Status", desc: "Fee payment patterns and outstanding dues" },
              { icon: "⏰", title: "Behavioral Patterns", desc: "Late submissions, assignment completion" },
              { icon: "🎯", title: "External Factors", desc: "Demographics, first-gen status, work status" },
            ].map((factor) => (
              <div key={factor.title} className="rounded-lg bg-white p-6">
                <div className="mb-3 text-3xl">{factor.icon}</div>
                <h3 className="mb-2 font-bold text-navy-900">{factor.title}</h3>
                <p className="text-sm text-navy-700">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-12 text-center text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
            Proven Impact
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100/50 p-8 text-center">
              <div className="text-4xl font-bold text-green-600">↑ 15-25%</div>
              <p className="mt-3 text-navy-700">Improved retention rates with early intervention</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 text-center">
              <div className="text-4xl font-bold text-blue-600">↑ 20-30%</div>
              <p className="mt-3 text-navy-700">Better graduation rates and completion</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 text-center">
              <div className="text-4xl font-bold text-purple-600">↓ 40%</div>
              <p className="mt-3 text-navy-700">Reduced student intervention workload</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 text-center text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4 sm:px-6">
          <h2 className="text-3xl font-bold">
            Start Predicting & Preventing Dropouts Today
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Aveon's AI-powered retention system helps you identify and support at-risk students.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-green-600 hover:bg-gray-100"
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