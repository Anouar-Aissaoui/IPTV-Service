import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Download, Settings, Play, Wifi, Check, Info, X } from 'lucide-react';
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

const performanceData = [
  { name: 'Formuler Z8', stability: 95, features: 90, userFriendly: 85 },
  { name: 'Other Boxes', stability: 75, features: 70, userFriendly: 65 }
];

const usageStats = [
  { name: 'Live TV', value: 60 },
  { name: 'VOD', value: 25 },
  { name: 'Recording', value: 15 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const FormulerSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Formuler Z8 - Complete Guide 2024"
        description="Learn how to set up IPTV on your Formuler Z8 with our comprehensive guide. Step-by-step instructions for configuring MyFORMULER portal, installing apps, and optimizing your streaming experience."
        keywords={[
          "Formuler Z8 setup",
          "IPTV Formuler configuration",
          "MyFORMULER portal setup",
          "Formuler Z8 IPTV guide",
          "IPTV box configuration",
          "Formuler streaming setup"
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-brutal-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-8">
            How to Setup IPTV on Formuler Z8: Complete Guide
          </h1>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="mb-8">
              <p className="text-xl leading-relaxed">
                The <strong>Formuler Z8</strong> is one of the most popular IPTV boxes available, known for its reliability and user-friendly interface. This comprehensive guide will walk you through the complete setup process, from initial configuration to watching your favorite content.
              </p>
            </div>

            <nav className="mb-12">
              <Card className="p-6 bg-black/50">
                <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  <li><a href="#prerequisites" className="text-primary hover:underline">Prerequisites</a></li>
                  <li><a href="#initial-setup" className="text-primary hover:underline">Initial Setup</a></li>
                  <li><a href="#portal-configuration" className="text-primary hover:underline">MyFORMULER Portal Configuration</a></li>
                  <li><a href="#performance" className="text-primary hover:underline">Performance Analysis</a></li>
                  <li><a href="#troubleshooting" className="text-primary hover:underline">Troubleshooting Guide</a></li>
                  <li><a href="#optimization" className="text-primary hover:underline">Optimization Tips</a></li>
                  <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
                </ul>
              </Card>
            </nav>

            <section id="prerequisites" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
              <Card className="p-6 bg-black/50">
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-green-500" />
                    <span>Formuler Z8 Box with power adapter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-green-500" />
                    <span>HDMI cable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-green-500" />
                    <span>Active internet connection (minimum 10Mbps)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-green-500" />
                    <span>Valid IPTV subscription credentials</span>
                  </li>
                </ul>
              </Card>
            </section>

            <section id="initial-setup" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Initial Setup Process</h2>
              
              <div className="space-y-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">1. Physical Connection</h3>
                    <p className="text-gray-300">
                      Connect your Formuler Z8 to your TV using the HDMI cable. Plug in the power adapter and ensure all connections are secure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">2. Network Setup</h3>
                    <p className="text-gray-300">
                      Navigate to Settings → Network and connect to your Wi-Fi network. For optimal performance, we recommend using a wired ethernet connection.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="portal-configuration" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">MyFORMULER Portal Configuration</h2>
              
              <Card className="p-6 bg-black/50 mb-6">
                <h3 className="text-2xl font-semibold mb-4">Portal Settings</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Setting</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Portal URL</TableCell>
                      <TableCell>http://portal.example.com</TableCell>
                      <TableCell>Your provider's portal address</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>MAC Address</TableCell>
                      <TableCell>Auto-detected</TableCell>
                      <TableCell>Device identifier</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TimeZone</TableCell>
                      <TableCell>Auto/Manual</TableCell>
                      <TableCell>Set according to your location</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </section>

            <section id="performance" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Performance Analysis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 bg-black/50">
                  <h3 className="text-2xl font-semibold mb-4">Device Comparison</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="stability" fill="#8884d8" name="Stability" />
                        <Bar dataKey="features" fill="#82ca9d" name="Features" />
                        <Bar dataKey="userFriendly" fill="#ffc658" name="User Friendly" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                <Card className="p-6 bg-black/50">
                  <h3 className="text-2xl font-semibold mb-4">Usage Distribution</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={usageStats}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {usageStats.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </section>

            <section id="troubleshooting" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Troubleshooting Guide</h2>
              
              <div className="space-y-6">
                <Card className="p-6 bg-black/50">
                  <div className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">No Connection to Portal</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Verify your internet connection</li>
                        <li>Double-check portal URL</li>
                        <li>Confirm MAC address registration</li>
                        <li>Try rebooting the device</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-black/50">
                  <div className="flex items-start gap-4">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Buffering Issues</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Check internet speed (minimum 10Mbps required)</li>
                        <li>Use wired connection when possible</li>
                        <li>Clear cache in settings</li>
                        <li>Adjust stream quality settings</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            <section id="optimization" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Optimization Tips</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-4">Network Optimization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Use wired connection
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Position router closer
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Minimize network congestion
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-4">Device Optimization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Regular system updates
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Clear cache periodically
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      Optimize video settings
                    </li>
                  </ul>
                </Card>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-2">What internet speed do I need?</h3>
                  <p className="text-gray-300">
                    We recommend a minimum of 10Mbps for HD content and 25Mbps for 4K content. A stable connection is more important than raw speed.
                  </p>
                </Card>

                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-2">Can I use VPN with Formuler Z8?</h3>
                  <p className="text-gray-300">
                    Yes, Formuler Z8 supports VPN connections. You can install VPN apps directly from the Google Play Store.
                  </p>
                </Card>

                <Card className="p-6 bg-black/50">
                  <h3 className="text-xl font-semibold mb-2">How do I update my Formuler Z8?</h3>
                  <p className="text-gray-300">
                    Go to Settings → About → System Update to check for and install the latest firmware updates.
                  </p>
                </Card>
              </div>
            </section>

            <div className="mt-12 p-6 bg-black/50 brutal-border brutal-shadow">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6 text-gray-300">
                Experience premium IPTV service with our reliable and feature-rich platform. Try our service risk-free with a 24-hour trial.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/iptv-free-trial-24-hours"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Start Free Trial
                </a>
                <a 
                  href="/pricing"
                  className="bg-black/50 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulerSetup;