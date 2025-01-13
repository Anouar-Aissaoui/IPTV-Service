import React from 'react';
import { BlurImage } from "./blur-image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  loading,
}: OptimizedImageProps) => {
  // Generate WebP source if the original is not already WebP
  const webpSrc = src.endsWith('.webp') ? src : `${src.split('.').slice(0, -1).join('.')}.webp`;
  
  // For LCP optimization, we want to preload high-priority images
  React.useEffect(() => {
    if (priority && typeof window !== 'undefined') {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = webpSrc;
      preloadLink.type = 'image/webp';
      document.head.appendChild(preloadLink);

      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [priority, webpSrc]);

  return (
    <picture>
      <source
        srcSet={webpSrc}
        type="image/webp"
        media="(min-width: 1px)"
      />
      <BlurImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading || (priority ? "eager" : "lazy")}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
};