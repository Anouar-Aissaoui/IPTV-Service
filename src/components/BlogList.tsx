import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BlurImage } from "./ui/blur-image";

const blogPosts = [
  {
    id: 1,
    title: "Ultimate Guide to IPTV Streaming in 2024",
    description: "Everything you need to know about IPTV streaming services and how to get started.",
    image: "/lovable-uploads/62b3cd9e-1589-432c-b117-d855ac8f0b81.png",
    date: "March 19, 2024",
    imageHash: "LRG8}V?bxuWB~qofM{WB%MWBRjay"
  },
  {
    id: 2,
    title: "Best IPTV Apps for Smart TVs",
    description: "A comprehensive comparison of the top IPTV applications for your Smart TV.",
    image: "/lovable-uploads/74cadd1d-7f11-4677-9cfc-3342545d312f.png",
    date: "March 18, 2024",
    imageHash: "LRG8}V?bxuWB~qofM{WB%MWBRjay"
  },
  {
    id: 3,
    title: "How to Choose the Right IPTV Service",
    description: "Key factors to consider when selecting an IPTV service provider.",
    image: "/lovable-uploads/68c06c7a-d842-491a-a970-14726b960bc0.png",
    date: "March 17, 2024",
    imageHash: "LRG8}V?bxuWB~qofM{WB%MWBRjay"
  }
];

export const BlogList = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-dark border-[#F97316]/20 hover:border-[#F97316] transition-colors">
            <CardHeader className="p-0">
              <BlurImage
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-lg"
                hash={post.imageHash}
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2 text-white">{post.title}</CardTitle>
              <CardDescription className="text-gray-400 mb-4">{post.description}</CardDescription>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#F97316]">{post.date}</span>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="outline" className="border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};