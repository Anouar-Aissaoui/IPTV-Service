import { useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

export const PerformanceMonitor = () => {
  useEffect(() => {
    const measurePerformance = async () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        
        const cls = await new Promise<number>(resolve => {
          let clsValue = 0;
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              const layoutShift = entry as LayoutShift;
              if (!layoutShift.hadRecentInput) {
                clsValue += layoutShift.value;
              }
            }
            resolve(clsValue);
          }).observe({ type: 'layout-shift', buffered: true });
        });

        const metrics = {
          route: window.location.pathname,
          load_time: navigation.loadEventEnd - navigation.startTime,
          ttfb: navigation.responseStart - navigation.requestStart,
          fcp: fcp,
          lcp: performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0,
          cls: cls
        };

        await supabase.from('performance_metrics').insert([metrics]);
      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    };

    // Measure after the page has fully loaded
    window.addEventListener('load', measurePerformance);
    return () => window.removeEventListener('load', measurePerformance);
  }, []);

  return null;
};

// Add LayoutShift type definition
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}