import { createFileRoute, createRouter, RouterProvider } from '@tanstack/react-router';
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

// Root Route
export const Route = createFileRoute('/')({
  component: Index,
});

// Premium IPTV Service Route
export const premiumRoute = createFileRoute('/premium-iptv-service')({
  component: Index,
});

// Channels Route
export const channelsRoute = createFileRoute('/channels')({
  component: Channels,
});

// Pricing Route (redirects to Index with pricing section)
export const pricingRoute = createFileRoute('/pricing')({
  component: Index,
});

// FAQ Route (redirects to Index with FAQ section)
export const faqRoute = createFileRoute('/faq')({
  component: Index,
});

// Tutorials Routes
export const tutorialsRoute = createFileRoute('/iptv-setup-tutorials')({
  component: Tutorials,
});

export const smartTvSetupRoute = createFileRoute('/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv')({
  component: SmartTvSetup,
});

export const mobileSetupRoute = createFileRoute('/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices')({
  component: MobileSetup,
});

export const magSetupRoute = createFileRoute('/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box')({
  component: MagSetup,
});

export const formulerSetupRoute = createFileRoute('/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8')({
  component: FormulerSetup,
});

export const fireTvSetupRoute = createFileRoute('/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick')({
  component: FireTvSetup,
});

export const enigma2SetupRoute = createFileRoute('/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2')({
  component: Enigma2Setup,
});

export const vlcWindowsSetupRoute = createFileRoute('/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows')({
  component: VlcWindowsSetup,
});

// 404 Route
export const notFoundRoute = createFileRoute('*')({
  component: NotFound,
});

// Create and export the router configuration
export const routeConfig = {
  routes: [
    Route,
    premiumRoute,
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
  ],
};