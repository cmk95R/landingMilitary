/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "ea-bg": "rgb(var(--ea-bg) / <alpha-value>)",
        "ea-surface": "rgb(var(--ea-surface) / <alpha-value>)",
        "ea-olive": "rgb(var(--ea-olive) / <alpha-value>)",
        "ea-gold": "rgb(var(--ea-gold) / <alpha-value>)",
        "ea-white": "rgb(var(--ea-white) / <alpha-value>)",
        "ea-black": "rgb(var(--ea-black) / <alpha-value>)",
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        boxShadow: {
        "ea-glow": "0 0 18px rgba(255,255,255,0.08)",
        "ea-glow-lg": "0 0 28px rgba(255,255,255,0.14)",
      },
      },
    },
  },
  plugins: [],
}