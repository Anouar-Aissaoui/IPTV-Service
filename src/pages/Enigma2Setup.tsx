import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, Download, Settings, Play, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';
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
  { name: 'Enigma2', success: 95, issues: 5 },
  { name: 'Vu+', success: 92, issues: 8 },
  { name: 'Zgemma', success: 90, issues: 10 },
  { name: 'GigaBlue', success: 88, issues: 12 }
];

const featureUsageData = [
  { name: 'Live TV', value: 45 },
  { name: 'VOD', value: 25 },
  { name: 'EPG', value: 20 },
  { name: 'Recording', value: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Enigma2Setup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Enigma2/Vu+ Receivers (2024 Guide) | Complete Tutorial"
        description="Learn how to set up IPTV on Enigma2, Vu+, and compatible receivers with our comprehensive step-by-step guide. Includes troubleshooting tips and optimization techniques."
        keywords={[
          "Enigma2 IPTV setup",
          "Vu+ IPTV configuration",
          "IPTV on Enigma2",
          "Enigma2 streaming setup",
          "Vu+ box IPTV guide",
          "Enigma2 M3U playlist",
          "IPTV receiver setup",
          "Enigma2 channel list"
        ]}
      />
      
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
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            Complete Guide: How to Setup IPTV on Enigma2/Vu+ Receivers
          </h1>

          <div className="mb-8 text-xl leading-relaxed text-gray-300">
            Setting up <strong>IPTV on Enigma2</strong> or <strong>Vu+ receivers</strong> can significantly enhance your entertainment options. This comprehensive guide will walk you through the entire process, from initial configuration to advanced features and troubleshooting.
          </div>

          <nav className="mb-12">
            <Card className="p-6 bg-black/50">
              <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                <li><a href="#compatibility" className="text-primary hover:underline">Device Compatibility</a></li>
                <li><a href="#prerequisites" className="text-primary hover:underline">Prerequisites</a></li>
                <li><a href="#setup-process" className="text-primary hover:underline">Setup Process</a></li>
                <li><a href="#optimization" className="text-primary hover:underline">Performance Optimization</a></li>
                <li><a href="#troubleshooting" className="text-primary hover:underline">Troubleshooting Guide</a></li>
                <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
              </ul>
            </Card>
          </nav>

          <section id="compatibility" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Device Compatibility</h2>
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={compatibilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="success" fill="#0088FE" name="Success Rate %" />
                  <Bar dataKey="issues" fill="#FF8042" name="Issue Rate %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device Type</TableHead>
                  <TableHead>Compatibility</TableHead>
                  <TableHead>Recommended Firmware</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Enigma2</TableCell>
                  <TableCell>Excellent</TableCell>
                  <TableCell>OpenATV 7.0+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vu+</TableCell>
                  <TableCell>Excellent</TableCell>
                  <TableCell>BlackHole 3.1.0+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Zgemma</TableCell>
                  <TableCell>Good</TableCell>
                  <TableCell>OpenPLi 8.0+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>GigaBlue</TableCell>
                  <TableCell>Good</TableCell>
                  <TableCell>OpenViX 5.4+</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section id="prerequisites" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
            <Card className="p-6 bg-black/50 mb-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>A compatible Enigma2 or Vu+ receiver with latest firmware</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>Stable internet connection (minimum 10 Mbps recommended)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>Valid <a href="/iptv-free-trial-24-hours" className="text-primary hover:underline">IPTV subscription</a> with M3U URL or Xtream Codes credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>Basic knowledge of your receiver's menu system</span>
                </li>
              </ul>
            </Card>
          </section>

          <section id="setup-process" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Setup Process</h2>
            
            <div className="space-y-8">
              <Card className="p-6 bg-black/50">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Access Settings Menu</h3>
                    <p>Navigate to the main menu of your Enigma2/Vu+ receiver and locate the settings or configuration section.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-black/50">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Add IPTV Source</h3>
                    <p>Select 'Add IPTV Source' or similar option. Enter your M3U URL or Xtream Codes credentials in the appropriate fields.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-black/50">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Configure Settings</h3>
                    <p>Adjust buffer size, timeout settings, and EPG options for optimal performance.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-black/50">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Start Watching</h3>
                    <p>Access your channels through the channel list. Use your remote to navigate through categories.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section id="optimization" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Performance Optimization</h2>
            
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={featureUsageData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
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

            <Card className="p-6 bg-black/50 mb-6">
              <h3 className="text-xl font-semibold mb-4">Recommended Settings</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Setting</TableHead>
                    <TableHead>Recommended Value</TableHead>
                    <TableHead>Impact</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Buffer Size</TableCell>
                    <TableCell>8192 KB</TableCell>
                    <TableCell>Reduces stuttering</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>EPG Cache</TableCell>
                    <TableCell>7 days</TableCell>
                    <TableCell>Optimal guide loading</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Connection Timeout</TableCell>
                    <TableCell>30 seconds</TableCell>
                    <TableCell>Better stability</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </section>

          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting Guide</h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Buffering Issues</h3>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Check internet connection speed</li>
                      <li>Increase buffer size in settings</li>
                      <li>Clear EPG cache</li>
                      <li>Try different stream quality</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Connection Problems</h3>
                    <ul className="list-disc pl-4 space-y-2">
                      <li>Verify M3U URL or credentials</li>
                      <li>Check network settings</li>
                      <li>Restart receiver</li>
                      <li>Update firmware if needed</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Can I record IPTV streams?</h3>
                    <p>Yes, most Enigma2 receivers support recording IPTV streams to an external USB drive or internal hard disk.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Do I need a VPN?</h3>
                    <p>While not required, a VPN can improve streaming stability and protect your privacy.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-black/50">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">How often should I update EPG?</h3>
                    <p>We recommend updating EPG data daily for the most accurate program information.</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <div className="mt-12 p-6 bg-black/50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-4">
              Experience premium IPTV service with our reliable and feature-rich platform.
            </p>
            <div className="flex gap-4">
              <a 
                href="/iptv-free-trial-24-hours"
                className="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="/pricing"
                className="bg-background border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
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

export default Enigma2Setup;