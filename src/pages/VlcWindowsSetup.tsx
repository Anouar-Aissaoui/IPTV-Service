import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Settings, Play, Network, HelpCircle, Info, CheckCircle2, XCircle } from 'lucide-react';
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { ContentWrapper } from '@/components/layout/ContentWrapper';

const performanceData = [
  { name: 'CPU Usage', windows: 15, mac: 18, linux: 16 },
  { name: 'Memory Usage', windows: 250, mac: 280, linux: 260 },
  { name: 'Startup Time', windows: 2.5, mac: 2.8, linux: 2.6 }
];

const featureUsageData = [
  { name: 'Live TV', value: 45 },
  { name: 'VOD', value: 30 },
  { name: 'EPG', value: 15 },
  { name: 'Recording', value: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const VlcWindowsSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on VLC Media Player - Complete Windows Guide 2024"
        description="Learn how to install and configure IPTV on VLC Media Player for Windows with our detailed setup guide. Step-by-step instructions for the best streaming experience."
        keywords={[
          "VLC IPTV setup",
          "Windows IPTV player",
          "VLC Media Player",
          "IPTV streaming guide",
          "VLC configuration",
          "IPTV Windows setup",
          "VLC player tutorial",
          "M3U playlist VLC",
          "IPTV streaming Windows",
          "VLC media settings"
        ]}
        pageType="tutorial"
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

      <ContentWrapper className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
              How to Setup IPTV on VLC Media Player: Complete Windows Guide
            </h1>

            <div className="mb-8 text-xl leading-relaxed text-gray-300">
              <p>
                Setting up <strong>IPTV on VLC Media Player</strong> is one of the most versatile and cost-effective ways to enjoy streaming content on your Windows PC. This comprehensive guide will walk you through the entire process, from installation to optimization, ensuring you get the best possible streaming experience.
              </p>
            </div>

            {/* Table of Contents */}
            <Card className="p-6 mb-8 bg-black/50">
              <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
              <nav>
                <ul className="space-y-2">
                  <li><a href="#prerequisites" className="text-[#F97316] hover:underline">Prerequisites</a></li>
                  <li><a href="#installation" className="text-[#F97316] hover:underline">VLC Installation Guide</a></li>
                  <li><a href="#configuration" className="text-[#F97316] hover:underline">IPTV Configuration Steps</a></li>
                  <li><a href="#optimization" className="text-[#F97316] hover:underline">Performance Optimization</a></li>
                  <li><a href="#troubleshooting" className="text-[#F97316] hover:underline">Troubleshooting Common Issues</a></li>
                  <li><a href="#faq" className="text-[#F97316] hover:underline">Frequently Asked Questions</a></li>
                </ul>
              </nav>
            </Card>

            {/* Prerequisites Section */}
            <section id="prerequisites" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Windows 7 or later
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      2GB RAM minimum
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Stable internet connection
                    </li>
                  </ul>
                </Card>
                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-4">Required Items</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Valid IPTV subscription
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      M3U playlist URL
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      EPG URL (optional)
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Installation Section */}
            <section id="installation" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">VLC Installation Guide</h2>
              <div className="space-y-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">1. Download VLC Media Player</h3>
                    <p className="text-gray-300 mb-4">
                      Visit the official <a href="https://www.videolan.org/vlc/" target="_blank" rel="noopener noreferrer" className="text-[#F97316] hover:underline">VideoLAN website</a> and download the latest version for Windows.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">2. Install VLC</h3>
                    <p className="text-gray-300 mb-4">
                      Run the installer and follow the installation wizard. Choose the default settings unless you have specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Configuration Section */}
            <section id="configuration" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">IPTV Configuration Steps</h2>
              <div className="space-y-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">3. Add IPTV Playlist</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                      <li>Open VLC Media Player</li>
                      <li>Click on Media {'->'} Open Network Stream (Ctrl+N)</li>
                      <li>Paste your M3U playlist URL</li>
                      <li>Click Play</li>
                    </ol>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">4. Start Watching</h3>
                    <p className="text-gray-300 mb-4">
                      Once loaded, use the Playlist view (View {'->'} Playlist) to browse and select channels.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Charts */}
            <section id="optimization" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Performance Optimization</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Resource Usage Comparison</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="windows" fill="#0088FE" name="Windows" />
                      <Bar dataKey="mac" fill="#00C49F" name="Mac" />
                      <Bar dataKey="linux" fill="#FFBB28" name="Linux" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">Feature Usage Distribution</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie
                        data={featureUsageData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {featureUsageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section id="troubleshooting" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Troubleshooting Common Issues</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="buffering">
                  <AccordionTrigger className="text-xl">
                    <div className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Buffering Issues
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Increase network buffer in VLC settings</li>
                      <li>• Check your internet connection speed</li>
                      <li>• Try different stream formats</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="playback">
                  <AccordionTrigger className="text-xl">
                    <div className="flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Playback Problems
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <ul className="space-y-2">
                      <li>• Update VLC to the latest version</li>
                      <li>• Clear VLC's cache</li>
                      <li>• Verify M3U URL validity</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-2">Is VLC Player free to use?</h3>
                  <p className="text-gray-300">
                    Yes, VLC Media Player is completely free and open-source software.
                  </p>
                </Card>
                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-2">Can I record IPTV streams with VLC?</h3>
                  <p className="text-gray-300">
                    Yes, VLC supports recording streams. Use View {'->'} Advanced Controls to show the record button.
                  </p>
                </Card>
              </div>
            </section>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-black/50 rounded-lg border-2 border-[#F97316]">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Streaming?</h2>
              <p className="mb-6 text-gray-300">
                Get access to premium IPTV content with our reliable and feature-rich service.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/iptv-free-trial-24-hours"
                  className="bg-[#F97316] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F97316]/90 transition-colors inline-flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Start Free Trial
                </a>
                <a 
                  href="/pricing"
                  className="bg-transparent border-2 border-[#F97316] text-[#F97316] px-6 py-3 rounded-lg font-semibold hover:bg-[#F97316]/10 transition-colors inline-flex items-center gap-2"
                >
                  <Info className="w-5 h-5" />
                  View Pricing
                </a>
              </div>
            </div>
          </article>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default VlcWindowsSetup;