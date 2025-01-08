import * as React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const movies = [
  {
    title: "Madame Web",
    image: "https://image.tmdb.org/t/p/w342/sjMN7DRi4sGiledsmllEw5HJjPy.jpg",
    width: 342,
    height: 513,
  },
  {
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w342/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    width: 342,
    height: 513,
  },
  {
    title: "Argylle",
    image: "https://image.tmdb.org/t/p/w342/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    width: 342,
    height: 513,
  },
  {
    title: "Migration",
    image: "https://image.tmdb.org/t/p/w342/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    width: 342,
    height: 513,
  },
  {
    title: "Anyone But You",
    image: "https://image.tmdb.org/t/p/w342/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    width: 342,
    height: 513,
  },
];

const MovieCard = React.lazy(() => import("./MovieCard"));

const Content: React.FC = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Prefetch performance data
  React.useEffect(() => {
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
        cacheTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
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
    cacheTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
    refetchOnWindowFocus: false, // Disable automatic refetching on window focus
  });

  React.useEffect(() => {
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

  const handleMovieClick = React.useCallback((movieTitle: string) => {
    console.log(`Movie clicked: ${movieTitle}`);
    
    // Optimistic update for bounce rate
    const trackInteraction = async () => {
      try {
        // Update cache optimistically
        queryClient.setQueryData(['seo-performance', window.location.pathname], (old: any) => ({
          ...old,
          bounce_rate: 0
        }));

        const { error } = await supabase
          .from('seo_performance')
          .update({ 
            bounce_rate: 0 // User interacted, not a bounce
          })
          .eq('url', window.location.pathname);

        if (error) {
          console.error('Error updating bounce rate:', error);
          // Revert optimistic update on error
          void queryClient.invalidateQueries({
            queryKey: ['seo-performance', window.location.pathname]
          });
        }
      } catch (err) {
        console.error('Error tracking interaction:', err);
      }
    };

    void trackInteraction();
  }, [queryClient]);

  return (
    <div className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-6 py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Movies & <span className="text-white bg-dark px-2">TV Shows</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <React.Suspense
              key={movie.title}
              fallback={
                <div className="aspect-[2/3] bg-gray-800 animate-pulse border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]"></div>
              }
            >
              <div 
                onClick={() => handleMovieClick(movie.title)}
                className="transform transition-transform duration-200 hover:-translate-y-1 hover:translate-x-1"
              >
                <MovieCard movie={movie} />
              </div>
            </React.Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;