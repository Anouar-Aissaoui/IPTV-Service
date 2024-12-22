import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Pricing } from "@/components/Pricing";
import { Content } from "@/components/Content";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <Stats />
      <Pricing />
      <Content />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;