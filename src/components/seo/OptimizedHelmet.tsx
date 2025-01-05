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
  title = "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide",
  description = "Premium IPTV subscription service with worldwide coverage",
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

  // Page-specific meta descriptions
  const getMetaDescription = () => {
    switch (pageType) {
      case 'product':
        return `Premium IPTV subscription with 40,000+ channels, 54,000+ VOD content, and 4K quality streaming. Best IPTV service provider in ${new Date().getFullYear()}.`;
      case 'tutorial':
        return 'Step-by-step guides to set up IPTV on any device. Easy installation tutorials for Smart TV, Fire Stick, Android, iOS, and more.';
      case 'pricing':
        return 'Affordable IPTV subscription plans starting from $14.99/month. Choose the best package for your streaming needs.';
      case 'channels':
        return 'Explore our extensive channel list with 40,000+ live channels including sports, movies, news, and international content in HD & 4K quality.';
      case 'faq':
        return 'Find answers to frequently asked questions about our IPTV service, technical support, payment methods, and device compatibility.';
      default:
        return description;
    }
  };

  // Page-specific titles
  const getPageTitle = () => {
    switch (pageType) {
      case 'product':
        return `Premium IPTV Subscription | 40,000+ Channels & VOD Content | ${title}`;
      case 'tutorial':
        return `IPTV Setup Guides & Tutorials | Easy Installation Steps | ${title}`;
      case 'pricing':
        return `IPTV Subscription Plans & Pricing | Affordable Packages | ${title}`;
      case 'channels':
        return `IPTV Channel List | 40,000+ Live Channels | ${title}`;
      case 'faq':
        return `IPTV FAQ & Support | Common Questions Answered | ${title}`;
      default:
        return title;
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{getPageTitle()}</title>
      <meta name="title" content={getPageTitle()} />
      <meta name="description" content={getMetaDescription()} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Robots Control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={getPageTitle()} />
      <meta property="og:description" content={getMetaDescription()} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Best IPTV Service" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={getPageTitle()} />
      <meta name="twitter:description" content={getMetaDescription()} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@iptvsubscription" />
      <meta name="twitter:site" content="@iptvsubscription" />
      
      {/* Additional Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#F97316" />
      
      {/* PWA Tags */}
      <meta name="application-name" content="IPTV Service" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="IPTV Service" />
      
      {/* Language Alternates */}
      <link rel="alternate" href={`${baseUrl}`} hreflang="x-default" />
      <link rel="alternate" href={`${baseUrl}`} hreflang="en" />
      <link rel="alternate" href={`${baseUrl}/es`} hreflang="es" />
      <link rel="alternate" href={`${baseUrl}/fr`} hreflang="fr" />
      <link rel="alternate" href={`${baseUrl}/de`} hreflang="de" />
      
      {/* Allow additional meta tags to be injected */}
      {children}
    </Helmet>
  );
});

OptimizedHelmet.displayName = 'OptimizedHelmet';

export default OptimizedHelmet;