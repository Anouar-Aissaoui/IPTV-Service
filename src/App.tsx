import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

const LanguageRoutes = ({ language }: { language: string }) => {
  const { i18n } = useTranslation();
  
  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const supportedLanguages = ['en', 'es', 'de', 'fr'];
  
  const getBrowserLanguage = () => {
    const browserLang = navigator.language.split('-')[0];
    return supportedLanguages.includes(browserLang) ? browserLang : 'en';
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Navigate to={`/${getBrowserLanguage()}`} replace />} 
      />
      <Route path="/en/*" element={<LanguageRoutes language="en" />} />
      <Route path="/es/*" element={<LanguageRoutes language="es" />} />
      <Route path="/de/*" element={<LanguageRoutes language="de" />} />
      <Route path="/fr/*" element={<LanguageRoutes language="fr" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <div className="app-container relative">
            <TooltipProvider>
              <AppRoutes />
            </TooltipProvider>
            <Toaster />
            <Sonner />
          </div>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;