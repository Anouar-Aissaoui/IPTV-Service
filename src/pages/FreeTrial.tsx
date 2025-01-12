import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import OptimizedHelmet from "@/components/seo/OptimizedHelmet";
import { ContentWrapper } from "@/components/layout/ContentWrapper";
import { Navigation } from "@/components/navigation/Navigation";

const FreeTrial = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/message/R5IYJF3GG635D1', '_blank');
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
        title="Get Your Free IPTV Trial | 24-Hour Test Account"
        description="Try our premium IPTV service free for 24 hours. Experience 40,000+ channels, HD quality, and excellent support. No credit card required."
        canonicalUrl="https://www.iptvservice.site/free-trial"
        pageType="product"
      />

      <Navigation onScrollToSection={scrollToSection} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-6 transform -rotate-2">
              Get Your <span className="text-neon">Free IPTV Trial</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 transform rotate-1">
              Experience our premium IPTV service free for 24 hours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="brutal-border brutal-shadow bg-black p-8 transform hover:-rotate-1 transition-transform">
              <h2 className="text-2xl font-bold text-neon mb-4">What You Get</h2>
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
                  <span>HD & 4K Quality</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>All Devices Supported</span>
                </li>
              </ul>
            </div>

            <div className="brutal-border brutal-shadow bg-black p-8 transform hover:rotate-1 transition-transform">
              <h2 className="text-2xl font-bold text-neon mb-4">Trial Details</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>24-Hour Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>No Credit Card Required</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>Full Features Unlocked</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>Instant Activation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-neon">→</span>
                  <span>Easy Setup Guide</span>
                </li>
              </ul>
            </div>
          </div>

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

          <div className="mt-16 brutal-border brutal-shadow bg-black p-8">
            <h2 className="text-2xl font-bold text-neon mb-6">Why Choose Our IPTV Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Premium Content</h3>
                <p className="text-gray-300">
                  Access to premium channels from around the world, including sports, movies, news, and entertainment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">High Quality</h3>
                <p className="text-gray-300">
                  Experience crystal clear HD and 4K streaming with minimal buffering.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Device Compatibility</h3>
                <p className="text-gray-300">
                  Works on all devices including Smart TVs, phones, tablets, and computers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Our dedicated support team is always ready to help you with any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default FreeTrial;