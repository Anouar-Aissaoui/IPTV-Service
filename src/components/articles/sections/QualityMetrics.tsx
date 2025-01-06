import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { label: "Stream Quality", value: "4K Ultra HD" },
  { label: "Uptime", value: "99.9%" },
  { label: "Channel Count", value: "40,000+" },
  { label: "VOD Content", value: "54,000+" }
];

export const QualityMetrics = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-black to-black/80">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center p-6 bg-black/40 rounded-xl border border-primary/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold text-primary mb-2">{metric.label}</h3>
              <p className="text-2xl font-bold">{metric.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};