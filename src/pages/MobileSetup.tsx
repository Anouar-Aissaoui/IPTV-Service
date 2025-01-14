import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Download, Settings, Play, CheckCircle, AlertTriangle, Wifi, WifiOff } from 'lucide-react';
import OptimizedHelmet from '@/components/seo/OptimizedHelmet';
import { Card } from '@/components/ui/card';
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
} from 'recharts';

const compatibilityData = [
  { name: 'Android', compatibility: 95, apps: 12 },
  { name: 'iOS', compatibility: 90, apps: 8 },
  { name: 'Windows Mobile', compatibility: 85, apps: 6 },
  { name: 'Other', compatibility: 75, apps: 4 },
];

const MobileSetup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <OptimizedHelmet 
        title="How to Setup IPTV on Mobile Devices (2024) - Complete Guide"
        description="Learn how to set up IPTV on Android & iOS devices with our comprehensive guide. Step-by-step instructions for mobile IPTV apps, troubleshooting tips, and expert recommendations."
        keywords={[
          "mobile IPTV setup",
          "IPTV Android setup",
          "iOS IPTV installation",
          "IPTV mobile app guide",
          "smartphone IPTV configuration",
          "IPTV player mobile",
          "mobile streaming setup",
          "IPTV mobile tutorial"
        ]}
        type="article"
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
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-white">
            Complete Guide: How to Setup IPTV on Mobile Devices (2025)
          </h1>

          <div className="mb-8 text-xl leading-relaxed text-gray-300">
            Welcome to our comprehensive guide on setting up <strong>IPTV on mobile devices</strong>. Whether you're using an Android phone, iPhone, or tablet, this tutorial will walk you through everything you need to know about mobile IPTV streaming. With the rising popularity of <Link to="/premium-iptv-service" className="text-primary hover:underline">premium IPTV services</Link>, watching your favorite content on mobile devices has never been easier.
          </div>

          <nav className="mb-12 p-6 bg-black/50 rounded-lg brutal-border">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-primary hover:underline">Introduction to Mobile IPTV</a></li>
              <li><a href="#compatibility" className="text-primary hover:underline">Device Compatibility</a></li>
              <li><a href="#prerequisites" className="text-primary hover:underline">Prerequisites</a></li>
              <li><a href="#android-setup" className="text-primary hover:underline">Android Setup Guide</a></li>
              <li><a href="#ios-setup" className="text-primary hover:underline">iOS Setup Guide</a></li>
              <li><a href="#recommended-apps" className="text-primary hover:underline">Recommended IPTV Apps</a></li>
              <li><a href="#troubleshooting" className="text-primary hover:underline">Troubleshooting Guide</a></li>
              <li><a href="#optimization" className="text-primary hover:underline">Performance Optimization</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ul>
          </nav>

          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Introduction to Mobile IPTV</h2>
            <p className="mb-4">
              <strong>Mobile IPTV streaming</strong> has revolutionized how we consume television content. With our <Link to="/premium-iptv-service" className="text-primary hover:underline">IPTV subscription</Link>, you can access:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>40,000+ live channels worldwide</li>
              <li>54,000+ movies and TV shows on demand</li>
              <li>Premium sports coverage including PPV events</li>
              <li>4K and HD streaming quality</li>
              <li>Multi-device compatibility</li>
            </ul>
          </section>

          <section id="compatibility" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Device Compatibility</h2>
            <div className="mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={compatibilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="compatibility" fill="#F97316" name="Compatibility %" />
                  <Bar dataKey="apps" fill="#22c55e" name="Available Apps" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform</TableHead>
                  <TableHead>Minimum Version</TableHead>
                  <TableHead>Recommended Apps</TableHead>
                  <TableHead>Performance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Android</TableCell>
                  <TableCell>Android 6.0+</TableCell>
                  <TableCell>IPTV Smarters, TiviMate</TableCell>
                  <TableCell>Excellent</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>iOS</TableCell>
                  <TableCell>iOS 12.0+</TableCell>
                  <TableCell>GSE IPTV, IPTV Smarters</TableCell>
                  <TableCell>Very Good</TableCell>
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
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Active IPTV subscription</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Compatible mobile device</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Stable internet connection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>IPTV player app</span>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Recommended</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-primary" />
                    <span>5Mbps+ internet speed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-primary" />
                    <span>Latest OS version</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <span>Recent device model</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="android-setup" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Android Setup Guide</h2>
            <div className="space-y-6">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">1. Install IPTV Player</h3>
                  <p className="text-gray-300">
                    Visit the Google Play Store and search for recommended IPTV players like IPTV Smarters Pro or TiviMate. Download and install your preferred player.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">2. Configure the App</h3>
                  <p className="text-gray-300">
                    Open your installed IPTV player app. Navigate to settings or playlist section. Enter your M3U URL or upload your playlist file.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">3. Start Watching</h3>
                  <p className="text-gray-300">
                    Once configured, your channels will load automatically. Browse through categories and start enjoying your content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="ios-setup" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">iOS Setup Guide</h2>
            <div className="space-y-6">
              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">1. Download from App Store</h3>
                  <p className="text-gray-300">
                    Open the App Store and search for GSE IPTV or IPTV Smarters Pro. Download and install the app on your iOS device.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">2. Add Your Playlist</h3>
                  <p className="text-gray-300">
                    Launch the app and locate the add playlist option. Enter your M3U URL or import your playlist file.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F97316] flex items-center justify-center brutal-border brutal-shadow">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">3. Enjoy Your Content</h3>
                  <p className="text-gray-300">
                    After configuration, you can start watching your favorite channels and VOD content.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting Guide</h2>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <WifiOff className="w-5 h-5 text-red-500" />
                  Streaming Issues
                </h3>
                <ul className="space-y-2">
                  <li>• Check your internet connection speed</li>
                  <li>• Clear app cache and data</li>
                  <li>• Try different video players</li>
                  <li>• Verify your subscription status</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Common Problems
                </h3>
                <ul className="space-y-2">
                  <li>• Buffering issues</li>
                  <li>• Playlist not loading</li>
                  <li>• App crashes</li>
                  <li>• Video quality problems</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="optimization" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Performance Optimization</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Network Tips</h3>
                <ul className="space-y-2">
                  <li>• Use 5GHz WiFi when possible</li>
                  <li>• Keep device close to router</li>
                  <li>• Avoid VPN for better speed</li>
                  <li>• Close background apps</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">App Settings</h3>
                <ul className="space-y-2">
                  <li>• Adjust buffer size</li>
                  <li>• Choose appropriate quality</li>
                  <li>• Enable hardware acceleration</li>
                  <li>• Update app regularly</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What internet speed do I need?</h3>
                <p className="text-gray-300">
                  We recommend a minimum of 5 Mbps for HD streaming and 25 Mbps for 4K content. For optimal performance, use a stable WiFi connection.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I use mobile data?</h3>
                <p className="text-gray-300">
                  Yes, you can use mobile data, but be mindful of your data plan as streaming can consume significant bandwidth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How many devices can I connect?</h3>
                <p className="text-gray-300">
                  This depends on your subscription plan. Check our <Link to="/pricing" className="text-primary hover:underline">pricing page</Link> for details about simultaneous connections.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 p-6 bg-black/50 rounded-lg brutal-border">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">
              Experience premium IPTV service on your mobile device with our reliable and feature-rich platform.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/iptv-free-trial-24-hours"
                className="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors brutal-border brutal-shadow"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/pricing"
                className="bg-black/50 text-primary border-2 border-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors brutal-border brutal-shadow"
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

export default MobileSetup;