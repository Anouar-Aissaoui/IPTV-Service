import React from 'react';
import { BookOpen } from 'lucide-react';

const TutorialHero = () => {
  return (
    <div className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl brutal-text">
            IPTV Setup Tutorials
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Step-by-step guides to help you get started with your IPTV service on any device.
            Choose your device below to begin.
          </p>
          <div className="mt-8">
            <div className="inline-flex items-center justify-center p-4 brutal-border brutal-shadow bg-primary text-white">
              <BookOpen className="w-6 h-6 mr-2" />
              <span className="font-bold">Get Started</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialHero;