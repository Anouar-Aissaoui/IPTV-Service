import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import Content from "@/components/Content";
import { LiveSports } from "@/components/LiveSports";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { BrandCarousel } from "@/components/BrandCarousel";
import { SEOContent } from "@/components/SEOContent";
import { Helmet } from "react-helmet";

const Index = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-dark text-white">
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <html lang={i18n.language} />
        <link rel="alternate" hreflang="en" href="https://www.iptvservice.site/en" />
        <link rel="alternate" hreflang="es" href="https://www.iptvservice.site/es" />
        <link rel="alternate" hreflang="de" href="https://www.iptvservice.site/de" />
        <link rel="alternate" hreflang="fr" href="https://www.iptvservice.site/fr" />
        <link rel="alternate" hreflang="x-default" href="https://www.iptvservice.site" />
      </Helmet>
      <Hero />
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