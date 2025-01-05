import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Download, Settings, Play } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const FormulerSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Formuler Z8 - Step by Step Guide"
        description="Learn how to set up IPTV on your Formuler Z8 with our comprehensive guide. Easy-to-follow instructions for configuring your Formuler device for IPTV streaming."
        keywords={["Formuler Z8 setup", "IPTV Formuler configuration", "Formuler IPTV guide", "Formuler Z8 IPTV tutorial"]}
      />
      
      {/* Navigation Menu */}
      <div className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-sm border-b-2 border-[#F97316] mb-8">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/tutorials')}
              className="flex items-center gap-2 text-white hover:text-[#F97316] transition-all duration-300 text-sm md:text-base font-black brutal-border px-3 py-1 md:px-4 md:py-2 hover:bg-[#F97316] hover:text-white transform hover:-translate-y-1 hover:translate-x-1 brutal-shadow"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tutorials
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-brutal-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-8">
            How to Setup IPTV on Formuler Z8
          </h1>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">1. Connect Your Formuler Z8</h2>
                <p className="text-gray-400">
                  Ensure your Formuler Z8 is properly connected to your TV via HDMI cable and to the internet via ethernet cable or WiFi.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">2. Configure Network Settings</h2>
                <p className="text-gray-400">
                  Go to Settings {'->'} Network Settings and configure your internet connection. We recommend using a wired connection for the best streaming experience.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">3. Access MyFORMULER Portal</h2>
                <p className="text-gray-400">
                  Navigate to the MyFORMULER portal on your device. This is where you'll enter your IPTV service credentials.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">4. Start Watching</h2>
                <p className="text-gray-400">
                  After saving your settings, your channels will begin loading. You can now start watching your favorite content!
                </p>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-12 p-6 bg-black/50 brutal-border brutal-shadow">
              <h2 className="text-brutal-xl text-white mb-4">Troubleshooting Tips</h2>
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