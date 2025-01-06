import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import type { SEOMetrics } from '@/types/tables/seo-metrics';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  type?: string;
  keywords?: string[];
  children?: React.ReactNode;
  noindex?: boolean;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title: propTitle,
  description: propDescription,
  canonicalUrl: propCanonicalUrl,
  imageUrl: propImageUrl,
  type = 'website',
  keywords = [],
  children,
  noindex = false
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const baseUrl = 'https://www.iptvservice.site';

  const getCanonicalUrl = () => {
    if (propCanonicalUrl) {
      return propCanonicalUrl.startsWith('http') ? propCanonicalUrl : `${baseUrl}${propCanonicalUrl}`;
    }
    return currentPath === '/' ? baseUrl : `${baseUrl}${currentPath}`;
  };

  const getPageSpecificDescription = (path: string) => {
    const currentYear = new Date().getFullYear();
    switch (path) {
      case '/':
        return `Experience premium IPTV with 40,000+ channels, 4K quality streaming, and comprehensive content library. Best IPTV provider for entertainment, sports, and movies in ${currentYear}.`;
      case '/pricing':
        return `Affordable IPTV subscription plans starting from $14.99. Choose from monthly, quarterly, or yearly packages with premium features and 24/7 support. Updated for ${currentYear}.`;
      case '/channels':
        return `Browse our extensive channel list featuring 40,000+ live channels, premium sports, movies, and international content. HD & 4K quality guaranteed. ${currentYear} updated lineup.`;
      case '/tutorials':
        return `Easy-to-follow IPTV setup guides for all devices. Step-by-step instructions for Smart TV, FireStick, Android, iOS, and more. ${currentYear} updated guides.`;
      case '/support':
        return `24/7 IPTV customer support, technical assistance, and troubleshooting. Get instant help with your streaming service needs in ${currentYear}.`;
      default:
        return propDescription || `Premium IPTV subscription service with 40,000+ channels worldwide. High-quality streaming, extensive content library, and reliable service. Updated for ${currentYear}.`;
    }
  };

  const description = getPageSpecificDescription(currentPath);
  const title = propTitle || 'Best IPTV Service Provider 2025';
  const canonicalUrl = getCanonicalUrl();
  const imageUrl = propImageUrl || '/iptv-subscription.png';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  useEffect(() => {
    const trackPageView = async () => {
      try {
        const { data: existingData, error: selectError } = await supabase
          .from('seo_performance')
          .select('*')
          .eq('url', currentPath)
          .limit(1);

        if (selectError) {
          console.error('Error fetching performance data:', selectError);
          return;
        }

        const startTime = performance.now();

        if (existingData && existingData.length > 0) {
          const { error: updateError } = await supabase
            .from('seo_performance')
            .update({
              visits: (existingData[0].visits || 0) + 1,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingData[0].id);

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
              avg_time_on_page: 0,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }]);

          if (insertError) {
            console.error('Error inserting performance data:', insertError);
          }
        }

        return () => {
          const timeOnPage = (performance.now() - startTime) / 1000;
          const updateMetrics = async () => {
            if (existingData && existingData.length > 0) {
              const { error: timeUpdateError } = await supabase
                .from('seo_performance')
                .update({
                  avg_time_on_page: timeOnPage,
                  updated_at: new Date().toISOString()
                })
                .eq('id', existingData[0].id);

              if (timeUpdateError) {
                console.error('Error updating time on page:', timeUpdateError);
              }
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
      void cleanup.then(cleanupFn => cleanupFn && cleanupFn());
    };
  }, [currentPath]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      <link rel="canonical" href={canonicalUrl} />
      
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="IPTV Service" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#F97316" />
      
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
          },
          "dateModified": new Date().toISOString()
        })}
      </script>
      {children}
    </Helmet>
  );
};

export default SEOOptimizer;