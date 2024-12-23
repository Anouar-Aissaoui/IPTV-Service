import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BlurImage } from "./ui/blur-image";

const brands = [
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/hbo-premium-tv-channel-logo.webp",
    alt: "HBO Premium TV Channel - Available on our IPTV Service"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/netflix-streaming-platform-logo.webp",
    alt: "Netflix Streaming Platform - Premium Content Provider"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/disney-plus-streaming-service-logo.webp",
    alt: "Disney Plus Streaming Service - Family Entertainment"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/amazon-prime-video-platform-logo.webp",
    alt: "Amazon Prime Video Platform - Premium Streaming Content"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/espn-sports-channel-logo.webp",
    alt: "ESPN Sports Channel - Live Sports Streaming"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/fox-news-channel-logo.webp",
    alt: "Fox News Channel - News Broadcasting Network"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/cnn-news-network-logo.webp",
    alt: "CNN News Network - Global News Coverage"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/bbc-broadcasting-network-logo.webp",
    alt: "BBC Broadcasting Network - International News and Entertainment"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/sky-sports-channel-logo.webp",
    alt: "Sky Sports Channel - Premium Sports Coverage"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/bt-sport-network-logo.webp",
    alt: "BT Sport Network - Live Sports Broadcasting"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/nbc-television-network-logo.webp",
    alt: "NBC Television Network - American Broadcasting"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/abc-broadcasting-company-logo.webp",
    alt: "ABC Broadcasting Company - Entertainment Network"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/cbs-television-network-logo.webp",
    alt: "CBS Television Network - American TV Broadcasting"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/showtime-premium-channel-logo.webp",
    alt: "Showtime Premium Channel - Premium Entertainment"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/starz-premium-network-logo.webp",
    alt: "Starz Premium Network - Movie and Series Streaming"
  },
  {
    src: "https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/fox-broadcasting-network-logo.webp",
    alt: "Fox Broadcasting Network - Entertainment and News"
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