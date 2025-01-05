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
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Link } from "react-router-dom";

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

      <Breadcrumbs />
      
      <Hero />
      <BrandCarousel />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <div className="space-y-2">
              <Link to="/tutorials" className="block text-neon hover:underline">Setup Guides</Link>
              <Link to="/channels" className="block text-neon hover:underline">Channel List</Link>
              <Link to="/pricing" className="block text-neon hover:underline">Subscription Plans</Link>
              <Link to="/faq" className="block text-neon hover:underline">FAQ</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Popular Tutorials</h2>
            <div className="space-y-2">
              <Link to="/tutorials/smart-tv" className="block text-neon hover:underline">Smart TV Setup</Link>
              <Link to="/tutorials/fire-tv" className="block text-neon hover:underline">Fire TV Setup</Link>
              <Link to="/tutorials/mobile" className="block text-neon hover:underline">Mobile Setup</Link>
              <Link to="/tutorials/vlc-windows" className="block text-neon hover:underline">VLC Setup</Link>
            </div>
          </div>
        </div>
      </div>

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