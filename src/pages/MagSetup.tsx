import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor, Download, Settings, Play, Wifi, Cable, CheckCircle2, AlertCircle } from 'lucide-react';
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
  { model: 'MAG 322', success: 95, issues: 5 },
  { model: 'MAG 324', success: 98, issues: 2 },
  { model: 'MAG 420', success: 97, issues: 3 },
  { model: 'MAG 520', success: 99, issues: 1 }
];

const featureUsage = [
  { name: 'Live TV', value: 45 },
  { name: 'VOD', value: 30 },
  { name: 'Recording', value: 15 },
  { name: 'TimeShift', value: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MagSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on MAG Box - Complete Configuration Guide 2025"
        description="Learn how to set up IPTV on your MAG box with our comprehensive step-by-step guide. Includes troubleshooting tips, model compatibility, and expert recommendations for optimal streaming."
        keywords={[
          "MAG box IPTV setup",
          "MAG IPTV configuration",
          "IPTV on MAG",
          "MAG box installation",
          "IPTV player MAG",
          "MAG 322 setup",
          "MAG 324 setup",
          "MAG 420 setup",
          "MAG 520 setup",
          "MAG box streaming"
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

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-brutal-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-white mb-8">
            Complete Guide: How to Setup IPTV on MAG Box (2025)
          </h1>

          <div className="mb-8">
            <p className="text-xl leading-relaxed">
              Setting up <strong>IPTV on your MAG box</strong> is a straightforward process that can give you access to thousands of channels and on-demand content. This comprehensive guide will walk you through every step to ensure a successful setup of your <strong>MAG box IPTV service</strong>.
            </p>
          </div>

          <nav className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#compatibility" className="text-neon hover:underline">MAG Box Compatibility</a></li>
              <li><a href="#prerequisites" className="text-neon hover:underline">Prerequisites</a></li>
              <li><a href="#setup-steps" className="text-neon hover:underline">Step-by-Step Setup Guide</a></li>
              <li><a href="#troubleshooting" className="text-neon hover:underline">Troubleshooting Common Issues</a></li>
              <li><a href="#optimization" className="text-neon hover:underline">Performance Optimization</a></li>
              <li><a href="#faq" className="text-neon hover:underline">Frequently Asked Questions</a></li>
            </ul>
          </nav>

          <section id="compatibility" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">MAG Box Compatibility</h2>
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={compatibilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="model" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="success" fill="#22c55e" name="Success Rate (%)" />
                  <Bar dataKey="issues" fill="#ef4444" name="Issue Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Model</TableHead>
                  <TableHead>Firmware Version</TableHead>
                  <TableHead>Recommended</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>MAG 322/323</TableCell>
                  <TableCell>Latest</TableCell>
                  <TableCell>✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MAG 324/325</TableCell>
                  <TableCell>Latest</TableCell>
                  <TableCell>✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MAG 420</TableCell>
                  <TableCell>Latest</TableCell>
                  <TableCell>✓</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MAG 520</TableCell>
                  <TableCell>Latest</TableCell>
                  <TableCell>✓</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <section id="prerequisites" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Required Items</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>MAG Box Device</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Active Internet Connection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>IPTV Subscription</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Portal URL</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Network Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-blue-500" />
                    <span>Minimum 10 Mbps Internet Speed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Cable className="w-5 h-5 text-yellow-500" />
                    <span>Ethernet Connection (Recommended)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <span>Stable Connection Required</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="setup-steps" className="space-y-12">
            <h2 className="text-3xl font-bold mb-6">Step-by-Step Setup Guide</h2>
            
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">1. Access Settings</h3>
                <p className="text-gray-400 mb-4">
                  Navigate to the Settings menu on your MAG box by following these steps:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Press the MENU button on your remote</li>
                  <li>Select "System Settings"</li>
                  <li>Choose "Servers"</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">2. Configure Portal</h3>
                <p className="text-gray-400 mb-4">
                  Enter your portal URL and credentials:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Select "Portal 1 URL"</li>
                  <li>Enter the portal address provided by your IPTV service</li>
                  <li>Save the settings</li>
                  <li>Restart your MAG box when prompted</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">3. Start Watching</h3>
                <p className="text-gray-400 mb-4">
                  After the restart, your MAG box will load the IPTV service:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Wait for the portal to load</li>
                  <li>Navigate through available channels</li>
                  <li>Access VOD content through the menu</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="troubleshooting" className="mt-12 mb-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting Common Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Connection Issues</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Check internet connection stability</li>
                  <li>• Verify portal URL for typos</li>
                  <li>• Test with ethernet connection</li>
                  <li>• Clear portal cache</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Playback Problems</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Update MAG box firmware</li>
                  <li>• Check subscription status</li>
                  <li>• Verify stream format compatibility</li>
                  <li>• Reset MAG box to factory settings</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="optimization" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Performance Optimization</h2>
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={featureUsage}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {featureUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Optimization Tips</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Use wired connection when possible</li>
                <li>• Keep firmware updated</li>
                <li>• Clear cache periodically</li>
                <li>• Adjust buffer settings</li>
                <li>• Monitor bandwidth usage</li>
              </ul>
            </Card>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What internet speed do I need?</h3>
                <p className="text-gray-400">
                  We recommend a minimum of 10 Mbps for SD content, 25 Mbps for HD, and 50 Mbps for 4K streaming.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I use VPN with MAG box?</h3>
                <p className="text-gray-400">
                  Yes, you can configure VPN at router level to work with your MAG box.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I update my MAG box?</h3>
                <p className="text-gray-400">
                  Updates can be performed through the System Settings menu when connected to the internet.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-4 text-gray-400">
              Experience premium IPTV service with our reliable and feature-rich platform.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/iptv-free-trial-24-hours"
                className="bg-neon text-black px-6 py-3 rounded-lg font-semibold hover:bg-neon/90 transition-colors"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/pricing"
                className="bg-background border border-neon text-neon px-6 py-3 rounded-lg font-semibold hover:bg-neon/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MagSetup;