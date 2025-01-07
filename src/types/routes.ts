/**
 * Defines all possible routes in the application
 */
export type AppRoute = 
  | '/'
  | '/pricing'
  | '/channels'
  | '/faq'
  | '/iptv-setup-tutorials'
  | '/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows'
  | '/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv'
  | '/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices'
  | '/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick'
  | '/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box'
  | '/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8'
  | '/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2';

/**
 * Type for URL parameters
 */
export interface URLParams {
  id?: string;
  slug?: string;
  category?: string;
}

/**
 * Type for breadcrumb items
 */
export interface BreadcrumbItem {
  label: string;
  path: AppRoute;
  isActive?: boolean;
}

/**
 * Type for page metadata
 */
export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: AppRoute;
  imageUrl?: string;
  url: string;
}

/**
 * Type for dynamic route segments
 */
export interface RouteSegment {
  path: string;
  params?: Record<string, string>;
}

/**
 * Type for navigation items
 */
export interface NavigationItem {
  label: string;
  path: AppRoute;
  icon?: string;
  children?: NavigationItem[];
}
