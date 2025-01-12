import React from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  image,
  className,
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border bg-background p-2",
        className
      )}
    >
      <div className="aspect-[16/9] overflow-hidden rounded-md">
        <OptimizedImage
          src={image}
          alt={title}
          width={640}
          height={360}
          className="h-full w-full object-cover transition-all hover:scale-105"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;