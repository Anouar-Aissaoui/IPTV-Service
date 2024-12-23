import { memo } from 'react';
import { BlurImage } from "./ui/blur-image";

interface MovieProps {
  movie: {
    title: string;
    image: string;
    hash: string;
    width: number;
    height: number;
    genre: string;
    rating: string;
  };
}

const MovieCard = memo(({ movie }: MovieProps) => {
  return (
    <div className="relative w-full h-full">
      <BlurImage
        src={movie.image}
        alt={movie.title}
        hash={movie.hash}
        width={movie.width}
        height={movie.height}
        className="w-full h-full object-cover rounded-lg"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;