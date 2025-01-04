import { memo } from 'react';
import { useTranslation } from "react-i18next";
import { BlurImage } from "./ui/blur-image";

interface SportProps {
  sport: {
    title: string;
    image: string;
    translationKey: string;
  };
}

const sports = [
  {
    title: "NBA",
    image: "/lovable-uploads/335b1140-b919-417d-98ac-b31297c89748.png",
    translationKey: "nba"
  },
  {
    title: "Premier League",
    image: "/lovable-uploads/19ad620b-a0e6-47e2-af10-16f9dcad77ac.png",
    translationKey: "premier_league"
  },
  {
    title: "UEFA Champions League",
    image: "/lovable-uploads/df29e2ce-114a-4085-ae32-d6da18f0b141.png",
    translationKey: "champions_league"
  },
  {
    title: "Bundesliga",
    image: "/lovable-uploads/0c8fc151-d705-40c7-96a3-9d65353108b4.png",
    translationKey: "bundesliga"
  },
  {
    title: "La Liga",
    image: "/lovable-uploads/57484adf-5f2f-40c6-86ed-cd6bb50392b4.png",
    translationKey: "la_liga"
  }
];

const SportCard = memo(({ sport }: SportProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="relative group overflow-hidden border-4 border-white shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200">
      <BlurImage
        src={sport.image}
        alt={sport.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold transform -rotate-2">{sport.title}</h3>
        <p className="text-white/80 text-sm mb-4 transform rotate-1">
          {t(`live_sports.sports.${sport.translationKey}`)}
        </p>
        <button className="bg-neon text-dark px-4 py-2 border-4 border-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200 font-black tracking-tight">
          {t("live_sports.watch_live")}
        </button>
      </div>
    </div>
  );
});

SportCard.displayName = 'SportCard';

export const LiveSports = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-dark py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="mb-12 transform -rotate-2">
          <h2 className="text-3xl md:text-4xl font-black text-center brutal-text inline-block bg-neon text-dark px-6 py-3 border-4 border-dark shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {t("live_sports.title")} <span className="text-white bg-dark px-2">Sports</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sports.map((sport) => (
            <SportCard key={sport.title} sport={sport} />
          ))}
        </div>
      </div>
    </div>
  );
};