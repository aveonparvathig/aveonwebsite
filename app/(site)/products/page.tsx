import type { Metadata } from "next";
import ProductsGrid from "@/components/sections/ProductsGrid";
import CTASection from "@/components/sections/CTASection";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Aveon Infotech's product suite University ERP, College ERP, School ERP, LMS & AI Chatbot, HRM & Payroll and more.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero 
        title="Our Products"
        description="Nine integrated products built for education — pick one, or run your entire campus on Aveon."
      />
      <ProductsGrid />
      <CTASection />
    </>
  );
}
