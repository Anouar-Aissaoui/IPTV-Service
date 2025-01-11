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

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { 
      name: "Home", 
      path: "/",
      action: handleHomeClick
    },
    { 
      name: "Pricing", 
      path: "/pricing",
      action: () => {
        if (location.pathname !== '/pricing') {
          navigate('/pricing');
        }
        onScrollToSection('pricing-section');
      }
    },
    { 
      name: "Channel List", 
      path: "/channels",
      action: () => {
        if (location.pathname !== '/channels') {
          navigate('/channels');
        }
        onScrollToSection('channel-list');
      }
    },
    {
      name: "Tutorials",
      path: "/iptv-setup-tutorials",
      action: () => {
        navigate('/iptv-setup-tutorials');
      }
    },
    { 
      name: "FAQ", 
      path: "/faq",
      action: () => {
        if (location.pathname !== '/faq') {
          navigate('/faq');
        }
        onScrollToSection('faq-section');
      }
    },
    {
      name: "Support",
      path: "/support",
      action: () => {
        navigate('/support');
      }
    }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark/95 backdrop-blur-sm border-b-4 border-[#F97316] safe-area-inset">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-black text-white transform -rotate-2 hover:rotate-0 transition-all duration-300">
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleHomeClick();
              }}
              className="hover:text-[#F97316] transition-all duration-300 ease-in-out flex items-center gap-2 brutal-border brutal-shadow px-4 py-2 sm:px-6 sm:py-3 bg-black hover:-translate-y-1 hover:translate-x-1 min-h-[44px] sm:min-h-[48px]"
            >
              IPTV Service
            </a>
          </div>
          
          <button 
            className="md:hidden text-[#F97316] hover:text-white transition-colors p-3 sm:p-4 hover:bg-[#F97316] brutal-border brutal-shadow min-h-[44px] min-w-[44px] touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
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
      </div>
    </nav>
  );
};