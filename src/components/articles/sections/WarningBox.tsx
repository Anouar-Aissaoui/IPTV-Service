import React from 'react';
import { motion } from 'framer-motion';

export const WarningBox = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div 
        className="bg-red-900/20 border border-red-500 p-8 rounded-2xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="text-3xl mr-2">⚠️</span> 
          Important Notice: Read Before Proceeding
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Before exploring any IPTV service, it's crucial to understand that accessing copyrighted content without proper authorization is illegal. We strongly advise against using IPTV services that offer unauthorized streaming of copyrighted material.
          </p>
          <p>
            This article is intended for informational purposes only and does not promote or endorse any illegal activities. It's essential to use IPTV services responsibly and ethically, ensuring that you're subscribed to legitimate providers that have the necessary rights to distribute the content they offer.
          </p>
        </div>
      </motion.div>
    </section>
  );
};