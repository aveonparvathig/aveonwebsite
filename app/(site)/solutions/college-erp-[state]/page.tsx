import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import CTASection from "@/components/sections/CTASection";

// State data mapping
const STATES_DATA: Record<string, { name: string; count: string; description: string; universities: string[] }> = {
  "tamil-nadu": {
    name: "Tamil Nadu",
    count: "500+",
    description: "Serving colleges and universities across Tamil Nadu with Anna University compliance",
    universities: ["Anna University", "Madras University", "Bharathiar University", "Periyar University"],
  },
  "telangana": {
    name: "Telangana",
    count: "300+",
    description: "JNTU-compliant solutions for Telangana educational institutions",
    universities: ["JNTU Hyderabad", "Osmania University", "University of Hyderabad"],
  },
  "karnataka": {
    name: "Karnataka",
    count: "250+",
    description: "VTU-compliant ERP solutions for Karnataka colleges and universities",
    universities: ["Visvesvaraya Technical University", "Bangalore University", "University of Mysore"],
  },
  "maharashtra": {
    name: "Maharashtra",
    count: "280+",
    description: "Serving Maharashtra institutions with state board compliance",
    universities: ["University of Mumbai", "Savitribai Phule Pune University", "Nagpur University"],
  },
  "delhi": {
    name: "Delhi NCR",
    count: "220+",
    description: "Delhi University-compliant solutions for Delhi and NCR institutions",
    universities: ["Delhi University", "Jamia Millia Islamia", "GGSIPU"],
  },
  "haryana": {
    name: "Haryana",
    count: "180+",
    description: "Haryana education board compliant solutions",
    universities: ["Kurukshetra University", "GJUS&T Hisar"],
  },
  "punjab": {
    name: "Punjab",
    count: "160+",
    description: "Punjab-based institution solutions with local compliance",
    universities: ["Punjab University", "Guru Nanak Dev University"],
  },
  "west-bengal": {
    name: "West Bengal",
    count: "150+",
    description: "West Bengal education board compliant ERP",
    universities: ["University of Calcutta", "Jadavpur University", "University of Burdwan"],
  },
  "rajasthan": {
    name: "Rajasthan",
    count: "140+",
    description: "Rajasthan university compliant solutions",
    universities: ["Rajasthan University", "University of Rajasthan"],
  },
  "guadalajara": {
    name: "Guadalajara",
    count: "130+",
    description: "Gujarat education solutions with local compliance",
    universities: ["Gujarat University", "Maharaja Sayajirao University"],
  },
};

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const state = STATES_DATA[params.state];
  if (!state) return notFound();

  return {
    title: `College ERP & Education Software Solutions | ${state.name} | Aveon`,
    description: `${state.description}. Serving ${state.count} institutions. NAAC-compliant. Local support team.`,
    keywords: [
      `College ERP ${state.name}`,
      `Education software ${state.name}`,
      `Campus management system ${state.name}`,
      `University software ${state.name}`,
      `NAAC software ${state.name}`,
    ],
  };
}

export function generateStaticParams() {
  return Object.keys(STATES_DATA).map((state) => ({
    state: state,
  }));
}

export default function StateCollegeERPPage({ params }: { params: { state: string } }) {
  const stateData = STATES_DATA[params.state];

  if (!stateData) {
    notFound();
  }

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Solutions", href: "/solutions" },
      { name: "By State", href: "/solutions/by-state" },
      { name: stateData.name, href: `/solutions/college-erp-${params.state}` },
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
              {stateData.name} Solutions
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              College ERP Solutions for {stateData.name}
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              {stateData.description}. Trusted by {stateData.count} institutions. NAAC-compliant. Local support team available.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/contact#demo"
                className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-br from-primary-600 to-primary-700 hover:to-primary-600 px-7.5 py-4 text-[15px] font-bold text-white shadow-[0_18px_40px_-14px_rgb(29_111_242_/_0.85)] transition-all hover:-translate-y-0.5 hover:bg-primary-600"
              >
                Get Free Demo
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center whitespace-nowrap rounded-full border border-navy-900/12 bg-white px-7.5 py-4 text-[15px] font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-primary-600 hover:text-primary-600"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-10">Why {stateData.name} Institutions Choose Aveon</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <p className="font-bold text-lg text-navy-900">State Compliance</p>
              <p className="mt-3 text-navy-600">
                Built for {stateData.name} educational regulations and board requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <p className="font-bold text-lg text-navy-900">Proven Track Record</p>
              <p className="mt-3 text-navy-600">
                Trusted by {stateData.count} institutions across {stateData.name}.
              </p>
            </div>
            <div className="rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <p className="font-bold text-lg text-navy-900">Local Support</p>
              <p className="mt-3 text-navy-600">
                Expert support team familiar with {stateData.name} institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">Affiliated Universities</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {stateData.universities.map((uni) => (
              <div key={uni} className="rounded-lg border border-primary-200 bg-primary-50 p-4">
                <p className="font-semibold text-navy-900">{uni}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-10">Our Complete Solution Suite</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "College ERP System",
              "Examination Management",
              "Student Information System",
              "Warehouse Management",
              "Order Management",
              "HR & Payroll",
              "Learning Management System",
              "Library Management",
              "Hostel Management",
              "Process Automation",
              "Custom Development",
              "Team Augmentation",
            ].map((product) => (
              <div key={product} className="rounded-xl border border-primary-200 bg-primary-50 p-4">
                <p className="font-semibold text-navy-900">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-navy-100 bg-gradient-to-b from-navy-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary-600">{stateData.count}</p>
              <p className="mt-2 text-navy-700 font-semibold">Institutions</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary-600">50K+</p>
              <p className="mt-2 text-navy-700 font-semibold">Students Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary-600">12+</p>
              <p className="mt-2 text-navy-700 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Other States */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-navy-900">Explore Other States</h2>
          </div>
          <div className="flex justify-center">
            <Link
              href="/solutions/by-state"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition"
            >
              View All States
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
