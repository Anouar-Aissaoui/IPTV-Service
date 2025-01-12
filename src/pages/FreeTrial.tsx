import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import OptimizedHelmet from "@/components/seo/OptimizedHelmet";
import { ContentWrapper } from "@/components/layout/ContentWrapper";
import { Navigation } from "@/components/navigation/Navigation";
import { SEOContent } from "@/components/SEOContent";
import { trackSEOMetrics } from "@/utils/seoUtils";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const FreeTrial = () => {
  const navigate = useNavigate();

  // Fetch SEO data from Supabase
  const { data: seoData } = useQuery({
    queryKey: ['seo-metrics', '/iptv-free-trial-24-hours'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('seo_metrics')
        .select('*')
        .eq('route', '/iptv-free-trial-24-hours')
        .single();

      if (error) {
        console.error('Error fetching SEO metrics:', error);
        return null;
      }

      return data;
    }
  });

  const keywords = [
    'iptv free trial',
    'iptv free trial reddit 2025',
    'iptv free trials',
    'free iptv trial',
    'free trial iptv',
    'iptv free trial 2025',
    'iptv with free trial',
    'free iptv trials',
    'free trial iptv service',
    'instant free iptv trial',
    'iptv service with free trial',
    'iptv service free trial',
    'best iptv free trials',
    'free trial of iptv'
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/R5IYJF3GG635D1', '_blank');
    // Track conversion
    trackSEOMetrics({
      title: "IPTV Free Trial 24 Hours Test - Premium IPTV Service",
      description: "Get your 24-hour free IPTV trial. Test 40,000+ channels, HD quality, instant activation. No credit card required. Try premium IPTV service now!",
      keywords: keywords,
      pageType: 'product'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ContentWrapper as="main" className="min-h-screen bg-dark text-white">
      <OptimizedHelmet
        title="IPTV Free Trial 24 Hours Test - Premium IPTV Service 2025"
        description="Get your instant 24-hour free IPTV trial. Access 40,000+ live channels, premium sports, movies & shows in HD quality. No credit card required. Start your IPTV test now!"
        canonicalUrl="https://www.iptvservice.site/iptv-free-trial-24-hours"
        keywords={keywords}
        pageType="product"
      />

      <Navigation onScrollToSection={scrollToSection} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-6 transform -rotate-2">
              Get Your <span className="text-neon">Free IPTV Trial 2025</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 transform rotate-1">
              Experience our premium IPTV service free for 24 hours - Instant Activation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="brutal-border brutal-shadow bg-black p-8 transform hover:-rotate-1 transition-transform">
              <h2 className="text-2xl font-bold text-neon mb-4">Premium Trial Features</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>40,000+ Live Channels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>54,000+ Movies & TV Shows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>HD & 4K Quality Content</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>Premium Sports Channels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>24/7 Expert Support</span>
                </li>
              </ul>
            </div>

            <div className="brutal-border brutal-shadow bg-black p-8 transform hover:rotate-1 transition-transform">
              <h2 className="text-2xl font-bold text-neon mb-4">Trial Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>24-Hour Full Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>No Credit Card Required</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>Instant Account Activation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>All Features Unlocked</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>Easy Setup Instructions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center space-y-6">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-neon text-dark hover:bg-neon/90 text-lg px-8 py-6 font-bold transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 brutal-border brutal-shadow"
            >
              Start Your Free Trial Now
            </Button>
            <p className="text-gray-400 text-sm">
              Limited to one trial per customer. No credit card required.
            </p>
          </div>

          <div className="mt-16 brutal-border brutal-shadow bg-black p-8">
            <h2 className="text-2xl font-bold text-neon mb-6">Why Choose Our IPTV Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Premium Content</h3>
                <p className="text-gray-300">
                  Access premium channels worldwide, including exclusive sports events, latest movies, and entertainment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Superior Quality</h3>
                <p className="text-gray-300">
                  Experience crystal clear HD and 4K streaming with minimal buffering on all devices.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Universal Compatibility</h3>
                <p className="text-gray-300">
                  Works seamlessly on Smart TVs, phones, tablets, and computers with easy setup.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Our dedicated support team is always ready to assist you with any questions.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Content Section */}
          <article className="mt-16 prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4">Free IPTV Trial 2025 - Test Our Premium Service</h2>
            <p>
              Looking for the best IPTV service with a free trial in 2025? Our 24-hour IPTV trial gives you complete 
              access to premium features, including live sports, movies, and international channels. Experience why 
              we're rated as one of the most reliable IPTV providers with instant activation and no credit card required.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">What's Included in Your Free IPTV Trial?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to 40,000+ live channels from around the world</li>
              <li>Premium sports packages including PPV events</li>
              <li>54,000+ movies and TV shows on demand</li>
              <li>HD and 4K quality streaming options</li>
              <li>Multi-device compatibility</li>
              <li>24/7 technical support</li>
            </ul>
          </article>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default FreeTrial;