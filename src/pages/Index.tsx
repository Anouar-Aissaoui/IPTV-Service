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
import { IPTVFAQs } from "@/components/seo/IPTVFAQs";
import { IPTVExplanation } from "@/components/seo/IPTVExplanation";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-white font-grotesk">
      <SEOOptimizer 
        title="Best IPTV Service Provider | Premium IPTV Subscription"
        description="Get access to premium IPTV service with 40,000+ channels and VOD content. High-quality streaming, 24/7 support, and competitive pricing."
        canonicalUrl="https://www.iptvservice.site"
        imageUrl="/iptv-subscription.png"
        type="website"
      />
      <Hero />
      <BrandCarousel />
      <IPTVDefinition />
      <Pricing />
      <Content />
      <LiveChannels />
      <LiveSports />
      <IPTVBenefits />
      <FAQ />
      <IPTVExplanation />
      <IPTVFAQs />
    </div>
  );
};

export default Index;