import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeatureList = React.memo(({ features }: { features: string[] }) => (
  <ul className="space-y-3">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center gap-2">
        <Check className="text-primary" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
));

FeatureList.displayName = 'FeatureList';

const PricingTable = React.memo(() => (
  <div className="bg-black/60 p-6 rounded-xl border border-primary/20">
    <h4 className="text-xl font-bold mb-4">Subscription Plans</h4>
    <div className="space-y-3">
      {[
        { period: "1 Month", price: "$13.99" },
        { period: "3 Months", price: "$29.99" },
        { period: "6 Months", price: "$49.99" },
        { period: "12 Months", price: "$69.99" }
      ].map((plan, index) => (
        <div key={index} className="flex justify-between items-center">
          <span>{plan.period}</span>
          <span className="text-primary font-bold">{plan.price}</span>
        </div>
      ))}
    </div>
  </div>
));

PricingTable.displayName = 'PricingTable';

export const FeaturedProvider = React.memo(() => {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div 
        className="bg-black/40 rounded-3xl p-8 border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured IPTV Provider</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">IPTVService.site</h3>
            <p className="text-gray-300">
              Leading the industry with exceptional streaming quality and extensive content library. Experience premium entertainment with our comprehensive IPTV solution.
            </p>
            <FeatureList features={[
              "110,000+ Live Channels",
              "60,000+ VOD Content",
              "4K & Ultra HD Quality",
              "99.9% Uptime Guarantee"
            ]} />
          </div>
          <div className="space-y-4">
            <PricingTable />
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Get Started Now
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

FeaturedProvider.displayName = 'FeaturedProvider';