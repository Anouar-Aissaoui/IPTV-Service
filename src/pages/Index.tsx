import React from 'react';
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
import { api } from "@/services/api";
import type { PageMetadata } from '@/types/routes';

const Index = () => {
  const { data: iptvKeywords } = useQuery({
    queryKey: ['iptvKeywords'],
    queryFn: api.getIPTVKeywords
  });

  const currentYear = new Date().getFullYear();
  
  const pageMetadata: PageMetadata = {
    title: `Best IPTV Service Provider ${currentYear} | Premium IPTV Subscription USA & Worldwide`,
    description: `Experience the ultimate IPTV service with 40,000+ live channels, 54,000+ VOD content, and 4K quality streaming. Top-rated IPTV provider offering affordable packages with 24/7 support. Try the best IPTV subscription service now!`,
    keywords: [...(iptvKeywords || []), ...seoKeywords],
    canonicalUrl: '/',
    imageUrl: '/iptv-subscription.png'
  };
  
  const pageData = {
    ...pageMetadata,
    datePublished: `${currentYear}-01-01`,
    dateModified: new Date().toISOString(),
    author: "IPTV Service"
  };

  return (
    <ContentWrapper as="main" className="min-h-screen bg-dark text-white font-grotesk">
      <SEOOptimizer 
        title={pageMetadata.title}
        description={pageMetadata.description}
        canonicalUrl={pageMetadata.canonicalUrl}
        imageUrl={pageMetadata.imageUrl}
        type="website"
        keywords={pageMetadata.keywords}
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