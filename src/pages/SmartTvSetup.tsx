import React from 'react';
import { Tv, ArrowRight, Wifi, Settings, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const SmartTvSetup = () => {
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    navigate(`/${section}`);
  };

  const steps = [
    {
      title: "Connect Your Smart TV to WiFi",
      icon: <Wifi className="w-8 h-8" />,
      description: "Ensure your Smart TV is connected to a stable internet connection. Go to your TV's settings and connect to your WiFi network."
    },
    {
      title: "Download IPTV App",
      icon: <Play className="w-8 h-8" />,
      description: "Navigate to your TV's app store (Samsung Store, LG Content Store, etc.) and search for IPTV players like Smart IPTV, IPTV Smarters, or Perfect Player."
    },
    {
      title: "Configure IPTV Settings",
      icon: <Settings className="w-8 h-8" />,
      description: "Open the IPTV app and enter your subscription details including the M3U URL or playlist URL provided in your subscription email."
    },
    {
      title: "Start Watching",
      icon: <Tv className="w-8 h-8" />,
      description: "Once configured, you can start enjoying thousands of channels. Use your TV remote to navigate through different categories and channels."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Smart TV - Step by Step Guide"
        description="Learn how to setup IPTV on your Smart TV with our comprehensive step-by-step guide. Easy installation instructions for all Smart TV brands."
        keywords={["IPTV Smart TV setup", "Smart TV IPTV guide", "IPTV installation Smart TV", "Smart TV streaming setup"]}
      />
      
      {/* Navigation Menu */}
      <div className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-sm border-b-2 border-[#F97316] mb-8">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {[
              { title: 'Home', path: '' },
              { title: 'Pricing', path: 'pricing' },
              { title: 'Channel List', path: 'channels' },
              { title: 'Tutorials', path: 'tutorials' },
              { title: 'FAQ', path: 'faq' }
            ].map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavigation(item.path)}
                className="text-white hover:text-[#F97316] transition-all duration-300 text-sm md:text-base font-black brutal-border px-2 py-1 md:px-4 md:py-2 hover:bg-[#F97316] hover:text-white transform hover:-translate-y-1 hover:translate-x-1 brutal-shadow"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="relative z-10 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl -z-10" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            How to Setup IPTV on Smart TV
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our simple step-by-step guide to setup IPTV on your Smart TV and start streaming thousands of channels.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm p-8 brutal-border brutal-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#F97316]/10 brutal-border text-[#F97316] rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 p-8 bg-black/50 backdrop-blur-sm brutal-border brutal-shadow">
          <h2 className="text-2xl font-bold text-white mb-4">Important Notes</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Make sure your Smart TV supports IPTV applications</li>
            <li>Keep your IPTV subscription credentials handy</li>
            <li>Ensure stable internet connection (minimum 10Mbps recommended)</li>
            <li>Some Smart TV brands might require different IPTV players</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => handleNavigation('')}
            className="inline-flex items-center gap-2 bg-[#F97316] text-white px-8 py-4 brutal-border brutal-shadow hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200"
          >
            Get Started with IPTV
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartTvSetup;