import { supabase } from "@/integrations/supabase/client";
import type { SEOPageData } from "@/types/seo";

export interface SEOMetrics {
  route: string;
  title: string;
  description: string;
  canonicalUrl: string;
  metaTags: Record<string, string>;
  structuredData: Record<string, any>;
  socialTags?: Record<string, any>;
}

export const trackPageSEO = async (metrics: SEOMetrics) => {
  try {
    const { data, error } = await supabase
      .from('seo_metrics')
      .upsert([
        {
          route: metrics.route,
          title: metrics.title,
          description: metrics.description,
          canonical_url: metrics.canonicalUrl,
          meta_tags: metrics.metaTags,
          structured_data: metrics.structuredData,
          updated_at: new Date().toISOString()
        }
      ], {
        onConflict: 'route'
      });

    if (error) {
      console.error('Error tracking SEO metrics:', error);
    }
    
    return data;
  } catch (error) {
    console.error('Error in trackPageSEO:', error);
  }
};

export const generateDynamicMetaTags = (pageData: SEOPageData) => {
  const baseUrl = 'https://www.iptvservice.site';
  const currentUrl = window.location.pathname;
  
  return {
    title: pageData.title,
    metaTags: {
      description: pageData.description,
      keywords: pageData.keywords.join(', '),
      'og:type': pageData.pageType || 'website',
      'og:title': pageData.title,
      'og:description': pageData.description,
      'og:url': `${baseUrl}${currentUrl}`,
      'og:image': pageData.imageUrl || `${baseUrl}/iptv-subscription.png`,
      'twitter:title': pageData.title,
      'twitter:description': pageData.description,
      'twitter:image': pageData.imageUrl || `${baseUrl}/iptv-subscription.png`,
      'content-language': pageData.locale || 'en'
    }
  };
};