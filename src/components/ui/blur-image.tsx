import * as React from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const BlurImage = React.forwardRef<HTMLImageElement, BlurImageProps>(
  ({ className, src, alt, ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(true);

    return (
      <div className={cn("overflow-hidden", className)}>
        <img
          ref={ref}
          src={src}
          alt={alt}
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