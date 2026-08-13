import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Our Solutions",
  description:
    "Complete campus solutions for universities, colleges and schools — from admissions to alumni, powered by the Aveon platform.",
};

const solutions = [
  {
    title: "For Universities",
    slug: "university-erp",
    text: "Multi-campus, multi-department universities run academics, COE, finance and research administration on one platform.",
    productSlugs: ["university-erp", "coe", "hrm-payroll", "hostel-mess"],
  },
  {
    title: "For Colleges",
    slug: "college-erp",
    text: "Arts, science, engineering and autonomous colleges manage the full student lifecycle with built-in compliance reporting.",
    productSlugs: ["college-erp", "coe", "library-management", "lms-ai-chatbot"],
  },
  {
    title: "For Schools",
    slug: "school-erp",
    text: "K-12 schools connect classrooms, parents and administration with simple, reliable tools.",
    productSlugs: ["school-erp", "lms-ai-chatbot", "hrm-payroll"],
  },
  {
    title: "For Group Institutions",
    slug: "university-erp",
    text: "Trusts and groups running multiple institutions get consolidated dashboards and centralized control.",
    productSlugs: ["university-erp", "college-erp", "school-erp", "inventory-management"],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Solutions for Every Kind of Campus"
        description="The same integrated platform, configured for how your institution works."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card"
            >
              <h2 className="font-heading text-2xl font-bold text-navy-900">
                {s.title}
              </h2>
              <p className="mt-3 leading-relaxed text-navy-600">{s.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.productSlugs.map((slug) => {
                  const p = products.find((x) => x.slug === slug);
                  if (!p) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/products/${slug}`}
                      className="rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 hover:bg-primary-100"
                    >
                      {p.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
