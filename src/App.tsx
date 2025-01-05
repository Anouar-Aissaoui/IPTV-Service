import React, { StrictMode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import Index from "./pages/Index";
import Tutorials from "./pages/Tutorials";
import SmartTvSetup from "./pages/SmartTvSetup";
import MobileSetup from "./pages/MobileSetup";
import MagSetup from "./pages/MagSetup";
import FormulerSetup from "./pages/FormulerSetup";
import FireTvSetup from "./pages/FireTvSetup";
import Enigma2Setup from "./pages/Enigma2Setup";
import VlcWindowsSetup from "./pages/VlcWindowsSetup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/best-premium-iptv-service" element={<Index />} />
      <Route path="/buy-iptv-subscription" element={<Index />} />
      <Route path="/iptv-channels-list" element={<Index />} />
      <Route path="/iptv-pricing-plans" element={<Index />} />
      <Route path="/iptv-service-faq" element={<Index />} />
      <Route path="/iptv-setup-tutorials" element={<Tutorials />} />
      <Route path="/setup-guides/smart-tv-iptv-installation" element={<SmartTvSetup />} />
      <Route path="/setup-guides/mobile-iptv-app-setup" element={<MobileSetup />} />
      <Route path="/setup-guides/mag-box-iptv-configuration" element={<MagSetup />} />
      <Route path="/setup-guides/formuler-z8-iptv-setup" element={<FormulerSetup />} />
      <Route path="/setup-guides/fire-tv-stick-iptv-guide" element={<FireTvSetup />} />
      <Route path="/setup-guides/enigma2-vu-plus-iptv-setup" element={<Enigma2Setup />} />
      <Route path="/setup-guides/vlc-windows-iptv-player-guide" element={<VlcWindowsSetup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <div className="app-container relative">
                <AppRoutes />
                <Toaster />
                <Sonner />
              </div>
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;