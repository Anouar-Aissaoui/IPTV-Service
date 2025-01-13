import * as React from "react";
import { Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavItems } from "./NavItems";
import { MobileNavMenu } from "./MobileNavMenu";
import type { NavigationProps, NavItem } from "./types";

const Navigation = ({ onScrollToSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = React.useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, navigate]);

  const navItems = React.useMemo<NavItem[]>(() => [
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
    }
  ], [location.pathname, navigate, onScrollToSection, handleHomeClick]);

  const handleMobileItemClick = React.useCallback((action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-dark/95 backdrop-blur-sm border-b-4 border-[#F97316]">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-black text-white transform -rotate-2 hover:rotate-0 transition-all duration-300">
            <a 
              href="/"
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
            <MobileNavMenu 
              items={navItems}
              onItemClick={handleMobileItemClick}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;