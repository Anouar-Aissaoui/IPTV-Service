import { Hero } from "@/components/Hero";
import { Content } from "@/components/Content";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { BrandCarousel } from "@/components/BrandCarousel";
import { SEOContent } from "@/components/SEOContent";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <BrandCarousel />
      <Content />
      <Pricing />
      <FAQ />
      <Contact />
      <SEOContent />
    </div>
  );
};

export default Index;