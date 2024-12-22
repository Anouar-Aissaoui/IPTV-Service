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
        .maybeSingle();

      if (error) {
        console.error('Error fetching SEO data:', error);
        throw error;
      }

      // If no data exists, return default SEO data
      if (!data) {
        return {
          title: "Premium IPTV Subscription | Best USA IPTV Provider 2024",
          description: "Get premium IPTV subscription with 40,000+ channels and VOD content in 4K & HD quality. Best IPTV provider in USA with 24/7 support.",
          canonical_url: "https://iptvsubscription.news",
          meta_tags: {
            keywords: "buy IPTV, IPTV service, best IPTV service, IPTV subscription, buy IPTV USA, premium IPTV service, IPTV provider USA, HD IPTV, 4K IPTV",
          },
          structured_data: {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Premium IPTV Subscription",
            "description": "High-quality IPTV service with 40,000+ channels and VOD content in 4K & HD quality.",
            "offers": {
              "@type": "Offer",
              "price": "14.99",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }
        };
      }

      return data;
    }
  });
};