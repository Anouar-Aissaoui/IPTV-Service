import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

export const usePerformanceTracking = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Prefetch performance data
  useEffect(() => {
    const prefetchData = async () => {
      await queryClient.prefetchQuery({
        queryKey: ['seo-performance', window.location.pathname],
        queryFn: async () => {
          const { data } = await supabase
            .from('seo_performance')
            .select('*')
            .eq('url', window.location.pathname)
            .maybeSingle();
          return data;
        },
        staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
        gcTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
      });
    };
    void prefetchData();
  }, [queryClient]);

  // Track page performance with optimized caching
  const { data: performanceData, error: performanceError } = useQuery({
    queryKey: ['seo-performance', window.location.pathname],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('seo_performance')
          .upsert([
            {
              url: window.location.pathname,
              visits: 1,
              avg_time_on_page: 0,
              bounce_rate: 0
            }
          ], {
            onConflict: 'url'
          })
          .select('*')
          .maybeSingle();

        if (error) {
          console.error('Error tracking performance:', error);
          return null;
        }

        return data;
      } catch (err) {
        console.error('Error in performance tracking:', err);
        return null;
      }
    },
    retry: 1,
    staleTime: 1000 * 60 * 5, // Data remains fresh for 5 minutes
    gcTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
    refetchOnWindowFocus: false, // Disable automatic refetching on window focus
  });

  useEffect(() => {
    if (performanceError) {
      toast({
        title: "Performance Tracking Error",
        description: "Unable to track page performance. This won't affect your experience.",
        variant: "destructive",
      });
    }

    // Measure performance
    const startTime = performance.now();
    performance.mark('content-component-rendered');
    
    return () => {
      const endTime = performance.now();
      const timeOnPage = (endTime - startTime) / 1000;

      // Optimistic update for performance metrics
      const updateMetrics = async () => {
        try {
          // Update cache optimistically
          queryClient.setQueryData(['seo-performance', window.location.pathname], (old: any) => ({
            ...old,
            avg_time_on_page: timeOnPage
          }));

          const { error } = await supabase
            .from('seo_performance')
            .update({ 
              avg_time_on_page: timeOnPage 
            })
            .eq('url', window.location.pathname);

          if (error) {
            console.error('Error updating performance metrics:', error);
            // Revert optimistic update on error
            void queryClient.invalidateQueries({
              queryKey: ['seo-performance', window.location.pathname]
            });
          }
        } catch (err) {
          console.error('Error in cleanup:', err);
        }
      };

      void updateMetrics();
      performance.measure('content-render-time', 'content-component-rendered');
    };
  }, [performanceError, toast, queryClient]);

  return { performanceData, performanceError };
};