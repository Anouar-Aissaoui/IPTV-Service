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
    'iptv',
    'best iptv',
    'iptv subscription',
    'iptv services',
    'iptv service',
    'best iptv service',
    'iptv providers',
    'iptv subscribe',
    'iptv provider',
    'best for iptv',
    'iptv usa',
    'service iptv',
    'top rated iptv',
    'itpv online',
    'best iptv services',
    'bestiptv'
  ];

  return (
    <ContentWrapper as="article" className="prose prose-invert max-w-none">
      <SEOOptimizer
        title="Best IPTV Service Providers Subscriptions 2025 | Complete Guide"
        description="Comprehensive guide to the top IPTV service providers in 2025. Compare features, pricing, and find the perfect streaming solution for your needs. Discover reliable IPTV services with 40,000+ channels."
        canonicalUrl="/best-iptv-service-providers-subscriptions"
        type="article"
        keywords={seoKeywords}
        imageUrl="/best-IPTV-providers.png"
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