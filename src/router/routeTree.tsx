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

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

const pricingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/pricing',
  component: Pricing,
})

const channelsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/channels',
  component: Channels,
})

const faqRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: FAQ,
})

const tutorialsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials',
  component: Tutorials,
})

const smartTvSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv',
  component: SmartTvSetup,
})

const mobileSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices',
  component: MobileSetup,
})

const magSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box',
  component: MagSetup,
})

const formulerSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8',
  component: FormulerSetup,
})

const fireTvSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick',
  component: FireTvSetup,
})

const enigma2SetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2',
  component: Enigma2Setup,
})

const vlcWindowsSetupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows',
  component: VlcWindowsSetup,
})

const notFoundRoute = new Route({
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