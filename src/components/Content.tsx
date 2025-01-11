import { Suspense, lazy, useTransition, useMemo, useCallback, useRef, Fragment } from "react";
import { useToast } from "@/components/ui/use-toast";
import { debounce } from "@/utils/debounce";
import { throttle } from "@/utils/throttle";

// Lazy load components
const MovieCard = lazy(() => import("./MovieCard"));
const LoadingCard = lazy(() => import("./LoadingCard"));

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
    <div className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-6 py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Movies & <span className="text-white bg-dark px-2">TV Shows</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {memoizedMovies.map((movie) => (
            <Fragment key={movie.title}>
              <Suspense fallback={<LoadingCard />}>
                <div 
                  onClick={() => handleMovieClick(movie.title)}
                  className="transform transition-transform duration-200 hover:-translate-y-1 hover:translate-x-1"
                >
                  <MovieCard 
                    movie={movie} 
                    onLoad={() => processImage(movie.image)}
                  />
                </div>
              </Suspense>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;