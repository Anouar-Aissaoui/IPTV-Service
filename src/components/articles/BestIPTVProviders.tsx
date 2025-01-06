import React from 'react';
import { SEOOptimizer } from '../seo/SEOOptimizer';
import { ContentWrapper } from '../layout/ContentWrapper';
import { Breadcrumbs } from '../seo/Breadcrumbs';
import { HeroSection } from './sections/HeroSection';
import { ProviderComparison } from './sections/ProviderComparison';
import { QualityMetrics } from './sections/QualityMetrics';
import { WarningBox } from './sections/WarningBox';
import { FAQSection } from './sections/FAQSection';
import { CTASection } from './sections/CTASection';

const BestIPTVProviders: React.FC = () => {
  const seoKeywords = [
    'best iptv service 2025',
    'iptv providers comparison',
    'top rated iptv services',
    '4K iptv streaming',
    'premium iptv providers',
    'reliable iptv service',
    'iptv subscription comparison',
    'best streaming quality iptv',
    'iptv provider reviews 2025',
    'affordable iptv service'
  ];

  const pageData = {
    title: "Best IPTV Service Providers Comparison 2025 | Expert Reviews",
    description: "Compare the top IPTV providers of 2025. In-depth analysis of streaming quality, channel selection, pricing, and reliability. Find the perfect IPTV service for your needs.",
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
        canonicalUrl="/best-iptv-service-providers-comparison"
        type="article"
        keywords={seoKeywords}
        imageUrl={pageData.image}
      />
      
      <Breadcrumbs />

      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <HeroSection />
        <QualityMetrics />
        <ProviderComparison />
        <WarningBox />
        <FAQSection />
        <CTASection />
      </div>
    </ContentWrapper>
  );
};

export default BestIPTVProviders;