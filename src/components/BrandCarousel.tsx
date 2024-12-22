import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { BlurImage } from "./ui/blur-image";

const brands = [
  {
    src: "/brands/brand1.webp",
    alt: "HBO"
  },
  {
    src: "/brands/brand2.webp",
    alt: "Netflix"
  },
  {
    src: "/brands/brand3.webp",
    alt: "Disney+"
  },
  {
    src: "/brands/brand4.webp",
    alt: "Prime Video"
  },
  {
    src: "/brands/brand5.webp",
    alt: "Apple TV+"
  },
  {
    src: "/brands/brand6.webp",
    alt: "Paramount+"
  },
  {
    src: "/brands/brand7.webp",
    alt: "Peacock"
  },
  {
    src: "/brands/brand8.webp",
    alt: "ESPN+"
  }
];

export const BrandCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const autoplay = Autoplay({ delay: 2500, stopOnInteraction: true });

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      autoplay.reset();
    });
  }, [api, autoplay]);

  return (
    <div className="bg-black py-6 md:py-8 relative">
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            skipSnaps: true,
          }}
          plugins={[autoplay]}
          setApi={setApi}
          className="w-full max-w-[1200px] mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="p-1 md:p-2">
                  <figure className="relative aspect-[3/1] w-full">
                    <BlurImage
                      src={brand.src}
                      alt={brand.alt}
                      className="object-contain w-full h-full opacity-50 hover:opacity-100 transition-opacity duration-300 scale-75 hover:scale-90"
                    />
                  </figure>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-transparent border-none hover:bg-black/10 text-white w-8 h-8" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-transparent border-none hover:bg-black/10 text-white w-8 h-8" />
        </Carousel>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20"></div>
    </div>
  );
};