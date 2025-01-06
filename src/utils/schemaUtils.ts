import { supabase } from "@/integrations/supabase/client";
import type { BaseSchema } from "@/types/schema";

export const trackSchemaPerformance = async (
  pageUrl: string,
  schemas: BaseSchema[]
) => {
  try {
    const { data, error } = await supabase
      .from('seo_performance_metrics')
      .upsert([
        {
          page_path: pageUrl,
          structured_data: schemas,
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