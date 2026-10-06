import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "College ERP by State | Higher Education Software",
  description:
    "State-specific college ERP solutions for 28 Indian states. Higher education software serving 200+ institutions. NAAC-compliant. Anna University, JNTU, VTU approved across Tamil Nadu, Telangana, Karnataka, Maharashtra, Delhi and more.",
  keywords: [
    "College ERP Solutions by State",
    "Higher Education Software India",
    "State-wise Education Software",
    "University Management System",
    "NAAC Compliance Software",
    "Multi-State College Management",
    "College Software Solutions",
    "Educational ERP by State",
    "AICTE Compliance",
    "College ERP Tamil Nadu",
  ],
};

const FEATURED_STATES = [
  { name: "Tamil Nadu", count: "500+", slug: "tamil-nadu" },
  { name: "Telangana", count: "300+", slug: "telangana" },
  { name: "Karnataka", count: "250+", slug: "karnataka" },
  { name: "Maharashtra", count: "280+", slug: "maharashtra" },
  { name: "Delhi NCR", count: "220+", slug: "delhi" },
];

const ALL_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function ByStatePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Solutions", href: "/solutions" },
      { name: "By State", href: "/solutions/by-state" },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1320px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Solutions Hub
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Find Campus ERP Solutions for Your State.
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Tailored education management solutions serving 200+ institutions across India with state-specific compliance and local support.
            </p>
          </div>
        </div>
      </section>

      {/* Featured States */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">Featured States</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FEATURED_STATES.map((state) => (
              <Link
                key={state.slug}
                href={`/solutions/college-erp-${state.slug}`}
                className="rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6 hover:border-primary-400 hover:shadow-lg transition"
              >
                <p className="text-xl font-bold text-navy-900">{state.name}</p>
                <p className="mt-2 text-sm text-navy-600">{state.count} institutions</p>
                <p className="mt-4 text-primary-600 font-semibold flex items-center gap-2">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All States */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">All States</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ALL_STATES.map((state) => {
              const slug = state.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={state}
                  href={`/solutions/college-erp-${slug}`}
                  className="rounded-lg border border-navy-100 bg-white px-4 py-3 text-navy-900 hover:border-primary-400 hover:bg-primary-50 transition font-medium"
                >
                  {state}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why State-Specific */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Why State-Specific Solutions?</h2>
            <p className="mt-4 text-lg text-navy-600">
              Each state has unique educational requirements, compliance standards, and regulatory frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <p className="font-bold text-lg text-navy-900 mb-3">State Compliance</p>
              <p className="text-navy-700">
                Built-in compliance with state-specific board requirements, exam formats, and educational standards.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <p className="font-bold text-lg text-navy-900 mb-3">Local Regulations</p>
              <p className="text-navy-700">
                Support for state education boards, NAAC compliance, and local regulatory requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <p className="font-bold text-lg text-navy-900 mb-3">Local Support</p>
              <p className="text-navy-700">
                Regional teams familiar with local institutions, workflows, and specific challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Each State Page Includes</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-navy-900 mb-4">Platform & Features</h3>
              <ul className="space-y-2 text-navy-700">
                <li>✓ 12 integrated product modules</li>
                <li>✓ Student information system</li>
                <li>✓ Examination management</li>
                <li>✓ Warehouse & inventory</li>
                <li>✓ HR & payroll systems</li>
                <li>✓ Custom integrations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-navy-900 mb-4">Support & Compliance</h3>
              <ul className="space-y-2 text-navy-700">
                <li>✓ NAAC/AICTE compliance</li>
                <li>✓ State board compliance</li>
                <li>✓ Local implementation team</li>
                <li>✓ 24/7 technical support</li>
                <li>✓ Training & documentation</li>
                <li>✓ Ongoing optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary-600">28</p>
              <p className="mt-2 text-navy-700 font-semibold">States Covered</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary-600">200+</p>
              <p className="mt-2 text-navy-700 font-semibold">Institutions</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary-600">50K+</p>
              <p className="mt-2 text-navy-700 font-semibold">Students</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary-600">12+</p>
              <p className="mt-2 text-navy-700 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-navy-100 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Campus?</h2>
          <p className="mt-4 text-lg text-primary-100">
            Choose your state above to explore solutions tailored for your institution.
          </p>
          <Link
            href="/contact#demo"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-navy-50 px-8 py-4 text-base font-bold text-primary-600 shadow-lg transition-all hover:-translate-y-0.5"
          >
            Get Free Consultation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
