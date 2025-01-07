import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Lazy load all page components
const Index = React.lazy(() => import("./pages/Index"));
const Channels = React.lazy(() => import("./pages/Channels"));
const Tutorials = React.lazy(() => import("./pages/Tutorials"));
const SmartTvSetup = React.lazy(() => import("./pages/SmartTvSetup"));
const MobileSetup = React.lazy(() => import("./pages/MobileSetup"));
const MagSetup = React.lazy(() => import("./pages/MagSetup"));
const FormulerSetup = React.lazy(() => import("./pages/FormulerSetup"));
const FireTvSetup = React.lazy(() => import("./pages/FireTvSetup"));
const Enigma2Setup = React.lazy(() => import("./pages/Enigma2Setup"));
const VlcWindowsSetup = React.lazy(() => import("./pages/VlcWindowsSetup"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      suspense: true,
    },
  },
});

// Create a loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/premium-iptv-service" element={<Index />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/pricing" element={<Index />} />
        <Route path="/faq" element={<Index />} />
        
        {/* IPTV Setup Tutorials routes */}
        <Route path="/iptv-setup-tutorials" element={<Tutorials />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv" element={<SmartTvSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices" element={<MobileSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box" element={<MagSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8" element={<FormulerSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick" element={<FireTvSetup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2" element={<Enigma2Setup />} />
        <Route path="/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows" element={<VlcWindowsSetup />} />

        {/* Redirects */}
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
    </Suspense>
  );
};

const App = () => {
  return (
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
  );
};

export default App;