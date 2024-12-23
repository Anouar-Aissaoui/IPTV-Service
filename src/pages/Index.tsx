import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Content } from "@/components/Content";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { BrandCarousel } from "@/components/BrandCarousel";
import { SEOContent } from "@/components/SEOContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <BrandCarousel />
      <Pricing />
      <Content />
      <FAQ />
      <Contact />
      <SEOContent />
    </div>
  );
};

export default Index;