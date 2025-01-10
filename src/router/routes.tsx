import { createRoute, createRouter } from '@tanstack/react-router';
import Index from '@/pages/Index';
import Channels from '@/pages/Channels';
import Tutorials from '@/pages/Tutorials';
import SmartTvSetup from '@/pages/SmartTvSetup';
import MobileSetup from '@/pages/MobileSetup';
import MagSetup from '@/pages/MagSetup';
import FormulerSetup from '@/pages/FormulerSetup';
import FireTvSetup from '@/pages/FireTvSetup';
import Enigma2Setup from '@/pages/Enigma2Setup';
import VlcWindowsSetup from '@/pages/VlcWindowsSetup';
import NotFound from '@/pages/NotFound';

// Create the root route
const rootRoute = createRoute({
  id: 'root',
  component: Index,
});

// Create child routes
const indexRoute = createRoute({
  id: 'index',
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

const premiumServiceRoute = createRoute({
  id: 'premium-service',
  getParentRoute: () => rootRoute,
  path: '/premium-iptv-service',
  component: Index,
});

const channelsRoute = createRoute({
  id: 'channels',
  getParentRoute: () => rootRoute,
  path: '/channels',
  component: Channels,
});

const pricingRoute = createRoute({
  id: 'pricing',
  getParentRoute: () => rootRoute,
  path: '/pricing',
  component: Index,
});

const faqRoute = createRoute({
  id: 'faq',
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: Index,
});

const tutorialsRoute = createRoute({
  id: 'tutorials',
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials',
  component: Tutorials,
});

const smartTvSetupRoute = createRoute({
  id: 'smart-tv-setup',
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv',
  component: SmartTvSetup,
});

const mobileSetupRoute = createRoute({
  id: 'mobile-setup',
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices',
  component: MobileSetup,
});

const magSetupRoute = createRoute({
  id: 'mag-setup',
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box',
  component: MagSetup,
});

const formulerSetupRoute = createRoute({
  id: 'formuler-setup',
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8',
  component: FormulerSetup,
});

const fireTvSetupRoute = createRoute({
  id: 'fire-tv-setup',
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick',
  component: FireTvSetup,
});

const enigma2SetupRoute = createRoute({
  id: 'enigma2-setup',
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2',
  component: Enigma2Setup,
});

const vlcWindowsSetupRoute = createRoute({
  id: 'vlc-windows-setup',
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows',
  component: VlcWindowsSetup,
});

const notFoundRoute = createRoute({
  id: 'not-found',
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
});

// Create and export the router configuration
export const routeConfig = {
  routeTree: rootRoute.addChildren([
    indexRoute,
    premiumServiceRoute,
    channelsRoute,
    pricingRoute,
    faqRoute,
    tutorialsRoute,
    smartTvSetupRoute,
    mobileSetupRoute,
    magSetupRoute,
    formulerSetupRoute,
    fireTvSetupRoute,
    enigma2SetupRoute,
    vlcWindowsSetupRoute,
    notFoundRoute,
  ]),
};