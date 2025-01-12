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
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            '@tanstack/react-query',
            'next-themes',
            'i18next',
            'react-i18next'
          ],
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-toast'
          ],
          components: [
            './src/components/Hero.tsx',
            './src/components/Content.tsx',
            './src/components/MovieCard.tsx'
          ]
        },
      },
    },
    modulePreload: {
      polyfill: true,
      resolveDependencies: (filename, deps) => {
        // Optimize dependency resolution
        return deps.filter(dep => !dep.includes('node_modules'));
      }
    },
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
        passes: 2,
        ecma: 2020,
        module: true,
        toplevel: true,
        unsafe_arrows: true,
        unsafe_methods: true
      },
      mangle: {
        safari10: true,
        toplevel: true,
        module: true
      },
      format: {
        comments: false,
        ecma: 2020
      }
    },
    cssCodeSplit: true,
    cssMinify: true,
    reportCompressedSize: false,
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vercel/speed-insights'],
    esbuildOptions: {
      target: 'esnext',
      splitting: true,
      minify: true,
      treeShaking: true,
      format: 'esm'
    }
  }
}));