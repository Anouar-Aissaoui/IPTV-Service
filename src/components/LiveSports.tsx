import { memo } from 'react';
import { BlurImage } from "./ui/blur-image";

interface SportProps {
  sport: {
    title: string;
    image: string;
    description: string;
  };
}

const sports = [
  {
    title: "NBA",
    image: "/lovable-uploads/nba-basketball-live-sports-streaming.png",
    description: "Watch live NBA games and playoffs"
  },
  {
    title: "Premier League",
    image: "/lovable-uploads/premier-league-football-live-sports.png",
    description: "Experience the best of English football"
  },
  {
    title: "UEFA Champions League",
    image: "/lovable-uploads/champions-league-soccer-live-stream.png",
    description: "Europe's elite football competition"
  },
  {
    title: "Bundesliga",
    image: "/lovable-uploads/bundesliga-german-football-live.png",
    description: "German football at its finest"
  },
  {
    title: "La Liga",
    image: "/lovable-uploads/la-liga-spanish-football-live.png",
    description: "Spanish football's top division"
  }
];

const SportCard = memo(({ sport }: SportProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-[2/3] border border-neon/20 hover:border-neon/40 transition-colors duration-300">
      <BlurImage
        src={sport.image}
        alt={`Watch ${sport.title} live streaming - Premium IPTV Sports`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-bold mb-2">{sport.title}</h3>
        <p className="text-white/80 text-sm mb-4">{sport.description}</p>
        <button className="bg-neon text-white px-4 py-2 rounded-md hover:bg-neon/80 transition-colors duration-300">
          Watch Live
        </button>
      </div>
    </div>
  );
});

SportCard.displayName = 'SportCard';

export const LiveSports = () => {
  return (
    <div className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Live <span className="text-neon">Sports</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sports.map((sport) => (
            <SportCard key={sport.title} sport={sport} />
          ))}
        </div>
      </div>
    </div>
  );
};