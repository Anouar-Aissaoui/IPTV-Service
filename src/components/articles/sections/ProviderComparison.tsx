import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Provider {
  name: string;
  rating: number;
  features: string[];
  price: string;
}

const providers: Provider[] = [
  {
    name: "IPTVService.site",
    rating: 4.9,
    features: [
      "40,000+ Live Channels",
      "54,000+ VOD Content",
      "4K & Ultra HD Quality",
      "99.9% Uptime",
      "24/7 Support"
    ],
    price: "Starting at $13.99/month"
  },
  // Add more providers as needed
];

export const ProviderComparison = () => {
  return (
    <section className="py-12 bg-black/40">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Top IPTV Providers Comparison</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.name}
              className="bg-black/60 p-6 rounded-xl border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{provider.name}</h3>
              <div className="flex items-center mb-4">
                <span className="text-primary text-lg font-bold">{provider.rating}/5.0</span>
              </div>
              <ul className="space-y-2 mb-4">
                {provider.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-bold mb-4">{provider.price}</p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};