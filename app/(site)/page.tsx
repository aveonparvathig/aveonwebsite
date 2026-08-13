import Hero from "@/components/sections/Hero";
import ProductsGrid from "@/components/sections/ProductsGrid";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ProductsGrid />
      <Testimonials />
      <CTASection />
    </>
  );
}
