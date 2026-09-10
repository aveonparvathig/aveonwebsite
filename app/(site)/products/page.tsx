import type { Metadata } from "next";
import Image from "next/image";
import ProductsGrid from "@/components/sections/ProductsGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Campus ERP Products | University, College & School Solutions | Aveon",
  description:
    "Explore Aveon's integrated campus ERP products: University ERP, College ERP, School ERP, LMS with AI Chatbot, HRM & Payroll, Hostel Management, and more. OBE-compliant, NAAC-ready solutions.",
  keywords: [
    "university ERP",
    "college ERP",
    "school ERP",
    "learning management system",
    "campus management software",
    "education ERP solutions",
    "student information system",
  ],
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-navy-900/8 bg-gradient-to-b from-[#f4f8ff] to-white">
        <div aria-hidden className="pointer-events-none absolute -right-28 -top-40 h-[480px] w-[480px] rounded-full bg-primary-600/20 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-accent-500/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-primary-50 px-3.5 py-1.5 text-[11.5px] font-extrabold uppercase tracking-[0.14em] text-primary-700">
              Products
            </span>
            <h1 className="mt-5 max-w-[880px] text-[clamp(34px,5vw,62px)] font-extrabold leading-[1.04] text-navy-900">
              Our Products
            </h1>
            <p className="mt-5 max-w-[620px] text-[17.5px] leading-[1.7] text-navy-700">
              Nine integrated products built for education — pick one, or run your entire campus on Aveon.
            </p>
          </div>
          <Image
            src="/products/erp1.jpg"
            alt="Aveon Products"
            width={600}
            height={400}
            className="w-full rounded-2xl object-contain"
          />
        </div>
      </section>
      <ProductsGrid />
      <CTASection />
    </>
  );
}
