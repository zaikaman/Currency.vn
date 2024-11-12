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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            maxWidth: '100%',
            a: {
              color: 'var(--accent)',
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            h1: {
              color: 'var(--foreground)',
              fontWeight: '300',
              fontFamily: theme('fontFamily.montserrat'),
            },
            h2: {
              color: 'var(--foreground)',
              fontWeight: '300',
              fontFamily: theme('fontFamily.montserrat'),
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: 'var(--foreground)',
              fontWeight: '300',
              fontFamily: theme('fontFamily.montserrat'),
            },
            strong: {
              color: 'var(--foreground)',
            },
            blockquote: {
              color: 'var(--muted)',
              borderLeftColor: theme('colors.accent'),
            },
            code: {
              color: 'var(--foreground)',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            hr: {
              borderColor: 'var(--muted)',
              opacity: '0.1',
            },
            ul: {
              li: {
                '&::before': {
                  backgroundColor: 'var(--muted)',
                },
              },
            },
            ol: {
              li: {
                '&::before': {
                  color: 'var(--muted)',
                },
              },
            },
          },
        },
        // Variant cho dark mode
        vintage: {
          css: {
            '--tw-prose-body': 'var(--foreground)',
            '--tw-prose-headings': 'var(--foreground)',
            '--tw-prose-links': 'var(--accent)',
            '--tw-prose-bold': 'var(--foreground)',
            '--tw-prose-quotes': 'var(--muted)',
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-counters': 'var(--muted)',
            '--tw-prose-bullets': 'var(--muted)',
            '--tw-prose-hr': 'var(--muted)',
            '--tw-prose-th-borders': 'var(--muted)',
            '--tw-prose-td-borders': 'var(--muted)',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

