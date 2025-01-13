import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Index from "./pages/Index";
import Channels from "./pages/Channels";
import FreeTrial from "./pages/FreeTrial";
import Tutorials from "./pages/Tutorials";
import SmartTvSetup from "./pages/SmartTvSetup";
import FireTvSetup from "./pages/FireTvSetup";
import MagSetup from "./pages/MagSetup";
import FormulerSetup from "./pages/FormulerSetup";
import Enigma2Setup from "./pages/Enigma2Setup";
import VlcWindowsSetup from "./pages/VlcWindowsSetup";
import MobileSetup from "./pages/MobileSetup";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/iptv-free-trial-24-hours" element={<FreeTrial />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/tutorials/smart-tv" element={<SmartTvSetup />} />
        <Route path="/tutorials/fire-tv" element={<FireTvSetup />} />
        <Route path="/tutorials/mag" element={<MagSetup />} />
        <Route path="/tutorials/formuler" element={<FormulerSetup />} />
        <Route path="/tutorials/enigma2" element={<Enigma2Setup />} />
        <Route path="/tutorials/vlc-windows" element={<VlcWindowsSetup />} />
        <Route path="/tutorials/mobile" element={<MobileSetup />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;