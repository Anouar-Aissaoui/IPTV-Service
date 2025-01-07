import { supabase } from "@/integrations/supabase/client";
import type { PSEOVariation } from "@/types/seo";

export const generatePSEOContent = async (
  slug: string,
  keywords: string[],
  locale: string = 'en'
): Promise<PSEOVariation | null> => {
  try {
    const { data: variation, error } = await supabase
      .from('pseo_variations')
      .select('*')
      .eq('slug', slug)
      .eq('locale', locale)
      .maybeSingle();

    if (error) {
      console.error('Error fetching pSEO variation:', error);
      return null;
    }

    if (!variation) {
      // Create new variation if it doesn't exist
      const { data: newVariation, error: insertError } = await supabase
        .from('pseo_variations')
        .insert([{
          slug,
          title: `Best IPTV Subscription Service | Premium IPTV Provider ${new Date().getFullYear()}`,
          description: "Get the best IPTV subscription with 40,000+ channels. Premium IPTV service with HD quality streaming. Subscribe now for the ultimate entertainment experience!",
          h1: "Premium IPTV Subscription Service",
          keywords,
          locale,
          content: {
            main_content: "Experience the ultimate IPTV streaming service with our premium subscription packages...",
            features: [
              "40,000+ Live Channels",
              "54,000+ VOD Content",
              "HD & 4K Quality",
              "24/7 Support"
            ]
          }
        }])
        .select()
        .single();

      if (insertError) {
        console.error('Error creating pSEO variation:', insertError);
        return null;
      }

      return newVariation;
    }

    return variation;
  } catch (error) {
    console.error('Error in generatePSEOContent:', error);
    return null;
  }
};

export const trackKeywordPerformance = async (
  keyword: string,
  pagePath: string,
  position?: number
) => {
  try {
    const { error } = await supabase
      .from('keyword_performance')
      .upsert({
        keyword,
        page_path: pagePath,
        position,
        impressions: 1,
        last_updated: new Date().toISOString()
      }, {
        onConflict: 'keyword,page_path'
      });

    if (error) {
      console.error('Error tracking keyword performance:', error);
    }
  } catch (error) {
    console.error('Error in trackKeywordPerformance:', error);
  }
};