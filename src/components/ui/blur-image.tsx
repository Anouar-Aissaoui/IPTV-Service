import * as React from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
}

export const BlurImage = React.forwardRef<HTMLImageElement, BlurImageProps>(
  ({ src, alt, className, priority, fetchPriority = "auto", ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      // Reset states when src changes
      setIsLoading(true);
      setError(false);
    }, [src]);

    // Preload high priority images
    React.useEffect(() => {
      if (priority) {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoading(false);
        img.onerror = () => setError(true);
      }
    }, [src, priority]);

    return (
      <div className={cn("overflow-hidden relative", className)}>
        {isLoading && !error && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        {error ? (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <span className="text-sm text-gray-500">Failed to load image</span>
          </div>
        ) : (
          <img
            ref={ref}
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            fetchPriority={fetchPriority}
            onLoad={() => setIsLoading(false)}
            onError={() => setError(true)}
            className={cn(
              "duration-700 ease-in-out",
              isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0",
              className
            )}
            {...props}
          />
        )}
      </div>
    );
  }
);

BlurImage.displayName = "BlurImage";