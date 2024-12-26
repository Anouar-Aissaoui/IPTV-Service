import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface NavItem {
  name: string;
  action: () => void;
  isLink?: boolean;
  to?: string;
}

interface NavItemsProps {
  items: NavItem[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

export const NavItems = ({ items, isMobile, onItemClick }: NavItemsProps) => {
  const handleItemClick = (action: () => void) => {
    action();
    onItemClick?.();
  };

  if (isMobile) {
    return (
      <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-black/95 backdrop-blur-sm rounded-xl p-4 space-y-2 border border-[#F97316]/20 animate-in slide-in-from-top duration-300 shadow-xl">
        {items.map((item) =>
          item.isLink ? (
            <Link
              key={item.name}
              to={item.to!}
              className="flex items-center justify-between text-white hover:text-[#F97316] transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 group w-full"
            >
              {item.name}
              <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#F97316]" />
            </Link>
          ) : (
            <button
              key={item.name}
              onClick={() => handleItemClick(item.action)}
              className="flex items-center justify-between text-white hover:text-[#F97316] transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/5 group w-full"
            >
              {item.name}
              <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#F97316]" />
            </button>
          )
        )}
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item) =>
        item.isLink ? (
          <Link
            key={item.name}
            to={item.to!}
            className="group relative text-white hover:text-[#F97316] transition-all duration-300 text-base font-medium flex items-center gap-1"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ) : (
          <button
            key={item.name}
            onClick={() => handleItemClick(item.action)}
            className="group relative text-white hover:text-[#F97316] transition-all duration-300 text-base font-medium flex items-center gap-1"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full"></span>
          </button>
        )
      )}
    </div>
  );
};