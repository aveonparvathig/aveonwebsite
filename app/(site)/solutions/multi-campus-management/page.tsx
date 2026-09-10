import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-Campus University Management System | Aveon ERP",
  description: "Unified multi-campus university management platform. Centralized student records, admissions, academics, and operations across multiple campuses. Streamline administration for distributed institutions.",
  keywords: [
    "multi-campus university management",
    "distributed campus system",
    "multi-site university ERP",
    "centralized campus management",
    "multi-location student management",
  ],
};

export default function MultiCampusPage() {
  const benefits = [
    {
      title: "Centralized Student Records",
      description: "Single student database across all campuses. No data duplication or synchronization issues.",
    },
    {
      title: "Unified Admissions",
      description: "Process applications across multiple campuses from one platform. Streamline intake across locations.",
    },
    {
      title: "Consistent Academic Management",
      description: "Same academic processes, standards, and quality across all campuses.",
    },
    {
      title: "Integrated Reporting",
      description: "Campus-wise and institution-wide reports. Consolidate metrics for institutional accreditation.",
    },
    {
      title: "Seamless Fee Management",
      description: "Unified fee structure, collections, and accounting across all locations.",
    },
    {
      title: "Real-Time Visibility",
      description: "Dashboard view of all campuses. Monitor operations and performance in real-time.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="max-w-[800px]">
            <span className="inline-block rounded-full bg-primary-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-700">
              Solution
            </span>
            <h1 className="mt-6 text-[clamp(36px,5vw,56px)] font-extrabold leading-tight text-navy-900">
              Multi-Campus University Management
            </h1>
            <p className="mt-6 text-lg text-navy-700">
              Unified platform for managing multiple campuses. Centralize student records, admissions, academics, and operations across distributed locations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-bold text-white hover:bg-primary-700"
              >
                Request Demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-600 px-6 py-3 font-bold text-primary-600 hover:bg-primary-50"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold text-navy-900">
              Benefits of Unified Multi-Campus Management
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-navy-900/10 p-6 hover:border-primary-600/30 hover:shadow-lg"
              >
                <h3 className="mb-3 font-bold text-navy-900">{benefit.title}</h3>
                <p className="text-sm text-navy-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-primary-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <h2 className="mb-8 text-[clamp(28px,4vw,40px)] font-extrabold text-navy-900">
            How Symbiosis Unified 5 Campuses
          </h2>
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 font-bold text-navy-900">Challenge</h3>
              <ul className="space-y-2 text-navy-700">
                <li>• 5 separate campuses with different systems</li>
                <li>• No unified student database</li>
                <li>• Inconsistent admissions process</li>
                <li>• Difficult institutional reporting for accreditation</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold text-navy-900">Solution with Aveon</h3>
              <ul className="space-y-2 text-navy-700">
                <li>✓ Single unified platform for all campuses</li>
                <li>✓ Centralized student management</li>
                <li>✓ Standardized academic processes</li>
                <li>✓ Automated NAAC reporting</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">40%</div>
              <p className="text-sm text-navy-700">Admin time reduced</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <p className="text-sm text-navy-700">Data consistency</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">2 weeks</div>
              <p className="text-sm text-navy-700">Implementation time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-navy-900">
            Ready to Unify Your Multi-Campus Operations?
          </h2>
          <p className="mt-4 text-navy-700">
            Let us show you how Aveon can centralize your distributed institutions.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-3.5 font-bold text-white hover:bg-primary-700"
          >
            Schedule a Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}