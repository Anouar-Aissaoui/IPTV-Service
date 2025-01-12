import React, { Suspense } from 'react';
import { useToast } from '@/hooks/use-toast';

const movies = [
  {
    title: "Live Sports",
    description: "Watch your favorite sports live in HD quality",
    image: "/lovable-uploads/74cadd1d-7f11-4677-9cfc-3342545d312f.png"
  },
  {
    title: "Movies & TV Shows",
    description: "Enjoy the latest movies and TV shows",
    image: "/lovable-uploads/7b0e5f14-995d-47d0-8c7a-108c30d9fd42.png"
  },
  {
    title: "News Channels",
    description: "Stay updated with worldwide news coverage",
    image: "/lovable-uploads/df29e2ce-114a-4085-ae32-d6da18f0b141.png"
  }
];

const MovieCard = React.lazy(() => import("./MovieCard"));

const Content: React.FC = () => {
  const { toast } = useToast();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Our Content
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover a vast library of content including live sports, movies, TV shows, and news channels.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {movies.map((movie, index) => (
            <Suspense 
              key={index}
              fallback={
                <div className="h-[360px] w-full animate-pulse rounded-lg bg-muted" />
              }
            >
              <MovieCard {...movie} />
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;