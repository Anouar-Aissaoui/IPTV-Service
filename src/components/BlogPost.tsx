import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlurImage } from "./ui/blur-image";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to IPTV Streaming in 2024",
    content: `
      <p>IPTV (Internet Protocol Television) has revolutionized how we consume television content. This comprehensive guide will walk you through everything you need to know about IPTV streaming in 2024.</p>
      
      <h2>What is IPTV?</h2>
      <p>IPTV is a service that delivers television content over Internet Protocol (IP) networks. Unlike traditional TV services, IPTV allows users to stream their favorite content anytime, anywhere, using various devices.</p>
      
      <h2>Benefits of IPTV</h2>
      <ul>
        <li>Access to thousands of channels worldwide</li>
        <li>Video-on-demand content</li>
        <li>Multi-device compatibility</li>
        <li>High-quality streaming</li>
        <li>Cost-effective entertainment solution</li>
      </ul>
    `,
    image: "/lovable-uploads/62b3cd9e-1589-432c-b117-d855ac8f0b81.png",
    date: "March 19, 2024",
    imageHash: "LRG8}V?bxuWB~qofM{WB%MWBRjay"
  },
  {
    id: 2,
    title: "Best IPTV Apps for Smart TVs",
    content: `
      <p>Choosing the right IPTV app for your Smart TV can significantly enhance your streaming experience. Here's our curated list of the best IPTV applications available in 2024.</p>
      
      <h2>Top IPTV Apps</h2>
      <p>We've tested numerous IPTV apps and selected the best ones based on performance, user interface, and features.</p>
      
      <h2>Features to Look For</h2>
      <ul>
        <li>Electronic Program Guide (EPG)</li>
        <li>Multi-screen support</li>
        <li>Recording capabilities</li>
        <li>Catch-up TV</li>
        <li>User-friendly interface</li>
      </ul>
    `,
    image: "/lovable-uploads/74cadd1d-7f11-4677-9cfc-3342545d312f.png",
    date: "March 18, 2024",
    imageHash: "LRG8}V?bxuWB~qofM{WB%MWBRjay"
  },
  {
    id: 3,
    title: "How to Choose the Right IPTV Service",
    content: `
      <p>With numerous IPTV services available, choosing the right one can be overwhelming. This guide will help you make an informed decision.</p>
      
      <h2>Key Considerations</h2>
      <ul>
        <li>Channel selection and quality</li>
        <li>Pricing and subscription options</li>
        <li>Customer support availability</li>
        <li>Server reliability and uptime</li>
        <li>Compatible devices</li>
      </ul>
      
      <h2>Red Flags to Watch Out For</h2>
      <p>Be cautious of services that seem too good to be true or have these warning signs...</p>
    `,
    image: "/lovable-uploads/68c06c7a-d842-491a-a970-14726b960bc0.png",
    date: "March 17, 2024",
    imageHash: "LRG8}V?bxuWB~qofM{WB%MWBRjay"
  }
];

export const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
        <Link to="/blog">
          <Button className="bg-[#F97316] text-white hover:bg-[#F97316]/90">
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link to="/blog">
        <Button variant="ghost" className="mb-6 text-[#F97316] hover:text-white hover:bg-[#F97316]/20">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>
      </Link>
      
      <article className="max-w-4xl mx-auto">
        <BlurImage
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
          hash={post.imageHash}
        />
        
        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
        <div className="text-[#F97316] mb-8">{post.date}</div>
        
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};