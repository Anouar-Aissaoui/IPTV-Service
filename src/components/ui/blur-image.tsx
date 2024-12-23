import * as React from "react";
import { Blurhash } from "react-blurhash";

interface BlurImageProps {
  src: string;
  alt: string;
  hash?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
}

export const BlurImage: React.FC<BlurImageProps> = ({ 
  src, 
  alt, 
  hash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4", 
  className = "",
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto"
}: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

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
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};