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
  children?: React.ReactNode;
  noindex?: boolean;
  structuredData?: Record<string, any>;
  breadcrumbs?: Array<{name: string, item: string}>;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = "Best IPTV Service Provider 2024 | Premium IPTV Subscription USA & UK",
  description = "Experience premium IPTV service with 40,000+ live channels, 54,000+ VOD content, and 4K quality streaming. Best IPTV provider offering affordable packages with 24/7 support. Try now!",
  canonicalUrl,
  imageUrl = "/iptv-subscription.png",
  type = "website",
  keywords = [],
  children,
  noindex = false,
  structuredData,
  breadcrumbs
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = 'https://www.iptvservice.site';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  // Track SEO metrics
  useEffect(() => {
    const trackMetrics = async () => {
      try {
        await supabase
          .from('seo_metrics')
          .upsert([
            {
              route: currentPath,
              title,
              description,
              canonical_url: canonicalUrl || `${baseUrl}${currentPath}`,
              meta_tags: {
                keywords: keywords.join(', '),
                'og:type': type,
                'og:title': title,
                'og:description': description,
                'og:image': fullImageUrl
              },
              structured_data: structuredData || {}
            }
          ], {
            onConflict: 'route'
          });
      } catch (error) {
        console.error('Error tracking SEO metrics:', error);
      }
    };

    void trackMetrics();
  }, [currentPath, title, description, canonicalUrl, type, keywords, structuredData]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Robots Control */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Enhanced Canonical URL Implementation */}
      <link rel="canonical" href={canonicalUrl || `${baseUrl}${currentPath}`} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl || `${baseUrl}${currentPath}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="IPTV Service" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl || `${baseUrl}${currentPath}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Breadcrumbs Structured Data */}
      {breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": `${baseUrl}${crumb.item}`
            }))
          })}
        </script>
      )}

      {children}
    </Helmet>
  );
};

export default SEOOptimizer;