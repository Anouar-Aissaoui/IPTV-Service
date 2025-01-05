import React from 'react';
import { BookOpen } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import TutorialHero from '@/components/tutorials/TutorialHero';
import TutorialCard from '@/components/tutorials/TutorialCard';
import TutorialFeatures from '@/components/tutorials/TutorialFeatures';
import { Navigation } from '@/components/navigation/Navigation';

const tutorials = [
  {
    title: "Smart TV Setup Guide",
    icon: <BookOpen className="w-8 h-8" />,
    url: "/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv",
    description: "Complete guide to set up IPTV on your Smart TV with step-by-step instructions.",
    difficulty: "Beginner",
    timeToComplete: "5 mins"
  },
  {
    title: "Mobile Device Setup",
    icon: <BookOpen className="w-8 h-8" />,
    url: "/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices",
    description: "Learn how to watch IPTV on your Android or iOS device.",
    difficulty: "Beginner",
    timeToComplete: "3 mins"
  },
  {
    title: "MAG Box Configuration",
    icon: <BookOpen className="w-8 h-8" />,
    url: "/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box",
    description: "Detailed MAG box setup instructions for optimal viewing experience.",
    difficulty: "Intermediate",
    timeToComplete: "10 mins"
  },
  {
    title: "Formuler Z8 Setup",
    icon: <BookOpen className="w-8 h-8" />,
    url: "/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8",
    description: "Configure your Formuler Z8 box for the best IPTV experience.",
    difficulty: "Intermediate",
    timeToComplete: "8 mins"
  },
  {
    title: "Fire TV Installation",
    icon: <BookOpen className="w-8 h-8" />,
    url: "/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick",
    description: "Set up IPTV on your Amazon Fire TV Stick quickly and easily.",
    difficulty: "Beginner",
    timeToComplete: "5 mins"
  },
  {
    title: "Enigma2/Vu+ Guide",
    icon: <BookOpen className="w-8 h-8" />,
    url: "/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2",
    description: "Complete setup guide for Enigma2 and Vu+ receivers.",
    difficulty: "Advanced",
    timeToComplete: "15 mins"
  },
  {
    title: "VLC/Windows Setup",
    icon: <BookOpen className="w-8 h-8" />,
    url: "/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows",
    description: "Watch IPTV on your Windows PC using VLC media player.",
    difficulty: "Beginner",
    timeToComplete: "5 mins"
  }
] as const;

const Tutorials = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="IPTV Setup Tutorials - Step by Step Guides for All Devices"
        description="Learn how to set up IPTV on Smart TV, Android, iOS, MAG, Formuler Z8, Fire TV Stick, Enigma2/Vu+, and VLC/Windows with our detailed tutorials."
        keywords={["IPTV setup", "IPTV tutorial", "Smart TV setup", "Android IPTV", "iOS IPTV", "MAG setup", "Formuler Z8", "Fire TV Stick IPTV", "Enigma2 IPTV", "VLC IPTV"]}
      />
      
      <Navigation onScrollToSection={scrollToSection} />
      
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