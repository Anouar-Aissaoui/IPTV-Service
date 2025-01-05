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

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: OptimizedImageProps) => {
  // Generate WebP source if the original is not already WebP
  const webpSrc = src.endsWith('.webp') ? src : `${src.split('.').slice(0, -1).join('.')}.webp`;
  
  return (
    <picture>
      <source
        srcSet={webpSrc}
        type="image/webp"
      />
      <BlurImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
};