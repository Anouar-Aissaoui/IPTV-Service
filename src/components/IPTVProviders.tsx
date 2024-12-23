import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const providers = [
  { name: "IPTV Service", link: "#" },
  { name: "DigitaLizard IPTV", link: "#" },
  { name: "Xtream View", link: "#" },
  { name: "TyphoonLabs TV", link: "#" },
  { name: "FreeGoTV", link: "#" },
  { name: "XCodes IPTV", link: "#" },
  { name: "USA LIVE IPTV", link: "#" },
  { name: "ULTRA PREMIUM IPTV", link: "#" }
];

export const IPTVProviders = () => {
  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Best <span className="text-neon">IPTV Providers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <Card key={provider.name} className="bg-dark-gray border border-neon/20 hover:border-neon/40 transition-colors">
              <CardContent className="p-6">
                <div className="aspect-video bg-dark-gray rounded-lg border border-neon/10 flex items-center justify-center mb-4">
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20">
                    <Plus className="h-6 w-6 text-neon" />
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-white text-center">{provider.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-bold mb-6">
            Understanding IPTV Services: Your Complete Guide
          </h2>
          
          <p>
            Looking for the best <a href="#" className="text-neon hover:underline">IPTV subscription</a>? 
            Our comprehensive guide helps you understand everything you need to know about IPTV services 
            and how to choose the right provider for your streaming needs.
          </p>

          <h3>What is IPTV?</h3>
          <p>
            IPTV (Internet Protocol Television) delivers television content over Internet Protocol networks. 
            Unlike traditional TV services, IPTV offers unprecedented flexibility, allowing you to watch your 
            favorite content anytime, anywhere, on multiple devices.
          </p>

          <h3>Benefits of Premium IPTV Services</h3>
          <ul>
            <li>Access to 7000+ live channels from around the world</li>
            <li>Extensive VOD library with 40,000+ movies and TV shows</li>
            <li>High-quality streaming in HD and 4K resolution</li>
            <li>Multi-device compatibility (Smart TV, mobile, tablet, etc.)</li>
            <li>24/7 customer support and technical assistance</li>
            <li>Affordable pricing plans with flexible subscription options</li>
          </ul>

          <h3>How to Choose the Best IPTV Service</h3>
          <p>
            When selecting an <a href="#" className="text-neon hover:underline">IPTV service</a>, 
            consider these essential factors:
          </p>
          <ol>
            <li>Channel Selection: Ensure the provider offers the channels you want to watch</li>
            <li>Streaming Quality: Look for providers offering HD and 4K content</li>
            <li>Server Reliability: Choose services with high uptime and stable connections</li>
            <li>Customer Support: 24/7 support is crucial for technical assistance</li>
            <li>Price: Compare plans and features to find the best value</li>
          </ol>

          <h3>Setting Up Your IPTV Service</h3>
          <p>
            Getting started with IPTV is straightforward:
          </p>
          <ol>
            <li>Choose a subscription plan that suits your needs</li>
            <li>Receive your login credentials via email</li>
            <li>Download the recommended IPTV app for your device</li>
            <li>Enter your credentials and start streaming</li>
          </ol>

          <h3>Why Choose Our IPTV Providers?</h3>
          <p>
            Our curated list of <a href="#" className="text-neon hover:underline">best IPTV service</a> providers 
            offers:
          </p>
          <ul>
            <li>Verified and reliable service providers</li>
            <li>Competitive pricing with no hidden fees</li>
            <li>High-quality streaming experience</li>
            <li>Extensive channel selection</li>
            <li>Regular updates and maintenance</li>
            <li>Dedicated customer support</li>
          </ul>

          <div className="bg-dark-gray p-6 rounded-lg border border-neon/20 mt-8">
            <h4 className="text-xl font-semibold mb-4">Ready to Get Started?</h4>
            <p>
              Choose from our selection of top IPTV providers and enjoy premium entertainment 
              at competitive prices. All our recommended providers offer free trials, so you 
              can test the service before committing to a subscription.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};