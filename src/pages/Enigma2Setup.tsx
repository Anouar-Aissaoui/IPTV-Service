import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Download, Settings, Play } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const Enigma2Setup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Enigma2/Vu+ - Step by Step Guide"
        description="Learn how to install and configure IPTV on your Enigma2 or Vu+ receiver with our detailed setup guide. Easy-to-follow instructions for the best streaming experience."
        keywords={["Enigma2 IPTV setup", "Vu+ IPTV", "IPTV on Enigma2", "Enigma2 IPTV installation", "IPTV player Enigma2"]}
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
            How to Setup IPTV on Enigma2/Vu+
          </h1>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">1. Access Settings Menu</h2>
                <p className="text-gray-400">
                  Navigate to the main menu of your Enigma2/Vu+ receiver. Go to the settings or configuration section where you can manage IPTV services and playlists.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">2. Add IPTV Source</h2>
                <p className="text-gray-400">
                  Select 'Add IPTV Source' or similar option. You'll need to enter your M3U URL or upload your playlist file. For Xtream Codes, enter your login credentials in the appropriate fields.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Tv className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-brutal-2xl text-white mb-2">3. Configure Settings</h2>
                <p className="text-gray-400">
                  Configure your IPTV settings including buffer size, timeout settings, and EPG options. These settings can affect streaming quality and performance.
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
                  Once configured, your channels will appear in your channel list. Use your remote to navigate through channels and categories. Ensure your Enigma2/Vu+ receiver is connected to a stable internet connection.
                </p>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mt-12 p-6 bg-black/50 brutal-border brutal-shadow">
              <h2 className="text-brutal-xl text-white mb-4">Troubleshooting Tips</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Verify your internet connection is stable and fast enough for streaming</li>
                <li>Double-check your M3U URL or Xtream Codes credentials</li>
                <li>Try adjusting buffer settings if experiencing playback issues</li>
                <li>Update your Enigma2/Vu+ software to the latest version</li>
                <li>Clear EPG cache if guide information isn't displaying correctly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enigma2Setup;