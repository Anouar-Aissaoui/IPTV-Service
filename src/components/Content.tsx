import * as React from "react";
import { useToast } from "@/components/ui/use-toast";
import { FixedSizeGrid } from 'react-window';
import { useWindowSize } from "@/hooks/use-mobile";
import { ErrorBoundary } from "./ErrorBoundary";

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

// Separate loading component for better UX
const LoadingCard = () => (
  <div className="aspect-[2/3] bg-gray-800 animate-pulse border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]">
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  </div>
);

const Cell = ({ columnIndex, rowIndex, style, data }: any) => {
  const index = rowIndex * data.columnCount + columnIndex;
  if (index >= movies.length) return null;
  
  return (
    <div style={style}>
      <ErrorBoundary fallback={<div className="text-red-500">Error loading movie</div>}>
        <React.Suspense fallback={<LoadingCard />}>
          <div 
            onClick={() => data.onMovieClick(movies[index].title)}
            className="transform transition-transform duration-200 hover:-translate-y-1 hover:translate-x-1"
          >
            <MovieCard movie={movies[index]} />
          </div>
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

const Content: React.FC = () => {
  const { toast } = useToast();
  const { width } = useWindowSize();

  React.useEffect(() => {
    performance.mark('content-component-rendered');
    
    return () => {
      performance.measure('content-render-time', 'content-component-rendered');
    };
  }, []);

  const handleMovieClick = React.useCallback((movieTitle: string) => {
    console.log(`Movie clicked: ${movieTitle}`);
  }, []);

  const columnCount = width < 640 ? 2 : 
                     width < 768 ? 3 : 
                     width < 1024 ? 4 : 
                     width < 1280 ? 5 : 5;
  
  const rowCount = Math.ceil(movies.length / columnCount);
  const itemSize = Math.min(300, (width - 32) / columnCount);

  return (
    <div className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-6 py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Movies & <span className="text-white bg-dark px-2">TV Shows</span>
          </h2>
        </div>

        <ErrorBoundary fallback={<div className="text-red-500">Error loading grid</div>}>
          <FixedSizeGrid
            columnCount={columnCount}
            columnWidth={itemSize}
            height={Math.min(600, rowCount * itemSize)}
            rowCount={rowCount}
            rowHeight={itemSize}
            width={width - 32}
            itemData={{ columnCount, onMovieClick: handleMovieClick }}
          >
            {Cell}
          </FixedSizeGrid>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Content;