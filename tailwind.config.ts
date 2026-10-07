import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Foundation
        "dark-primary": "#080A0F",
        "dark-secondary": "#11151D",
        
        // Premium Red
        "red-primary": "#D71920",
        "red-accent": "#F02732",
        
        // Neutrals
        white: "#FFFFFF",
        "bg-light": "#F5F7FA",
        "neutral-dark": "#202631",
        "neutral-grey": "#A7ADB8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-oswald)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #080A0F 0%, #1a1f2a 100%)",
        "gradient-dark": "linear-gradient(135deg, #11151D 0%, #080A0F 100%)",
        "gradient-red": "linear-gradient(135deg, #D71920 0%, #F02732 100%)",
      },
      boxShadow: {
        "premium": "0 8px 32px rgba(0, 0, 0, 0.4)",
        "premium-sm": "0 4px 12px rgba(0, 0, 0, 0.3)",
        "red-glow": "0 0 30px rgba(215, 25, 32, 0.4)",
        "red-glow-lg": "0 0 60px rgba(215, 25, 32, 0.3)",
      },
      animation: {
        "fade-in": "fadeInUp 0.6s ease-out",
        "fade-in-scale": "fadeInScale 0.5s ease-out",
        "slide-left": "slideInLeft 0.6s ease-out",
        "slide-right": "slideInRight 0.6s ease-out",
        "float": "floatUp 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { "box-shadow": "0 0 20px rgba(215, 25, 32, 0.3)" },
          "50%": { "box-shadow": "0 0 40px rgba(215, 25, 32, 0.6)" },
        },
        shimmer: {
          "0%": { "background-position": "-1000px 0" },
          "100%": { "background-position": "1000px 0" },
        },
        gradientShift: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
      },
    },
  },
} satisfies Config;
