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
    <div className="min-h-screen bg-gradient-to-b from-dark-gray to-dark">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-6 animate-fade-in">
            IPTV Insights
          </h1>
          <p className="text-xl text-gray-400 mb-8 animate-fade-in delay-100">
            Stay updated with the latest trends, guides, and expert advice in the world of IPTV streaming.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="bg-dark border-[#F97316]/20 hover:border-[#F97316] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            >
              <CardHeader className="p-0">
                <BlurImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                  hash={post.imageHash}
                />
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-sm text-primary mb-4">{post.date}</div>
                <CardTitle className="text-2xl font-bold text-white mb-4 line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-400 mb-6 line-clamp-3">
                  {post.description}
                </CardDescription>
                <Link to={`/blog/${post.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Read Article
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-24 border-t border-primary/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter to receive the latest IPTV news and updates directly in your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-lg bg-dark-gray border border-primary/20 text-white focus:outline-none focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};