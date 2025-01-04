import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import Content from "@/components/Content";
import { LiveSports } from "@/components/LiveSports";
import { FAQ } from "@/components/FAQ";
import { BrandCarousel } from "@/components/BrandCarousel";
import LiveChannels from "@/components/LiveChannels";
import { SEOOptimizer } from "@/components/seo/SEOOptimizer";
import { SEOContent } from "@/components/SEOContent";

const Index = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="min-h-screen bg-dark text-white font-grotesk">
      <SEOOptimizer 
        title={t('meta.title')}
        description={t('meta.description')}
        canonicalUrl={`https://www.iptvservice.site/${currentLanguage}`}
        imageUrl="/iptv-subscription.png"
      />
      <Hero />
      <BrandCarousel />
      <Pricing />
      <Content />
      <LiveChannels />
      <LiveSports />
      <FAQ />
      <SEOContent />
    </div>
  );
};

export default Index;