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
              className="relative block group"
            >
              <div className="aspect-square relative rounded-lg transition overflow-hidden cursor-pointer before:absolute before:-inset-px before:bg-gradient-to-b before:from-gray-950 before:to-gray-950/[.4] before:-m-px before:z-[1] before:opacity-0 group-hover:before:opacity-100">
                <picture>
                  <source
                    srcSet={channel.image}
                    type="image/webp"
                    className="absolute h-full w-full object-cover rounded-md"
                  />
                  <img
                    src={channel.image.replace('.webp', '.png')}
                    alt={channel.title}
                    className="absolute h-full w-full object-cover rounded-md"
                    width={300}
                    height={450}
                  />
                </picture>
                
                <div className="hidden group-hover:flex absolute left-1/2 top-1/2 -translate-x-1/2 z-20 -translate-y-1/2 h-16 w-16 items-center justify-center cursor-pointer rounded-full bg-white/50 text-black transition">
                  <Play className="h-8 w-8 translate-x-0.5" />
                </div>
              </div>
              
              <div className="pt-3 text-center">
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