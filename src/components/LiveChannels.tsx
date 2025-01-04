import React from "react";
import { Play } from "lucide-react";

const channels = [
  {
    title: "ESPNU",
    image: "https://www.popcornmovies.to/uploads/poster/APkbKRIvMh.webp",
    link: "https://www.popcornmovies.to/live-broadcast/espnu",
  },
  {
    title: "ESPN",
    image: "https://www.popcornmovies.to/uploads/poster/mO23pg6gzk.webp",
    link: "https://www.popcornmovies.to/live-broadcast/espn",
  },
  {
    title: "NBA TV",
    image: "https://www.popcornmovies.to/uploads/poster/iHhVGaE80u.webp",
    link: "https://www.popcornmovies.to/live-broadcast/nba-tv",
  },
  {
    title: "NFL Network",
    image: "https://www.popcornmovies.to/uploads/poster/A8wOWJX0My.webp",
    link: "https://www.popcornmovies.to/live-broadcast/nfl-network",
  },
  {
    title: "HBO 2 East",
    image: "https://www.popcornmovies.to/uploads/poster/6vf1aSr7gt.webp",
    link: "https://www.popcornmovies.to/live-broadcast/hbo-2-east",
  },
  {
    title: "HBO East",
    image: "https://www.popcornmovies.to/uploads/poster/G67HiKK1Nf.webp",
    link: "https://www.popcornmovies.to/live-broadcast/hbo-east",
  },
  {
    title: "Fox Sports 1",
    image: "https://www.popcornmovies.to/uploads/poster/AyLTRoIo55.webp",
    link: "https://www.popcornmovies.to/live-broadcast/fox-sports-1",
  },
  {
    title: "National Geographic",
    image: "https://www.popcornmovies.to/uploads/poster/mHrOgAZU75.webp",
    link: "https://www.popcornmovies.to/live-broadcast/national-geographic",
  },
];

const LiveChannels = () => {
  return (
    <section className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative brutal-container">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-neon text-dark px-6 py-3 brutal-border brutal-shadow">
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
            >
              <div className="aspect-square relative rounded-none transition overflow-hidden cursor-pointer brutal-border brutal-shadow">
                <picture>
                  <source
                    srcSet={channel.image}
                    type="image/webp"
                    className="absolute h-full w-full object-cover"
                  />
                  <img
                    src={channel.image.replace('.webp', '.jpg')}
                    alt={channel.title}
                    className="absolute h-full w-full object-cover"
                    width={300}
                    height={450}
                  />
                </picture>
                
                <div className="hidden group-hover:flex absolute left-1/2 top-1/2 -translate-x-1/2 z-20 -translate-y-1/2 h-16 w-16 items-center justify-center cursor-pointer bg-neon brutal-border">
                  <Play className="h-6 w-6 translate-x-0.5 text-dark" />
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