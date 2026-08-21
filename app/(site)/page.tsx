import Hero from "@/components/sections/Hero";
import ProductsGrid from "@/components/sections/ProductsGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import AboutSection from "@/components/sections/AboutSection";
import FAQ from "@/components/sections/FAQ";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ProductsGrid />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
