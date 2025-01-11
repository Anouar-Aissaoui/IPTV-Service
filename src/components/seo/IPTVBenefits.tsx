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
    <section className="py-8 px-4 bg-dark">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">Why Choose Our IPTV Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-neon" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};