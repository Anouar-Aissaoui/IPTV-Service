import { useState } from "react";
import { Blurhash } from "react-blurhash";

interface BlurImageProps {
  src: string;
  alt: string;
  hash?: string;
  className?: string;
}

export const BlurImage = ({ src, alt, hash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4", className = "" }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

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
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};