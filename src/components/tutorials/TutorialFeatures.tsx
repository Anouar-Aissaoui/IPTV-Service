import React from 'react';
import { BookOpen, Play, CheckCircle } from 'lucide-react';

const TutorialFeatures = () => {
  return (
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
  );
};

export default TutorialFeatures;