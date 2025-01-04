import { useTranslation } from "react-i18next";
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import Content from "@/components/Content";
import { LiveSports } from "@/components/LiveSports";
import { FAQ } from "@/components/FAQ";
import { BrandCarousel } from "@/components/BrandCarousel";
import LiveChannels from "@/components/LiveChannels";
import { Helmet } from "react-helmet";

const Index = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="min-h-screen bg-dark text-white font-grotesk">
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <html lang={currentLanguage} />
        <link rel="alternate" hrefLang="en" href="https://www.iptvservice.site/en" />
        <link rel="alternate" hrefLang="es" href="https://www.iptvservice.site/es" />
        <link rel="alternate" hrefLang="de" href="https://www.iptvservice.site/de" />
        <link rel="alternate" hrefLang="fr" href="https://www.iptvservice.site/fr" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iptvservice.site" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" as="image" href="/iptv-subscription.png" />
        <link rel="preload" as="font" href="/fonts/grotesk.woff2" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* SEO Meta Tags */}
        <meta name="author" content="IPTV Service" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />
      </Helmet>
      <Hero />
      <BrandCarousel />
      <Pricing />
      <Content />
      <LiveChannels />
      <LiveSports />
      <FAQ />
    </div>
  );
};

export default Index;