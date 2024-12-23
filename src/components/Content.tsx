import * as React from "react";
import { BlurImage } from "./ui/blur-image";

const movies = [
  {
    title: "Madame Web",
    image: "https://image.tmdb.org/t/p/w342/madame-web-2024-movie-poster-premium-iptv.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
  {
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w342/dune-part-two-2024-movie-streaming-iptv.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
  {
    title: "Argylle",
    image: "https://image.tmdb.org/t/p/w342/argylle-2024-movie-streaming-premium-iptv.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
  {
    title: "Migration",
    image: "https://image.tmdb.org/t/p/w342/migration-2024-animated-movie-streaming-iptv.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
  {
    title: "Anyone But You",
    image: "https://image.tmdb.org/t/p/w342/anyone-but-you-2024-movie-streaming-iptv.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
];

const MovieCard = React.lazy(() => import("./MovieCard"));

export const Content: React.FC = () => {
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
    <div className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Movies & <span className="text-neon">TV Shows</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Suspense
              key={movie.title}
              fallback={
                <div className="aspect-[2/3] bg-gray-800 animate-pulse rounded-lg"></div>
              }
            >
              <div onClick={() => handleMovieClick(movie.title)}>
                <MovieCard movie={movie} />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};
