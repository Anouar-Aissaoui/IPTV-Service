import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/your_number_here', '_blank');
  };

  return (
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
          <Link to="/faq" className="hover:text-primary transition-colors duration-300 text-sm font-medium">FAQ</Link>
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
          <Link to="/faq" className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium">FAQ</Link>
          <a href="#" className="block text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium">Contact Us</a>
          <Button className="w-full bg-primary/90 text-white hover:bg-primary shadow-lg shadow-primary/20 font-medium">
            Free Trial
          </Button>
        </div>
      )}
    </nav>
  );
};