/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'sophie': ['SophieComic', 'system-ui', 'sans-serif'],
        'genz': ['Genz', 'system-ui', 'sans-serif'],
        'bags': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // BuyBag Green Theme
        'buybag-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // BuyBag Gold Theme
        'buybag-gold': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // BuyBag Neutral Colors
        'buybag-black': '#000000',
        'buybag-dark-gray': '#1a1a1a',
        'buybag-gray': '#374151',
        'buybag-light-gray': '#6b7280',
        'buybag-white': '#ffffff',
        // Legacy Moon Theme (for compatibility)
        'moon-yellow': '#fbbf24',
        'moon-neon': '#f59e0b',
        'moon-dark': '#000000',
        'moon-gray': '#1a1a1a',
        'moon-white': '#ffffff',
      },
      keyframes: {
        "led-flow": {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" }
        },
        "led-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "translateY(-100%)" },
          "50%": { opacity: "1", transform: "translateY(100%)" }
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.3"
          },
          "50%": { 
            transform: "translateY(-20px) translateX(10px)",
            opacity: "0.6"
          }
        }
      },
      animation: {
        "led-flow": "led-flow 8s ease infinite",
        "led-pulse": "led-pulse 4s ease infinite",
        "gradient": "gradient 6s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 