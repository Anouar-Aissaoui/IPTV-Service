import { supabase } from "@/integrations/supabase/client";
import type { SEOMetrics, SEOPerformanceMetric } from "@/types/tables/seo-metrics";

export const trackPageMetrics = async (pageData: {
  path: string;
  title: string;
  description: string;
  performance?: {
    loadTime?: number;
    ttfb?: number;
    fcp?: number;
    lcp?: number;
    cls?: number;
  }
}) => {
  try {
    const { data: metrics, error } = await supabase
      .from('seo_performance_metrics')
      .upsert({
        page_path: pageData.path,
        page_title: pageData.title,
        meta_description: pageData.description,
        canonical_url: `https://www.iptvservice.site${pageData.path}`,
        page_speed_score: pageData.performance?.loadTime ? 
          Math.round((1 - pageData.performance.loadTime / 5000) * 100) : null,
        core_web_vitals: {
          ttfb: pageData.performance?.ttfb,
          fcp: pageData.performance?.fcp,
          lcp: pageData.performance?.lcp,
          cls: pageData.performance?.cls
        },
        last_crawled: new Date().toISOString()
      }, {
        onConflict: 'page_path'
      })
      .select();

    return { metrics, error };
  } catch (error) {
    console.error('Error tracking page metrics:', error);
    return { error };
  }
};

export const trackKeywordPerformance = async (keyword: string, pageData: {
  path: string;
  position?: number;
  impressions?: number;
}) => {
  try {
    const { data, error } = await supabase
      .from('keyword_performance')
      .upsert({
        keyword,
        page_path: pageData.path,
        position: pageData.position,
        impressions: pageData.impressions
      }, {
        onConflict: 'keyword,page_path'
      });

    return { data, error };
  } catch (error) {
    console.error('Error tracking keyword performance:', error);
    return { error };
  }
};