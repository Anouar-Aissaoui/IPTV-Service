import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();
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

      return data;
    },
    retry: 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes
  });

  const title = propTitle || seoMetrics?.title || 'Best IPTV Service Provider';
  const description = propDescription || seoMetrics?.description || 'Premium IPTV subscription service with 40,000+ channels worldwide';
  const canonicalUrl = propCanonicalUrl || seoMetrics?.canonical_url || `${baseUrl}${canonicalPath}`;
  const imageUrl = propImageUrl || '/iptv-subscription.png';
  const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

  // Track page view and performance
  useEffect(() => {
    const trackPageView = async () => {
      try {
        const timestamp = new Date().toISOString();
        const performanceData = {
          page_path: canonicalPath,
          page_title: title,
          meta_description: description,
          canonical_url: canonicalUrl,
          meta_robots: noindex ? 'noindex,nofollow' : 'index,follow',
          structured_data: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            description: description,
            url: canonicalUrl
          },
          updated_at: timestamp
        };

        const { error: upsertError } = await supabase
          .from('seo_performance_tracking')
          .upsert(performanceData, {
            onConflict: 'page_path',
            ignoreDuplicates: false
          });

        if (upsertError) {
          console.error('Error tracking page view:', upsertError);
          toast({
            title: "Analytics Error",
            description: "Unable to track page view. This won't affect your experience.",
            variant: "destructive",
          });
        }
      } catch (err) {
        console.error('Error in page view tracking:', err);
      }
    };

    void trackPageView();
  }, [canonicalPath, title, description, canonicalUrl, noindex, toast]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Robots Control */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
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
      
      {children}
    </Helmet>
  );
};

export default SEOOptimizer;