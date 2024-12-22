import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { PerformanceMonitor } from "./components/PerformanceMonitor";
import Index from "./pages/Index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // Consider data fresh for 1 minute
      cacheTime: 5 * 60 * 1000, // Keep unused data in cache for 5 minutes
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SpeedInsights endpoint="bob-app.vercel.sh/_vercel/speed-insights/vitals" />
        <PerformanceMonitor />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;