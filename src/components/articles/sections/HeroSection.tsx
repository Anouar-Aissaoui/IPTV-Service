import React from 'react';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/ui/optimized-image';

export const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div 
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
          Best IPTV Service Providers 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Discover premium IPTV services with 40,000+ channels, HD quality, and unmatched reliability.
        </p>
      </motion.div>

      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <OptimizedImage 
          src="/best-IPTV-providers.png"
          alt="Best IPTV Service Providers Comparison 2025"
          className="w-full rounded-2xl shadow-2xl border-2 border-primary/20"
          priority={true}
        />
      </motion.div>
    </section>
  );
};