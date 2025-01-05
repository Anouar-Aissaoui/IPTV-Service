import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Monitor, Download, Settings, Play } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const MagSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on MAG Box - Step by Step Guide"
        description="Learn how to install and configure IPTV on your MAG box with our detailed setup guide. Easy-to-follow instructions for the best streaming experience."
        keywords={["MAG box IPTV setup", "MAG IPTV configuration", "IPTV on MAG", "MAG box installation", "IPTV player MAG"]}
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
            How to Setup IPTV on MAG Box
          </h1>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">1. Access Settings</h2>
                <p className="text-gray-400">
                  On your MAG box, navigate to the Settings menu. You can usually find this by pressing the MENU button on your remote control.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">2. Configure Portal</h2>
                <p className="text-gray-400">
                  Select 'System Settings' then 'Servers' or 'Portal Settings'. Here you'll need to enter your portal URL and credentials provided by your IPTV service.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">3. Start Watching</h2>
                <p className="text-gray-400">
                  Once configured, your MAG box will reload and connect to the IPTV service. You can now browse through channels and start watching your content.
                </p>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-12 p-6 bg-black/50 brutal-border brutal-shadow">
              <h2 className="text-brutal-xl text-white mb-4">Troubleshooting Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Ensure your MAG box is connected to a stable internet connection</li>
                <li>Double-check the portal URL for any typos</li>
                <li>Try rebooting your MAG box if channels aren't loading</li>
                <li>Make sure your subscription is active</li>
                <li>Contact your provider if you're experiencing persistent issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagSetup;