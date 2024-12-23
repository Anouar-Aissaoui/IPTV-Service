import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { BlurImage } from "@/components/ui/blur-image";
import { Tv, TvMinimal, Wifi, Signal, Play } from "lucide-react";
import { Link } from "react-router-dom";

const BestIPTVProvider = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your_number_here', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Best IPTV Provider | Premium IPTV Service with 40,000+ Channels</title>
        <meta name="description" content="Get the best IPTV service with 40,000+ channels and 54,000+ VOD content. Premium quality, reliable streaming, and 24/7 support. Start your free trial today!" />
      </Helmet>

      <div className="min-h-screen bg-dark">
        {/* Navigation */}
        <nav className="bg-dark-gray border-b border-[#F97316]/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-xl font-bold text-white hover:text-[#F97316] transition-colors">
                IPTV Subscription
              </Link>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#F97316] text-white hover:bg-[#F97316]/90"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Best <span className="text-[#F97316]">IPTV Provider</span> for Premium Entertainment
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Experience unlimited entertainment with our premium IPTV service featuring 40,000+ channels and 54,000+ VOD content
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-dark-gray p-6 rounded-xl border border-[#F97316]/20 hover:border-[#F97316] transition-colors">
              <Tv className="w-12 h-12 text-[#F97316] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">40,000+ Live Channels</h3>
              <p className="text-gray-400">Access to premium channels from around the world</p>
            </div>
            <div className="bg-dark-gray p-6 rounded-xl border border-[#F97316]/20 hover:border-[#F97316] transition-colors">
              <Play className="w-12 h-12 text-[#F97316] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">54,000+ VOD Content</h3>
              <p className="text-gray-400">Extensive library of movies and TV shows</p>
            </div>
            <div className="bg-dark-gray p-6 rounded-xl border border-[#F97316]/20 hover:border-[#F97316] transition-colors">
              <Signal className="w-12 h-12 text-[#F97316] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">4K Quality</h3>
              <p className="text-gray-400">Crystal clear streaming quality</p>
            </div>
            <div className="bg-dark-gray p-6 rounded-xl border border-[#F97316]/20 hover:border-[#F97316] transition-colors">
              <Wifi className="w-12 h-12 text-[#F97316] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Multi-device Support</h3>
              <p className="text-gray-400">Watch on any device, anywhere</p>
            </div>
          </div>

          {/* Preview Image */}
          <div className="mt-16 relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-[#F97316]/30 rounded-lg blur-lg"></div>
            <BlurImage
              src="/iptv-subscription.png"
              alt="IPTV Service Preview"
              className="relative rounded-lg shadow-2xl w-full h-auto"
              width={1200}
              height={675}
            />
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Start Your Entertainment Journey Today
              </h2>
              <p className="text-gray-300 mb-8">
                Join thousands of satisfied customers enjoying premium entertainment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-[#F97316] text-white hover:bg-[#F97316]/90 text-lg px-8 py-6 font-bold"
                >
                  Start Free Trial
                </Button>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-dark border-2 border-[#F97316] text-white hover:bg-[#F97316] hover:text-white text-lg px-8 py-6 font-bold"
                >
                  Contact on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Background Effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]"></div>
        </div>
      </div>
    </>
  );
};

export default BestIPTVProvider;