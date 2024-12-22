import { BlurImage } from "./ui/blur-image";

const movies = [
  {
    title: "Madame Web",
    image: "https://image.tmdb.org/t/p/w342/sjMN7DRi4sGiledsmllEw5HJjPy.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  },
  {
    title: "Dune: Part Two",
    image: "https://image.tmdb.org/t/p/w342/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  },
  {
    title: "Argylle",
    image: "https://image.tmdb.org/t/p/w342/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  },
  {
    title: "Migration",
    image: "https://image.tmdb.org/t/p/w342/4YZpsylmjHbqeWzjKpUEF8gcLNW.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  },
  {
    title: "Anyone But You",
    image: "https://image.tmdb.org/t/p/w342/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    hash: "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  },
];

export const Content = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Movies & <span className="text-neon">TV Shows</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.title}
              className="relative group overflow-hidden rounded-lg aspect-[2/3] border border-neon/20 hover:border-neon/40 transition-colors duration-300"
            >
              <BlurImage
                src={movie.image}
                alt={movie.title}
                hash={movie.hash}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-bold">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};