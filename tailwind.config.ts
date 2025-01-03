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
      colors: {
        primary: "#F97316",
        neon: "#F97316",
        dark: "#000000",
        "dark-gray": "#000000",
        border: "#F97316",
        input: "#000000",
        ring: "#F97316",
        background: "#000000",
        foreground: "#FFFFFF",
        secondary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#000000",
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
          "primary": "#F97316",
          "secondary": "#000000",
          "accent": "#F97316",
          "neutral": "#000000",
          "base-100": "#000000",
          "info": "#0ea5e9",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
} satisfies Config;