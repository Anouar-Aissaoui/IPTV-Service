import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import Content from "@/components/Content";
import { LiveSports } from "@/components/LiveSports";
import { FAQ } from "@/components/FAQ";
import { BrandCarousel } from "@/components/BrandCarousel";
import LiveChannels from "@/components/LiveChannels";
import { SEOOptimizer } from "@/components/seo/SEOOptimizer";
import { IPTVDefinition } from "@/components/seo/IPTVDefinition";
import { IPTVBenefits } from "@/components/seo/IPTVBenefits";
import { IPTVExplanation } from "@/components/seo/IPTVExplanation";
import { seoKeywords } from "@/components/seo/Keywords";
import { getStructuredData } from "@/components/seo/StructuredData";

const Index = () => {
  const pageTitle = "Best IPTV Service Provider 2024 | Premium IPTV Subscription USA";
  const pageDescription = "Experience premium IPTV service with 40,000+ live channels, 54,000+ VOD content, and 4K quality streaming. Best IPTV provider offering affordable packages with 24/7 support. Try now!";
  
  return (
    <div className="min-h-screen bg-dark text-white font-grotesk">
      <SEOOptimizer 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://www.iptvservice.site"
        imageUrl="/iptv-subscription.png"
        type="website"
        keywords={[
          ...seoKeywords,
          '4K IPTV streaming',
          'premium IPTV channels',
          'IPTV subscription 2024',
          'best IPTV provider USA'
        ]}
        noindex={false}
      >
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData())}
        </script>
      </SEOOptimizer>
      <Hero />
      <BrandCarousel />
      <IPTVDefinition />
      <IPTVExplanation />
      <Pricing />
      <Content />
      <LiveChannels />
      <LiveSports />
      <IPTVBenefits />
      <FAQ />
    </div>
  );
};

export default Index;