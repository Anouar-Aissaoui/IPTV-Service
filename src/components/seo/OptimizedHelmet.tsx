import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { trackSEOMetrics } from '@/utils/seoUtils';

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
  title = "Best IPTV Service Provider | Buy IPTV In USA, UK & Worldwide",
  description = "Looking to Buy IPTV? Choose the best IPTV provider offering affordable IPTV services in USA, UK & Worldwide with 24K+ channels. IPTV Subscribe now!",
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

  // Track SEO metrics
  useEffect(() => {
    void trackSEOMetrics({
      title,
      description,
      keywords,
      imageUrl: fullImageUrl,
      locale,
      pageType,
      alternateUrls
    });
  }, [title, description, keywords, fullImageUrl, locale, pageType, alternateUrls]);

  // Get SEO metrics for additional metadata
  const { data: seoMetrics } = useQuery({
    queryKey: ['seo-metrics', window.location.pathname],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('seo_metrics')
        .select('*')
        .eq('route', window.location.pathname)
        .maybeSingle();

      if (error) throw error;
      return data;
    }
  });

  const getMetaDescription = () => {
    // First try to get description from SEO metrics
    if (seoMetrics?.description) {
      return seoMetrics.description;
    }
    // Fallback to provided description
    return description;
  };

  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={getMetaDescription()} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Basic Meta Tags */}
      <meta name="author" content="IPTV Service" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} IPTV Service`} />
      <meta name="generator" content="IPTV Service Platform" />
      
      {/* Robots Control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        </>
      )}
      
      {/* Canonical & Mobile Tags */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={getMetaDescription()} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Best IPTV Service" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      
      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={getMetaDescription()} />
      <meta name="twitter:image" content={fullImageUrl} />
      
      {/* Alternate Language URLs */}
      {Object.entries(alternateUrls).map(([lang, url]) => (
        <link key={`alternate-${lang}`} rel="alternate" href={url} hrefLang={lang} />
      ))}
      <link rel="alternate" href={baseUrl} hrefLang="x-default" />
      
      {children}
    </Helmet>
  );
});

OptimizedHelmet.displayName = 'OptimizedHelmet';

export default OptimizedHelmet;