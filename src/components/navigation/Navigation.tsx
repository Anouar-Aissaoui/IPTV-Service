import { Menu } from "lucide-react";
import { useState } from "react";
import { NavItems } from "./NavItems";

interface NavigationProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ onScrollToSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      name: "Home", 
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) 
    },
    { 
      name: "Pricing", 
      action: () => onScrollToSection('pricing-section') 
    },
    { 
      name: "Channel List", 
      action: () => onScrollToSection('channel-list') 
    },
    { 
      name: "FAQ", 
      action: () => onScrollToSection('faq-section') 
    },
    { 
      name: "Contact Us", 
      action: () => null, 
      isLink: true, 
      to: "/contact" 
    }
  ];

  return (
    <nav className="container mx-auto px-4 py-6 relative z-50">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          <a 
            href="https://www.iptvservice.site/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#F97316] transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2"
          >
            IPTV Service
          </a>
        </div>
        
        <button 
          className="md:hidden text-[#F97316] hover:text-[#F97316]/80 transition-colors p-2 hover:bg-white/10 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <NavItems 
          items={navItems} 
          isMobile={false} 
        />

        {isMobileMenuOpen && (
          <NavItems 
            items={navItems} 
            isMobile={true} 
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};