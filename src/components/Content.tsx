import * as React from "react";
import { BlurImage } from "./ui/blur-image";
import { uploadImage, getImageUrl } from "@/utils/uploadImage";
import { useToast } from "@/components/ui/use-toast";

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

const reportWebVitals = (metric: any) => {
  console.log(metric);
};

const MovieCard = React.lazy(() => import("./MovieCard"));

export const Content: React.FC = () => {
  const { toast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    performance.mark('content-component-rendered');
    
    return () => {
      performance.measure('content-render-time', 'content-component-rendered');
    };
  }, []);

  const handleMovieClick = React.useCallback((movieTitle: string) => {
    console.log(`Movie clicked: ${movieTitle}`);
  }, []);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const result = await uploadImage(file);
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
      console.log('Upload result:', result);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
      console.error('Upload error:', error);
    }
  };

  return (
    <div className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Movies & <span className="text-neon">TV Shows</span>
        </h2>
        
        <div className="mb-8 flex justify-center">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-neon text-white px-6 py-3 rounded-lg hover:bg-neon/80 transition-colors duration-300"
          >
            Upload Image
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <React.Suspense
              key={movie.title}
              fallback={
                <div className="aspect-[2/3] bg-gray-800 animate-pulse rounded-lg"></div>
              }
            >
              <div onClick={() => handleMovieClick(movie.title)}>
                <MovieCard movie={movie} />
              </div>
            </React.Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

if (typeof window !== 'undefined') {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      reportWebVitals(entry);
    });
  });

  observer.observe({ entryTypes: ['measure'] });
}