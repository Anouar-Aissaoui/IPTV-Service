import { BlurImage } from "./ui/blur-image";
import { Suspense, lazy, useCallback, useEffect } from "react";

// Moved movies data outside component to prevent re-creation on each render
const movies = [
  {
    title: "Madame Web",
    image: "https://image.tmdb.org/t/p/w342/sjMN7DRi4sGiledsmllEw5HJjPy.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
  {
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w342/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
  {
    title: "Argylle",
    image: "https://image.tmdb.org/t/p/w342/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
  {
    title: "Migration",
    image: "https://image.tmdb.org/t/p/w342/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
  {
    title: "Anyone But You",
    image: "https://image.tmdb.org/t/p/w342/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
    width: 342,
    height: 513,
  },
];

// Performance monitoring
const reportWebVitals = (metric: any) => {
  console.log(metric);
};

// Lazy load MovieCard component
const MovieCard = lazy(() => import("./MovieCard"));

export const Content = () => {
  // Monitor component renders
  useEffect(() => {
    performance.mark('content-component-rendered');
    
    return () => {
      performance.measure('content-render-time', 'content-component-rendered');
    };
  }, []);

  // Memoized handler for future interactions
  const handleMovieClick = useCallback((movieTitle: string) => {
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

// Add performance observer
if (typeof window !== 'undefined') {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      reportWebVitals(entry);
    });
  });

  observer.observe({ entryTypes: ['measure'] });
}