import { Card, CardContent } from "@/components/ui/card";
import { BlurImage } from "@/components/ui/blur-image";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export const LiveSports = () => {
  const sportsCategories = [
    {
      title: "NBA Basketball",
      image: "/lovable-uploads/e42bc7e4-0dcb-41f1-9ca9-d15845625a95.png",
      description: "Watch live NBA games and highlights",
      hash: "LKF5?U~qM{%M-;%MRjRj%MM{RjWB"
    },
    {
      title: "Premier League",
      image: "/lovable-uploads/9cfc62bb-80b9-43dd-978e-0698357ebd6b.png",
      description: "Live Premier League matches and analysis",
      hash: "L8B:OY~qxu%M?bRjRjRj%MM{M{WB"
    },
    {
      title: "UEFA Champions League",
      image: "/lovable-uploads/0ac2502c-b1d9-4c43-a623-d317f7786a36.png",
      description: "Experience Champions League excitement",
      hash: "L37BRi~qIU%M?bRjRjRj%MM{M{WB"
    },
    {
      title: "Bundesliga",
      image: "/lovable-uploads/267408a1-cc21-4bc4-a038-2e30c9366a46.png",
      description: "German football at its finest",
      hash: "L47BRi~qIU%M?bRjRjRj%MM{M{WB"
    },
    {
      title: "NBA Playoffs",
      image: "/lovable-uploads/ae5cea79-07c6-46e4-bf42-07ee0ced840b.png",
      description: "Playoff intensity and drama",
      hash: "L57BRi~qIU%M?bRjRjRj%MM{M{WB"
    },
    {
      title: "La Liga",
      image: "/lovable-uploads/dae0dc57-c298-41f3-a4cd-93e10b537711.png",
      description: "Spanish football excellence",
      hash: "L67BRi~qIU%M?bRjRjRj%MM{M{WB"
    },
    {
      title: "Formula 1",
      image: "/lovable-uploads/cf1e3a11-1d7a-413f-bb4c-d218c2b35317.png",
      description: "High-speed racing action",
      hash: "L77BRi~qIU%M?bRjRjRj%MM{M{WB"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-dark-gray to-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live Sports Coverage
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the thrill of live sports with our comprehensive coverage of major leagues and events worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sportsCategories.map((category, index) => (
            <Card key={index} className="bg-dark-gray border-none overflow-hidden group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0 relative">
                <div className="aspect-video relative">
                  <BlurImage
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full"
                    hash={category.hash}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{category.description}</p>
                  <Button 
                    className="bg-[#F97316] hover:bg-[#F97316]/90 text-white gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Watch Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};