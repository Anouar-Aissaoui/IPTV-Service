import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
}

export const BlurImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  fetchPriority = "auto",
  ...props
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={fetchPriority}
      className={cn(
        "duration-700 ease-in-out transform-gpu will-change-transform",
        isLoading 
          ? "scale-110 blur-2xl grayscale opacity-50" 
          : "scale-100 blur-0 grayscale-0 opacity-100",
        className
      )}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  );
};