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
import { seoKeywords } from "@/components/seo/Keywords";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white font-grotesk">
      <SEOOptimizer 
        title="Best IPTV Service Provider | Buy Premium IPTV Subscription USA"
        description="Get access to premium IPTV service with 40,000+ HD channels and VOD content. Best IPTV provider offering affordable streaming TV channels, 24/7 support, and competitive pricing."
        canonicalUrl="https://www.iptvservice.site"
        imageUrl="/iptv-subscription.png"
        type="website"
        keywords={seoKeywords}
      />
      <Hero />
      <BrandCarousel />
      <IPTVDefinition />
      <div className="space-y-16">
        <Pricing />
        <Content />
        <LiveChannels />
        <LiveSports />
        <IPTVBenefits />
        <FAQ />
      </div>
    </div>
  );
};

export default Index;