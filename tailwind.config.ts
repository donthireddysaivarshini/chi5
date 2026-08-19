import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Approved Obsidian Carbon & Champagne Bronze luxury tokens
        obsidian: '#0E1116',       // Primary text, dark backgrounds, high-contrast titles
        alabaster: {
          DEFAULT: '#F8F9FA',      // Main page background canvas, clean off-white
          muted: '#F0F2F5',
          stone: '#E5E8EC',
        },
        bronze: {
          DEFAULT: '#BFA181',      // Primary accent, key price metrics, luxury CTA buttons
          hover: '#A68C70',        // Hover state for bronze buttons
          light: '#CDB397',
          dark: '#8E7358',
        },
        'bronze-hover': '#A68C70',   // Direct token alias
        'charcoal-mute': '#5A6472',  // Body copy, secondary descriptions, specifications
        'zinc-border': '#DFE3E8',    // 1px architectural gridlines, card borders

        // Backwards-compatible mappings for unified design system
        sienna: {
          light: '#1B212B',
          DEFAULT: '#0E1116',
          dark: '#07090C',
        },
        caramel: {
          light: '#CDB397',
          DEFAULT: '#BFA181',
          dark: '#A68C70',
        },
        chocolate: {
          DEFAULT: '#F0F2F5',
          dark: '#DFE3E8',
        },
        borderTone: {
          DEFAULT: '#DFE3E8',
          dark: '#CCD2DA',
        },
        noir: {
          DEFAULT: '#0E1116',
          muted: '#5A6472',
        },
        emerald: {
          DEFAULT: '#10B981',
          400: '#34D399',
        },
        whatsapp: {
          DEFAULT: '#25D366',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        headline: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        gumani: ['"Playfair Display"', 'Georgia', 'serif'],
        figtree: ['"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        kura: '0 10px 30px -5px rgba(14, 17, 22, 0.06)',
        'kura-lg': '0 20px 40px -10px rgba(14, 17, 22, 0.12)',
        'bronze-glow': '0 0 25px rgba(191, 161, 129, 0.35)',
        'caramel-glow': '0 0 25px rgba(191, 161, 129, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
