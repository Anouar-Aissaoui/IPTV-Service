import React from 'react';
import { Navigation } from "@/components/navigation/Navigation";
import { Smartphone, Download, Settings, Play, Check } from "lucide-react";
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';

const MobileSetup = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Android & iOS | Complete Guide"
        description="Step-by-step guide to setup IPTV on your Android or iOS device. Easy instructions for mobile streaming."
        keywords={["IPTV Android setup", "IPTV iOS setup", "mobile IPTV guide", "IPTV app installation"]}
      />
      
      <Navigation onScrollToSection={handleScrollToSection} />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-brutal-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-6">
              How to Setup IPTV on Android & iOS
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Follow our simple guide to start streaming thousands of channels on your mobile device
            </p>
          </div>

          <div className="space-y-12">
            {/* Android Setup */}
            <section className="brutal-border brutal-shadow bg-black/50 backdrop-blur-sm p-8">
              <h2 className="text-brutal-2xl text-primary mb-6">Android Setup Guide</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 brutal-border brutal-shadow bg-black/50">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-brutal-lg text-white mb-2">1. Download the IPTV Player</h3>
                    <p className="text-gray-400">
                      Download and install your preferred IPTV player from the Google Play Store. We recommend using TiviMate or IPTV Smarters Pro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 brutal-border brutal-shadow bg-black/50">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-brutal-lg text-white mb-2">2. Configure the App</h3>
                    <p className="text-gray-400">
                      Open the app and select "Add Playlist" or "Add New Subscription". Enter your M3U URL or Xtream Codes login credentials provided in your subscription details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 brutal-border brutal-shadow bg-black/50">
                    <Play className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-brutal-lg text-white mb-2">3. Start Watching</h3>
                    <p className="text-gray-400">
                      Once configured, you'll have access to all channels. Browse through categories and enjoy your favorite content.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* iOS Setup */}
            <section className="brutal-border brutal-shadow bg-black/50 backdrop-blur-sm p-8">
              <h2 className="text-brutal-2xl text-primary mb-6">iOS Setup Guide</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 brutal-border brutal-shadow bg-black/50">
                    <Download className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-brutal-lg text-white mb-2">1. Get an IPTV Player</h3>
                    <p className="text-gray-400">
                      Download IPTV Smarters Pro or GSE IPTV from the App Store. These apps are optimized for iOS devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 brutal-border brutal-shadow bg-black/50">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-brutal-lg text-white mb-2">2. Add Your Subscription</h3>
                    <p className="text-gray-400">
                      Launch the app and look for "Add New Playlist" or "+" button. Enter your subscription URL or credentials when prompted.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 brutal-border brutal-shadow bg-black/50">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-brutal-lg text-white mb-2">3. Enjoy Your Content</h3>
                    <p className="text-gray-400">
                      Your channels will load automatically. Use the built-in player controls to navigate and watch your favorite shows.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips Section */}
            <section className="brutal-border brutal-shadow bg-black/50 backdrop-blur-sm p-8">
              <h2 className="text-brutal-2xl text-primary mb-6">Pro Tips</h2>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Ensure you have a stable internet connection for the best streaming experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Keep your IPTV app updated to the latest version</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Use WiFi when possible to avoid excessive mobile data usage</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MobileSetup;