import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Download, Settings, Play, Wifi, Smartphone, Check, X } from 'lucide-react';
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
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const compatibilityData = [
  { name: 'Fire TV Stick Lite', compatibility: 95 },
  { name: 'Fire TV Stick (2nd Gen)', compatibility: 98 },
  { name: 'Fire TV Stick 4K', compatibility: 100 },
  { name: 'Fire TV Stick 4K Max', compatibility: 100 },
  { name: 'Fire TV Cube', compatibility: 100 }
];

const appUsageData = [
  { name: 'IPTV Smarters', value: 40 },
  { name: 'Perfect Player', value: 25 },
  { name: 'TiviMate', value: 20 },
  { name: 'VLC', value: 15 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const FireTvSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Fire TV Stick (2024) - Complete Guide"
        description="Learn how to install and configure IPTV on your Amazon Fire TV Stick with our detailed step-by-step guide. Compatible with all Fire TV models including 4K, Lite, and Cube."
        keywords={[
          "Fire TV Stick IPTV setup",
          "Amazon Fire Stick IPTV",
          "IPTV on Fire Stick",
          "Fire TV IPTV installation",
          "IPTV player Fire Stick",
          "Fire TV Stick streaming",
          "Fire Stick IPTV apps",
          "Amazon Fire TV IPTV guide"
        ]}
      />
      
      {/* Navigation Menu */}
      <div className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur-sm border-b-2 border-[#F97316] mb-8">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/iptv-setup-tutorials')}
              className="flex items-center gap-2 text-white hover:text-[#F97316] transition-all duration-300 text-sm md:text-base font-black brutal-border px-3 py-1 md:px-4 md:py-2 hover:bg-[#F97316] hover:text-white transform hover:-translate-y-1 hover:translate-x-1 brutal-shadow"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tutorials
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
            How to Setup IPTV on Fire TV Stick: Complete Guide 2024
          </h1>

          <div className="mb-8 text-xl leading-relaxed">
            Setting up <strong>IPTV on your Fire TV Stick</strong> is a straightforward process that can transform your streaming experience. This comprehensive guide will walk you through everything you need to know about installing and configuring IPTV on your Amazon Fire TV device.
          </div>

          <nav className="mb-12">
            <Card className="p-6 bg-black/50">
              <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li><a href="#compatibility" className="text-primary hover:underline">Device Compatibility</a></li>
                <li><a href="#preparation" className="text-primary hover:underline">Preparation Steps</a></li>
                <li><a href="#installation" className="text-primary hover:underline">Installation Guide</a></li>
                <li><a href="#configuration" className="text-primary hover:underline">Configuration Steps</a></li>
                <li><a href="#apps" className="text-primary hover:underline">Best IPTV Apps</a></li>
                <li><a href="#troubleshooting" className="text-primary hover:underline">Troubleshooting</a></li>
                <li><a href="#optimization" className="text-primary hover:underline">Performance Optimization</a></li>
                <li><a href="#faq" className="text-primary hover:underline">FAQ</a></li>
              </ul>
            </Card>
          </nav>

          <section id="compatibility" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Fire TV Stick Compatibility</h2>
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={compatibilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="compatibility" fill="#F97316" name="Compatibility %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mb-4">
              All modern Fire TV Stick models are fully compatible with IPTV services. The latest Fire TV Stick 4K Max offers the best performance with its enhanced Wi-Fi 6 support and powerful processor.
            </p>
          </section>

          <section id="preparation" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Preparation Steps</h2>
            <div className="grid gap-6">
              <Card className="p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Internet Connection</h3>
                    <p>Ensure a stable internet connection with at least 10 Mbps for HD content and 25 Mbps for 4K streaming.</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Device Settings</h3>
                    <p>Enable "Apps from Unknown Sources" in Settings {'>'} My Fire TV {'>'} Developer Options.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section id="installation" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Installation Guide</h2>
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">1. Install Downloader App</h3>
                  <p className="text-gray-400 mb-4">
                    Search for "Downloader" in the Amazon App Store and install it. This app will help you download IPTV players.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">2. Install IPTV Player</h3>
                  <p className="text-gray-400 mb-4">
                    Use Downloader to install your preferred IPTV player (IPTV Smarters, Perfect Player, or TiviMate).
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">3. Configure Your Service</h3>
                  <p className="text-gray-400 mb-4">
                    Enter your IPTV subscription details (M3U URL or Xtream Codes) in the player settings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="apps" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Popular IPTV Apps</h2>
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={appUsageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {appUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>App Name</TableHead>
                  <TableHead>Free/Paid</TableHead>
                  <TableHead>Key Features</TableHead>
                  <TableHead>Rating</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>IPTV Smarters</TableCell>
                  <TableCell>Free/Pro</TableCell>
                  <TableCell>EPG, Multi-screen, Catch-up</TableCell>
                  <TableCell>4.8/5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Perfect Player</TableCell>
                  <TableCell>Free</TableCell>
                  <TableCell>Simple UI, Stable playback</TableCell>
                  <TableCell>4.6/5</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>TiviMate</TableCell>
                  <TableCell>Premium</TableCell>
                  <TableCell>Advanced features, Best UI</TableCell>
                  <TableCell>4.9/5</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting Guide</h2>
            <Card className="p-6 bg-black/50">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-500/10 rounded">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Buffering Issues</h3>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Check your internet connection speed</li>
                      <li>Clear app cache and data</li>
                      <li>Try a different IPTV player</li>
                      <li>Use an ethernet connection instead of Wi-Fi</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-500/10 rounded">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Playback Solutions</h3>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Update your Fire TV Stick software</li>
                      <li>Verify your subscription status</li>
                      <li>Check M3U URL or credentials</li>
                      <li>Restart your Fire TV Stick</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section id="optimization" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Performance Optimization</h2>
            <div className="grid gap-6">
              <Card className="p-6 bg-black/50">
                <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Keep your Fire TV Stick updated</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Remove unused apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Clear cache regularly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Use ethernet adapter for stable connection</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="p-6 bg-black/50">
                <h3 className="text-xl font-semibold mb-2">Is IPTV legal on Fire TV Stick?</h3>
                <p>IPTV technology itself is legal. However, the legality depends on the content being streamed and the provider's licensing agreements.</p>
              </Card>

              <Card className="p-6 bg-black/50">
                <h3 className="text-xl font-semibold mb-2">What internet speed do I need?</h3>
                <p>We recommend a minimum of 10 Mbps for HD content and 25 Mbps for 4K streaming. A stable connection is more important than raw speed.</p>
              </Card>

              <Card className="p-6 bg-black/50">
                <h3 className="text-xl font-semibold mb-2">Which IPTV player is best?</h3>
                <p>TiviMate is considered the best IPTV player for Fire TV Stick, offering advanced features and a user-friendly interface. However, IPTV Smarters and Perfect Player are excellent alternatives.</p>
              </Card>
            </div>
          </section>

          <div className="mt-12 p-6 bg-black/50 rounded-lg brutal-border">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">
              Experience premium IPTV service with our reliable and feature-rich platform. Try our service risk-free with a 24-hour trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/iptv-free-trial-24-hours"
                className="inline-flex items-center justify-center bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="/pricing"
                className="inline-flex items-center justify-center bg-black border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
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

export default FireTvSetup;