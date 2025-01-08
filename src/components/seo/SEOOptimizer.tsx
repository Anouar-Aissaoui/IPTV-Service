import React, { useEffect, useMemo } from 'react';
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
  isStatic?: boolean;
}

export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title: propTitle,
  description: propDescription,
  canonicalUrl: propCanonicalUrl,
  imageUrl: propImageUrl,
  type = 'website',
  keywords = [],
  children,
  noindex = false,
  isStatic = false
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
      if (isStatic) return null; // Skip API call for static pages
      
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
    staleTime: isStatic ? Infinity : 5 * 60 * 1000, // Cache static content indefinitely
    gcTime: isStatic ? Infinity : 10 * 60 * 1000
  });

  const seoData = useMemo(() => {
    const title = propTitle || seoMetrics?.title || 'Best IPTV Service Provider';
    const description = propDescription || seoMetrics?.description || 'Premium IPTV subscription service with 40,000+ channels worldwide';
    const canonicalUrl = propCanonicalUrl || seoMetrics?.canonical_url || `${baseUrl}${canonicalPath}`;
    const imageUrl = propImageUrl || '/iptv-subscription.png';
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`;

    return {
      title,
      description,
      canonicalUrl,
      fullImageUrl
    };
  }, [propTitle, propDescription, propCanonicalUrl, propImageUrl, seoMetrics, baseUrl, canonicalPath]);

  // Track page view and performance only for dynamic pages
  useEffect(() => {
    if (isStatic) return; // Skip tracking for static pages

    const trackPageView = async () => {
      try {
        const timestamp = new Date().toISOString();
        const performanceData = {
          page_path: canonicalPath,
          page_title: seoData.title,
          meta_description: seoData.description,
          canonical_url: seoData.canonicalUrl,
          meta_robots: noindex ? 'noindex,nofollow' : 'index,follow',
          structured_data: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: seoData.title,
            description: seoData.description,
            url: seoData.canonicalUrl
          },
          updated_at: timestamp
        };

        const { error: upsertError } = await supabase
          .from('seo_performance_tracking')
          .upsert(performanceData, {
            onConflict: 'page_path'
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
  }, [canonicalPath, seoData, noindex, toast, isStatic]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Robots Control */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoData.canonicalUrl} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.fullImageUrl} />
      <meta property="og:site_name" content="IPTV Service" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoData.canonicalUrl} />
      <meta name="twitter:title" content={seoData.title} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={seoData.fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="theme-color" content="#F97316" />
      
      {children}
    </Helmet>
  );
};

export default SEOOptimizer;