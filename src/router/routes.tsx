import { createFileRoute, createRouter } from '@tanstack/react-router';
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

// Define route tree
const routeTree = {
  component: Index,
  children: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/premium-iptv-service',
      component: Index,
    },
    {
      path: '/channels',
      component: Channels,
    },
    {
      path: '/pricing',
      component: Index,
    },
    {
      path: '/faq',
      component: Index,
    },
    {
      path: '/iptv-setup-tutorials',
      component: Tutorials,
    },
    {
      path: '/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv',
      component: SmartTvSetup,
    },
    {
      path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices',
      component: MobileSetup,
    },
    {
      path: '/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box',
      component: MagSetup,
    },
    {
      path: '/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8',
      component: FormulerSetup,
    },
    {
      path: '/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick',
      component: FireTvSetup,
    },
    {
      path: '/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2',
      component: Enigma2Setup,
    },
    {
      path: '/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows',
      component: VlcWindowsSetup,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
};

// Create and export the router configuration
export const routeConfig = {
  routeTree,
};