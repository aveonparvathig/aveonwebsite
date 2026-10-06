import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Campus ERP & Education Software Solutions | Coimbatore | Aveon",
  description:
    "Higher education software for Coimbatore colleges and universities. Local ERP solutions serving 200+ Tamil Nadu institutions. NAAC-compliant. Anna University approved. On-site support team.",
  keywords: [
    "College ERP Coimbatore",
    "Higher Education Software Coimbatore",
    "College Management Software Coimbatore",
    "University Management System Tamil Nadu",
    "Anna University compliant ERP",
    "NAAC software Coimbatore",
    "Educational ERP Coimbatore",
    "Institution Management System",
    "Campus management system Coimbatore",
  ],
};

export default function CoimbatoreePage() {
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Solutions", href: "/solutions" },
      { name: "Coimbatore", href: "/solutions/coimbatore" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Aveon Infotech Pvt Ltd",
      "image": "https://aveon.io/logo.png",
      "description": "Campus ERP and Education Software Solutions for Colleges and Universities in Coimbatore",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Coimbatore, Tamil Nadu",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641000",
        "addressCountry": "IN"
      },
      "telephone": "+91 87540 06483",
      "url": "https://aveon.io/solutions/coimbatore",
      "priceRange": "$$$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "200"
      }
    }
  ];

  return (
    <>
      {jsonLd.map((schema, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Coimbatore Solutions
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Campus ERP Solutions Built for Coimbatore Institutions.
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Serving 200+ colleges and universities across Coimbatore and Tamil Nadu with proven, NAAC-compliant education software. Local team. Local support. Local expertise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-600"
              >
                Schedule Local Demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center whitespace-nowrap rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600"
              >
                Visit Our Coimbatore Office
              </Link>
            </div>
          </div>
          <Image
            src="/products/college-erp-team.webp"
            alt="Coimbatore Education ERP Solutions"
            width={1248}
            height={848}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Local Advantage */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Why Coimbatore Institutions Choose Aveon</h2>
            <p className="mt-4 text-lg text-navy-600">
              Based in Coimbatore. Serving the region for 12+ years. Deep understanding of local needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <h3 className="font-bold text-lg text-navy-900">Local Presence</h3>
              <p className="mt-3 text-navy-600">
                Coimbatore-based team. Visit our office anytime. Same timezone for immediate support.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <h3 className="font-bold text-lg text-navy-900">Local Expertise</h3>
              <p className="mt-3 text-navy-600">
                Deep knowledge of Tamil Nadu regulations, Anna University compliance, and local educational standards.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <h3 className="font-bold text-lg text-navy-900">Local Relationships</h3>
              <p className="mt-3 text-navy-600">
                200+ institutions trust us. Strong references from Coimbatore colleges and universities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Proof */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Trusted by Coimbatore Institutions</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-primary-600">200+</p>
              <p className="mt-2 text-navy-700 font-semibold">Institutions Across Tamil Nadu</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary-600">50,000+</p>
              <p className="mt-2 text-navy-700 font-semibold">Students on Our Platform</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-primary-600">12+</p>
              <p className="mt-2 text-navy-700 font-semibold">Years Serving Coimbatore</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border-2 border-primary-200 bg-primary-50 p-8">
            <p className="font-bold text-navy-900 mb-4">Featured Coimbatore Success:</p>
            <p className="text-navy-700 leading-relaxed">
              "Aveon's system has transformed how we manage our campus. From student admissions to examination scheduling, everything is now automated. Our compliance process, which used to take weeks, now happens in days. The support team is always available and understands our specific needs. Highly recommended!" — Dr. Priya Sharma, Principal, Coimbatore College of Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Our Solutions</h2>
            <p className="mt-4 text-lg text-navy-600">
              All 12 products available locally. Customizable for your institution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "College ERP System",
              "University Management Software",
              "School ERP Platform",
              "Learning Management System",
              "Examination Management",
              "Warehouse Management",
              "HR & Payroll",
              "Student Information System",
              "Compliance Automation",
              "Custom Development",
              "Process Automation",
              "Team Augmentation",
            ].map((service) => (
              <div key={service} className="rounded-xl border border-primary-200 bg-primary-50 p-4">
                <p className="font-semibold text-navy-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Our Coimbatore Team</h2>
            <p className="mt-4 text-lg text-navy-600">
              15+ years combined experience. Available during business hours and for emergencies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-navy-100 bg-white p-8">
              <p className="font-bold text-lg text-navy-900 mb-3">Implementation & Support</p>
              <ul className="space-y-2 text-navy-700">
                <li>✓ Project managers</li>
                <li>✓ Implementation consultants</li>
                <li>✓ Training specialists</li>
                <li>✓ Support team (8AM-8PM IST)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-white p-8">
              <p className="font-bold text-lg text-navy-900 mb-3">Development & Customization</p>
              <ul className="space-y-2 text-navy-700">
                <li>✓ Custom development team</li>
                <li>✓ Integration specialists</li>
                <li>✓ Process automation experts</li>
                <li>✓ Database administrators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">Visit Our Coimbatore Office</h2>
            <p className="mt-4 text-lg text-navy-600">
              Stop by anytime to discuss your institution's needs. Coffee on us!
            </p>
          </div>

          <div className="mt-10 rounded-2xl border-2 border-primary-200 bg-primary-50 p-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="font-bold text-navy-900">Aveon Infotech Pvt Ltd</p>
                <p className="mt-2 text-navy-700">Coimbatore, Tamil Nadu</p>
                <p className="mt-4 font-semibold text-navy-900">Phone</p>
                <p className="text-primary-600">+91 87540 06483</p>
                <p className="mt-4 font-semibold text-navy-900">Hours</p>
                <p className="text-navy-700">Mon-Fri: 9AM-6PM IST</p>
              </div>
              <div>
                <p className="font-semibold text-navy-900 mb-3">Get in Touch</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
                >
                  Schedule Appointment
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
