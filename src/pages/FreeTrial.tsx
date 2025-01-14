import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import OptimizedHelmet from "@/components/seo/OptimizedHelmet";
import { ContentWrapper } from "@/components/layout/ContentWrapper";
import Navigation from "@/components/navigation/Navigation";
import { SEOContent } from "@/components/SEOContent";
import { trackSEOMetrics } from "@/utils/seoUtils";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Check, Star, Tv, Film, Trophy, Globe, Clock, Shield } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FreeTrial = () => {
  const navigate = useNavigate();

  const trialFeatureData = [
    { name: 'Live Channels', value: 40000 },
    { name: 'Movies & Shows', value: 54000 },
    { name: 'Sports Events', value: 1500 },
    { name: 'Countries', value: 150 },
  ];

  const deviceCompatibility = [
    { device: 'Smart TVs', supported: true },
    { device: 'Android/iOS', supported: true },
    { device: 'Fire TV Stick', supported: true },
    { device: 'MAG Boxes', supported: true },
    { device: 'Formuler', supported: true },
    { device: 'Enigma2', supported: true },
    { device: 'VLC Player', supported: true },
    { device: 'Web Browsers', supported: true },
  ];

  const keywords = [
    'free iptv trial 24 hours',
    'iptv free trial no credit card',
    'best iptv service trial',
    'premium iptv trial',
    'iptv subscription trial',
    'test iptv service',
    'free iptv test',
    'iptv provider trial',
    'instant iptv trial activation',
    'iptv free trial 2024',
    'hd iptv trial',
    '4k iptv trial',
    'sports iptv trial',
    'movies iptv trial'
  ];

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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/R5IYJF3GG635D1', '_blank');
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
        title="IPTV Free Trial 24 Hours Test - Premium IPTV Service 2024"
        description="Get your instant 24-hour free IPTV trial. Access 40,000+ live channels, premium sports, movies & shows in HD quality. No credit card required. Start your IPTV test now!"
        canonicalUrl="https://www.iptvservice.site/iptv-free-trial-24-hours"
        keywords={keywords}
        pageType="product"
      />

      <Navigation onScrollToSection={scrollToSection} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-6 transform -rotate-2">
              Get Your <span className="text-neon">Free IPTV Trial 2025</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 transform rotate-1">
              Experience premium IPTV streaming with our 24-hour free trial - Instant Activation, No Credit Card Required
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-neon text-dark hover:bg-neon/90 text-lg px-8 py-6 font-bold transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 brutal-border brutal-shadow"
            >
              Start Your Free Trial Now
            </Button>
          </div>

          {/* Features Chart */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Premium Content Library</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer>
                <BarChart data={trialFeatureData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#F97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Trial Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="brutal-border brutal-shadow bg-black p-8 transform hover:-rotate-1 transition-transform">
              <h2 className="text-2xl font-bold text-neon mb-4">Premium Trial Features</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Tv className="text-neon" />
                  <span>40,000+ Live Channels</span>
                </li>
                <li className="flex items-center gap-2">
                  <Film className="text-neon" />
                  <span>54,000+ Movies & TV Shows</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-neon" />
                  <span>HD & 4K Quality Content</span>
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="text-neon" />
                  <span>Premium Sports Channels</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="text-neon" />
                  <span>International Channels</span>
                </li>
              </ul>
            </div>

            <div className="brutal-border brutal-shadow bg-black p-8 transform hover:rotate-1 transition-transform">
              <h2 className="text-2xl font-bold text-neon mb-4">Trial Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Clock className="text-neon" />
                  <span>24-Hour Full Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="text-neon" />
                  <span>No Credit Card Required</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-neon" />
                  <span>Instant Account Activation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-neon" />
                  <span>All Features Unlocked</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-neon" />
                  <span>Easy Setup Instructions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Device Compatibility Table */}
          <div className="mb-16 brutal-border brutal-shadow bg-black p-8">
            <h2 className="text-2xl font-bold text-neon mb-6">Device Compatibility</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device Type</TableHead>
                  <TableHead>Supported</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deviceCompatibility.map((item) => (
                  <TableRow key={item.device}>
                    <TableCell>{item.device}</TableCell>
                    <TableCell>
                      {item.supported ? (
                        <Check className="text-green-500" />
                      ) : (
                        <span className="text-red-500">✕</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* SEO Content Section */}
          <article className="prose prose-invert max-w-none mb-16">
            <h2 className="text-2xl font-bold mb-4">Free IPTV Trial 2025 - Test Our Premium Service</h2>
            <p>
              Looking for the best IPTV service with a free trial in 2025? Our 24-hour IPTV trial gives you complete 
              access to premium features, including live sports, movies, and international channels. Experience why 
              we're rated as one of the most reliable <a href="/premium-iptv-service" className="text-neon hover:underline">IPTV providers</a> with instant activation and no credit card required.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">What's Included in Your Free IPTV Trial?</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to <a href="/channels" className="text-neon hover:underline">40,000+ live channels</a> from around the world</li>
              <li>Premium sports packages including PPV events</li>
              <li>54,000+ movies and TV shows on demand</li>
              <li>HD and 4K quality streaming options</li>
              <li>Multi-device compatibility - check our <a href="/iptv-setup-tutorials" className="text-neon hover:underline">setup guides</a></li>
              <li>24/7 technical support</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4">Why Choose Our IPTV Service?</h3>
            <p>
              Our IPTV service stands out with its exceptional streaming quality, vast content library, and reliable performance. 
              Whether you're a sports enthusiast, movie buff, or international content viewer, our platform delivers an unmatched 
              streaming experience. Check our <a href="/pricing" className="text-neon hover:underline">pricing plans</a> after your trial.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">Getting Started with Your Free Trial</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Click the "Start Your Free Trial" button above</li>
              <li>Contact us via WhatsApp for instant activation</li>
              <li>Receive your trial credentials immediately</li>
              <li>Follow our easy setup guides for your preferred device</li>
              <li>Enjoy 24 hours of premium IPTV streaming</li>
            </ol>
          </article>

          {/* Final CTA */}
          <div className="text-center space-y-6">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-neon text-dark hover:bg-neon/90 text-lg px-8 py-6 font-bold transform hover:-translate-y-1 hover:translate-x-1 transition-transform duration-200 brutal-border brutal-shadow"
            >
              Get Your Free Trial Now
            </Button>
            <p className="text-gray-400 text-sm">
              Limited to one trial per customer. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default FreeTrial;