import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Settings, Play } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const VlcWindowsSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on VLC Media Player - Windows Guide"
        description="Learn how to install and configure IPTV on VLC Media Player for Windows with our detailed setup guide. Easy-to-follow instructions for the best streaming experience."
        keywords={["VLC IPTV setup", "Windows IPTV player", "VLC Media Player", "IPTV streaming guide", "VLC configuration"]}
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
            How to Setup IPTV on VLC Media Player
          </h1>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">1. Download VLC Media Player</h2>
                <p className="text-gray-400">
                  Visit the official VLC website (videolan.org) and download the latest version for Windows. Run the installer and follow the installation wizard to complete the setup.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">2. Configure VLC for IPTV</h2>
                <p className="text-gray-400">
                  Open VLC Media Player. Go to Media {'>'} Open Network Stream (or press Ctrl+N). You'll need to paste your M3U playlist URL or load your local M3U file here.
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
                  Once you've added your playlist, VLC will load your channels. You can use the Playlist view to browse and select channels. For the best experience, ensure your computer meets VLC's system requirements.
                </p>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-12 p-6 bg-black/50 brutal-border brutal-shadow">
              <h2 className="text-brutal-xl text-white mb-4">Troubleshooting Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Update VLC to the latest version for best compatibility</li>
                <li>Clear VLC's cache if you experience playback issues</li>
                <li>Check your internet connection if streams buffer frequently</li>
                <li>Verify your M3U URL is correct and active</li>
                <li>Try different stream formats if one isn't working</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VlcWindowsSetup;