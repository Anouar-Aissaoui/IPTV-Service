import * as React from "react";
import { Blurhash } from "react-blurhash";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hash?: string;
  sizes?: string;
}

export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className,
  hash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentSrc, setCurrentSrc] = React.useState(src);

  React.useEffect(() => {
    const img = new Image();
    img.src = src || "";
    img.onload = () => {
      setIsLoading(false);
      setCurrentSrc(src);
    };
  }, [src]);

  // Generate srcSet for responsive images
  const generateSrcSet = () => {
    if (!src) return "";
    if (src.startsWith("data:") || src.startsWith("blob:")) return src;
    
    // For images from external sources that don't support dynamic resizing
    if (!src.includes("images.unsplash.com")) return src;

    // For Unsplash images, we can use their dynamic resizing
    const sizes = [320, 640, 768, 1024, 1280, 1536];
    return sizes
      .map((size) => {
        const imgSrc = src.includes("?")
          ? `${src}&w=${size}`
          : `${src}?w=${size}`;
        return `${imgSrc} ${size}w`;
      })
      .join(", ");
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && hash && (
        <div className="absolute inset-0 z-10">
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
        src={currentSrc}
        alt={alt}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 ease-in-out`}
        loading="lazy"
        decoding="async"
        sizes={sizes}
        srcSet={generateSrcSet()}
        {...props}
      />
    </div>
  );
};