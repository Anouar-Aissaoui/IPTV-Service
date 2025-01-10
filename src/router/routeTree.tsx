import { createRootRoute, createRoute } from '@tanstack/react-router'
import Index from '../pages/Index'
import Channels from '../pages/Channels'
import Tutorials from '../pages/Tutorials'
import SmartTvSetup from '../pages/SmartTvSetup'
import MobileSetup from '../pages/MobileSetup'
import MagSetup from '../pages/MagSetup'
import FormulerSetup from '../pages/FormulerSetup'
import FireTvSetup from '../pages/FireTvSetup'
import Enigma2Setup from '../pages/Enigma2Setup'
import VlcWindowsSetup from '../pages/VlcWindowsSetup'
import NotFound from '../pages/NotFound'

const rootRoute = createRootRoute({
  component: () => <Index />
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const channelsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/channels',
  component: Channels,
})

const tutorialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials',
  component: Tutorials,
})

const smartTvSetupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv',
  component: SmartTvSetup,
})

const mobileSetupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices',
  component: MobileSetup,
})

const magSetupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box',
  component: MagSetup,
})

const formulerSetupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8',
  component: FormulerSetup,
})

const fireTvSetupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick',
  component: FireTvSetup,
})

const enigma2SetupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2',
  component: Enigma2Setup,
})

const vlcWindowsSetupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows',
  component: VlcWindowsSetup,
})

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
})

export const routeTree = rootRoute.addChildren([
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
])