import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Download, Settings, Play } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const SmartTvSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Smart TV - Step by Step Guide"
        description="Learn how to install and configure IPTV on your Smart TV with our detailed setup guide. Easy-to-follow instructions for all Smart TV brands."
        keywords={["Smart TV IPTV setup", "IPTV Smart TV guide", "Smart TV streaming setup", "IPTV installation Smart TV"]}
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
            How to Setup IPTV on Smart TV
          </h1>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">1. Connect Your Smart TV to WiFi</h2>
                <p className="text-gray-400">
                  Ensure your Smart TV is connected to a stable internet connection. Go to your TV's settings and connect to your WiFi network.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">2. Download IPTV App</h2>
                <p className="text-gray-400">
                  Navigate to your TV's app store (Samsung Store, LG Content Store, etc.) and search for IPTV players like Smart IPTV, IPTV Smarters, or Perfect Player.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">3. Configure IPTV Settings</h2>
                <p className="text-gray-400">
                  Open the IPTV app and enter your subscription details including the M3U URL or playlist URL provided in your subscription email.
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
                  Once configured, you can start enjoying thousands of channels. Use your TV remote to navigate through different categories and channels.
                </p>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-12 p-8 bg-black/50 brutal-border brutal-shadow">
              <h2 className="text-brutal-xl text-white mb-4">Important Notes</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-400">
                <li>Make sure your Smart TV supports IPTV applications</li>
                <li>Keep your IPTV subscription credentials handy</li>
                <li>Ensure stable internet connection (minimum 10Mbps recommended)</li>
                <li>Some Smart TV brands might require different IPTV players</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartTvSetup;