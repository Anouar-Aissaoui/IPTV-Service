import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { generateDynamicMetaTags, trackSEOMetrics } from '@/utils/seoUtils';
import type { SEOPageData } from '@/types/seo';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  type?: string;
  keywords?: string[];
  children?: React.ReactNode;
  noindex?: boolean;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title: propTitle,
  description: propDescription,
  canonicalUrl: propCanonicalUrl,
  imageUrl: propImageUrl,
  type = 'website',
  keywords = [],
  children,
  noindex = false
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = 'https://www.iptvservice.site';

  const pageData: SEOPageData = {
    title: propTitle || 'Best IPTV Service Provider',
    description: propDescription || 'Premium IPTV subscription service with 40,000+ channels worldwide. High-quality streaming, extensive content library, and reliable service.',
    keywords,
    imageUrl: propImageUrl,
    type,
    locale: 'en'
  };

  // Track SEO metrics
  useQuery({
    queryKey: ['seoMetrics', currentPath],
    queryFn: () => trackSEOMetrics(pageData),
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  const { metaTags } = generateDynamicMetaTags(pageData);
  const canonicalUrl = propCanonicalUrl || `${baseUrl}${currentPath}`;

  return (
    <Helmet>
      <title>{pageData.title}</title>
      <meta name="title" content={pageData.title} />
      <meta name="description" content={pageData.description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Enhanced URL and Canonical Tags */}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:url" content={canonicalUrl} />
      
      {/* Enhanced Robots Control */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageData.title} />
      <meta property="og:description" content={pageData.description} />
      <meta property="og:image" content={propImageUrl || `${baseUrl}/iptv-subscription.png`} />
      <meta property="og:site_name" content="IPTV Service" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageData.title} />
      <meta name="twitter:description" content={pageData.description} />
      <meta name="twitter:image" content={propImageUrl || `${baseUrl}/iptv-subscription.png`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#F97316" />
      
      {children}
    </Helmet>
  );
};

export default SEOOptimizer;