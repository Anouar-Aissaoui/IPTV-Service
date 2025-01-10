import React, { StrictMode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from 'next-themes';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeConfig } from './router/routes';

// Create a new router instance
const router = createRouter(routeConfig);

// Declare the router type to enable type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RouterProvider router={router} />
          <div className="min-h-screen bg-background">
            <div className="app-container relative">
              <Toaster />
              <Sonner />
            </div>
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;