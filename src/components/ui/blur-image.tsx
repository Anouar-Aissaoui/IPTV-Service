import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import { optimizeAndUploadImage } from "@/utils/imageOptimization";
import { useToast } from "@/hooks/use-toast";

interface BlurImageProps {
  src: string;
  alt: string;
  hash?: string;
  className?: string;
  priority?: boolean;
}

export const BlurImage = ({ 
  src, 
  alt, 
  hash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4", 
  className = "",
  priority = false 
}: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const { toast } = useToast();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const optimizeImage = async () => {
      if (src.startsWith('http')) {
        try {
          const fileName = src.split('/').pop() || 'image.jpg';
          const optimizedUrl = await optimizeAndUploadImage(src, fileName);
          setImageSrc(optimizedUrl);
        } catch (error) {
          console.error('Error optimizing image:', error);
          setHasError(true);
          toast({
            title: "Image Load Issue",
            description: "Some images may not display at optimal quality. We're working on fixing this.",
            variant: "destructive",
          });
        }
      }
    };

    if (!priority) {
      // Only optimize non-priority images after initial load
      window.requestIdleCallback ? 
        window.requestIdleCallback(() => optimizeImage()) : 
        setTimeout(optimizeImage, 1000);
    } else {
      optimizeImage();
    }
  }, [src, priority, toast]);

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0">
          <Blurhash
            hash={hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
        onLoad={() => setIsLoaded(true)}
        onError={handleImageError}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
};