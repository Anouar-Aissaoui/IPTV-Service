import React, { useState } from 'react';
import { Tv, Smartphone, Monitor, Video } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import TutorialHero from '@/components/tutorials/TutorialHero';
import TutorialCard from '@/components/tutorials/TutorialCard';
import TutorialFeatures from '@/components/tutorials/TutorialFeatures';

const tutorials = [
  {
    title: "Smart TV Setup Guide",
    icon: <Tv className="w-8 h-8" />,
    url: "/tutorials/smart-tv",
    description: "Complete guide to set up IPTV on your Smart TV with step-by-step instructions.",
    difficulty: "Beginner",
    timeToComplete: "5 mins"
  },
  {
    title: "Mobile Device Setup",
    icon: <Smartphone className="w-8 h-8" />,
    url: "/tutorials/mobile",
    description: "Learn how to watch IPTV on your Android or iOS device.",
    difficulty: "Beginner",
    timeToComplete: "3 mins"
  },
  {
    title: "MAG Box Configuration",
    icon: <Monitor className="w-8 h-8" />,
    url: "/tutorials/mag",
    description: "Detailed MAG box setup instructions for optimal viewing experience.",
    difficulty: "Intermediate",
    timeToComplete: "10 mins"
  },
  {
    title: "Formuler Z8 Setup",
    icon: <Monitor className="w-8 h-8" />,
    url: "/tutorials/formuler",
    description: "Configure your Formuler Z8 box for the best IPTV experience.",
    difficulty: "Intermediate",
    timeToComplete: "8 mins"
  },
  {
    title: "Fire TV Installation",
    icon: <Video className="w-8 h-8" />,
    url: "/tutorials/fire-tv",
    description: "Set up IPTV on your Amazon Fire TV Stick quickly and easily.",
    difficulty: "Beginner",
    timeToComplete: "5 mins"
  },
  {
    title: "Enigma2/Vu+ Guide",
    icon: <Monitor className="w-8 h-8" />,
    url: "/tutorials/enigma",
    description: "Complete setup guide for Enigma2 and Vu+ receivers.",
    difficulty: "Advanced",
    timeToComplete: "15 mins"
  },
  {
    title: "VLC/Windows Setup",
    icon: <Monitor className="w-8 h-8" />,
    url: "/tutorials/vlc-windows",
    description: "Watch IPTV on your Windows PC using VLC media player.",
    difficulty: "Beginner",
    timeToComplete: "5 mins"
  }
] as const;

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="IPTV Setup Tutorials - Step by Step Guides for All Devices"
        description="Learn how to set up IPTV on Smart TV, Android, iOS, MAG, Formuler Z8, Fire TV Stick, Enigma2/Vu+, and VLC/Windows with our detailed tutorials."
        keywords={["IPTV setup", "IPTV tutorial", "Smart TV setup", "Android IPTV", "iOS IPTV", "MAG setup", "Formuler Z8", "Fire TV Stick IPTV", "Enigma2 IPTV", "VLC IPTV"]}
      />
      
      <TutorialHero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <TutorialCard key={index} tutorial={tutorial} />
          ))}
        </div>
      </div>

      <TutorialFeatures />
    </div>
  );
};

export default Tutorials;