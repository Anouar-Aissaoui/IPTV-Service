import React from 'react';
import { Computer, Play, Video, Wifi, Settings } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { Navigation } from '@/components/navigation/Navigation';

const VlcWindowsSetup = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on VLC Media Player - Windows Guide"
        description="Step-by-step guide to set up IPTV on VLC Media Player for Windows. Learn how to configure VLC for streaming IPTV channels easily."
        keywords={["VLC IPTV setup", "Windows IPTV player", "VLC Media Player", "IPTV streaming guide", "VLC configuration"]}
      />
      
      <Navigation onScrollToSection={handleScrollToSection} />

      <div className="container mx-auto px-4 py-24">
        <div className="relative z-10 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl -z-10" />
          <h1 className="text-brutal-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-4">
            How to Setup IPTV on VLC Media Player
          </h1>
          <p className="text-gray-400 max-w-2xl">
            Follow this comprehensive guide to set up and watch IPTV channels using VLC Media Player on your Windows PC.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Step 1: Download and Install VLC */}
          <div className="bg-black/50 backdrop-blur-sm p-8 brutal-border brutal-shadow">
            <div className="flex items-start gap-6">
              <div className="text-primary p-3 brutal-border brutal-shadow bg-black/50">
                <Computer className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-brutal-2xl text-white mb-2">1. Download and Install VLC</h2>
                <p className="text-gray-400">
                  Visit the official VLC website (videolan.org) and download the latest version for Windows. Run the installer and follow the installation wizard to complete the setup.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Open VLC and Prepare for IPTV */}
          <div className="bg-black/50 backdrop-blur-sm p-8 brutal-border brutal-shadow">
            <div className="flex items-start gap-6">
              <div className="text-primary p-3 brutal-border brutal-shadow bg-black/50">
                <Play className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-brutal-2xl text-white mb-2">2. Open VLC and Prepare for IPTV</h2>
                <p className="text-gray-400">
                  Launch VLC Media Player. Go to Media {'->'}  Open Network Stream (or press Ctrl+N) to access the network streaming interface.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Add IPTV Playlist */}
          <div className="bg-black/50 backdrop-blur-sm p-8 brutal-border brutal-shadow">
            <div className="flex items-start gap-6">
              <div className="text-primary p-3 brutal-border brutal-shadow bg-black/50">
                <Video className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-brutal-2xl text-white mb-2">3. Add IPTV Playlist</h2>
                <p className="text-gray-400">
                  In the Network URL field, paste your M3U playlist URL. Click Play to start streaming. For local M3U files, use Media {'->'}  Open File and select your playlist file.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Network Settings */}
          <div className="bg-black/50 backdrop-blur-sm p-8 brutal-border brutal-shadow">
            <div className="flex items-start gap-6">
              <div className="text-primary p-3 brutal-border brutal-shadow bg-black/50">
                <Wifi className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-brutal-2xl text-white mb-2">4. Network Settings</h2>
                <p className="text-gray-400">
                  Ensure you have a stable internet connection. For better performance, go to Tools {'->'}  Preferences {'->'}  Input/Codecs and increase the Network Caching value if you experience buffering.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5: Optimize Playback */}
          <div className="bg-black/50 backdrop-blur-sm p-8 brutal-border brutal-shadow">
            <div className="flex items-start gap-6">
              <div className="text-primary p-3 brutal-border brutal-shadow bg-black/50">
                <Settings className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-brutal-2xl text-white mb-2">5. Optimize Playback</h2>
                <p className="text-gray-400">
                  For the best viewing experience, adjust video output settings in Tools {'->'}  Preferences {'->'}  Video. Enable hardware decoding for better performance on modern PCs.
                </p>
              </div>
            </div>
          </div>

          {/* Troubleshooting Tips */}
          <div className="mt-8 p-6 bg-primary/10 brutal-border brutal-shadow">
            <h3 className="text-brutal-xl text-white mb-4">Troubleshooting Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>If streams don't play, verify your playlist URL is correct and active</li>
              <li>Update VLC to the latest version for best compatibility</li>
              <li>Try different stream formats if available (HLS, RTMP, etc.)</li>
              <li>Clear VLC's cache if you experience playback issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VlcWindowsSetup;