import { createRouter, createRouteConfig } from '@tanstack/react-router';
import Index from './pages/Index';
import Channels from './pages/Channels';
import Tutorials from './pages/Tutorials';
import SmartTvSetup from './pages/SmartTvSetup';
import MobileSetup from './pages/MobileSetup';
import MagSetup from './pages/MagSetup';
import FormulerSetup from './pages/FormulerSetup';
import FireTvSetup from './pages/FireTvSetup';
import Enigma2Setup from './pages/Enigma2Setup';
import VlcWindowsSetup from './pages/VlcWindowsSetup';
import NotFound from './pages/NotFound';

const rootRoute = createRouteConfig({
  component: () => <div id="root"><Outlet /></div>,
});

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Index,
});

const channelsRoute = rootRoute.createRoute({
  path: '/channels',
  component: Channels,
});

const tutorialsRoute = rootRoute.createRoute({
  path: '/iptv-setup-tutorials',
  component: Tutorials,
});

const smartTvSetupRoute = rootRoute.createRoute({
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv',
  component: SmartTvSetup,
});

const mobileSetupRoute = rootRoute.createRoute({
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices',
  component: MobileSetup,
});

const magSetupRoute = rootRoute.createRoute({
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box',
  component: MagSetup,
});

const formulerSetupRoute = rootRoute.createRoute({
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8',
  component: FormulerSetup,
});

const fireTvSetupRoute = rootRoute.createRoute({
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick',
  component: FireTvSetup,
});

const enigma2SetupRoute = rootRoute.createRoute({
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2',
  component: Enigma2Setup,
});

const vlcWindowsSetupRoute = rootRoute.createRoute({
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows',
  component: VlcWindowsSetup,
});

const notFoundRoute = rootRoute.createRoute({
  path: '*',
  component: NotFound,
});

const routeConfig = rootRoute.addChildren([
  indexRoute,
  channelsRoute,
  tutorialsRoute,
  smartTvSetupRoute,
  mobileSetupRoute,
  magSetupRoute,
  formulerSetupRoute,
  fireTvSetupRoute,
  enigma2SetupRoute,
  vlcWindowsSetupRoute,
  notFoundRoute,
]);

export const router = createRouter({ routeConfig });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}