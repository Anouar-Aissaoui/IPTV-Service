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
    <section className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 brutal-text">
          Live <span className="text-neon">Channels</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-4 md:gap-6">
          {channels.map((channel) => (
            <a
              key={channel.title}
              href={channel.link}
              className="relative block group"
              data-abc="true"
            >
              <div className="aspect-square relative rounded-lg transition overflow-hidden cursor-pointer before:absolute before:-inset-px before:bg-gradient-to-b before:from-gray-950 before:to-gray-950/[.4] before:-m-px before:z-[1] before:opacity-0 group-hover:before:opacity-100">
                <picture>
                  <source
                    srcSet={channel.image}
                    type="image/webp"
                    className="absolute h-full w-full object-cover rounded-md"
                  />
                  <img
                    src={channel.image.replace('.webp', '.jpg')}
                    alt={channel.title}
                    className="absolute h-full w-full object-cover rounded-md"
                    width={300}
                    height={450}
                  />
                </picture>
                
                <div className="hidden group-hover:flex absolute left-1/2 top-1/2 -translate-x-1/2 z-20 -translate-y-1/2 h-16 w-16 items-center justify-center cursor-pointer rounded-full bg-white/50 text-white transition">
                  <Play className="h-6 w-6 translate-x-0.5" />
                </div>
              </div>
              
              <div className="pt-3 transition text-center">
                <h3 className="text-base tracking-tighter font-medium text-white line-clamp-1">
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