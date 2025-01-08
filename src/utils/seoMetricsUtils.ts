import { supabase } from "@/integrations/supabase/client";
import type { SEOMetrics } from "@/types/tables/seo-metrics";

export const initializeSEOMetrics = async (
  route: string,
  title: string,
  description: string,
  canonicalUrl: string,
  metaTags: Record<string, string>,
  structuredData: Record<string, any>
): Promise<void> => {
  const now = new Date().toISOString();
  
  const metric: SEOMetrics = {
    id: crypto.randomUUID(),
    route,
    title,
    description,
    canonical_url: canonicalUrl,
    meta_tags: metaTags,
    structured_data: structuredData,
    crawl_status: 'pending',
    last_crawled: null,
    created_at: now,
    updated_at: now
  };

  const { error } = await supabase
    .from('seo_metrics')
    .upsert([metric], {
      onConflict: 'route'
    });

  if (error) {
    console.error('Error initializing SEO metrics:', error);
  }
};