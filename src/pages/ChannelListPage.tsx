import { Button } from "@/components/ui/button";
import { ChannelList } from "@/components/ChannelList";

const ChannelListPage = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">IPTV Logo</div>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="/" className="hover:text-neon transition-colors">Home</a>
          <a href="/pricing" className="hover:text-neon transition-colors">Pricing</a>
          <a href="/channels" className="text-neon">Channel List</a>
          <a href="#" className="hover:text-neon transition-colors">FAQ</a>
          <a href="#" className="hover:text-neon transition-colors">Contact Us</a>
        </div>
        <Button className="bg-neon text-dark hover:bg-neon/90">
          Free Trial
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Explore Our <span className="text-neon">Channel List</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Browse through our extensive collection of channels from around the world.
          Enjoy premium content across various categories and languages.
        </p>
      </div>

      {/* Channel List Component */}
      <ChannelList />

      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,255,0,0.1)_0%,transparent_70%)]"></div>
      </div>
    </div>
  );
};

export default ChannelListPage;