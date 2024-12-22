import { Button } from "@/components/ui/button";
import { Monitor, Laptop, Smartphone, Apple, MonitorPlay } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-dark">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">IPTV Logo</div>
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#" className="hover:text-neon">Home</a>
          <a href="#" className="hover:text-neon">Pricing</a>
          <a href="#" className="hover:text-neon">Channel List</a>
          <a href="#" className="hover:text-neon">FAQ</a>
          <a href="#" className="hover:text-neon">Contact Us</a>
        </div>
        <Button className="bg-neon text-dark hover:bg-neon/90">
          Free Trial
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Best IPTV Service at an{" "}
              <span className="text-neon">Affordable Price</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Experience breathtaking 4K visuals on any device, at any place, at any time. 
              Discover an expansive library with over 40,000 channels and more than 54,000 
              VOD options, all backed by a reliable 100% uptime guarantee.
            </p>
            <Button className="bg-neon text-dark hover:bg-neon/90 text-lg px-8 py-6">
              Free Trial
            </Button>
            <div className="space-y-6">
              <img 
                src="https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/devices-4.webp"
                alt="Supported Devices"
                className="w-full max-w-[366px] h-auto"
              />
              <div className="flex gap-8">
                <div className="flex flex-col items-center text-gray-400 text-sm">
                  <Monitor className="w-8 h-8 mb-2" />
                  <span>Smart TV</span>
                </div>
                <div className="flex flex-col items-center text-gray-400 text-sm">
                  <Laptop className="w-8 h-8 mb-2" />
                  <span>Laptops/PC</span>
                </div>
                <div className="flex flex-col items-center text-gray-400 text-sm">
                  <Smartphone className="w-8 h-8 mb-2" />
                  <span>Android</span>
                </div>
                <div className="flex flex-col items-center text-gray-400 text-sm">
                  <Apple className="w-8 h-8 mb-2" />
                  <span>iOS</span>
                </div>
                <div className="flex flex-col items-center text-gray-400 text-sm">
                  <MonitorPlay className="w-8 h-8 mb-2" />
                  <span>Windows</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/lovable-uploads/00c90df3-a23d-47e3-b967-8806209cd5b1.png"
              alt="IPTV Service Preview"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">+7K</div>
            <div className="text-neon">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">+40K</div>
            <div className="text-neon">Channels</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">+1,500</div>
            <div className="text-neon">Sport Channels</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white">+54K</div>
            <div className="text-neon">Movies & TV Shows</div>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,255,0,0.1)_0%,transparent_70%)]"></div>
      </div>
    </div>
  );
};