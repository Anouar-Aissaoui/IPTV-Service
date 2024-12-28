import * as React from "react";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  sizes?: string;
}

export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  alt,
  className,
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

  // Generate srcSet for responsive images using Cloudflare
  const generateSrcSet = () => {
    if (!src) return "";
    if (src.startsWith("data:") || src.startsWith("blob:")) return src;
    
    // Define widths for responsive images
    const widths = [320, 640, 768, 1024, 1280, 1536];
    
    return widths
      .map((w) => {
        // Construct Cloudflare transformed URL
        const transformedUrl = `${src}/cdn-cgi/image/width=${w},quality=80,format=auto`;
        return `${transformedUrl} ${w}w`;
      })
      .join(", ");
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={`${currentSrc}/cdn-cgi/image/quality=80,format=auto`}
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