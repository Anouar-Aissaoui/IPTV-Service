import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { trackSEOMetrics, updateSEOKeywords } from '@/utils/seoUtils';

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
}

const OptimizedHelmet: React.FC<HelmetProps> = memo(({
  title = "Best IPTV Subscription 2025 | Buy IPTV Services in USA, UK & Worldwide",
  description = "Get the best IPTV subscription! Choose from top IPTV providers for premium IPTV services. Subscribe to our IPTV service for 24K+ channels worldwide.",
  canonicalUrl,
  imageUrl = "/iptv-subscription.png",
  locale = "en",
  type = "website",
  keywords = [],
  children,
  noindex = false,
  pageType = 'home'
}) => {
  const baseUrl = 'https://www.iptvservice.site';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;
  const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`) : baseUrl;

  const defaultKeywords = [
    'iptv subscription',
    'best iptv',
    'iptv subscribe',
    'iptv providers',
    'iptv provider',
    'bestiptv',
    'iptv subscriptions',
    'iptv service',
    'iptv sub',
    'iptv suppliers',
    'buy iptv',
    'iptv services',
    'iptv'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  useEffect(() => {
    // Track SEO metrics
    void trackSEOMetrics({
      title,
      description,
      keywords: allKeywords,
      imageUrl: fullImageUrl,
      locale,
      pageType
    });

    // Update keywords in database
    void updateSEOKeywords(allKeywords);
  }, [title, description, fullImageUrl, locale, pageType]);

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