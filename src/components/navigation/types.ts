export interface NavItem {
  name: string;
  path: string;
  action: () => void;
}

export interface NavigationProps {
  onScrollToSection: (sectionId: string) => void;
}