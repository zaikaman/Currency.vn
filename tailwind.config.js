/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        accent: "var(--accent)",
        muted: "var(--muted)",
        "vintage-black": "var(--vintage-black)",
        "vintage-white": "var(--vintage-white)",
        'light-bg': '#FFFFFF',
        'light-text': '#1A1A1A',
        'light-muted': '#666666',
        'light-accent': '#9A8A78',
        'light-border': '#E5E5E5',
        'dark-bg': '#1A1A1A',
        'dark-text': '#FFFFFF',
        'dark-muted': '#999999',
        'dark-accent': '#9A8A78',
        'dark-border': '#2A2A2A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        jakarta: ['var(--font-jakarta)'],
      },
    },
  },
  plugins: [],
};

