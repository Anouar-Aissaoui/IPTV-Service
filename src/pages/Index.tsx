import { BrandCarousel } from "@/components/BrandCarousel";
import { FAQ } from "@/components/FAQ";
import { SEOOptimizer } from "@/components/seo/SEOOptimizer";
import { seoKeywords } from "@/components/seo/Keywords";
import { getStructuredData } from "@/components/seo/StructuredData";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContentWrapper } from "@/components/layout/ContentWrapper";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeContent } from "@/components/home/HomeContent";
import { HomePricing } from "@/components/home/HomePricing";
import { HomeInfo } from "@/components/home/HomeInfo";
import { QuickLinks } from "@/components/home/QuickLinks";
import { HomeFooter } from "@/components/home/HomeFooter";

const Index = () => {
  // Fetch IPTV-specific keywords from Supabase
  const { data: iptvKeywords } = useQuery({
    queryKey: ['iptvKeywords'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('iptv_seo_keywords')
        .select('keyword')
        .returns<Pick<Database['public']['Tables']['iptv_seo_keywords']['Row'], 'keyword'>[]>();
      
      if (error) throw error;
      return data.map(k => k.keyword);
    }
  });

  // Track page performance metrics
  const { data: performanceMetrics } = useQuery({
    queryKey: ['seoPerformance', '/'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('seo_performance_tracking')
        .upsert([
          {
            page_path: '/',
            page_title: pageTitle,
            meta_description: pageDescription,
            canonical_url: 'https://www.iptvservice.site',
            meta_robots: 'index,follow',
            open_graph: {
              title: pageTitle,
              description: pageDescription,
              image: 'https://www.iptvservice.site/iptv-subscription.png'
            },
            twitter_card: {
              title: pageTitle,
              description: pageDescription,
              image: 'https://www.iptvservice.site/iptv-subscription.png'
            }
          }
        ], {
          onConflict: 'page_path'
        });

      if (error) throw error;
      return data;
    }
  });

  const currentYear = new Date().getFullYear();
  const pageTitle = `Best IPTV Service Provider ${currentYear} | Premium IPTV Subscription USA & Worldwide`;
  const pageDescription = `Experience the ultimate IPTV service with 40,000+ live channels, 54,000+ VOD content, and 4K quality streaming. Top-rated IPTV provider offering affordable packages with 24/7 support. Try the best IPTV subscription service now!`;
  
  const pageData = {
    title: pageTitle,
    description: pageDescription,
    datePublished: `${currentYear}-01-01`,
    dateModified: new Date().toISOString(),
    author: "IPTV Service",
    image: "https://www.iptvservice.site/iptv-subscription.png",
    keywords: iptvKeywords || []
  };

  return (
    <ContentWrapper as="main" className="min-h-screen bg-dark text-white font-grotesk">
      <SEOOptimizer 
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="https://www.iptvservice.site"
        imageUrl="/iptv-subscription.png"
        type="website"
        keywords={[
          ...(iptvKeywords || []),
          ...seoKeywords,
          '4K IPTV streaming',
          'premium IPTV channels',
          `IPTV subscription ${currentYear}`,
          'best IPTV provider USA'
        ]}
        noindex={false}
      >
        <script type="application/ld+json">
          {JSON.stringify(getStructuredData('article', pageData))}
        </script>
      </SEOOptimizer>

      <Breadcrumbs />
      
      <ContentWrapper as="section" ariaLabel="Hero Section">
        <HomeHero />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Brand Showcase">
        <BrandCarousel />
      </ContentWrapper>

      <ContentWrapper as="article" ariaLabel="IPTV Information">
        <HomeInfo />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Pricing Plans">
        <HomePricing />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Content Showcase">
        <HomeContent />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Quick Links">
        <QuickLinks />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Frequently Asked Questions">
        <FAQ />
      </ContentWrapper>

      <HomeFooter />
    </ContentWrapper>
  );
};

export default Index;