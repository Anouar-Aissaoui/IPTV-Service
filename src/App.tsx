import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IPTVProviders from "./pages/IPTVProviders";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/providers" element={<IPTVProviders />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;