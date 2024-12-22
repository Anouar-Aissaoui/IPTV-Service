import { BlurImage } from "./ui/blur-image";

interface MovieProps {
  movie: {
    title: string;
    image: string;
    hash: string;
    width: number;
    height: number;
  };
}

const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-[2/3] border border-neon/20 hover:border-neon/40 transition-colors duration-300">
      <BlurImage
        src={movie.image}
        alt={movie.title}
        hash={movie.hash}
        width={movie.width}
        height={movie.height}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white font-bold">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;