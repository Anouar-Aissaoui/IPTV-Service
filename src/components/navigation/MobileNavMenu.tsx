import React from "react";
import { ChevronRight } from "lucide-react";
import { NavItem } from "./types";

interface MobileNavMenuProps {
  items: NavItem[];
  onItemClick: (action: () => void) => void;
}

export const MobileNavMenu = React.memo(({ items, onItemClick }: MobileNavMenuProps) => {
  return (
    <div className="md:hidden fixed top-[4rem] left-0 right-0 mt-2 mx-4 bg-black brutal-border brutal-shadow backdrop-blur-sm rounded-none p-4 space-y-2 animate-in slide-in-from-top duration-300 z-50">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onItemClick(item.action)}
          className="flex items-center justify-between text-white hover:text-[#F97316] transition-all duration-300 text-base sm:text-lg font-black py-2 px-3 sm:py-3 sm:px-4 brutal-border hover:bg-[#F97316] hover:text-white group w-full transform hover:-translate-y-1 hover:translate-x-1"
        >
          {item.name}
          <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-white" />
        </button>
      ))}
    </div>
  );
});

MobileNavMenu.displayName = 'MobileNavMenu';