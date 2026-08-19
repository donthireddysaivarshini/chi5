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
        sienna: {
          light: '#5E2B1B',
          DEFAULT: '#3A1C11',
          dark: '#28120C',
        },
        alabaster: {
          DEFAULT: '#F5F3E6',
          muted: '#EBE8D8',
        },
        caramel: {
          light: '#E59253',
          DEFAULT: '#CE793A',
          dark: '#B06126',
        },
        chocolate: {
          DEFAULT: '#EEE8DE',
          dark: '#E2D8CA',
        },
        borderTone: {
          DEFAULT: '#EADECF',
          dark: '#D8C7B2',
        },
        noir: {
          DEFAULT: '#1B1717',
          muted: '#3C3636',
        },
        emerald: {
          DEFAULT: '#10B981',
        },
        whatsapp: {
          DEFAULT: '#25D366',
        },
      },
      fontFamily: {
        gumani: ['var(--font-playfair)', 'var(--font-gloock)', 'Playfair Display', 'Gloock', 'serif'],
        figtree: ['var(--font-figtree)', 'Figtree', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        gloock: ['var(--font-gloock)', 'Gloock', 'serif'],
      },
      boxShadow: {
        kura: '0 10px 30px -5px rgba(58, 28, 17, 0.08)',
        'kura-lg': '0 20px 40px -10px rgba(58, 28, 17, 0.15)',
        'caramel-glow': '0 0 25px rgba(206, 121, 58, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
