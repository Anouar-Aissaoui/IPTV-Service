import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { IPTVProviders } from "@/components/IPTVProviders";
import Content from "@/components/Content";
import { LiveSports } from "@/components/LiveSports";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { BrandCarousel } from "@/components/BrandCarousel";
import { SEOContent } from "@/components/SEOContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <IPTVProviders />
      <BrandCarousel />
      <Pricing />
      <Content />
      <LiveSports />
      <FAQ />
      <Contact />
      <SEOContent />
    </div>
  );
};

export default Index;