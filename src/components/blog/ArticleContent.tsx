import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
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

const providerStats = [
  { name: 'IPTV Service', channels: 40000, vod: 54000, rating: 4.8, price: 14.99 },
  { name: 'GetMaxTv', channels: 35000, vod: 48000, rating: 4.6, price: 19.99 },
  { name: 'XtremeHD IPTV UK', channels: 38000, vod: 50000, rating: 4.7, price: 16.99 },
  { name: 'UltraIPTV', channels: 32000, vod: 45000, rating: 4.5, price: 15.99 }
];

const contentTypes = [
  { name: 'Live TV', value: 40 },
  { name: 'Movies', value: 25 },
  { name: 'Sports', value: 20 },
  { name: 'Series', value: 15 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const ArticleContent: React.FC = () => {
  return (
    <article className="prose prose-lg prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-8">Best IPTV Service Providers Subscriptions: Complete Guide 2025</h1>
      
      <div className="mb-8">
        <p className="text-xl leading-relaxed">
          Looking for the best <strong>IPTV subscription</strong>? Our comprehensive guide covers everything you need to know about <strong>IPTV providers</strong> and how to <strong>buy IPTV</strong> services. Whether you're searching for <strong>IPTV subscriptions</strong> in the USA, UK, or worldwide, we've got you covered with the most reliable <strong>IPTV suppliers</strong> and <strong>IPTV services</strong> available in 2025.
        </p>
      </div>

      <nav className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#what-is-iptv" className="text-neon hover:underline">What is IPTV?</a></li>
          <li><a href="#choosing-provider" className="text-neon hover:underline">How to Choose an IPTV Provider</a></li>
          <li><a href="#top-providers" className="text-neon hover:underline">Top IPTV Providers Comparison</a></li>
          <li><a href="#content-distribution" className="text-neon hover:underline">Content Distribution Analysis</a></li>
          <li><a href="#features" className="text-neon hover:underline">Essential Features to Consider</a></li>
          <li><a href="#setup-guide" className="text-neon hover:underline">Setup Guide</a></li>
          <li><a href="#pricing-comparison" className="text-neon hover:underline">Pricing Comparison</a></li>
          <li><a href="#faq" className="text-neon hover:underline">Frequently Asked Questions</a></li>
        </ul>
      </nav>

      <section id="what-is-iptv" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What is IPTV?</h2>
        <p className="mb-4">
          <strong>Internet Protocol Television (IPTV)</strong> represents the future of content delivery, offering television services through Internet Protocol (IP) networks. Unlike traditional cable or satellite TV, 
          <Link to="/iptv-setup-tutorials" className="text-neon hover:underline"> IPTV technology</Link> provides unprecedented flexibility and accessibility.
        </p>
        <p className="mb-4">
          As a leading <strong>IPTV provider</strong>, we understand that choosing the right <strong>IPTV service</strong> is crucial. Our platform delivers:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access to 40,000+ live channels worldwide</li>
          <li>54,000+ movies and TV shows on demand</li>
          <li>Premium sports coverage including PPV events</li>
          <li>4K and HD streaming quality</li>
          <li>Multi-device compatibility</li>
        </ul>
      </section>

      <section id="choosing-provider" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Choose an IPTV Provider</h2>
        <Card className="p-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Key Selection Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Technical Aspects</h4>
              <ul className="space-y-2">
                <li>✓ Server reliability and uptime</li>
                <li>✓ Streaming quality (HD/4K support)</li>
                <li>✓ Connection stability</li>
                <li>✓ Buffer-free playback</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Service Features</h4>
              <ul className="space-y-2">
                <li>✓ Channel selection variety</li>
                <li>✓ VOD content library size</li>
                <li>✓ EPG (Electronic Program Guide)</li>
                <li>✓ Multi-device support</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section id="top-providers" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Top IPTV Providers Comparison</h2>
        
        <div className="mb-8">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={providerStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="channels" fill="#8884d8" name="Live Channels" />
              <Bar dataKey="vod" fill="#82ca9d" name="VOD Content" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Provider</TableHead>
              <TableHead>Channels</TableHead>
              <TableHead>VOD Content</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Starting Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {providerStats.map((provider) => (
              <TableRow key={provider.name}>
                <TableCell>{provider.name}</TableCell>
                <TableCell>{provider.channels.toLocaleString()}</TableCell>
                <TableCell>{provider.vod.toLocaleString()}</TableCell>
                <TableCell>{provider.rating}/5.0</TableCell>
                <TableCell>${provider.price}/mo</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section id="content-distribution" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Content Distribution Analysis</h2>
        <div className="mb-8">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={contentTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {contentTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section id="features" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Essential Features to Consider</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Content Library</h3>
            <ul className="space-y-2">
              <li>• Live TV Channels</li>
              <li>• Movies and TV Shows</li>
              <li>• Sports Coverage</li>
              <li>• International Content</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Technical Features</h3>
            <ul className="space-y-2">
              <li>• Multi-device Support</li>
              <li>• HD/4K Quality</li>
              <li>• EPG (Electronic Program Guide)</li>
              <li>• Catch-up TV</li>
            </ul>
          </Card>
        </div>
      </section>

      <section id="setup-guide" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Setup Guide</h2>
        <p className="mb-4">
          Setting up your IPTV service is straightforward. Follow our detailed guides for various devices:
        </p>
        <ul className="space-y-2">
          <li>
            <Link to="/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv" className="text-neon hover:underline">
              Smart TV Setup Guide
            </Link>
          </li>
          <li>
            <Link to="/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick" className="text-neon hover:underline">
              Fire TV Stick Setup Guide
            </Link>
          </li>
          <li>
            <Link to="/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices" className="text-neon hover:underline">
              Mobile Devices Setup Guide
            </Link>
          </li>
        </ul>
      </section>

      <section id="pricing-comparison" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Pricing Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Monthly Plan</h3>
            <p className="text-3xl font-bold mb-2">$14.99</p>
            <ul className="space-y-2">
              <li>✓ Full channel access</li>
              <li>✓ HD quality</li>
              <li>✓ 1 connection</li>
            </ul>
          </Card>
          <Card className="p-6 border-neon">
            <h3 className="text-2xl font-semibold mb-4">Quarterly Plan</h3>
            <p className="text-3xl font-bold mb-2">$35.99</p>
            <ul className="space-y-2">
              <li>✓ Full channel access</li>
              <li>✓ HD & 4K quality</li>
              <li>✓ 2 connections</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Annual Plan</h3>
            <p className="text-3xl font-bold mb-2">$119.99</p>
            <ul className="space-y-2">
              <li>✓ Full channel access</li>
              <li>✓ HD & 4K quality</li>
              <li>✓ 4 connections</li>
            </ul>
          </Card>
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Is IPTV legal?</h3>
            <p>IPTV technology itself is legal. However, the legality depends on the content being streamed and the provider's licensing agreements.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What internet speed do I need?</h3>
            <p>We recommend a minimum of 25 Mbps for HD streaming and 50 Mbps for 4K content.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">How many devices can I connect?</h3>
            <p>This depends on your subscription plan, ranging from 1 to 4 simultaneous connections.</p>
          </div>
        </div>
      </section>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-4">
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
    </article>
  );
};