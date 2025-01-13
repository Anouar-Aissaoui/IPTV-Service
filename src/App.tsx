import React, { StrictMode, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from 'next-themes';

// Lazy load pages
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
const FreeTrial = React.lazy(() => import("./pages/FreeTrial"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon"></div>
  </div>
);

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
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/premium-iptv-service" element={<Index />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/pricing" element={<Index />} />
        <Route path="/faq" element={<Index />} />
        <Route path="/iptv-free-trial-24-hours" element={<FreeTrial />} />
        
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
    </Suspense>
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