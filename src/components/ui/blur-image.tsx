import * as React from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const BlurImage = React.forwardRef<HTMLImageElement, BlurImageProps>(
  ({ src, alt, className, priority, ...props }, ref) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isInView, setIsInView] = React.useState(false);
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          rootMargin: '50px',
        }
      );

      const imageRef = ref && typeof ref === 'object' ? ref.current : null;
      if (imageRef && !priority) {
        observer.observe(imageRef);
      }

      return () => {
        if (imageRef && !priority) {
          observer.unobserve(imageRef);
        }
      };
    }, [ref, priority]);

    return (
      <div className={cn("overflow-hidden relative", className)}>
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "duration-700 ease-in-out",
            isLoading ? "scale-110 blur-2xl" : "scale-100 blur-0",
            !isInView && !priority ? "opacity-0" : "opacity-100"
          )}
          onLoad={() => setIsLoading(false)}
          {...props}
        />
      </div>
    );
  }
);

BlurImage.displayName = "BlurImage";