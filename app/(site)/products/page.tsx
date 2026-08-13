import type { Metadata } from "next";
import ProductsGrid from "@/components/sections/ProductsGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Aveon Infotech's product suite — University ERP, College ERP, School ERP, LMS & AI Chatbot, HRM & Payroll and more.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-white">Our Products</h1>
        <p className="mx-auto mt-4 max-w-xl px-4 text-navy-300">
          Nine integrated products built for education — pick one, or run your
          entire campus on Aveon.
        </p>
      </section>
      <ProductsGrid />
      <CTASection />
    </>
  );
}
