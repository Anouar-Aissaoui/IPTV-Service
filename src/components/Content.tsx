import * as React from "react";
import { useToast } from "@/components/ui/use-toast";
import { BlurImage } from "./ui/blur-image";

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

  React.useEffect(() => {
    // Mark when content section starts rendering
    performance.mark('content-start');
    
    return () => {
      // Measure content render time
      performance.measure('content-render-time', 'content-start');
    };
  }, []);

  const handleMovieClick = React.useCallback((movieTitle: string) => {
    console.log(`Movie clicked: ${movieTitle}`);
  }, []);

  return (
    <div className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-6 py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Movies & <span className="text-white bg-dark px-2">TV Shows</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie, index) => (
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
                <MovieCard 
                  movie={movie} 
                  priority={index < 2} // Prioritize loading first two images
                />
              </div>
            </React.Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;