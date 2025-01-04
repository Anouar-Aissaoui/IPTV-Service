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
      try {
        const { data, error } = await supabase
          .from('seo_metrics')
          .select('*')
          .eq('route', currentPath)
          .maybeSingle();

        if (error) {
          console.error('Error fetching SEO metrics:', error);
          return null;
        }

        return data as SEOMetrics | null;
      } catch (error) {
        console.error('Error in SEO metrics query:', error);
        return null;
      }
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000
  });

  useEffect(() => {
    const trackPageView = async () => {
      try {
        const { data: existingData, error: fetchError } = await supabase
          .from('seo_performance')
          .select('*')
          .eq('url', currentPath)
          .maybeSingle();

        if (fetchError && fetchError.code !== 'PGRST116') {
          console.error('Error fetching performance data:', fetchError);
          return;
        }

        const startTime = performance.now();

        if (existingData) {
          const { error: updateError } = await supabase
            .from('seo_performance')
            .update({
              visits: (existingData.visits || 0) + 1,
              updated_at: new Date().toISOString()
            })
            .eq('url', currentPath);

          if (updateError) {
            console.error('Error updating performance data:', updateError);
          }
        } else {
          const { error: insertError } = await supabase
            .from('seo_performance')
            .insert([{
              url: currentPath,
              visits: 1,
              bounce_rate: 0,
              avg_time_on_page: 0
            }]);

          if (insertError) {
            console.error('Error inserting performance data:', insertError);
          }
        }

        const cleanup = () => {
          const timeOnPage = (performance.now() - startTime) / 1000;
          return supabase
            .from('seo_performance')
            .update({ avg_time_on_page: timeOnPage })
            .eq('url', currentPath)
            .then(() => {
              console.log('Page timing updated');
              return;
            });
        };

        return cleanup;
      } catch (error) {
        console.error('Error tracking page view:', error);
        return undefined;
      }
    };

    const cleanupPromise = trackPageView();
    return () => {
      if (cleanupPromise) {
        cleanupPromise.then(cleanup => {
          if (cleanup) {
            cleanup();
          }
        });
      }
    };
  }, [currentPath]);

  const title = propTitle || seoMetrics?.title || 'Best IPTV Service Provider';
  const description = propDescription || seoMetrics?.description || 'Premium IPTV subscription service with 40,000+ channels worldwide';
  const canonicalUrl = propCanonicalUrl || seoMetrics?.canonical_url || `https://www.iptvservice.site${currentPath}`;
  const imageUrl = propImageUrl || '/iptv-subscription.png';

  return (
    <Helmet>
      {/* Basic Meta Tags with dynamic content */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Preload critical resources */}
      <link rel="preload" href="/iptv-subscription.png" as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Open Graph Tags for social sharing */}
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

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": canonicalUrl,
          "image": `https://www.iptvservice.site${imageUrl}`,
          "publisher": {
            "@type": "Organization",
            "name": "IPTV Service",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.iptvservice.site/favicon.png"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOOptimizer;