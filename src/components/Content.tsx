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
    performance.mark('content-component-rendered');
    
    return () => {
      performance.measure('content-render-time', 'content-component-rendered');
    };
  }, []);

  const handleMovieClick = React.useCallback((movieTitle: string) => {
    console.log(`Movie clicked: ${movieTitle}`);
  }, []);

  return (
    <div className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-gradient-to-r from-neon via-white to-neon bg-clip-text text-transparent px-6 py-3 brutal-border brutal-shadow hover:scale-105 transition-transform duration-300">
            Movies <span className="text-white bg-dark px-2 brutal-rotate">&</span> <span className="bg-gradient-to-r from-white to-neon bg-clip-text">TV Shows</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <React.Suspense
              key={movie.title}
              fallback={
                <div className="aspect-[2/3] bg-gray-800 animate-pulse brutal-border brutal-shadow"></div>
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