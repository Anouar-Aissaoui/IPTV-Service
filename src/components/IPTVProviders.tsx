import { Plus } from "lucide-react";
import { Button } from "./ui/button";

const providers = [
  {
    name: "IPTV Service",
    description: "Premium IPTV service with 40,000+ channels and VOD content",
    link: "#"
  },
  {
    name: "DigitaLizard IPTV",
    description: "High-quality streaming with extensive channel selection",
    link: "#"
  },
  {
    name: "Xtream View",
    description: "4K quality streaming with global channel coverage",
    link: "#"
  },
  {
    name: "TyphoonLabs TV",
    description: "Reliable IPTV service with premium sports channels",
    link: "#"
  },
  {
    name: "FreeGoTV",
    description: "Affordable IPTV solution with HD content",
    link: "#"
  },
  {
    name: "XCodes IPTV",
    description: "Feature-rich IPTV service with EPG support",
    link: "#"
  },
  {
    name: "USA LIVE IPTV",
    description: "US-focused IPTV service with local channels",
    link: "#"
  },
  {
    name: "ULTRA PREMIUM IPTV",
    description: "Elite IPTV service with premium content",
    link: "#"
  }
];

export const IPTVProviders = () => {
  return (
    <section className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Best <span className="text-neon">IPTV Providers</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Compare and choose from the top IPTV service providers offering premium channels, 
          VOD content, and reliable streaming quality.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <div 
              key={provider.name}
              className="bg-dark-gray rounded-lg p-6 border border-neon/20 hover:border-neon/40 transition-all duration-300 group"
            >
              <div className="aspect-square mb-4 bg-dark-gray border-2 border-dashed border-neon/20 rounded-lg flex items-center justify-center group-hover:border-neon/40 transition-colors">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-12 w-12 rounded-full bg-dark/50 hover:bg-neon/20"
                >
                  <Plus className="h-6 w-6 text-neon" />
                </Button>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{provider.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{provider.description}</p>
              <Button 
                className="w-full bg-dark border border-neon/40 text-neon hover:bg-neon hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 prose prose-invert max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Understanding IPTV Services: A Comprehensive Guide
          </h2>
          
          <p>
            IPTV (Internet Protocol Television) has revolutionized how we consume television content, 
            offering unprecedented access to global channels and on-demand content. When you 
            <a href="https://www.iptvservice.site/" className="text-neon hover:underline" rel="dofollow"> buy IPTV</a>, 
            you're investing in a modern streaming solution that delivers content directly through your internet connection.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            What Makes a Great IPTV Service?
          </h3>
          
          <p>
            The best IPTV service providers distinguish themselves through several key features:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Extensive channel selection with 40,000+ live channels</li>
            <li>High-quality streaming with 4K and HD options</li>
            <li>Comprehensive VOD (Video on Demand) library</li>
            <li>Reliable uptime and minimal buffering</li>
            <li>Multi-device compatibility</li>
            <li>Electronic Program Guide (EPG) support</li>
            <li>24/7 customer support</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            Choosing the Right IPTV Subscription
          </h3>
          
          <p>
            When selecting an IPTV subscription, consider these essential factors:
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong>Content Library:</strong> Ensure the provider offers the channels and content you're interested in, 
              including local channels, sports packages, and international programming.
            </li>
            <li>
              <strong>Streaming Quality:</strong> Look for providers offering HD and 4K streaming options with minimal 
              buffering and high uptime.
            </li>
            <li>
              <strong>Device Compatibility:</strong> Verify that the service works with your preferred devices, whether 
              it's a Smart TV, Android box, iOS device, or computer.
            </li>
            <li>
              <strong>Customer Support:</strong> Choose providers offering reliable customer support to help with setup 
              and troubleshooting.
            </li>
          </ol>

          <h3 className="text-2xl font-semibold mt-8 mb-4">
            Getting Started with Your IPTV Service
          </h3>
          
          <p>
            Setting up your IPTV subscription is straightforward:
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Choose your preferred subscription plan</li>
            <li>Complete the registration process</li>
            <li>Receive your login credentials</li>
            <li>Download the recommended IPTV player</li>
            <li>Input your credentials and start streaming</li>
          </ol>

          <div className="bg-dark-gray p-6 rounded-lg mt-8">
            <h4 className="text-xl font-semibold mb-4">Pro Tips for IPTV Users</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use a stable internet connection (minimum 25Mbps for HD content)</li>
              <li>Consider using a VPN for enhanced privacy and security</li>
              <li>Keep your IPTV app and devices updated</li>
              <li>Save favorite channels for quick access</li>
              <li>Take advantage of catch-up TV features when available</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};