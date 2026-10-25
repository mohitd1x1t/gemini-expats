/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fdf7f3',
          100: '#fbece3',
          200: '#f6d6c3',
          300: '#efb698',
          400: '#e58d68',
          500: '#c85a28',
          600: '#b34b1e',
          700: '#933b16',
          800: '#773014',
          900: '#612914',
        },
        saasDark: {
          DEFAULT: '#181325',
          card: '#241c36',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        brand: {
          50: '#fdf7f3',
          100: '#fbece3',
          200: '#f6d6c3',
          300: '#efb698',
          400: '#e58d68',
          500: '#c85a28',
          600: '#b34b1e',
          700: '#933b16',
          800: '#773014',
          900: '#612914',
          950: '#3c1809',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Plus Jakarta Sans', 'Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
