import * as React from "react";
import { cn } from "@/lib/utils";
import { getTransformedImageUrl } from "@/utils/imageTransform";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  quality?: number;
}

export const BlurImage = React.forwardRef<HTMLImageElement, BlurImageProps>(
  ({ src, alt, className, priority, width, height, quality = 75, ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [imgSrc, setImgSrc] = React.useState(src);

    const transformedSrc = React.useMemo(() => {
      return getTransformedImageUrl(src, {
        width,
        height,
        quality,
        format: 'auto',
      });
    }, [src, width, height, quality]);

    // Handle image load error
    const handleError = () => {
      console.warn(`Failed to load image: ${transformedSrc}`);
      setImgSrc(src); // Fallback to original source if transformation fails
      setIsLoading(false);
    };

    return (
      <div className={cn("overflow-hidden relative", className)}>
        <img
          ref={ref}
          src={imgSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "duration-700 ease-in-out",
            isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"
          )}
          onLoad={() => setIsLoading(false)}
          onError={handleError}
          width={width}
          height={height}
          {...props}
        />
      </div>
    );
  }
);

BlurImage.displayName = "BlurImage";