import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { trackSEOMetrics } from '@/utils/seoUtils';
import { generatePSEOContent } from '@/utils/pSEOUtils';
import { useQuery } from '@tanstack/react-query';
import { seoKeywords } from './Keywords';

interface HelmetProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  locale?: string;
  type?: string;
  keywords?: string[];
  children?: React.ReactNode;
  noindex?: boolean;
  pageType?: 'home' | 'product' | 'tutorial' | 'pricing' | 'channels' | 'faq';
  slug?: string;
}

const OptimizedHelmet: React.FC<HelmetProps> = memo(({
  title: propTitle,
  description: propDescription,
  canonicalUrl,
  imageUrl = "/iptv-subscription.png",
  locale = "en",
  type = "website",
  keywords = [],
  children,
  noindex = false,
  pageType = 'home',
  slug = ''
}) => {
  const { data: pSEOData } = useQuery({
    queryKey: ['pseo', slug, locale],
    queryFn: () => generatePSEOContent(slug || window.location.pathname, [...seoKeywords, ...keywords], locale),
    enabled: !!slug || !!window.location.pathname
  });

  const baseUrl = 'https://www.iptvservice.site';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;
  const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`) : baseUrl;

  const title = pSEOData?.title || propTitle || 'Best IPTV Subscription Service';
  const description = pSEOData?.description || propDescription || 'Premium IPTV subscription service with 40,000+ channels worldwide';

  const allKeywords = [...new Set([...(pSEOData?.keywords || []), ...keywords])];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Premium IPTV Subscription",
    "description": description,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "14.99",
      "highPrice": "99.99",
      "offerCount": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  };

  useEffect(() => {
    void trackSEOMetrics({
      title,
      description,
      keywords: allKeywords,
      imageUrl: fullImageUrl,
      locale,
      pageType
    });

    // Track impressions for each keyword
    allKeywords.forEach(keyword => {
      void trackKeywordPerformance(keyword, window.location.pathname);
    });
  }, [title, description, fullImageUrl, locale, pageType, allKeywords]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      <link rel="canonical" href={fullCanonicalUrl} />
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={fullCanonicalUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {children}
    </Helmet>
  );
});

OptimizedHelmet.displayName = 'OptimizedHelmet';

export default OptimizedHelmet;