import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

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
  const autoplay = Autoplay({ delay: 1500, stopOnInteraction: true });

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      autoplay.reset();
    });
  }, [api, autoplay]);

  return (
    <div className="bg-dark-gray py-12">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplay]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                <div className="p-1">
                  <figure className="relative aspect-[3/1] w-full overflow-hidden rounded-lg bg-dark/50">
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="object-contain w-full h-full hover:opacity-80 transition-opacity"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};