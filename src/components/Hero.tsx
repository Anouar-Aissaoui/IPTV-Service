import { Button } from "@/components/ui/button";
import { Monitor, Laptop, Smartphone, Apple, MonitorPlay, Menu } from "lucide-react";
import { BlurImage } from "./ui/blur-image";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your_number_here', '_blank');
  };

  return (
    <div className="relative bg-gradient-to-b from-dark to-dark-gray min-h-screen">
      <nav className="container mx-auto px-4 py-6 border-b border-gray-800/30">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white tracking-tight hover:text-primary transition-colors duration-300">
            IPTV Subscription
          </Link>
          
          <button 
            className="md:hidden text-white hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden md:flex items-center space-x-8 text-gray-300">
            <Link to="/" className="hover:text-primary transition-colors duration-300 text-sm font-medium">Home</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors duration-300 text-sm font-medium">Pricing</Link>
            <a href="#" className="hover:text-primary transition-colors duration-300 text-sm font-medium">Channel List</a>
            <a href="#" className="hover:text-primary transition-colors duration-300 text-sm font-medium">FAQ</a>
            <a href="#" className="hover:text-primary transition-colors duration-300 text-sm font-medium">Contact Us</a>
          </div>
          
          <Button className="hidden md:flex bg-primary/90 text-white hover:bg-primary shadow-lg shadow-primary/20 font-medium px-6 transform hover:scale-105 transition-all duration-300">
            Free Trial
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-dark-gray/80 backdrop-blur-lg rounded-xl p-4 space-y-4 border border-gray-800/30">
            <Link to="/" className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium">Home</Link>
            <Link to="/pricing" className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium">Pricing</Link>
            <a href="#" className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium">Channel List</a>
            <a href="#" className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium">FAQ</a>
            <a href="#" className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium">Contact Us</a>
            <Button className="w-full bg-primary/90 text-white hover:bg-primary shadow-lg shadow-primary/20 font-medium">
              Free Trial
            </Button>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Best IPTV Service at an{" "}
              <span className="text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text">
                Affordable Price
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Experience breathtaking 4K visuals on any device, at any place, at any time. 
              Discover an expansive library with over <span className="text-primary font-semibold">40,000 channels</span> and more than <span className="text-primary font-semibold">54,000 VOD</span> options.
            </p>
            
            <div className="relative w-full max-w-[280px] mx-auto lg:mx-0 animate-float">
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl"></div>
              <img 
                src="https://www.iptvthemes.shop/shadowstream/wp-content/uploads/2023/12/devices-4.webp"
                alt="Supported Devices"
                className="relative w-full h-auto hover:scale-105 transition-transform duration-300"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary text-white hover:bg-primary/90 text-base md:text-lg px-8 py-6 font-bold shadow-lg shadow-primary/30 transform hover:scale-105 transition-all duration-300 animate-pulse w-full sm:w-auto"
              >
                Start Free Trial Now
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-transparent border-2 border-primary text-white hover:bg-primary hover:text-white text-base md:text-lg px-8 py-6 font-bold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contact on WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative max-w-[480px] mx-auto transform hover:scale-105 transition-duration-300">
              <div className="absolute -inset-1 bg-primary/30 rounded-lg blur-2xl"></div>
              <BlurImage
                src="/lovable-uploads/62b3cd9e-1589-432c-b117-d855ac8f0b81.png"
                alt="IPTV Service Preview"
                className="hero-image relative rounded-2xl shadow-2xl w-full h-auto object-cover border border-gray-800/30"
                hash="LRG8}V?bxuWB~qofM{WB%MWBRjay"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "+7K", label: "Happy Customers", icon: "👥" },
            { value: "+40K", label: "Channels", icon: "📺" },
            { value: "+1,500", label: "Sport Channels", icon: "⚽" },
            { value: "+54K", label: "Movies & TV Shows", icon: "🎬" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="relative group bg-dark-gray/50 backdrop-blur-lg border border-gray-800/30 p-6 rounded-2xl hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center space-y-2">
                <span className="text-4xl mb-2">{stat.icon}</span>
                <div className="text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-gradient">{stat.value}</div>
                <div className="text-primary/80 text-sm font-medium tracking-wider uppercase">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_70%)]"></div>
      </div>
    </div>
  );
};
