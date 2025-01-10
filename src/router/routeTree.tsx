import { RootRoute, Route } from '@tanstack/react-router'
import Index from '../pages/Index'
import Tutorials from '../pages/Tutorials'
import SmartTvSetup from '../pages/SmartTvSetup'
import MobileSetup from '../pages/MobileSetup'
import MagSetup from '../pages/MagSetup'
import FormulerSetup from '../pages/FormulerSetup'
import FireTvSetup from '../pages/FireTvSetup'
import Enigma2Setup from '../pages/Enigma2Setup'
import VlcWindowsSetup from '../pages/VlcWindowsSetup'
import NotFound from '../pages/NotFound'
import { FAQ } from '../components/FAQ'
import { Pricing } from '../components/Pricing'
import Channels from '../pages/Channels'

export const rootRoute = new RootRoute()

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

export const pricingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/pricing',
  component: Pricing,
})

export const channelsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/channels',
  component: Channels,
})

export const faqRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: FAQ,
})

export const tutorialsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials',
  component: Tutorials,
})

export const smartTvSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv',
  component: SmartTvSetup,
})

export const mobileSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices',
  component: MobileSetup,
})

export const magSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box',
  component: MagSetup,
})

export const formulerSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8',
  component: FormulerSetup,
})

export const fireTvSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick',
  component: FireTvSetup,
})

export const enigma2SetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2',
  component: Enigma2Setup,
})

export const vlcWindowsSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows',
  component: VlcWindowsSetup,
})

export const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: NotFound,
})

export const routeTree = rootRoute.addChildren([
  indexRoute,
  pricingRoute,
  channelsRoute,
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
])