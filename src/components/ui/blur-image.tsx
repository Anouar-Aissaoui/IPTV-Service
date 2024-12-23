import * as React from "react";
import { Blurhash } from "react-blurhash";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hash?: string;
}

export const BlurImage: React.FC<BlurImageProps> = ({ 
  src, 
  alt, 
  hash = "L6PZfSi_.AyE_3t7t7R**0o#DgR4",
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div className="relative w-full h-full">
      {!imageLoaded && hash && (
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
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        style={{ opacity: imageLoaded ? 1 : 0 }}
        className="transition-opacity duration-500 w-full h-full"
        {...props}
      />
    </div>
  );
};