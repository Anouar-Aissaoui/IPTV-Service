import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useSEOData = (route: string) => {
  return useQuery({
    queryKey: ['seo', route],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('seo_metrics')
        .select('*')
        .eq('route', route)
        .single();

      if (error) {
        console.error('Error fetching SEO data:', error);
        return null;
      }

      return data;
    }
  });
};