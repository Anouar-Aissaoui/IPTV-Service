import React from "react";
import { Play } from "lucide-react";

const channels = [
  {
    title: "ESPNU",
    image: "https://www.popcornmovies.to/uploads/poster/APkbKRIvMh.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Watch live college sports and events on ESPNU",
    width: 300,
    height: 450
  },
  {
    title: "ESPN",
    image: "https://www.popcornmovies.to/uploads/poster/mO23pg6gzk.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "The worldwide leader in sports broadcasting",
    width: 300,
    height: 450
  },
  {
    title: "NBA TV",
    image: "https://www.popcornmovies.to/uploads/poster/iHhVGaE80u.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "24/7 basketball coverage and live NBA games",
    width: 300,
    height: 450
  },
  {
    title: "NFL Network",
    image: "https://www.popcornmovies.to/uploads/poster/A8wOWJX0My.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Complete NFL coverage and exclusive content",
    width: 300,
    height: 450
  },
  {
    title: "HBO 2 East",
    image: "https://www.popcornmovies.to/uploads/poster/6vf1aSr7gt.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Premium entertainment and exclusive HBO content",
    width: 300,
    height: 450
  },
  {
    title: "HBO East",
    image: "https://www.popcornmovies.to/uploads/poster/G67HiKK1Nf.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Original HBO series, movies, and specials",
    width: 300,
    height: 450
  },
  {
    title: "Fox Sports 1",
    image: "https://www.popcornmovies.to/uploads/poster/AyLTRoIo55.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "Live sports coverage and analysis on FS1",
    width: 300,
    height: 450
  },
  {
    title: "National Geographic",
    image: "https://www.popcornmovies.to/uploads/poster/mHrOgAZU75.webp",
    link: "https://wa.me/message/R5IYJF3GG635D1",
    description: "World-class documentaries and educational content",
    width: 300,
    height: 450
  },
];

const LiveChannels = () => {
  return (
    <section className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative brutal-container">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-[#F97316] text-dark px-6 py-3 border-4 border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            Live <span className="text-white bg-dark px-2">Channels</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-4 md:gap-6">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.link}
              className="relative block group transform transition-transform duration-200 hover:-translate-y-1 hover:translate-x-1"
              data-abc="true"
              aria-label={`Watch ${channel.title} - ${channel.description}`}
            >
              <div className="aspect-square relative rounded-none transition overflow-hidden cursor-pointer border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]">
                <picture>
                  <source
                    srcSet={channel.image}
                    type="image/webp"
                    className="absolute h-full w-full object-cover"
                  />
                  <img
                    src={channel.image.replace('.webp', '.jpg')}
                    alt={`${channel.title} - ${channel.description}`}
                    className="absolute h-full w-full object-cover"
                    width={channel.width}
                    height={channel.height}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                
                <div className="hidden group-hover:flex absolute left-1/2 top-1/2 -translate-x-1/2 z-20 -translate-y-1/2 h-16 w-16 items-center justify-center cursor-pointer bg-[#F97316] border-4 border-white">
                  <Play className="h-6 w-6 translate-x-0.5 text-dark" aria-hidden="true" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-dark/20 to-dark/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="pt-3 transition text-center">
                <h3 className="text-brutal-base font-black tracking-tight text-white bg-dark inline-block px-2 transform rotate-1">
                  {channel.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveChannels;