import React from "react";
import { Helmet } from "react-helmet";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const providers = [
  { name: "IPTV Service", url: "https://www.iptvservice.site/" },
  { name: "DigitaLizard IPTV", url: "#" },
  { name: "Xtream View", url: "#" },
  { name: "TyphoonLabs TV", url: "#" },
  { name: "FreeGoTV", url: "#" },
  { name: "XCodes IPTV", url: "#" },
  { name: "USA LIVE IPTV", url: "#" },
  { name: "ULTRA PREMIUM IPTV", url: "#" },
];

const BestIPTVProvider = () => {
  return (
    <>
      <Helmet>
        <title>Best IPTV Provider | Premium IPTV Services Comparison 2024</title>
        <meta 
          name="description" 
          content="Compare the best IPTV providers of 2024. Find reliable IPTV subscriptions with 40,000+ channels, HD quality, and 24/7 support. Start your entertainment journey today!" 
        />
        <meta 
          name="keywords" 
          content="buy IPTV, IPTV service, best IPTV service, IPTV subscription, premium IPTV providers" 
        />
      </Helmet>

      <div className="min-h-screen bg-dark-gray py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Best <span className="text-neon">IPTV Providers</span> of 2024
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Compare top-rated IPTV services and find the perfect subscription for your entertainment needs
            </p>
          </div>

          {/* Providers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {providers.map((provider, index) => (
              <Card 
                key={index}
                className="group relative bg-dark border border-neon/20 hover:border-neon/40 transition-all duration-300"
              >
                <a 
                  href={provider.url}
                  className="block aspect-square p-6 flex flex-col items-center justify-center"
                  rel="dofollow"
                >
                  <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center mb-4 group-hover:bg-neon/20 transition-colors">
                    <Plus className="w-6 h-6 text-neon" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center">
                    {provider.name}
                  </h3>
                </a>
              </Card>
            ))}
          </div>

          {/* SEO Content */}
          <article className="prose prose-invert max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">
              Complete Guide to Choosing the Best IPTV Provider
            </h2>
            
            <div className="text-gray-300 space-y-6">
              <p>
                When looking to <a href="https://www.iptvservice.site/" className="text-neon hover:underline">buy IPTV</a> services, 
                it's essential to understand what makes a provider stand out in the competitive streaming market. 
                The best IPTV service providers offer a combination of extensive channel selection, reliable streaming quality, 
                and exceptional customer support.
              </p>

              <h3 className="text-2xl font-semibold text-white">Key Features to Look for in an IPTV Subscription</h3>
              
              <ul className="list-none space-y-4">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full mt-2"></span>
                  <span>
                    <strong className="text-white">Channel Selection:</strong> Premium providers offer 40,000+ live channels 
                    and an extensive VOD library with 54,000+ titles.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full mt-2"></span>
                  <span>
                    <strong className="text-white">Streaming Quality:</strong> Look for providers offering HD and 4K content 
                    with minimal buffering and high uptime.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full mt-2"></span>
                  <span>
                    <strong className="text-white">Device Compatibility:</strong> Ensure support for multiple devices including 
                    Smart TVs, smartphones, tablets, and streaming devices.
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-white">How to Use Your IPTV Subscription</h3>
              
              <p>
                Getting started with your IPTV subscription is straightforward. After you purchase your subscription, 
                you'll receive credentials to access the service. Here's a step-by-step guide:
              </p>

              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong className="text-white">Choose Your Device:</strong> Select your preferred streaming device 
                  (Smart TV, Firestick, Android Box, etc.).
                </li>
                <li>
                  <strong className="text-white">Install the App:</strong> Download and install the recommended IPTV 
                  player application.
                </li>
                <li>
                  <strong className="text-white">Enter Credentials:</strong> Input your subscription details in the 
                  app settings.
                </li>
                <li>
                  <strong className="text-white">Customize Experience:</strong> Organize channels, create favorites, 
                  and adjust streaming quality settings.
                </li>
              </ol>

              <h3 className="text-2xl font-semibold text-white">Why Choose a Premium IPTV Service</h3>
              
              <p>
                Investing in a quality IPTV subscription ensures a superior streaming experience. Premium providers 
                offer benefits such as:
              </p>

              <ul className="list-none space-y-4">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full mt-2"></span>
                  <span>24/7 technical support and customer service</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full mt-2"></span>
                  <span>Regular updates and channel additions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full mt-2"></span>
                  <span>Anti-buffering technology for smooth playback</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-neon rounded-full mt-2"></span>
                  <span>EPG (Electronic Program Guide) integration</span>
                </li>
              </ul>

              <div className="bg-dark p-6 rounded-xl border border-neon/20 mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Ready to Start Streaming?</h4>
                <p className="mb-6">
                  Choose from our recommended providers above and transform your entertainment experience with 
                  access to thousands of channels and premium content.
                </p>
                <Button 
                  className="bg-neon hover:bg-neon/90 text-white"
                  onClick={() => window.location.href = 'https://www.iptvservice.site/'}
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BestIPTVProvider;