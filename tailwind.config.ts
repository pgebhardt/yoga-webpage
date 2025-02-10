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
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: {
          DEFAULT: '#8BA888',
          dark: '#7B9878'
        },
        ocean: {
          DEFAULT: '#4A7B9D',
          dark: '#366789'
        },
        sand: {
          DEFAULT: '#E5DED6',
          dark: '#D1CAC2'
        },
        terracotta: {
          DEFAULT: '#C67D5B',
          dark: '#B26947'
        },
        lavender: {
          DEFAULT: '#9B8AA5',
          dark: '#877691'
        }
      },
    },
  },
  plugins: [],
};

export default config;
