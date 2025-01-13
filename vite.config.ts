import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'submit-sitemap',
      closeBundle: async () => {
        if (mode === 'production') {
          try {
            const response = await fetch('https://nzemomqyeyamurngohfl.supabase.co/functions/v1/submit-sitemap', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                sitemapUrl: 'https://www.iptvservice.site/sitemap.xml'
              })
            });
            
            const result = await response.json();
            console.log('Sitemap submission result:', result);
          } catch (error) {
            console.error('Failed to submit sitemap:', error);
          }
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router-dom',
            '@tanstack/react-query',
            'next-themes'
          ],
          'ui': [
            '@/components/ui',
          ],
          'features': [
            '@/components/Hero',
            '@/components/Pricing',
            '@/components/Content',
            '@/components/LiveSports',
            '@/components/FAQ',
            '@/components/BrandCarousel',
            '@/components/LiveChannels'
          ],
          'tutorials': [
            '@/components/tutorials'
          ],
          'seo': [
            '@/components/seo'
          ]
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
      },
    },
    cssCodeSplit: true,
    cssMinify: true,
    sourcemap: false,
  },
}));