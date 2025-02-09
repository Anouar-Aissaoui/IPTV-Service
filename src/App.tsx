import React, { StrictMode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import ErrorBoundary from "./components/ErrorBoundary";
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
import FreeTrial from "./pages/FreeTrial";
import NotFound from "./pages/NotFound";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

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
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/iptv-free-trial-24-hours" element={<FreeTrial />} />
      <Route path="/blog/best-iptv-service-providers-subscriptions" element={<BlogPost />} />
      
      {/* Redirect from old URL to new URL */}
      <Route path="/free-trial" element={<Navigate to="/iptv-free-trial-24-hours" replace />} />
      
      {/* New IPTV Setup Tutorials routes with descriptive URLs */}
      <Route path="/iptv-setup-tutorials" element={<Tutorials />} />
      <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv" element={<SmartTvSetup />} />
      <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices" element={<MobileSetup />} />
      <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box" element={<MagSetup />} />
      <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8" element={<FormulerSetup />} />
      <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick" element={<FireTvSetup />} />
      <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2" element={<Enigma2Setup />} />
      <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows" element={<VlcWindowsSetup />} />

      {/* Redirects from old tutorial URLs */}
      <Route path="/tutorials" element={<Navigate to="/iptv-setup-tutorials" replace />} />
      <Route path="/tutorials/smart-tv" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv" replace />} />
      <Route path="/tutorials/mobile" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices" replace />} />
      <Route path="/tutorials/mag" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box" replace />} />
      <Route path="/tutorials/formuler" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8" replace />} />
      <Route path="/tutorials/fire-tv" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick" replace />} />
      <Route path="/tutorials/enigma" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2" replace />} />
      <Route path="/tutorials/vlc-windows" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows" replace />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </StrictMode>
  );
};

export default App;
