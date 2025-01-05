import React from 'react';
import { Tv, Settings, Router, Terminal } from 'lucide-react';
import { Navigation } from '@/components/navigation/Navigation';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const MagSetup = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on MAG Box - Step by Step Guide"
        description="Learn how to set up IPTV on your MAG box with our comprehensive guide. Easy-to-follow instructions for configuring your MAG device for IPTV streaming."
        keywords={["MAG box setup", "IPTV MAG configuration", "MAG IPTV guide", "MAG box IPTV tutorial"]}
      />
      
      <Navigation onScrollToSection={handleScrollToSection} />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-brutal-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-6">
              How to Setup IPTV on MAG Box
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Follow this step-by-step guide to configure your MAG box for IPTV streaming. The process is straightforward and should take about 5-10 minutes to complete.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 brutal-border brutal-shadow bg-black/50">
                  <Router className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">1. Connect Your MAG Box</h2>
                  <p className="text-gray-400">
                    Ensure your MAG box is properly connected to your TV via HDMI cable and to the internet via ethernet cable or WiFi.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 brutal-border brutal-shadow bg-black/50">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">2. Access Portal Settings</h2>
                  <p className="text-gray-400">
                    Using your MAG remote, navigate to the Settings menu. Look for "Portal Settings" or "System Settings."
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 brutal-border brutal-shadow bg-black/50">
                  <Terminal className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">3. Enter Portal URL</h2>
                  <p className="text-gray-400">
                    Select "Portal Settings" and enter the portal URL provided by your IPTV service provider. Make sure to type it exactly as provided.
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
                  <h2 className="text-brutal-2xl text-white mb-2">4. Start Watching</h2>
                  <p className="text-gray-400">
                    After entering the portal URL, your MAG box will restart and load your IPTV service. You can now start watching your favorite channels!
                  </p>
                </div>
              </div>
            </div>

            {/* Troubleshooting Tips */}
            <div className="bg-black/50 backdrop-blur-sm brutal-border brutal-shadow p-6 md:p-8">
              <h3 className="text-brutal-xl text-white mb-4">Troubleshooting Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Ensure your internet connection is stable and fast enough for streaming</li>
                <li>Double-check the portal URL for any typos</li>
                <li>Try rebooting your MAG box if you experience any issues</li>
                <li>Contact your IPTV service provider if you need the correct portal URL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagSetup;