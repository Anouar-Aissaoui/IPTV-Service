import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Tutorials from '@/pages/Tutorials';
import SmartTvSetup from '@/pages/SmartTvSetup';
import FireTvSetup from '@/pages/FireTvSetup';
import MobileSetup from '@/pages/MobileSetup';
import VlcWindowsSetup from '@/pages/VlcWindowsSetup';
import MagSetup from '@/pages/MagSetup';
import FormulerSetup from '@/pages/FormulerSetup';
import Enigma2Setup from '@/pages/Enigma2Setup';
import Channels from '@/pages/Channels';
import NotFound from '@/pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/tutorials/smart-tv" element={<SmartTvSetup />} />
      <Route path="/tutorials/fire-tv" element={<FireTvSetup />} />
      <Route path="/tutorials/mobile" element={<MobileSetup />} />
      <Route path="/tutorials/vlc-windows" element={<VlcWindowsSetup />} />
      <Route path="/tutorials/mag-box" element={<MagSetup />} />
      <Route path="/tutorials/formuler-z8" element={<FormulerSetup />} />
      <Route path="/tutorials/enigma2" element={<Enigma2Setup />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;