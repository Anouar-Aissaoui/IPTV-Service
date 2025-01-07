import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { initializeSEOMetrics } from '@/utils/seoMetricsUtils';
import { SchemaManager, generateWebPageSchema, generateProductSchema } from './SchemaManager';
import type { BaseSchema } from '@/types/schema';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  type?: string;
  keywords?: string[];
  children?: React.ReactNode;
  noindex?: boolean;
  schemas?: BaseSchema[];
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title: propTitle,
  description: propDescription,
  canonicalUrl: propCanonicalUrl,
  imageUrl: propImageUrl,
  type = 'website',
  keywords = [],
  children,
  noindex = false,
  schemas = []
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = 'https://www.iptvservice.site';

  // Generate canonical URL with proper handling
  const getCanonicalUrl = () => {
    if (propCanonicalUrl) {
      return propCanonicalUrl.startsWith('http') ? propCanonicalUrl : `${baseUrl}${propCanonicalUrl}`;
    }
    // For root path, return base URL without trailing slash
    if (currentPath === '/') {
      return baseUrl;
    }
    // For other paths, combine base URL with current path and ensure no trailing slash
    return `${baseUrl}${currentPath}`.replace(/\/$/, '');
  };

  const description = propDescription || "Premium IPTV subscription service with 40,000+ channels worldwide. High-quality streaming, extensive content library, and reliable service.";
  const title = propTitle || 'Best IPTV Service Provider';
  const canonicalUrl = getCanonicalUrl();
  const imageUrl = propImageUrl || '/iptv-subscription.png';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  // Generate default schemas if none provided
  const defaultSchemas: BaseSchema[] = [
    generateWebPageSchema(title, description, canonicalUrl),
    generateProductSchema(
      'Premium IPTV Subscription',
      'Access to 40,000+ live channels and 54,000+ VOD content with HD and 4K quality streaming.',
      canonicalUrl,
      { low: '14.99', high: '99.99' }
    )
  ];

  const allSchemas = [...defaultSchemas, ...schemas];

  useQuery({
    queryKey: ['seoMetrics', currentPath],
    queryFn: async () => {
      await initializeSEOMetrics(
        currentPath,
        title,
        description,
        canonicalUrl,
        {
          keywords: keywords.join(', '),
          'og:type': type,
          'og:url': canonicalUrl,
          'twitter:url': canonicalUrl
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          url: canonicalUrl,
          name: title,
          description
        }
      );
    }
  });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Enhanced URL and Canonical Tags */}
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:url" content={canonicalUrl} />
      
      {/* Enhanced Robots Control */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="IPTV Service" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#F97316" />
      
      {/* Schema.org Structured Data */}
      <SchemaManager schemas={allSchemas} />
      {children}
    </Helmet>
  );
};

export default SEOOptimizer;