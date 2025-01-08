import React, { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { seoKeywords } from './seo/Keywords';

export const SEOContent: React.FC = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    const trackKeywords = async () => {
      const currentPath = window.location.pathname;
      
      const keywordData = seoKeywords.map(keyword => ({
        keyword,
        page_path: currentPath,
        impressions: 1,
        last_updated: new Date().toISOString()
      }));

      try {
        const { error } = await supabase
          .from('keyword_performance')
          .upsert(keywordData, {
            onConflict: 'keyword,page_path',
            ignoreDuplicates: true
          });
            
        if (error) {
          console.error('Error tracking keywords:', error);
          toast({
            title: "Error tracking SEO performance",
            description: "Will retry automatically. Some metrics may be delayed.",
            variant: "destructive",
          });

          setTimeout(async () => {
            const { error: retryError } = await supabase
              .from('keyword_performance')
              .upsert(keywordData, {
                onConflict: 'keyword,page_path',
                ignoreDuplicates: true
              });

            if (retryError) {
              console.error('Error in retry attempt:', retryError);
            }
          }, 1000);
        }
      } catch (err) {
        console.error('Error in keyword tracking:', err);
      }
    };

    void trackKeywords();
  }, [toast]);

  return (
    <div className="prose prose-invert max-w-none">
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-6">
          Best IPTV Subscription 2025 | Buy IPTV Services in USA, UK & Worldwide
        </h1>
        <p className="mb-4 text-lg">
          Get the best IPTV subscription! Enjoy 24K+ channels, affordable plans, and reliable service in USA, UK & worldwide. 
          Subscribe to top IPTV providers now with our premium service. Access over 40,000 live channels and 54,000+ VOD content 
          in stunning HD and 4K quality. As a leading IPTV provider, we deliver comprehensive coverage of sports,
          movies, TV shows, news, and international programming from around the globe.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Our IPTV Service?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Best IPTV service with 40,000+ live channels</li>
              <li>Premium IPTV subscriptions at competitive prices</li>
              <li>High-quality IPTV streaming service</li>
              <li>Reliable IPTV providers with 24/7 support</li>
              <li>Easy IPTV setup on all devices</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">IPTV Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>HD & 4K quality streaming</li>
              <li>Global channel coverage</li>
              <li>Premium sports packages</li>
              <li>Extensive movie library</li>
              <li>Multi-device compatibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Buy IPTV Subscription Today</h2>
        <p className="mb-4">
          Ready to subscribe to the best IPTV service? Our IPTV suppliers provide top-quality streaming solutions for all your entertainment needs.
          Whether you're looking to buy IPTV services for sports, movies, or international channels, we've got you covered with our comprehensive
          IPTV sub packages.
        </p>
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Premium IPTV Services Include:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>24/7 Customer Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>99.9% Uptime Guarantee</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>Regular Content Updates</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">✓</span>
              <span>Anti-Buffer Technology</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};