import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Our Solutions
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Solutions for Every Kind of Campus
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              The same integrated platform, configured for how your institution works.
            </p>
          </div>
          <Image
            src="/products/ser.jpg"
            alt="Campus solutions"
            width={600}
            height={400}
            className="w-full rounded-2xl object-contain"
          />
        </div>
      </section>

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
