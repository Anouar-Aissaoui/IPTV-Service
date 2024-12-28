import * as React from "react";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  sizes?: string;
}

export const BlurImage = React.forwardRef<HTMLImageElement, BlurImageProps>(
  ({ 
    src, 
    alt, 
    className, 
    sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    ...props 
  }, ref) => {
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
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          ref={ref}
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
  }
);

BlurImage.displayName = "BlurImage";