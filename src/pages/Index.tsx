import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import Content from "@/components/Content";
import { LiveSports } from "@/components/LiveSports";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { BrandCarousel } from "@/components/BrandCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <BrandCarousel />
      <Pricing />
      <Content />
      <LiveSports />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;