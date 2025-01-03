import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'brutal-sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.05em', fontWeight: '700' }],
        'brutal-base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.05em', fontWeight: '700' }],
        'brutal-lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.05em', fontWeight: '700' }],
        'brutal-xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0.05em', fontWeight: '800' }],
        'brutal-2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '0.05em', fontWeight: '800' }],
        'brutal-3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '0.05em', fontWeight: '900' }],
        'brutal-4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '0.05em', fontWeight: '900' }],
      },
      colors: {
        primary: "#FF3D00", // Vibrant orange-red for high CTR
        neon: "#FF3D00",
        dark: "#000000",
        "dark-gray": "#1A1A1A",
        border: "#FF3D00",
        input: "#000000",
        ring: "#FF3D00",
        background: "#000000",
        foreground: "#FFFFFF",
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#FF3D00",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FFD600", // Bright yellow for accents
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF3D00",
          "secondary": "#1A1A1A",
          "accent": "#FFD600",
          "neutral": "#000000",
          "base-100": "#000000",
          "info": "#00B4D8",
          "success": "#00F5A0",
          "warning": "#FFD600",
          "error": "#FF3D00",
        },
      },
    ],
  },
} satisfies Config;