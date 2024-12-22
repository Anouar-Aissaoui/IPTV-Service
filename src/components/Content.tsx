const movies = [
  {
    title: "Movie 1",
    image: "https://via.placeholder.com/300x450",
  },
  {
    title: "Movie 2",
    image: "https://via.placeholder.com/300x450",
  },
  {
    title: "Movie 3",
    image: "https://via.placeholder.com/300x450",
  },
  {
    title: "Movie 4",
    image: "https://via.placeholder.com/300x450",
  },
  {
    title: "Movie 5",
    image: "https://via.placeholder.com/300x450",
  },
];

export const Content = () => {
  return (
    <div className="bg-dark-gray py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Movies & <span className="text-neon">TV Shows</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.title}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-white font-bold">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};