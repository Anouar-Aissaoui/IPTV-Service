import React, { Suspense } from 'react';
import { Fragment } from 'react';
import MovieCard from './MovieCard';
import LoadingCard from '../LoadingCard';

interface Movie {
  title: string;
  image: string;
  width: number;
  height: number;
}

interface MovieGridProps {
  movies: Movie[];
  onMovieClick: (title: string) => void;
  onImageLoad: (imageUrl: string) => void;
}

export const MovieGrid = React.memo(({ movies, onMovieClick, onImageLoad }: MovieGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <Fragment key={movie.title}>
          <Suspense fallback={<LoadingCard />}>
            <div 
              onClick={() => onMovieClick(movie.title)}
              className="transform transition-transform duration-200 hover:-translate-y-1 hover:translate-x-1"
            >
              <MovieCard 
                movie={movie} 
                onLoad={() => onImageLoad(movie.image)}
              />
            </div>
          </Suspense>
        </Fragment>
      ))}
    </div>
  );
});

MovieGrid.displayName = 'MovieGrid';

export default MovieGrid;