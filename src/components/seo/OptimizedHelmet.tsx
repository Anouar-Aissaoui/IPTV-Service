import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

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

  // Page-specific meta descriptions
  const getMetaDescription = () => {
    switch (pageType) {
      case 'product':
        return `Premium IPTV subscription with 40,000+ channels, 54,000+ VOD content, and 4K quality streaming. Best IPTV service provider in ${new Date().getFullYear()}.`;
      case 'pricing':
        return 'Affordable IPTV subscription plans from trusted IPTV providers. Choose the best IPTV service package for your streaming needs.';
      default:
        return description;
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={getMetaDescription()} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      
      {/* Robots Control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Best IPTV Service Provider",
          "description": getMetaDescription(),
          "url": fullCanonicalUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={getMetaDescription()} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="Best IPTV Service" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={getMetaDescription()} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Additional Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#F97316" />
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Language Alternates */}
      <link rel="alternate" href={`${baseUrl}`} hrefLang="x-default" />
      <link rel="alternate" href={`${baseUrl}`} hrefLang="en" />
      <link rel="alternate" href={`${baseUrl}/es`} hrefLang="es" />
      <link rel="alternate" href={`${baseUrl}/fr`} hrefLang="fr" />
      <link rel="alternate" href={`${baseUrl}/de`} hrefLang="de" />
      
      {children}
    </Helmet>
  );
});

OptimizedHelmet.displayName = 'OptimizedHelmet';

export default OptimizedHelmet;