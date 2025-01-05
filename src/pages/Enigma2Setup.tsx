import React from 'react';
import { Navigation } from '@/components/navigation/Navigation';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { Settings, Network, SatelliteDish, Check, Info, Router } from 'lucide-react';

const Enigma2Setup = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Enigma2/Vu+ | Complete Guide"
        description="Learn how to set up IPTV on your Enigma2 or Vu+ receiver with our step-by-step guide. Easy installation instructions for perfect streaming."
        keywords={[
          'Enigma2 IPTV setup',
          'Vu+ IPTV configuration',
          'IPTV on Enigma2',
          'Vu+ streaming setup',
          'Enigma2 IPTV guide'
        ]}
      />
      
      <Navigation onScrollToSection={handleScrollToSection} />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-brutal-4xl text-white mb-8">
            How to Setup IPTV on Enigma2/Vu+
          </h1>
          
          <div className="space-y-12">
            {/* Introduction */}
            <div className="bg-black/30 p-6 rounded-lg brutal-border brutal-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Info className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400">
                    This guide will walk you through the process of setting up IPTV on your Enigma2 or Vu+ receiver. 
                    Follow these steps carefully to ensure a successful installation.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 1: Network Connection */}
            <div className="bg-black/30 p-6 rounded-lg brutal-border brutal-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Router className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">1. Network Connection</h2>
                  <p className="text-gray-400">
                    First, ensure your Enigma2/Vu+ receiver is connected to the internet. A stable internet connection 
                    is crucial for smooth IPTV streaming.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                    <li>Connect your receiver to your router using an Ethernet cable (recommended)</li>
                    <li>Or configure WiFi if your receiver supports wireless connectivity</li>
                    <li>Test the connection in the network settings menu</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2: System Settings */}
            <div className="bg-black/30 p-6 rounded-lg brutal-border brutal-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">2. System Settings</h2>
                  <p className="text-gray-400">
                    Navigate to the system settings to prepare your receiver for IPTV installation:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                    <li>Go to {'Menu -> Setup -> System'}</li>
                    <li>Ensure your system software is up to date</li>
                    <li>Check that you have enough free space for IPTV installation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3: IPTV Setup */}
            <div className="bg-black/30 p-6 rounded-lg brutal-border brutal-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <SatelliteDish className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">3. IPTV Configuration</h2>
                  <p className="text-gray-400">
                    Now let's configure your IPTV service:
                  </p>
                  <ol className="list-decimal list-inside text-gray-400 mt-4 space-y-2">
                    <li>Go to {'Menu -> Plugins -> Download Plugins'}</li>
                    <li>Search for and install an IPTV player plugin</li>
                    <li>Once installed, open the IPTV player</li>
                    <li>Enter your IPTV subscription details:
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>M3U Playlist URL or file</li>
                        <li>EPG URL (if provided)</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Final Step */}
            <div className="bg-black/30 p-6 rounded-lg brutal-border brutal-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">4. Start Watching</h2>
                  <p className="text-gray-400">
                    After completing the setup:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                    <li>Restart your receiver to apply all changes</li>
                    <li>Open your IPTV player plugin</li>
                    <li>Browse through available channels and enjoy your content</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-black/30 p-6 rounded-lg brutal-border brutal-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-brutal-2xl text-white mb-2">Troubleshooting</h2>
                  <p className="text-gray-400">
                    If you experience any issues:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                    <li>Check your internet connection speed and stability</li>
                    <li>Verify your subscription details are entered correctly</li>
                    <li>Try restarting your receiver</li>
                    <li>Ensure your IPTV subscription is active</li>
                    <li>Contact our support team for assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enigma2Setup;