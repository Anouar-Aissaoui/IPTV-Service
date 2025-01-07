import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from 'next-themes';

// Lazy load pages for better performance
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

// Configure Query Client with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Optimized route configuration
const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Suspense fallback={<PageLoader />}>
            <Index />
          </Suspense>
        } 
      />
      <Route 
        path="/premium-iptv-service" 
        element={
          <Suspense fallback={<PageLoader />}>
            <Index />
          </Suspense>
        } 
      />
      <Route 
        path="/channels" 
        element={
          <Suspense fallback={<PageLoader />}>
            <Channels />
          </Suspense>
        } 
      />
      <Route path="/pricing" element={<Navigate to="/#pricing-section" replace />} />
      <Route path="/faq" element={<Navigate to="/#faq-section" replace />} />
      
      {/* IPTV Setup Tutorials routes */}
      <Route 
        path="/iptv-setup-tutorials" 
        element={
          <Suspense fallback={<PageLoader />}>
            <Tutorials />
          </Suspense>
        } 
      />
      <Route 
        path="/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv" 
        element={
          <Suspense fallback={<PageLoader />}>
            <SmartTvSetup />
          </Suspense>
        } 
      />
      <Route 
        path="/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices" 
        element={
          <Suspense fallback={<PageLoader />}>
            <MobileSetup />
          </Suspense>
        } 
      />
      <Route 
        path="/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box" 
        element={
          <Suspense fallback={<PageLoader />}>
            <MagSetup />
          </Suspense>
        } 
      />
      <Route 
        path="/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8" 
        element={
          <Suspense fallback={<PageLoader />}>
            <FormulerSetup />
          </Suspense>
        } 
      />
      <Route 
        path="/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick" 
        element={
          <Suspense fallback={<PageLoader />}>
            <FireTvSetup />
          </Suspense>
        } 
      />
      <Route 
        path="/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2" 
        element={
          <Suspense fallback={<PageLoader />}>
            <Enigma2Setup />
          </Suspense>
        } 
      />
      <Route 
        path="/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows" 
        element={
          <Suspense fallback={<PageLoader />}>
            <VlcWindowsSetup />
          </Suspense>
        } 
      />

      {/* Redirects for legacy routes */}
      <Route path="/tutorials" element={<Navigate to="/iptv-setup-tutorials" replace />} />
      <Route path="/tutorials/smart-tv" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-smart-tv" replace />} />
      <Route path="/tutorials/mobile" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-mobile-devices" replace />} />
      <Route path="/tutorials/mag" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-mag-box" replace />} />
      <Route path="/tutorials/formuler" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-formuler-z8" replace />} />
      <Route path="/tutorials/fire-tv" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-fire-tv-stick" replace />} />
      <Route path="/tutorials/enigma" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-enigma2" replace />} />
      <Route path="/tutorials/vlc-windows" element={<Navigate to="/iptv-setup-tutorials/how-to-setup-iptv-on-vlc-windows" replace />} />

      <Route 
        path="*" 
        element={
          <Suspense fallback={<PageLoader />}>
            <NotFound />
          </Suspense>
        } 
      />
    </Routes>
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