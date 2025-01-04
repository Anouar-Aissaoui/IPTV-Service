import React from "react";
import { Play } from "lucide-react";

const channels = [
  {
    title: "ESPNU",
    image: "/channels/espnu.webp",
    link: "#",
  },
  {
    title: "ESPN",
    image: "/channels/espn.webp",
    link: "#",
  },
  {
    title: "NBA TV",
    image: "/channels/nba-tv.webp",
    link: "#",
  },
  {
    title: "NFL Network",
    image: "/channels/nfl-network.webp",
    link: "#",
  },
  {
    title: "HBO 2 East",
    image: "/channels/hbo-2.webp",
    link: "#",
  },
  {
    title: "HBO East",
    image: "/channels/hbo.webp",
    link: "#",
  },
  {
    title: "Fox Sports 1",
    image: "/channels/fox-sports-1.webp",
    link: "#",
  },
  {
    title: "National Geographic",
    image: "/channels/nat-geo.webp",
    link: "#",
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
              className="relative block group brutal-hover"
            >
              <div className="aspect-square relative rounded-none overflow-hidden cursor-pointer brutal-border brutal-shadow bg-white">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <img
                  src={channel.image}
                  alt={channel.title}
                  className="absolute h-full w-full object-cover"
                  width={300}
                  height={450}
                />
                
                <div className="hidden group-hover:flex absolute left-1/2 top-1/2 -translate-x-1/2 z-20 -translate-y-1/2 h-16 w-16 items-center justify-center cursor-pointer rounded-full bg-white/80 text-black transition-all duration-300 brutal-border">
                  <Play className="h-8 w-8 translate-x-0.5" />
                </div>
              </div>
              
              <div className="pt-3 text-center">
                <h3 className="text-base tracking-tight font-bold text-white brutal-text transform -rotate-1">
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