import React from 'react';
import { motion } from 'framer-motion';
import { Tv, Star, Globe, Check } from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: "40,000+ Channels",
    description: "Access to a vast library of international channels and content"
  },
  {
    icon: Star,
    title: "HD Quality",
    description: "Crystal clear streaming with 4K and HD support"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Watch from anywhere with stable servers worldwide"
  },
  {
    icon: Check,
    title: "24/7 Support",
    description: "Round-the-clock customer service and technical assistance"
  }
];

export const KeyFeatures = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="container mx-auto px-4 py-16 bg-black/40 backdrop-blur-sm rounded-3xl my-8">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-black/40 border border-primary/20 hover:border-primary/40 transition-all"
            variants={fadeInUp}
          >
            <feature.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};