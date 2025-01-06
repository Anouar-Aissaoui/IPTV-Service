import React from 'react';
import { BlurImage } from "./blur-image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const OptimizedImage = React.memo(({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: OptimizedImageProps) => {
  // Generate WebP and AVIF sources
  const baseUrl = src.split('.').slice(0, -1).join('.');
  const extension = src.split('.').pop();
  
  // Only generate alternative formats if not already WebP or AVIF
  const webpSrc = src.endsWith('.webp') ? src : `${baseUrl}.webp`;
  const avifSrc = src.endsWith('.avif') ? src : `${baseUrl}.avif`;
  
  return (
    <picture>
      {!src.endsWith('.avif') && (
        <source
          srcSet={avifSrc}
          type="image/avif"
        />
      )}
      {!src.endsWith('.webp') && (
        <source
          srcSet={webpSrc}
          type="image/webp"
        />
      )}
      <BlurImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
});

OptimizedImage.displayName = 'OptimizedImage';