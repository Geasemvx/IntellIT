/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        panel: '#0a0f0c',
        fog: '#e7e7e7',
        ash: '#9a9a9a',
        steel: '#a7a7a7',
        forest: '#093622',
        leaf: '#3fbf7f',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: { prose: '38rem' },
    },
  },
  plugins: [],
}
