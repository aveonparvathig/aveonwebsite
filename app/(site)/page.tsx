import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Customers from "@/components/sections/Customers";
import AboutSection from "@/components/sections/AboutSection";
import ProductsGrid from "@/components/sections/ProductsGrid";
import OBEComplianceSection from "@/components/sections/OBEComplianceSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsWithRatings from "@/components/sections/TestimonialsWithRatings";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI-Powered Campus ERP & LMS | University, College & School Management",
  description: "Unified campus ERP & LMS for universities, colleges, and schools. AI-powered education software serving 5000+ institutions. Manage admissions, academics, fees, and operations on one platform. OBE compliant, NAAC/AICTE ready.",
  keywords: [
    "AI-powered campus ERP",
    "university ERP system",
    "college ERP software",
    "school management system",
    "unified campus management",
    "outcome-based education platform",
    "student information system",
    "learning management system",
    "education ERP India",
  ],
  openGraph: {
    title: "AI-Powered Campus ERP & LMS for Universities & Colleges",
    description: "Unified platform for education management. Manage students, academics, admissions, and operations with AI-powered analytics.",
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Customers />
      <AboutSection />
      <ProductsGrid />
      <OBEComplianceSection />
      <ServicesSection />
      <TestimonialsWithRatings />
      <FAQ />
      <CTASection />
    </>
  );
}
