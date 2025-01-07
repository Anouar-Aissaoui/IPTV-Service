import React, { useState } from 'react';
import { BlurImage } from "./blur-image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  title?: string;
  description?: string;
  loading?: "lazy" | "eager";
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  title,
  description,
  loading = "lazy",
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Generate WebP source if the original is not already WebP
  const webpSrc = src.endsWith('.webp') ? src : `${src.split('.').slice(0, -1).join('.')}.webp`;
  
  // Generate structured data for the image
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "ImageObject",
    "contentUrl": src,
    "name": title || alt,
    "description": description || alt,
    "width": width,
    "height": height,
  };

  // Enhanced alt text with more context
  const enhancedAlt = description ? `${alt} - ${description}` : alt;
  
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <picture className={className}>
        <source
          srcSet={webpSrc}
          type="image/webp"
          width={width}
          height={height}
        />
        <BlurImage
          src={src}
          alt={enhancedAlt}
          title={title || alt}
          width={width}
          height={height}
          className={`${className} ${isLoading ? 'blur-sm' : 'blur-0'}`}
          loading={priority ? "eager" : loading}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoading(false)}
          aria-label={enhancedAlt}
          role="img"
        />
      </picture>
    </>
  );
};

// Export a helper function to generate SEO-friendly image attributes
export const generateImageMetadata = (
  baseName: string,
  context: string = "",
  dimensions?: { width: number; height: number }
) => {
  return {
    alt: `${baseName}${context ? ` - ${context}` : ""}`,
    title: baseName,
    description: `${baseName}${context ? ` - ${context}` : ""} ${
      dimensions ? `(${dimensions.width}x${dimensions.height})` : ""
    }`,
    ...(dimensions && { width: dimensions.width, height: dimensions.height }),
  };
};