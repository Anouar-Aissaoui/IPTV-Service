import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type Channel = {
  title: string;
  image: string;
  link: string;
  description: string;
  width: number;
  height: number;
  altText: string;
};

export type Movie = {
  title: string;
  image: string;
  width: number;
  height: number;
};

export type Sport = {
  title: string;
  image: string;
  description: string;
};

export const api = {
  async getIPTVKeywords() {
    const { data, error } = await supabase
      .from('iptv_seo_keywords')
      .select('keyword')
      .returns<Pick<Database['public']['Tables']['iptv_seo_keywords']['Row'], 'keyword'>[]>();
    
    if (error) throw error;
    return data.map(k => k.keyword);
  },

  async trackPageView(url: string) {
    const { error } = await supabase
      .from('seo_performance')
      .upsert([
        {
          url,
          visits: 1,
          updated_at: new Date().toISOString()
        }
      ], {
        onConflict: 'url',
        ignoreDuplicates: false
      });

    if (error) console.error('Error tracking page view:', error);
  },

  async getSEOMetrics(route: string) {
    const { data, error } = await supabase
      .from('seo_metrics')
      .select('*')
      .eq('route', route)
      .maybeSingle();

    if (error) throw error;
    return data;
  }
};