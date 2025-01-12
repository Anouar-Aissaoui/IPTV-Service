import { memo, useCallback, useEffect } from 'react';
import { OptimizedImage } from "./ui/optimized-image";

interface MovieProps {
  movie: {
    title: string;
    image: string;
    width: number;
    height: number;
  };
  priority?: boolean;
}

const MovieCard = memo(({ movie, priority = false }: MovieProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.requestIdleCallback(() => {
        performance.mark(`movie-card-${movie.title}-loaded`);
      });
    }
  }, [movie.title]);

  return (
    <div className="relative group overflow-hidden border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200">
      <OptimizedImage
        src={movie.image}
        alt={`Movie poster for ${movie.title}`}
        width={movie.width}
        height={movie.height}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white font-bold transform -rotate-2">{movie.title}</h3>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.movie.title === nextProps.movie.title &&
    prevProps.movie.image === nextProps.movie.image &&
    prevProps.priority === nextProps.priority
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;