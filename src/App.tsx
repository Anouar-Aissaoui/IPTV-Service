import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from 'next-themes';
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
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/premium-iptv-service" element={<Index />} />
      <Route path="/channels" element={<Index />} />
      <Route path="/pricing" element={<Index />} />
      <Route path="/faq" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const supportedLanguages = ['en', 'es', 'de', 'fr'];
  
  const getBrowserLanguage = () => {
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang && supportedLanguages.includes(storedLang)) {
      return storedLang;
    }
    
    const browserLang = navigator.language.split('-')[0];
    return supportedLanguages.includes(browserLang) ? browserLang : 'en';
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Navigate to={`/${getBrowserLanguage()}`} replace />} 
      />
      {supportedLanguages.map(lang => (
        <Route 
          key={lang}
          path={`/${lang}/*`} 
          element={<LanguageRoutes language={lang} />} 
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <div className="app-container relative">
                <AppRoutes />
                <Toaster />
                <Sonner />
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;