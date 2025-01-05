import React from 'react';
import { Tv, Smartphone, Monitor, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

interface TutorialCard {
  title: string;
  icon: React.ReactNode;
  url: string;
}

const tutorials: TutorialCard[] = [
  {
    title: "How to setup IPTV on Smart TV",
    icon: <Tv className="w-8 h-8" />,
    url: "/tutorials/smart-tv"
  },
  {
    title: "How to setup IPTV on Android/iOS",
    icon: <Smartphone className="w-8 h-8" />,
    url: "/tutorials/mobile"
  },
  {
    title: "How to setup IPTV on MAG",
    icon: <Monitor className="w-8 h-8" />,
    url: "/tutorials/mag"
  },
  {
    title: "How to setup IPTV on Formuler Z8",
    icon: <Monitor className="w-8 h-8" />,
    url: "/tutorials/formuler"
  },
  {
    title: "How to setup IPTV on Fire TV Stick",
    icon: <Video className="w-8 h-8" />,
    url: "/tutorials/fire-tv"
  },
  {
    title: "How to setup IPTV on Enigma2/Vu+",
    icon: <Monitor className="w-8 h-8" />,
    url: "/tutorials/enigma"
  },
  {
    title: "How to setup IPTV on VLC/Windows",
    icon: <Monitor className="w-8 h-8" />,
    url: "/tutorials/vlc-windows"
  }
];

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-background">
      <OptimizedHelmet 
        title="IPTV Setup Tutorials - Step by Step Guides for All Devices"
        description="Learn how to set up IPTV on Smart TV, Android, iOS, MAG, Formuler Z8, Fire TV Stick, Enigma2/Vu+, and VLC/Windows with our detailed tutorials."
        keywords={["IPTV setup", "IPTV tutorial", "Smart TV setup", "Android IPTV", "iOS IPTV", "MAG setup", "Formuler Z8", "Fire TV Stick IPTV", "Enigma2 IPTV", "VLC IPTV"]}
      />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-brutal-4xl text-center mb-12">
          IPTV Setup Tutorials
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <Link
              key={index}
              to={tutorial.url}
              className="group p-6 bg-black brutal-border brutal-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary">
                  {tutorial.icon}
                </div>
                <h2 className="text-brutal-lg flex-1">
                  {tutorial.title}
                </h2>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;