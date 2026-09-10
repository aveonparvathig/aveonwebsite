import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aveon vs MasterSoft vs Camu: Campus ERP Comparison | Aveon",
  description: "Detailed comparison of campus ERP solutions: Aveon, MasterSoft, and Camu. Features, pricing, implementation, support, and suitability for different institution types.",
  keywords: [
    "Aveon vs MasterSoft",
    "campus ERP comparison",
    "university ERP software",
    "ERP feature comparison",
    "education management systems",
  ],
};

export default function Comparisons() {
  const features = [
    {
      category: "Core Features",
      items: [
        { feature: "Student Management", aveon: "✓", mastersoft: "✓", camu: "✓" },
        { feature: "Admissions & Enrollment", aveon: "✓", mastersoft: "✓", camu: "✓" },
        { feature: "Academic Management", aveon: "✓", mastersoft: "✓", camu: "✓" },
        { feature: "Fee Management", aveon: "✓", mastersoft: "✓", camu: "✓" },
        { feature: "HR & Payroll", aveon: "✓", mastersoft: "✓", camu: "•" },
      ]
    },
    {
      category: "AI & Analytics",
      items: [
        { feature: "AI Chatbot", aveon: "✓", mastersoft: "✓", camu: "•" },
        { feature: "Predictive Analytics", aveon: "✓", mastersoft: "✓", camu: "•" },
        { feature: "Student At-Risk Prediction", aveon: "✓", mastersoft: "✓", camu: "•" },
        { feature: "Learning Analytics", aveon: "✓", mastersoft: "✓", camu: "✓" },
      ]
    },
    {
      category: "Compliance",
      items: [
        { feature: "OBE Support", aveon: "✓", mastersoft: "✓", camu: "✓" },
        { feature: "NAAC Compliance", aveon: "✓", mastersoft: "✓", camu: "✓" },
        { feature: "AICTE Requirements", aveon: "✓", mastersoft: "•", camu: "•" },
        { feature: "CBCS Support", aveon: "✓", mastersoft: "•", camu: "✓" },
      ]
    },
    {
      category: "Institutional Type",
      items: [
        { feature: "Universities", aveon: "✓", mastersoft: "✓", camu: "✓" },
        { feature: "Colleges", aveon: "✓", mastersoft: "✓", camu: "✓" },
        { feature: "Schools", aveon: "✓", mastersoft: "•", camu: "•" },
        { feature: "Multi-Campus", aveon: "✓", mastersoft: "•", camu: "✓" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-extrabold leading-tight text-navy-900">
            Campus ERP Platform Comparison
          </h1>
          <p className="mx-auto max-w-[640px] text-lg text-navy-700">
            Compare Aveon, MasterSoft, and Camu across features, pricing, and suitability for your institution.
          </p>
        </div>

        {/* Comparison Tables */}
        {features.map((section) => (
          <div key={section.category} className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-navy-900">
              {section.category}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-navy-900/10">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-50">
                    <th className="px-6 py-4 text-left font-bold text-navy-900">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-navy-900">
                      Aveon
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-navy-900">
                      MasterSoft
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-navy-900">
                      Camu
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item) => (
                    <tr
                      key={item.feature}
                      className="border-t border-navy-900/10 hover:bg-navy-50"
                    >
                      <td className="px-6 py-4 font-medium text-navy-900">
                        {item.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                            item.aveon === "✓"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {item.aveon}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                            item.mastersoft === "✓"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {item.mastersoft}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                            item.camu === "✓"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {item.camu}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {/* Key Differences */}
        <div className="mb-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border border-navy-900/10 p-6">
            <h3 className="mb-4 text-lg font-bold text-primary-600">
              Why Choose Aveon?
            </h3>
            <ul className="space-y-2 text-sm text-navy-700">
              <li>✓ Best-in-class for Indian education standards</li>
              <li>✓ Comprehensive school support (K-12)</li>
              <li>✓ Strong AICTE compliance</li>
              <li>✓ 12+ years industry experience</li>
              <li>✓ 5000+ satisfied institutions</li>
              <li>✓ Coimbatore-based, India-focused</li>
            </ul>
          </div>

          <div className="rounded-lg border border-navy-900/10 p-6">
            <h3 className="mb-4 text-lg font-bold">
              MasterSoft Strengths
            </h3>
            <ul className="space-y-2 text-sm text-navy-700">
              <li>✓ Strong AI/ML capabilities</li>
              <li>✓ Retention prediction focus</li>
              <li>✓ Global presence</li>
              <li>✓ Advanced analytics</li>
              <li>• Limited school support</li>
              <li>• Higher price point</li>
            </ul>
          </div>

          <div className="rounded-lg border border-navy-900/10 p-6">
            <h3 className="mb-4 text-lg font-bold">
              Camu Strengths
            </h3>
            <ul className="space-y-2 text-sm text-navy-700">
              <li>✓ Multi-campus specialization</li>
              <li>✓ Global institutions</li>
              <li>✓ Scalable architecture</li>
              <li>• Limited school support</li>
              <li>• Minimal AI features</li>
              <li>• Less AICTE focus</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Choose the Right ERP for Your Institution?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Schedule a detailed demo and see how Aveon compares to alternatives.
          </p>
          <Link
            href="/contact#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-bold text-primary-600 hover:bg-gray-100"
          >
            Request Comparison Demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}