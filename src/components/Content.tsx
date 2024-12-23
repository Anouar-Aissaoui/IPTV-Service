import { BlurImage } from "./ui/blur-image";
import { Suspense, lazy } from "react";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

// Moved movies data outside component to prevent re-creation on each render
const movies = [
  {
    title: "Madame Web",
    image: "https://image.tmdb.org/t/p/w342/sjMN7DRi4sGiledsmllEw5HJjPy.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
    genre: "Action, Sci-Fi",
    rating: "4.5"
  },
  {
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w342/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
    genre: "Sci-Fi, Adventure",
    rating: "4.8"
  },
  {
    title: "Argylle",
    image: "https://image.tmdb.org/t/p/w342/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
    genre: "Action, Thriller",
    rating: "4.2"
  },
  {
    title: "Migration",
    image: "https://image.tmdb.org/t/p/w342/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
    genre: "Animation, Family",
    rating: "4.6"
  },
  {
    title: "Anyone But You",
    image: "https://image.tmdb.org/t/p/w342/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
    genre: "Romance, Comedy",
    rating: "4.3"
  },
];

const MovieCard = lazy(() => import("./MovieCard"));

export const Content = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Movies & <span className="text-neon">TV Shows</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl">
            Explore our vast collection of the latest movies and TV shows. From blockbuster hits to indie gems, we've got something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Suspense
              key={movie.title}
              fallback={
                <div className="aspect-[2/3] bg-gray-800 animate-pulse rounded-lg"></div>
              }
            >
              <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105">
                <MovieCard movie={movie} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{movie.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">{movie.genre}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-neon">⭐ {movie.rating}</span>
                      <Button 
                        size="sm" 
                        className="bg-neon hover:bg-neon/90 text-white"
                      >
                        <Play className="w-4 h-4 mr-1" /> Watch Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};