import React from 'react';
import { Tv, Settings, Wifi, Network, Check } from 'lucide-react';
import { Navigation } from '@/components/navigation/Navigation';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const FormulerSetup = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Formuler Z8 - Step by Step Guide"
        description="Learn how to set up IPTV on your Formuler Z8 with our comprehensive guide. Easy-to-follow instructions for configuring your Formuler device for IPTV streaming."
        keywords={["Formuler Z8 setup", "IPTV Formuler configuration", "Formuler IPTV guide", "Formuler Z8 IPTV tutorial"]}
      />
      
      <Navigation onScrollToSection={handleScrollToSection} />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-brutal-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-6">
              How to Setup IPTV on Formuler Z8
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Follow this step-by-step guide to configure your Formuler Z8 for IPTV streaming. The process is straightforward and should take about 5-10 minutes to complete.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 brutal-border brutal-shadow bg-black/50">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">1. Connect Your Formuler Z8</h2>
                  <p className="text-gray-400">
                    Ensure your Formuler Z8 is properly connected to your TV via HDMI cable and to the internet via ethernet cable or WiFi.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 brutal-border brutal-shadow bg-black/50">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">2. Configure Network Settings</h2>
                  <p className="text-gray-400">
                    Go to Settings {'->'} Network Settings and configure your internet connection. We recommend using a wired connection for the best streaming experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 brutal-border brutal-shadow bg-black/50">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">3. Access MyFORMULER Portal</h2>
                  <p className="text-gray-400">
                    Navigate to the MyFORMULER portal on your device. This is where you'll enter your IPTV service credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 brutal-border brutal-shadow bg-black/50">
                  <Tv className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">4. Enter IPTV Details</h2>
                  <p className="text-gray-400">
                    Input your IPTV service URL, username, and password in the appropriate fields. Double-check all information before saving.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 brutal-border brutal-shadow bg-black/50">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">5. Start Watching</h2>
                  <p className="text-gray-400">
                    After saving your settings, your channels will begin loading. You can now start watching your favorite content!
                  </p>
                </div>
              </div>
            </div>

            {/* Troubleshooting Tips */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <h3 className="text-brutal-xl text-white mb-4">Troubleshooting Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Ensure your internet connection is stable and fast (minimum 10Mbps recommended)</li>
                <li>Double-check your IPTV service credentials</li>
                <li>Try rebooting your Formuler Z8 if you experience any issues</li>
                <li>Make sure your device firmware is up to date</li>
                <li>Contact your IPTV service provider if you need the correct portal URL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulerSetup;