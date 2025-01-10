import React from 'react';
import { createRouter, Route, RootRoute } from '@tanstack/react-router';
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

const rootRoute = new RootRoute({
  component: () => (
    <div id="root">
      <Outlet />
    </div>
  ),
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
});

const channelsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/channels',
  component: Channels,
});

const tutorialsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials',
  component: Tutorials,
});

const smartTvSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv',
  component: SmartTvSetup,
});

const mobileSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices',
  component: MobileSetup,
});

const magSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box',
  component: MagSetup,
});

const formulerSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8',
  component: FormulerSetup,
});

const fireTvSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick',
  component: FireTvSetup,
});

const enigma2SetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2',
  component: Enigma2Setup,
});

const vlcWindowsSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows',
  component: VlcWindowsSetup,
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
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

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}