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
    <div className="relative group overflow-hidden border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200">
      <BlurImage
        src={movie.image}
        alt={movie.title}
        width={movie.width}
        height={movie.height}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white font-bold transform -rotate-2">{movie.title}</h3>
      </div>
    </div>
  );
});

MovieCard.displayName = 'MovieCard';

export default MovieCard;