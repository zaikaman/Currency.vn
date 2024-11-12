/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        jakarta: ['var(--font-jakarta)'],
      },
    },
  },
  plugins: [],
};

