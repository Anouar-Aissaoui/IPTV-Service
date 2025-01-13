import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import Index from '@/pages/Index';
import Pricing from '@/pages/Pricing';
import Channels from '@/pages/Channels';
import FreeTrial from '@/pages/FreeTrial';
import Tutorials from '@/pages/Tutorials';
import VlcWindowsSetup from '@/pages/tutorials/VlcWindowsSetup';
import SmartTvSetup from '@/pages/tutorials/SmartTvSetup';
import MobileSetup from '@/pages/tutorials/MobileSetup';
import FireTvSetup from '@/pages/tutorials/FireTvSetup';
import MagSetup from '@/pages/tutorials/MagSetup';
import FormulerSetup from '@/pages/tutorials/FormulerSetup';
import Enigma2Setup from '@/pages/tutorials/Enigma2Setup';
import Article from '@/pages/Article';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/iptv-free-trial-24-hours" element={<FreeTrial />} />
        <Route path="/iptv-setup-tutorials" element={<Tutorials />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows" element={<VlcWindowsSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv" element={<SmartTvSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices" element={<MobileSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick" element={<FireTvSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box" element={<MagSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8" element={<FormulerSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2" element={<Enigma2Setup />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;