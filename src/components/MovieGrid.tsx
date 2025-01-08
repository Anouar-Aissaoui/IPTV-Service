import * as React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import MovieCard from "./MovieCard";

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

export const MovieGrid: React.FC = () => {
  const queryClient = useQueryClient();

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
  );
};