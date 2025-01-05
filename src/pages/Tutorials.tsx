import React, { useState } from 'react';
import { Tv, Smartphone, Monitor, Video, ArrowRight, Grid, List } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    navigate(`/${section}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="IPTV Setup Tutorials - Step by Step Guides for All Devices"
        description="Learn how to set up IPTV on Smart TV, Android, iOS, MAG, Formuler Z8, Fire TV Stick, Enigma2/Vu+, and VLC/Windows with our detailed tutorials."
        keywords={["IPTV setup", "IPTV tutorial", "Smart TV setup", "Android IPTV", "iOS IPTV", "MAG setup", "Formuler Z8", "Fire TV Stick IPTV", "Enigma2 IPTV", "VLC IPTV"]}
      />
      
      {/* Navigation Menu */}
      <div className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-sm border-b-2 border-[#F97316] mb-8">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {[
              { title: 'Home', path: '' },
              { title: 'Pricing', path: 'pricing' },
              { title: 'Channel List', path: 'channels' },
              { title: 'Tutorials', path: 'tutorials' },
              { title: 'FAQ', path: 'faq' }
            ].map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavigation(item.path)}
                className="text-white hover:text-[#F97316] transition-all duration-300 text-sm md:text-base font-black brutal-border px-2 py-1 md:px-4 md:py-2 hover:bg-[#F97316] hover:text-white transform hover:-translate-y-1 hover:translate-x-1 brutal-shadow"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="relative z-10 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl -z-10" />
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-brutal-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-4">
                IPTV Setup Tutorials
              </h1>
              <p className="text-gray-400 max-w-2xl">
                Step-by-step guides to help you set up IPTV on any device. Choose your device below to get started.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewType('grid')}
                className={`p-2 brutal-border brutal-shadow transition-all duration-200 ${
                  viewType === 'grid' ? 'bg-primary text-white' : 'hover:bg-primary/10'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewType('list')}
                className={`p-2 brutal-border brutal-shadow transition-all duration-200 ${
                  viewType === 'list' ? 'bg-primary text-white' : 'hover:bg-primary/10'
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className={`${
          viewType === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-4'
        }`}>
          {tutorials.map((tutorial, index) => (
            <Link
              key={index}
              to={tutorial.url}
              className={`group bg-black/50 backdrop-blur-sm brutal-border brutal-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200 ${
                viewType === 'grid' ? 'p-8' : 'p-6'
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="text-primary p-3 brutal-border brutal-shadow bg-black/50">
                  {tutorial.icon}
                </div>
                <h2 className="text-brutal-lg flex-1 group-hover:text-primary transition-colors duration-200">
                  {tutorial.title}
                </h2>
                <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorials;