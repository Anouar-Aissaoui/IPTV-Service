import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { OptimizedImage } from "./ui/optimized-image";

const brands = [
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item05-150x46-1-2.webp",
    alt: "brand_item05"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item06-150x46-1-2.webp",
    alt: "brand_item06"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item08-150x46-1-2.webp",
    alt: "brand_item08"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item09-150x46-1-2.webp",
    alt: "brand_item09"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item10-150x46-1-2.webp",
    alt: "brand_item10"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item11-2.webp",
    alt: "brand_item11"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item12-2.webp",
    alt: "brand_item12"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item13-150x46-1-2.webp",
    alt: "brand_item13"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item14-150x46-1-2.webp",
    alt: "brand_item14"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item15-150x46-1-2.webp",
    alt: "brand_item15"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item16-150x46-1-2.webp",
    alt: "brand_item16"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item17-150x46-1-2.webp",
    alt: "brand_item17"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item18-150x46-1-2.webp",
    alt: "brand_item18"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item21-150x46-1-2.webp",
    alt: "brand_item21"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/brand_item22-150x46-1-2.webp",
    alt: "brand_item22"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/FOX-150x58.webp",
    alt: "FOX"
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
                    <OptimizedImage
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
