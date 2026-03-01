/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Glow with Joo - Purple Theme
        'theme-bg': '#FFFFFF',           // Pure White
        'theme-text': '#4A4A4A',         // Soft Charcoal

        // Primary - Soft Pink
        'blush': {
          DEFAULT: '#e17c93', // Soft Pink
          50: '#fdf8f9',
          100: '#faedf0',
          200: '#f5dce1',
          300: '#f0c3cd',
          400: '#eaa3b3',
          500: '#e17c93',
          600: '#d05874',
          700: '#b04058',
          800: '#93384b',
          900: '#7c3141',
        },

        // Accent - Pastel Blue
        'pastel-blue': {
          DEFAULT: '#a5d3df',
          50: '#f0f8fa',
          100: '#e1f1f5',
          200: '#c9e6ed',
          300: '#a5d3df',
          400: '#78bbcd',
          500: '#57a1b6',
          600: '#468196',
          700: '#3b687b',
          800: '#345766',
          900: '#2f4956',
        },

        // Secondary - Soft Gold/Accent
        'rose': {
          DEFAULT: '#FBBF24',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },

        // Neutral - Soft Charcoal
        'charcoal': {
          DEFAULT: '#3D3D3D',
          50: '#F7F7F7',
          100: '#EFEFEF',
          200: '#DFDFDF',
          300: '#CFCFCF',
          400: '#9F9F9F',
          500: '#6F6F6F',
          600: '#5F5F5F',
          700: '#4F4F4F',
          800: '#3D3D3D', // Primary Text
          900: '#2D2D2D',
        },

        // Backgrounds
        'cream': '#FFFFFF',
        'blush-light': '#F5F3FF',
        'warm-white': '#FAFAFB',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        heading: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'sm': '3px 3px 10px rgba(180, 190, 205, 0.15), -3px -3px 10px rgba(255, 255, 255, 0.9)',
        'DEFAULT': '5px 5px 15px rgba(180, 190, 205, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.8)',
        'md': '8px 8px 24px rgba(180, 190, 205, 0.25), -8px -8px 24px rgba(255, 255, 255, 0.9)',
        'lg': '12px 12px 30px rgba(180, 190, 205, 0.25), -12px -12px 30px rgba(255, 255, 255, 1)',
        'soft': '15px 15px 35px rgba(180, 190, 205, 0.2), -15px -15px 35px rgba(255, 255, 255, 0.8)',
        'luxury': '20px 20px 40px rgba(225, 124, 147, 0.15), -20px -20px 40px rgba(255, 255, 255, 0.9)',
        'neumorphic-inner': 'inset 4px 4px 8px rgba(180, 190, 205, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.9)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.5rem',
        'DEFAULT': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '2.5rem',
        '2xl': '3rem',
        'full': '9999px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
