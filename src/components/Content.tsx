import { Suspense, lazy, useTransition, useMemo, useCallback, useRef, Fragment } from "react";
import { useToast } from "@/components/ui/use-toast";
import { debounce } from "@/utils/debounce";
import { throttle } from "@/utils/throttle";
import MovieSection from "./movies/MovieSection";
import MovieGrid from "./movies/MovieGrid";

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

// Create image processor worker
const createWorker = () => {
  return new Worker(
    new URL('../workers/imageProcessor.worker.ts', import.meta.url),
    { type: 'module' }
  );
};

const Content = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const workerRef = useRef<Worker>();
  
  // Initialize worker
  useMemo(() => {
    workerRef.current = createWorker();
    return () => workerRef.current?.terminate();
  }, []);

  // Memoize movie data
  const memoizedMovies = useMemo(() => movies, []);

  // Debounced scroll handler
  const handleScroll = useCallback(
    debounce(() => {
      console.log('Scrolled');
    }, 150),
    []
  );

  // Throttled window resize handler
  const handleResize = useCallback(
    throttle(() => {
      console.log('Window resized');
    }, 150),
    []
  );

  // Memoized click handler
  const handleMovieClick = useCallback((movieTitle: string) => {
    startTransition(() => {
      console.log(`Movie clicked: ${movieTitle}`);
      toast({
        title: "Movie Selected",
        description: `You selected ${movieTitle}`,
      });
    });
  }, [toast]);

  // Process image with web worker
  const processImage = useCallback((imageUrl: string) => {
    if (workerRef.current) {
      workerRef.current.postMessage({ type: 'PROCESS_IMAGE', imageUrl });
      
      workerRef.current.onmessage = (e) => {
        if (e.data.type === 'IMAGE_PROCESSED') {
          console.log('Image processed:', e.data.url);
        }
      };
    }
  }, []);

  return (
    <MovieSection>
      <MovieGrid 
        movies={memoizedMovies}
        onMovieClick={handleMovieClick}
        onImageLoad={processImage}
      />
    </MovieSection>
  );
};

export default Content;
