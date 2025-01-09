import React from 'react';
import { Check } from 'lucide-react';

export const IPTVBenefits = () => {
  const benefits = [
    "Access to 40,000+ live channels worldwide",
    "54,000+ movies and TV shows on demand",
    "HD and 4K quality streaming",
    "Multi-device compatibility",
    "24/7 customer support",
    "Affordable subscription plans",
    "No long-term contracts",
    "Regular content updates"
  ];

  return (
    <section className="py-12 px-4 bg-dark relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-8 text-white transform -rotate-1 brutal-text">
          Why Choose Our IPTV Service?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`
                flex items-center space-x-3 p-6 
                bg-dark border-3 border-[#F97316] 
                shadow-[4px_4px_0px_0px_#F97316] 
                hover:shadow-[6px_6px_0px_0px_#F97316] 
                transform hover:-translate-y-1 hover:translate-x-1 
                transition-all duration-200 
                ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}
              `}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-[#F97316] rounded-none flex items-center justify-center transform rotate-3">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 font-bold">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Neo-brutalism decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-[#F97316] transform rotate-12 opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#F97316] transform -rotate-12 opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 border-8 border-[#F97316] rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-5"></div>
    </section>
  );
};