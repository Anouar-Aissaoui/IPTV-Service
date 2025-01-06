import React from 'react';
import { SEOOptimizer } from '../seo/SEOOptimizer';
import { ContentWrapper } from '../layout/ContentWrapper';
import { Breadcrumbs } from '../seo/Breadcrumbs';
import { HeroSection } from './sections/HeroSection';
import { KeyFeatures } from './sections/KeyFeatures';
import { WarningBox } from './sections/WarningBox';
import { FeaturedProvider } from './sections/FeaturedProvider';
import { FAQSection } from './sections/FAQSection';
import { CTASection } from './sections/CTASection';

const BestIPTVProviders: React.FC = () => {
  const seoKeywords = [
    'iptv 2025',
    'best iptv 2025',
    'iptv subscription 2025',
    'premium iptv service',
    'iptv providers 2025',
    '4K iptv streaming',
    'reliable iptv service',
    'iptv usa 2025',
    'hd iptv service',
    'top rated iptv 2025',
    'best iptv providers 2025',
    'iptv reviews 2025',
    'streaming service comparison',
    'live tv streaming 2025',
    'sports iptv service'
  ];

  const pageData = {
    title: "Best IPTV Service Providers Guide 2025 | Top Streaming Solutions",
    description: "Comprehensive guide to the most reliable IPTV providers in 2025. Compare features, pricing, and find the perfect 4K streaming solution with 40,000+ channels. Updated for 2025 with latest reviews and comparisons.",
    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),
    author: "IPTV Service",
    image: "/best-IPTV-providers.png"
  };

  return (
    <ContentWrapper as="article" className="prose prose-invert max-w-none">
      <SEOOptimizer
        title={pageData.title}
        description={pageData.description}
        canonicalUrl="/best-iptv-service-providers-subscriptions"
        type="article"
        keywords={seoKeywords}
        imageUrl={pageData.image}
      />
      
      <Breadcrumbs />

      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <HeroSection />
        <KeyFeatures />
        <WarningBox />
        <FeaturedProvider />
        <FAQSection />
        <CTASection />
      </div>
    </ContentWrapper>
  );
};

export default BestIPTVProviders;