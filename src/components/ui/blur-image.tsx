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

    return (
      <div className={cn("overflow-hidden relative", className)}>
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={fetchPriority}
          className={cn(
            "duration-700 ease-in-out",
            isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0"
          )}
          onLoad={() => setIsLoading(false)}
          {...props}
        />
      </div>
    );
  }
);

BlurImage.displayName = "BlurImage";