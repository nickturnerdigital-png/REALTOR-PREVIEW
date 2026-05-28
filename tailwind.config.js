/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#141412', 2: '#1e1c1a' },
        gold: { DEFAULT: '#B8935A', light: '#CCA87A' },
        sage: { DEFAULT: '#243B30', deep: '#1a2d24' },
        cream: { DEFAULT: '#F2ECE1', 2: '#EAE2D5' },
        paper: '#FAFAF7',
        muted: '#737370',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { container: '1240px' },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

