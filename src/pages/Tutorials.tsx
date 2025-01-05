import React, { useState } from 'react';
import { Tv, Smartphone, Monitor, Video, ArrowRight, Grid, List, Play, BookOpen, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { motion } from 'framer-motion';

interface TutorialCard {
  title: string;
  icon: React.ReactNode;
  url: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeToComplete: string;
}

const tutorials: TutorialCard[] = [
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
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              IPTV Setup Tutorials
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Step-by-step guides to help you get started with your IPTV service on any device.
              Choose your device below to begin.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
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
      </div>

      {/* Tutorials Grid/List */}
      <div className="container mx-auto px-4 py-12">
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
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="text-primary p-3 brutal-border brutal-shadow bg-black/50">
                    {tutorial.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{tutorial.timeToComplete}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      tutorial.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      tutorial.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-brutal-lg group-hover:text-primary transition-colors duration-200">
                    {tutorial.title}
                  </h2>
                  <p className="mt-2 text-gray-400 text-sm">
                    {tutorial.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Play className="w-4 h-4" />
                    <span>Start Tutorial</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black/50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 brutal-border brutal-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Easy to Follow</h3>
              <p className="text-gray-400">Step-by-step instructions with clear screenshots and explanations.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 brutal-border brutal-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
              <Play className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Video Guides</h3>
              <p className="text-gray-400">Watch detailed video tutorials for visual learning experience.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 brutal-border brutal-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Regular Updates</h3>
              <p className="text-gray-400">Tutorials are regularly updated to match the latest app versions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;