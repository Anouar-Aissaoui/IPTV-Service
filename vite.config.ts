import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            if (id.includes('@/components/ui')) {
              return 'ui';
            }
            if (id.includes('@/components/seo')) {
              return 'seo';
            }
            if (id.includes('@/utils')) {
              return 'utils';
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
        pure_funcs: mode === 'production' ? ['console.log'] : [],
      },
    },
    reportCompressedSize: false,
    sourcemap: mode === 'development'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: []
  },
}));