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
  alternateUrls?: Record<string, string>;
}

const OptimizedHelmet: React.FC<HelmetProps> = memo(({
  title = "Best IPTV Service Providers Subscriptions: Complete Guide 2025",
  description = "Discover the top IPTV service providers offering premium subscriptions in 2025. Compare features, pricing, and reliability to find the perfect IPTV subscription for your streaming needs.",
  canonicalUrl,
  imageUrl = "/iptv-subscription.png",
  locale = "en",
  type = "website",
  keywords = [],
  children,
  noindex = false,
  pageType = 'home',
  alternateUrls = {}
}) => {
  const baseUrl = 'https://www.iptvservice.site';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;
  const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${baseUrl}${canonicalUrl}`) : baseUrl;
  const currentYear = new Date().getFullYear();

  // Enhanced meta descriptions for different page types
  const getMetaDescription = () => {
    switch (pageType) {
      case 'product':
        return `Premium IPTV subscription with 40,000+ channels, 54,000+ VOD content, and 4K quality streaming. Best IPTV service provider in ${currentYear}. 24/7 support included.`;
      case 'tutorial':
        return `Step-by-step IPTV setup guides for any device. Easy installation tutorials for Smart TV, Fire Stick, Android, iOS, and more. Expert support available 24/7.`;
      case 'pricing':
        return `Affordable IPTV subscription plans starting from $14.99/month. Premium channels, 4K quality, and VOD content included. Choose your perfect package today.`;
      case 'channels':
        return `Access 40,000+ live channels including premium sports, movies, news, and international content in HD & 4K quality. Updated channel list ${currentYear}.`;
      case 'faq':
        return `Get answers to common IPTV service questions. Technical support, payment methods, device compatibility, and more. 24/7 customer support available.`;
      default:
        return description;
    }
  };

  // Enhanced page titles with year and better keywords
  const getPageTitle = () => {
    switch (pageType) {
      case 'product':
        return `Premium IPTV Subscription ${currentYear} | 40,000+ Channels & VOD | ${title}`;
      case 'tutorial':
        return `IPTV Setup Guides ${currentYear} | Easy Installation Steps | ${title}`;
      case 'pricing':
        return `IPTV Subscription Plans ${currentYear} | Best Value Packages | ${title}`;
      case 'channels':
        return `IPTV Channel List ${currentYear} | 40,000+ Live Channels | ${title}`;
      case 'faq':
        return `IPTV FAQ & Support ${currentYear} | Instant Solutions | ${title}`;
      default:
        return `${title} | Updated ${currentYear}`;
    }
  };

  // Get language-specific meta tags
  const getLanguageMetaTags = () => {
    const tags = [];
    const defaultLocales = {
      en: 'en_US',
      es: 'es_ES',
      fr: 'fr_FR',
      de: 'de_DE'
    };

    // Add alternate language URLs
    Object.entries(alternateUrls).forEach(([lang, url]) => {
      tags.push(<link key={`alternate-${lang}`} rel="alternate" href={url} hrefLang={lang} />);
    });

    // Add x-default
    tags.push(<link key="alternate-default" rel="alternate" href={baseUrl} hrefLang="x-default" />);

    // Add Open Graph locales
    tags.push(<meta key="og-locale" property="og:locale" content={defaultLocales[locale as keyof typeof defaultLocales] || 'en_US'} />);
    Object.keys(defaultLocales).forEach(lang => {
      if (lang !== locale) {
        tags.push(<meta key={`og-locale-${lang}`} property="og:locale:alternate" content={defaultLocales[lang as keyof typeof defaultLocales]} />);
      }
    });

    return tags;
  };

  return (
    <Helmet>
      <html lang={locale} />
      <title>{getPageTitle()}</title>
      <meta name="title" content={getPageTitle()} />
      <meta name="description" content={getMetaDescription()} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content="IPTV Service" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} IPTV Service`} />
      <meta name="generator" content="IPTV Service Platform" />
      
      {/* Language and Region Meta Tags */}
      <meta httpEquiv="content-language" content={locale} />
      {getLanguageMetaTags()}
      
      {/* Enhanced Robots Control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        </>
      )}
      
      {/* Enhanced Canonical & Mobile Tags */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={getPageTitle()} />
      <meta property="og:description" content={getMetaDescription()} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Best IPTV Service" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      
      {/* Enhanced Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={getPageTitle()} />
      <meta name="twitter:description" content={getMetaDescription()} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {children}
    </Helmet>
  );
});

OptimizedHelmet.displayName = 'OptimizedHelmet';

export default OptimizedHelmet;