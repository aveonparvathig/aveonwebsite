import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutSection from "@/components/sections/AboutSection";
import ProductsGrid from "@/components/sections/ProductsGrid";
import ServicesSection from "@/components/sections/ServicesSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ProductsGrid />
      <ServicesSection />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
