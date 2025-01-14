import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Download, Settings, Play, Wifi, Check, AlertTriangle, HelpCircle } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const compatibilityData = [
  { brand: 'Samsung Smart TV', compatibility: 95, features: 'Full', rating: 4.8 },
  { brand: 'LG Smart TV', compatibility: 90, features: 'Full', rating: 4.7 },
  { brand: 'Sony Android TV', compatibility: 98, features: 'Full', rating: 4.9 },
  { brand: 'TCL Roku TV', compatibility: 92, features: 'Full', rating: 4.6 },
  { brand: 'Hisense Smart TV', compatibility: 88, features: 'Partial', rating: 4.5 }
];

const SmartTvSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Smart TV - Complete Guide 2024 | Step by Step Tutorial"
        description="Learn how to install and configure IPTV on your Smart TV with our detailed setup guide. Step-by-step instructions for all major Smart TV brands including Samsung, LG, Sony, and more."
        keywords={[
          "Smart TV IPTV setup",
          "IPTV Smart TV guide",
          "Smart TV streaming setup",
          "IPTV installation Smart TV",
          "Samsung Smart TV IPTV",
          "LG Smart TV IPTV",
          "Sony Android TV IPTV",
          "TCL Roku TV IPTV",
          "Smart TV streaming guide"
        ]}
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
        <article className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h1 className="text-4xl font-bold mb-8 text-white">
            Complete Guide: How to Setup IPTV on Smart TV (2024)
          </h1>

          <div className="mb-8">
            <p className="text-xl leading-relaxed">
              Setting up <strong>IPTV on your Smart TV</strong> has never been easier. This comprehensive guide will walk you through the entire process of installing and configuring IPTV services on various Smart TV brands. Whether you own a Samsung, LG, Sony, or any other major brand, we've got you covered with detailed instructions and troubleshooting tips.
            </p>
          </div>

          <nav className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#what-you-need" className="text-neon hover:underline">What You Need to Get Started</a></li>
              <li><a href="#compatibility" className="text-neon hover:underline">Smart TV Compatibility Guide</a></li>
              <li><a href="#step-by-step" className="text-neon hover:underline">Step-by-Step Setup Instructions</a></li>
              <li><a href="#recommended-apps" className="text-neon hover:underline">Recommended IPTV Apps</a></li>
              <li><a href="#troubleshooting" className="text-neon hover:underline">Troubleshooting Common Issues</a></li>
              <li><a href="#optimization" className="text-neon hover:underline">Optimizing Your IPTV Experience</a></li>
              <li><a href="#faq" className="text-neon hover:underline">Frequently Asked Questions</a></li>
            </ul>
          </nav>

          <section id="what-you-need" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What You Need to Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Essential Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Smart TV with internet capability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Stable internet connection (10+ Mbps)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Valid IPTV subscription</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Compatible IPTV app</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Optional but Recommended</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>VPN service for enhanced privacy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>External storage for recording</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Ethernet cable for stable connection</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="compatibility" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Smart TV Compatibility Guide</h2>
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={compatibilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="brand" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="compatibility" fill="#F97316" name="Compatibility %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Brand</TableHead>
                  <TableHead>Compatibility</TableHead>
                  <TableHead>Features</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {compatibilityData.map((item) => (
                  <TableRow key={item.brand}>
                    <TableCell>{item.brand}</TableCell>
                    <TableCell>{item.compatibility}%</TableCell>
                    <TableCell>{item.features}</TableCell>
                    <TableCell>{item.rating}/5.0</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>

          <section id="step-by-step" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Step-by-Step Setup Instructions</h2>
            
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">1. Connect to Internet</h3>
                  <p className="text-gray-300">
                    Ensure your Smart TV is connected to a stable internet connection. We recommend using an ethernet cable for the most reliable connection, but WiFi with good signal strength (minimum 10Mbps) will also work.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">2. Install IPTV App</h3>
                  <p className="text-gray-300">
                    Navigate to your TV's app store and search for a compatible IPTV player. Popular options include:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• Smart IPTV (SIPTV)</li>
                    <li>• IPTV Smarters Pro</li>
                    <li>• Perfect Player</li>
                    <li>• GSE Smart IPTV</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">3. Configure Settings</h3>
                  <p className="text-gray-300">
                    Open the installed IPTV app and enter your subscription details:
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li>• M3U URL or Playlist URL</li>
                    <li>• EPG URL (if provided)</li>
                    <li>• Username and password (if required)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">4. Start Watching</h3>
                  <p className="text-gray-300">
                    Once configured, you can start enjoying your IPTV service. Browse through categories, create favorites, and use the EPG for program information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting Common Issues</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-semibold">Buffering Issues</h3>
                </div>
                <ul className="space-y-2">
                  <li>• Check internet speed and stability</li>
                  <li>• Use ethernet instead of WiFi</li>
                  <li>• Clear app cache and data</li>
                  <li>• Try different servers if available</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-semibold">Playback Errors</h3>
                </div>
                <ul className="space-y-2">
                  <li>• Verify subscription status</li>
                  <li>• Check M3U URL accuracy</li>
                  <li>• Update IPTV app</li>
                  <li>• Restart TV and router</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="optimization" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Optimizing Your IPTV Experience</h2>
            <div className="space-y-6">
              <p>
                To get the best possible experience with your IPTV service, consider implementing these optimization tips:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Use a wired internet connection whenever possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Configure video quality settings based on your internet speed</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Regularly update your IPTV app and Smart TV firmware</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span>Use a VPN service to avoid ISP throttling</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Is IPTV legal?</h3>
                <p className="text-gray-300">
                  IPTV technology itself is legal. However, the legality depends on the content being streamed and the provider's licensing agreements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What internet speed do I need?</h3>
                <p className="text-gray-300">
                  We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps for 4K content. A stable connection is more important than raw speed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do I need a VPN?</h3>
                <p className="text-gray-300">
                  While not required, a VPN can help prevent ISP throttling and provide additional privacy and security.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 p-6 bg-black/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">
              Now that you know how to set up IPTV on your Smart TV, it's time to get started with a reliable service provider.
            </p>
            <div className="flex gap-4">
              <a 
                href="/iptv-free-trial-24-hours"
                className="bg-[#F97316] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F97316]/90 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="/pricing"
                className="bg-black border border-[#F97316] text-[#F97316] px-6 py-3 rounded-lg font-semibold hover:bg-[#F97316]/10 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SmartTvSetup;