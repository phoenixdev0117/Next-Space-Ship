import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      colors: {
        'background': 'rgba(2, 7, 19, 1)',
        'foreground': 'rgba(248, 250, 252, 1)',
        'card': 'rgba(2, 7, 19, 1)',
        'cardForeground': 'rgba(248, 250, 252, 1)',
        'popover': 'rgba(2, 7, 19, 1)',
        'popoverForeground': 'rgba(248, 250, 252, 1)',
        'primary': 'rgba(55, 128, 246, 1)',
        'primaryForeground': 'rgba(15, 23, 41, 1)',
        'secondary': 'rgba(29, 40, 57, 1)',
        'secondaryForeground': 'rgba(248, 250, 252, 1)',
        'muted': 'rgba(29, 40, 57, 1)',
        'mutedForeground': 'rgba(148, 163, 184, 1)',
        'accent': 'rgba(29, 40, 57, 1)',
        'accentForeground': 'rgba(248, 250, 252, 1)',
        'destructive': 'rgba(124, 29, 29, 1)',
        'destructiveForeground': 'rgba(248, 250, 252, 1)',
        'border': 'rgba(29, 40, 57, 1)',
        'input': 'rgba(29, 40, 57, 1)',
        'ring': 'rgba(29, 79, 215, 1)',
        /* Colors from the last project */
        'colorPrimary': 'rgb(37, 79, 168)',
        'colorPrimaryLight': '#0073ff',
        'colorPrimaryDark': '#022c8f',
        'colorSecondary': '#6c757d',
        'colorSecondaryLight': '#9ea3a8',
        'colorSecondaryDark': '#343a40',
        'colorBodyGeneral': 'rgba(20, 65, 156, 0.279)',
        'backgroundNavbar': 'rgba(10, 55, 75, 0.2)',
        'backgroundFooterBadges': 'rgba(1, 20, 60, 1)',
        'backgroundFooter': 'rgba(15, 15, 20, 1)',
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
        "gradient": {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'brightness-150': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.5)' },
        },
        'brightness-125': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.25)' },
        },
        'brightness-175': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.75)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'gradient': 'gradient 5s linear infinite ease-in-out',
        'brightness-150': 'brightness-150 2s ease-in-out infinite',
        'brightness-125': 'brightness-125 2s ease-in-out infinite',
        'brightness-175': 'brightness-175 2s ease-in-out infinite',
      },
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
        '6000': '6000ms',
        '7000': '7000ms',
        '8000': '8000ms',
        '9000': '9000ms',
        '10000': '10000ms',
        '20000': '20000ms',
        '30000': '30000ms',
        '40000': '40000ms',
        '50000': '50000ms',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
