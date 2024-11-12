import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        'vintage-black': '#1A1A1A',
        'vintage-white': '#FAFAFA',
        'accent': '#9A8A78',
        'muted': '#666666',
      },
    },
  },
  plugins: [],
};

export default config;
