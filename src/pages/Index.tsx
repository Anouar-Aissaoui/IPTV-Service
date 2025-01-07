import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import Content from "@/components/Content";
import { LiveSports } from "@/components/LiveSports";
import { FAQ } from "@/components/FAQ";
import { BrandCarousel } from "@/components/BrandCarousel";
import LiveChannels from "@/components/LiveChannels";
import { SEOOptimizer } from "@/components/seo/SEOOptimizer";
import { seoKeywords } from "@/components/seo/Keywords";
import { getStructuredData } from "@/components/seo/StructuredData";
import { IPTVDefinition } from "@/components/seo/IPTVDefinition";
import { IPTVBenefits } from "@/components/seo/IPTVBenefits";
import { IPTVExplanation } from "@/components/seo/IPTVExplanation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContentWrapper } from "@/components/layout/ContentWrapper";
import { QuickLinks } from "@/components/home/QuickLinks";
import { Footer } from "@/components/home/Footer";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

const Index = () => {
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
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

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
        <Hero />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Brand Showcase">
        <BrandCarousel />
      </ContentWrapper>

      <ContentWrapper as="article" ariaLabel="IPTV Information">
        <IPTVDefinition />
        <IPTVExplanation />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Pricing Plans">
        <Pricing />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Content Showcase">
        <Content />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Live Channels">
        <LiveChannels />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Live Sports">
        <LiveSports />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="IPTV Benefits">
        <IPTVBenefits />
      </ContentWrapper>

      <ContentWrapper as="section" ariaLabel="Frequently Asked Questions">
        <FAQ />
      </ContentWrapper>

      <QuickLinks />
      <Footer />
    </ContentWrapper>
  );
};

export default Index;