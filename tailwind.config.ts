import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  /* Paths Tailwind should scan for class names */
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  /* <—--- NEW --------------------------------------> */
  safelist: [
    /* cyber-wave background system */
    "cyber-wave-bg",
    "cyber-wave",
    "wave-1",
    "wave-2",
    "wave-3",
    "wave-4",

    /* sparkle / orb effects */
    "sparkles",
    "sparkle",
    "floating-orbs",
    "orb",
  ],
  /* <——— end new block ———> */

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },

    extend: {
      /* ---------- colour palette ---------- */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        /* sidebar theme */
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        /* special cyber accents */
        cyber: {
          orange: "#FF8C42",
          gold: "#FFD700",
          amber: "#FFBF00",
          glow: "rgba(255, 140, 66, 0.6)",
          dark: "#1A0F0A",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ---------- keyframes ---------- */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%,100%": { boxShadow: "0 0 20px rgba(255, 140, 66, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 140, 66, 0.8)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-text": {
          "0%,100%": { textShadow: "0 0 10px rgba(255, 140, 66, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(255, 140, 66, 1)" },
        },
        "voice-pulse": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "speech-bubble": {
          "0%": { transform: "scale(0.95)", opacity: "0.8" },
          "50%": { transform: "scale(1.02)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },

      /* ---------- animation shortcuts ---------- */
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "glow-text": "glow-text 3s ease-in-out infinite",
        "voice-pulse": "voice-pulse 1.5s ease-out infinite",
        "speech-bubble": "speech-bubble 0.6s ease-out",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
