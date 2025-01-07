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

    const transformedSrc = React.useMemo(() => {
      return getTransformedImageUrl(src, {
        width,
        height,
        quality,
        format: 'auto', // Let Cloudflare detect the best format
      });
    }, [src, width, height, quality]);

    return (
      <div className={cn("overflow-hidden relative", className)}>
        <img
          ref={ref}
          src={transformedSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={cn(
            "duration-700 ease-in-out",
            isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"
          )}
          onLoad={() => setIsLoading(false)}
          width={width}
          height={height}
          {...props}
        />
      </div>
    );
  }
);

BlurImage.displayName = "BlurImage";