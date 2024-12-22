import { Button } from "@/components/ui/button";
import { Monitor, Laptop, Smartphone, Apple, MonitorPlay } from "lucide-react";
import { BlurImage } from "./ui/blur-image";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your_number_here', '_blank');
  };

  return (
    <div className="relative bg-dark">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">IPTV Logo</div>
        <div className="hidden md:flex items-center space-x-6 text-white">
          <a href="#" className="hover:text-neon transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-neon transition-colors duration-300">Pricing</a>
          <a href="#" className="hover:text-neon transition-colors duration-300">Channel List</a>
          <a href="#" className="hover:text-neon transition-colors duration-300">FAQ</a>
          <a href="#" className="hover:text-neon transition-colors duration-300">Contact Us</a>
        </div>
        <Button className="bg-neon text-dark hover:bg-neon/90 animate-pulse">
          Free Trial
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-fade-in">
              Best IPTV Service at an{" "}
              <span className="text-neon bg-gradient-to-r from-neon/20 to-transparent px-2 py-1 rounded">Affordable Price</span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-300">
              Experience breathtaking 4K visuals on any device, at any place, at any time. 
              Discover an expansive library with over <span className="text-neon font-semibold animate-pulse">40,000 channels</span> and more than <span className="text-neon font-semibold animate-pulse">54,000 VOD</span> options.
            </p>
            {/* Devices Image */}
            <div className="relative w-full max-w-[280px] mx-auto lg:mx-0 hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-1 bg-neon/20 rounded-lg blur-sm"></div>
              <img 
                src="https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/devices-4.webp"
                alt="Supported Devices"
                className="relative w-full h-auto"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-neon text-dark hover:bg-neon/90 text-xl px-8 py-6 font-bold transform hover:scale-105 transition-all duration-300 animate-pulse shadow-lg shadow-neon/20"
              >
                Start Free Trial Now
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-dark-gray border-2 border-neon text-neon hover:bg-neon hover:text-dark text-lg px-6 py-5 font-bold flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact on WhatsApp
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative max-w-[480px] mx-auto transform hover:scale-105 transition-duration-300">
              <div className="absolute -inset-1 bg-neon/30 rounded-lg blur-xl"></div>
              <BlurImage
                src="/lovable-uploads/62b3cd9e-1589-432c-b117-d855ac8f0b81.png"
                alt="IPTV Service Preview"
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
                hash="LRG8}V?bxuWB~qofM{WB%MWBRjay"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-dark-gray border-2 border-neon/20 p-6 rounded-xl hover:border-neon hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white">+7K</div>
            <div className="text-neon text-lg">Happy Customers</div>
          </div>
          <div className="bg-dark-gray border-2 border-neon/20 p-6 rounded-xl hover:border-neon hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white">+40K</div>
            <div className="text-neon text-lg">Channels</div>
          </div>
          <div className="bg-dark-gray border-2 border-neon/20 p-6 rounded-xl hover:border-neon hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white">+1,500</div>
            <div className="text-neon text-lg">Sport Channels</div>
          </div>
          <div className="bg-dark-gray border-2 border-neon/20 p-6 rounded-xl hover:border-neon hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white">+54K</div>
            <div className="text-neon text-lg">Movies & TV Shows</div>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,255,0,0.25)_0%,transparent_70%)]"></div>
      </div>
    </div>
  );
};