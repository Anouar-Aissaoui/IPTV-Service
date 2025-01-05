import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

interface TutorialCardProps {
  tutorial: {
    title: string;
    icon: React.ReactNode;
    url: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    timeToComplete: string;
  };
}

const TutorialCard = ({ tutorial }: TutorialCardProps) => {
  return (
    <Link
      to={tutorial.url}
      className="group bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
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
          <h2 className="text-brutal-lg text-white group-hover:text-primary transition-colors duration-200">
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
  );
};

export default TutorialCard;