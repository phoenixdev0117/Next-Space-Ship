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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
