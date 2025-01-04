import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { SEOMetrics, SEOPerformanceMetric } from '@/types/tables/seo-metrics';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  type?: string;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title: propTitle,
  description: propDescription,
  canonicalUrl: propCanonicalUrl,
  imageUrl: propImageUrl,
  type = 'website'
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { data: seoMetrics } = useQuery({
    queryKey: ['seo-metrics', currentPath],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('seo_metrics')
        .select('*')
        .eq('route', currentPath)
        .single();

      if (error) {
        console.error('Error fetching SEO metrics:', error);
        return null;
      }

      return data as SEOMetrics;
    }
  });

  const title = propTitle || seoMetrics?.title || 'Best IPTV Service Provider';
  const description = propDescription || seoMetrics?.description || 'Premium IPTV subscription service with 40,000+ channels worldwide';
  const canonicalUrl = propCanonicalUrl || seoMetrics?.canonical_url || `https://www.iptvservice.site${currentPath}`;
  const imageUrl = propImageUrl || '/iptv-subscription.png';

  useEffect(() => {
    const trackPageView = async () => {
      try {
        const metric: SEOPerformanceMetric = {
          url: currentPath,
          visits: 1
        };

        await supabase
          .from('seo_performance')
          .upsert(metric, {
            onConflict: 'url'
          });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    };

    trackPageView();
  }, [currentPath]);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`https://www.iptvservice.site${imageUrl}`} />
      <meta property="og:site_name" content="IPTV Service" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://www.iptvservice.site${imageUrl}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#F97316" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Preconnect to Important Origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdn.gpteng.co" crossOrigin="anonymous" />
    </Helmet>
  );
};