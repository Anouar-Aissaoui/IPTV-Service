import { memo } from 'react';
import { BlurImage } from "./ui/blur-image";

interface MovieProps {
  movie: {
    title: string;
    image: string;
    width: number;
    height: number;
  };
}

const MovieCard = memo(({ movie }: MovieProps) => {
  return (
    <div className="relative group overflow-hidden brutal-border brutal-shadow brutal-hover transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200">
      <BlurImage
        src={movie.image}
        alt={movie.title}
        width={movie.width}
        height={movie.height}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white font-black transform -rotate-2 brutal-text">{movie.title}</h3>
      </div>
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;