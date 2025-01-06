import React from 'react';
import { SEOOptimizer } from '../seo/SEOOptimizer';
import { ContentWrapper } from '../layout/ContentWrapper';
import { Breadcrumbs } from '../seo/Breadcrumbs';
import { OptimizedImage } from '../ui/optimized-image';
import { Button } from '../ui/button';
import { Check, Star, Tv, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const BestIPTVProviders: React.FC = () => {
  const seoKeywords = [
    'iptv',
    'best iptv',
    'iptv subscription',
    'iptv services',
    'iptv service',
    'best iptv service',
    'iptv providers',
    'iptv subscribe',
    'iptv provider',
    'best for iptv',
    'iptv usa',
    'service iptv',
    'top rated iptv',
    'itpv online',
    'best iptv services',
    'bestiptv'
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <ContentWrapper as="article" className="prose prose-invert max-w-none">
      <SEOOptimizer
        title="Best IPTV Service Providers Subscriptions 2025 | Complete Guide"
        description="Comprehensive guide to the top IPTV service providers in 2025. Compare features, pricing, and find the perfect streaming solution for your needs. Discover reliable IPTV services with 40,000+ channels."
        canonicalUrl="/best-iptv-service-providers-subscriptions"
        type="article"
        keywords={seoKeywords}
        imageUrl="/best-IPTV-providers.png"
      />
      
      <Breadcrumbs />

      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        {/* Hero Section */}
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

          {/* Featured Image */}
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

        {/* Key Features Section */}
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
            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-black/40 border border-primary/20 hover:border-primary/40 transition-all"
              variants={fadeInUp}
            >
              <Tv className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">40,000+ Channels</h3>
              <p className="text-gray-400">Access to a vast library of international channels and content</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-black/40 border border-primary/20 hover:border-primary/40 transition-all"
              variants={fadeInUp}
            >
              <Star className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">HD Quality</h3>
              <p className="text-gray-400">Crystal clear streaming with 4K and HD support</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-black/40 border border-primary/20 hover:border-primary/40 transition-all"
              variants={fadeInUp}
            >
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Access</h3>
              <p className="text-gray-400">Watch from anywhere with stable servers worldwide</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-black/40 border border-primary/20 hover:border-primary/40 transition-all"
              variants={fadeInUp}
            >
              <Check className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-400">Round-the-clock customer service and technical assistance</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Warning Box */}
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

        {/* Provider Section */}
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
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="text-primary" />
                    <span>110,000+ Live Channels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary" />
                    <span>60,000+ VOD Content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary" />
                    <span>4K & Ultra HD Quality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-primary" />
                    <span>99.9% Uptime Guarantee</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-black/60 p-6 rounded-xl border border-primary/20">
                  <h4 className="text-xl font-bold mb-4">Subscription Plans</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>1 Month</span>
                      <span className="text-primary font-bold">$13.99</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3 Months</span>
                      <span className="text-primary font-bold">$29.99</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>6 Months</span>
                      <span className="text-primary font-bold">$49.99</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>12 Months</span>
                      <span className="text-primary font-bold">$69.99</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Get Started Now
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/40 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-3">What makes a good IPTV service provider?</h3>
                <p className="text-gray-300">A quality IPTV service provider offers stable streaming, extensive channel selection, HD/4K quality, reliable customer support, and competitive pricing.</p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-3">Which devices support IPTV services?</h3>
                <p className="text-gray-300">Most IPTV services are compatible with Android TV boxes, Amazon Fire Stick, Smart TVs, smartphones, tablets, and computers.</p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-3">What internet speed do I need for IPTV?</h3>
                <p className="text-gray-300">For optimal IPTV streaming, we recommend at least 25 Mbps for 4K content and 10 Mbps for HD content.</p>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-primary/20">
                <h3 className="text-xl font-bold mb-3">Are IPTV services legal?</h3>
                <p className="text-gray-300">Legal IPTV services must have proper licensing agreements for content distribution. Always verify the legitimacy of any service before subscribing.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
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
      </div>
    </ContentWrapper>
  );
};

export default BestIPTVProviders;