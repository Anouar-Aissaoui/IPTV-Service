import React, { StrictMode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import Index from "./pages/Index";
import Channels from "./pages/Channels";
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
      <Route path="/premium-iptv-service" element={<Index />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/pricing" element={<Index />} />
      <Route path="/faq" element={<Index />} />
      <Route path="/tutorials" element={<Tutorials />} />
      <Route path="/tutorials/smart-tv" element={<SmartTvSetup />} />
      <Route path="/tutorials/mobile" element={<MobileSetup />} />
      <Route path="/tutorials/mag" element={<MagSetup />} />
      <Route path="/tutorials/formuler" element={<FormulerSetup />} />
      <Route path="/tutorials/fire-tv" element={<FireTvSetup />} />
      <Route path="/tutorials/enigma" element={<Enigma2Setup />} />
      <Route path="/tutorials/vlc-windows" element={<VlcWindowsSetup />} />
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