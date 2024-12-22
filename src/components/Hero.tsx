import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Tablet, Laptop } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-dark py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              Best IPTV Service at an{" "}
              <span className="text-neon">Affordable Price</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Enjoy unlimited access to live TV channels, movies, and sports events
              from around the world at unbeatable prices.
            </p>
            <Button className="bg-neon text-dark hover:bg-neon/90 text-lg px-8 py-6">
              Get Started
            </Button>
            <div className="flex gap-6 pt-4">
              <Monitor className="w-8 h-8 text-gray-400" />
              <Laptop className="w-8 h-8 text-gray-400" />
              <Smartphone className="w-8 h-8 text-gray-400" />
              <Tablet className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/lovable-uploads/74cadd1d-7f11-4677-9cfc-3342545d312f.png"
              alt="IPTV Service Preview"
              className="rounded-lg shadow-2xl animate-float w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};