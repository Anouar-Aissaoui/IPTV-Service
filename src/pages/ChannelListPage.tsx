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
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Access <span className="text-neon">7000+ Live Channels</span> Worldwide
            </h1>
            <p className="text-gray-400 text-lg">
              Discover our extensive collection of premium channels from around the globe. 
              Enjoy live sports, movies, news, and entertainment in HD quality. Browse through 
              our channel list and find your favorite content.
            </p>
            <Button className="bg-neon text-dark hover:bg-neon/90 text-lg px-8 py-6">
              Start Free Trial
            </Button>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-neon/30 rounded-lg blur"></div>
              <div className="relative bg-dark-gray rounded-lg p-6">
                <div className="text-2xl font-bold mb-4 text-neon">Channel Statistics</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-dark-gray/50">
                    <div className="text-3xl font-bold text-white">7000+</div>
                    <div className="text-gray-400">Live Channels</div>
                  </div>
                  <div className="p-4 rounded-lg bg-dark-gray/50">
                    <div className="text-3xl font-bold text-white">1500+</div>
                    <div className="text-gray-400">Sport Channels</div>
                  </div>
                  <div className="p-4 rounded-lg bg-dark-gray/50">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-gray-400">News Channels</div>
                  </div>
                  <div className="p-4 rounded-lg bg-dark-gray/50">
                    <div className="text-3xl font-bold text-white">2000+</div>
                    <div className="text-gray-400">Movie Channels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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