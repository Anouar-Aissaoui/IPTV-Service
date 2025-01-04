import { Menu } from "lucide-react";
import { useState } from "react";
import { NavItems } from "./NavItems";
import { useNavigate, useLocation } from "react-router-dom";

interface NavigationProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ onScrollToSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentLanguage = location.pathname.split('/')[1] || 'en';

  const handleHomeClick = () => {
    const baseUrl = 'https://www.iptvservice.site';
    if (window.location.hostname === 'www.iptvservice.site') {
      window.location.href = `${baseUrl}/${currentLanguage}/premium-iptv-service`;
    } else {
      navigate(`/${currentLanguage}/premium-iptv-service`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { 
      name: "Home", 
      action: handleHomeClick
    },
    { 
      name: "Pricing", 
      action: () => {
        navigate(`/${currentLanguage}/pricing`);
        onScrollToSection('pricing-section');
      }
    },
    { 
      name: "Channel List", 
      action: () => {
        navigate(`/${currentLanguage}/channels`);
        onScrollToSection('channel-list');
      }
    },
    { 
      name: "FAQ", 
      action: () => {
        navigate(`/${currentLanguage}/faq`);
        onScrollToSection('faq-section');
      }
    }
  ];

  return (
    <nav className="container mx-auto px-4 py-4 md:py-6 relative z-50">
      <div className="flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-black text-white transform -rotate-2 hover:rotate-0 transition-all duration-300">
          <a 
            href={`/${currentLanguage}/premium-iptv-service`}
            onClick={(e) => {
              e.preventDefault();
              handleHomeClick();
            }}
            className="hover:text-[#F97316] transition-all duration-300 ease-in-out flex items-center gap-2 brutal-border brutal-shadow px-3 py-1 sm:px-4 sm:py-2 bg-black hover:-translate-y-1 hover:translate-x-1"
          >
            IPTV Service
          </a>
        </div>
        
        <button 
          className="md:hidden text-[#F97316] hover:text-white transition-colors p-2 hover:bg-[#F97316] brutal-border brutal-shadow"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
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