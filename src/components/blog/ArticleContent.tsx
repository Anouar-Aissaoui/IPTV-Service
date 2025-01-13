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
  ResponsiveContainer
} from 'recharts';

const providerStats = [
  { name: 'IPTV Service', channels: 40000, vod: 54000, rating: 4.8 },
  { name: 'GetMaxTv', channels: 35000, vod: 48000, rating: 4.6 },
  { name: 'XtremeHD IPTV UK', channels: 38000, vod: 50000, rating: 4.7 },
];

export const ArticleContent: React.FC = () => {
  return (
    <article className="prose prose-lg prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-8">Best IPTV Service Providers Subscriptions</h1>
      
      <div className="mb-8">
        <p className="text-xl leading-relaxed">
          In today's digital age, <strong>IPTV services</strong> have revolutionized how we consume television content. 
          This comprehensive guide will help you navigate through the best IPTV providers of 2024, ensuring you make an 
          informed decision for your entertainment needs.
        </p>
      </div>

      <nav className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#what-is-iptv" className="text-neon hover:underline">What is IPTV?</a></li>
          <li><a href="#choosing-provider" className="text-neon hover:underline">How to Choose an IPTV Provider</a></li>
          <li><a href="#top-providers" className="text-neon hover:underline">Top IPTV Providers Comparison</a></li>
          <li><a href="#features" className="text-neon hover:underline">Essential Features to Consider</a></li>
          <li><a href="#setup-guide" className="text-neon hover:underline">Setup Guide</a></li>
        </ul>
      </nav>

      <section id="what-is-iptv" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What is IPTV?</h2>
        <p className="mb-4">
          <strong>Internet Protocol Television (IPTV)</strong> delivers television content over Internet Protocol (IP) 
          networks. Unlike traditional cable or satellite TV, IPTV offers greater flexibility and accessibility, allowing 
          you to watch your favorite content on various devices.
        </p>
        <Link to="/iptv-setup-tutorials" className="text-neon hover:underline">
          Learn more about IPTV technology →
        </Link>
      </section>

      <section id="choosing-provider" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">How to Choose an IPTV Provider</h2>
        <Card className="p-6 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Key Factors to Consider</h3>
          <ul className="space-y-3">
            <li>✓ Channel Selection and Quality</li>
            <li>✓ Streaming Reliability</li>
            <li>✓ Device Compatibility</li>
            <li>✓ Customer Support</li>
            <li>✓ Pricing Plans</li>
          </ul>
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
              <Bar dataKey="channels" fill="#8884d8" name="Channels" />
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {providerStats.map((provider) => (
              <TableRow key={provider.name}>
                <TableCell>{provider.name}</TableCell>
                <TableCell>{provider.channels.toLocaleString()}</TableCell>
                <TableCell>{provider.vod.toLocaleString()}</TableCell>
                <TableCell>{provider.rating}/5.0</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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