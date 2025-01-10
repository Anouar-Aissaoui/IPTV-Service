import { useNavigate, useRouter } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface NavItem {
  name: string;
  action: () => void;
}

interface NavItemsProps {
  items: NavItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

export const NavItems = ({ items, isMobile, onItemClick }: NavItemsProps) => {
  const navigate = useNavigate();
  const router = useRouter();
  const currentLanguage = router.state.location.pathname.split('/')[1] || 'en';

  const handleItemClick = (action: () => void) => {
    action();
    onItemClick?.();
  };

  if (isMobile) {
    return (
      <div className="md:hidden fixed top-[4rem] left-0 right-0 mt-2 mx-4 bg-black brutal-border brutal-shadow backdrop-blur-sm rounded-none p-4 space-y-2 animate-in slide-in-from-top duration-300 z-50">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => handleItemClick(item.action)}
            className="flex items-center justify-between text-white hover:text-[#F97316] transition-all duration-300 text-base sm:text-lg font-black py-2 px-3 sm:py-3 sm:px-4 brutal-border hover:bg-[#F97316] hover:text-white group w-full transform hover:-translate-y-1 hover:translate-x-1"
          >
            {item.name}
            <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-white" />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => handleItemClick(item.action)}
          className="group relative text-white hover:text-[#F97316] transition-all duration-300 text-sm lg:text-base font-black brutal-border px-3 py-1 lg:px-4 lg:py-2 hover:bg-[#F97316] hover:text-white transform hover:-translate-y-1 hover:translate-x-1 brutal-shadow"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};