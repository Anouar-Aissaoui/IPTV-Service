import { supabase } from "@/integrations/supabase/client";
import type { BaseSchema } from "@/types/schema";
import type { Json } from "@/types/shared";

export const trackSchemaPerformance = async (
  pageUrl: string,
  schemas: BaseSchema[]
) => {
  try {
    // Convert BaseSchema[] to Json type by stringifying and parsing
    const structuredDataJson = JSON.parse(JSON.stringify(schemas)) as Json;

    const { data, error } = await supabase
      .from('seo_performance_metrics')
      .upsert([
        {
          page_path: pageUrl,
          page_title: document.title, // Get current page title
          meta_description: document.querySelector('meta[name="description"]')?.getAttribute('content') || 'IPTV Service Description',
          structured_data: structuredDataJson,
          canonical_url: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
          meta_robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || 'index,follow',
          updated_at: new Date().toISOString()
        }
      ], {
        onConflict: 'page_path'
      });

    if (error) {
      console.error('Error tracking schema performance:', error);
    }

    return data;
  } catch (error) {
    console.error('Error tracking schema performance:', error);
    return null;
  }
};