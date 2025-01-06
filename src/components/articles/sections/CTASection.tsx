import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Streaming?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the right IPTV service provider and unlock a world of entertainment today.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
          Explore Plans
        </Button>
      </motion.div>
    </section>
  );
};