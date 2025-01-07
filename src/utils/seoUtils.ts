import { supabase } from "@/integrations/supabase/client";
import type { SEOPageData } from "@/types/seo";
import { useToast } from "@/components/ui/use-toast";

export interface SEOMetrics {
  route: string;
  title: string;
  description: string;
  canonicalUrl: string;
  metaTags: Record<string, string>;
  structuredData: Record<string, any>;
  socialTags?: Record<string, any>;
}

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

export const trackSEOMetrics = async (pageData: SEOPageData) => {
  try {
    const { error: existingError } = await supabase
      .from('seo_performance_tracking')
      .select('id')
      .eq('page_path', window.location.pathname)
      .maybeSingle();

    if (existingError) {
      console.error('Error checking existing metrics:', existingError);
      return null;
    }

    const { data, error } = await supabase
      .from('seo_performance_tracking')
      .upsert([
        {
          page_path: window.location.pathname,
          page_title: pageData.title,
          meta_description: pageData.description,
          canonical_url: `https://www.iptvservice.site${window.location.pathname}`,
          meta_robots: 'index,follow',
          structured_data: {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "IPTV Subscription Service",
            "description": pageData.description,
            "offers": {
              "@type": "Offer",
              "price": "14.99",
              "priceCurrency": "USD"
            }
          },
          open_graph: {
            title: pageData.title,
            description: pageData.description,
            image: pageData.imageUrl
          },
          twitter_card: {
            title: pageData.title,
            description: pageData.description,
            image: pageData.imageUrl
          },
          organic_traffic: 1
        }
      ], {
        onConflict: 'page_path'
      });

    if (error) {
      console.error('Error tracking SEO metrics:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error in trackSEOMetrics:', error);
    return null;
  }
};

export const updateSEOKeywords = async (keywords: string[]) => {
  try {
    const { error } = await supabase
      .from('iptv_seo_keywords')
      .upsert(
        keywords.map(keyword => ({
          keyword,
          relevance_score: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })),
        { onConflict: 'keyword' }
      );

    if (error) {
      console.error('Error updating SEO keywords:', error);
    }
  } catch (error) {
    console.error('Error in updateSEOKeywords:', error);
  }
};