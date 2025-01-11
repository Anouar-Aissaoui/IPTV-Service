import React from 'react';

interface MovieSectionProps {
  children: React.ReactNode;
}

export const MovieSection = React.memo(({ children }: MovieSectionProps) => {
  return (
    <div className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-6 py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Movies & <span className="text-white bg-dark px-2">TV Shows</span>
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
});

MovieSection.displayName = 'MovieSection';

export default MovieSection;