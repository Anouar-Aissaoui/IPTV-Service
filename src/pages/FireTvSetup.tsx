import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Download, Settings, Play } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const FireTvSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Fire TV Stick - Step by Step Guide"
        description="Learn how to install and configure IPTV on your Amazon Fire TV Stick with our detailed setup guide. Easy-to-follow instructions for the best streaming experience."
        keywords={["Fire TV Stick IPTV setup", "Amazon Fire Stick IPTV", "IPTV on Fire Stick", "Fire TV IPTV installation", "IPTV player Fire Stick"]}
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
            How to Setup IPTV on Fire TV Stick
          </h1>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">1. Install IPTV Player</h2>
                <p className="text-gray-400">
                  From your Fire TV Stick home screen, search for "IPTV Player" in the Amazon App Store. We recommend using VLC, IPTV Smarters, or Perfect Player. Download and install your preferred player.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">2. Configure the Player</h2>
                <p className="text-gray-400">
                  Open the installed IPTV player app. Navigate to settings or add new playlist section. You'll need to enter your M3U URL or upload your playlist file. If you have Xtream Codes login details, enter those instead.
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
                  Once configured, your channels will load automatically. Use your Fire TV remote to navigate through channels and categories. For the best experience, ensure your Fire TV Stick is connected to a strong internet connection.
                </p>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-12 p-6 bg-black/50 brutal-border brutal-shadow">
              <h2 className="text-brutal-xl text-white mb-4">Troubleshooting Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Ensure your Fire TV Stick is running the latest software version</li>
                <li>Clear cache and data if the app becomes unresponsive</li>
                <li>Use a wired internet connection via ethernet adapter for better stability</li>
                <li>If channels don't load, verify your subscription status and M3U URL</li>
                <li>Restart your Fire TV Stick if experiencing persistent issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireTvSetup;