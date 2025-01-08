import React from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const BlurImage = React.forwardRef<HTMLImageElement, BlurImageProps>(
  ({ src, alt, className, priority, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn("transition-all duration-300", className)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...props}
      />
    );
  }
);

BlurImage.displayName = "BlurImage";