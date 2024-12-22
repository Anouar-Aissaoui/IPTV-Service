import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { optimizeAndUploadImage } from "@/utils/imageOptimization";

interface BlurImageProps {
  src: string;
  alt: string;
  hash?: string;
  className?: string;
}

export const BlurImage = ({ src, alt, hash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4", className = "" }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [optimizedSrc, setOptimizedSrc] = useState(src);

  useEffect(() => {
    const optimizeImage = async () => {
      if (src.startsWith('http')) {
        const fileName = src.split('/').pop() || 'image.jpg';
        const optimizedUrl = await optimizeAndUploadImage(src, fileName);
        setOptimizedSrc(optimizedUrl);
      }
    };

    optimizeImage();
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0">
          <Blurhash
            hash={hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        decoding="async"
        fetchPriority={className.includes('hero') ? 'high' : 'auto'}
      />
    </div>
  );
};