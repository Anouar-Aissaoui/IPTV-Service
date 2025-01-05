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
  keywords?: string[];
  children?: React.ReactNode;  // Added this line to support children
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title: propTitle,
  description: propDescription,
  canonicalUrl: propCanonicalUrl,
  imageUrl: propImageUrl,
  type = 'website',
  keywords = [],
  children  // Added this to the destructuring
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = 'https://www.iptvservice.site';

  // Normalize the current URL by removing trailing slashes and query parameters
  const normalizedPath = currentPath.replace(/\/+$/, '');
  const canonicalPath = normalizedPath === '' ? '/' : normalizedPath;
  
  const { data: seoMetrics } = useQuery({
    queryKey: ['seo-metrics', canonicalPath],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('seo_metrics')
        .select('*')
        .eq('route', canonicalPath)
        .maybeSingle();

      if (error) {
        console.error('Error fetching SEO metrics:', error);
        return null;
      }

      return data as SEOMetrics;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000
  });

  const title = propTitle || seoMetrics?.title || 'Best IPTV Service Provider';
  const description = propDescription || seoMetrics?.description || 'Premium IPTV subscription service with 40,000+ channels worldwide';
  const canonicalUrl = propCanonicalUrl || seoMetrics?.canonical_url || `${baseUrl}${canonicalPath}`;
  const imageUrl = propImageUrl || '/iptv-subscription.png';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  useEffect(() => {
    const trackPageView = async () => {
      try {
        const metric: SEOPerformanceMetric = {
          url: canonicalPath,
          visits: 1,
          bounce_rate: 0,
          avg_time_on_page: 0
        };

        await supabase
          .from('seo_performance')
          .upsert([metric], {
            onConflict: 'url'
          });

        const startTime = performance.now();
        
        return () => {
          const timeOnPage = (performance.now() - startTime) / 1000;
          const updateMetrics = async () => {
            try {
              await supabase
                .from('seo_performance')
                .update({ avg_time_on_page: timeOnPage })
                .eq('url', canonicalPath);
              console.log('Page timing updated');
            } catch (err) {
              console.error('Error updating page timing:', err);
            }
          };
          void updateMetrics();
        };
      } catch (error) {
        console.error('Error in trackPageView:', error);
        return () => {};
      }
    };

    const cleanup = trackPageView();
    return () => {
      void cleanup.then(cleanupFn => cleanupFn());
    };
  }, [canonicalPath]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Language URLs */}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      
      {/* Robots Control */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="IPTV Service" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#F97316" />
      
      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "url": canonicalUrl,
          "name": title,
          "description": description,
          "image": fullImageUrl,
          "publisher": {
            "@type": "Organization",
            "name": "IPTV Service",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/favicon.png`
            }
          }
        })}
      </script>
      {children}
    </Helmet>
  );
};

export default SEOOptimizer;