import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Our Solutions",
  description:
    "Complete campus solutions for universities, colleges and schools from admissions to alumni, powered by the Aveon platform.",
};

const solutions = [
  {
    title: "For Universities",
    slug: "university-erp",
    text: "Multi-campus, multi-department universities run academics, COE, finance and research administration on one platform.",
    productSlugs: ["university-erp", "coe", "hrm-payroll", "hostel-mess"],
    image: "/products/uni1.jpg",
    eyebrow: "Universities",
  },
  {
    title: "For Colleges",
    slug: "college-erp",
    text: "Arts, science, engineering and autonomous colleges manage the full student lifecycle with built-in compliance reporting.",
    productSlugs: ["college-erp", "coe", "library-management", "lms-ai-chatbot"],
    image: "/products/clg.jpg",
    eyebrow: "Colleges",
  },
  {
    title: "For Schools",
    slug: "school-erp",
    text: "K-12 schools connect classrooms, parents and administration with simple, reliable tools.",
    productSlugs: ["school-erp", "lms-ai-chatbot", "hrm-payroll"],
    image: "/products/sch.jpg",
    eyebrow: "Schools",
  },
  {
    title: "For Group Institutions",
    slug: "university-erp",
    text: "Trusts and groups running multiple institutions get consolidated dashboards and centralized control.",
    productSlugs: ["university-erp", "college-erp", "school-erp", "inventory-management"],
    image: "/products/group.jpg",
    eyebrow: "Group Institutions",
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

      <section className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-[26px] border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-navy-50">
                <Image
                  src={s.image}
                  alt={s.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col p-6 sm:p-7.5">
                <span className="inline-block w-fit rounded-full bg-primary-50 px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
                  {s.eyebrow}
                </span>
                <h3 className="mt-4 text-[22px] sm:text-[24px] font-extrabold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-700">
                  {s.text}
                </p>

                {/* Products Links */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.productSlugs.map((slug) => {
                    const p = products.find((x) => x.slug === slug);
                    if (!p) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/products/${slug}`}
                        className="rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700 transition-colors hover:bg-primary-100"
                      >
                        {p.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
