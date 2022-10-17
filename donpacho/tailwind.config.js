/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      transparent: 'transparent',
      current: 'currentColor',
      'base-blue': '#1F7BE5',
      'hover-blue': '#005CC6',
      extend: {},
  },
  plugins: [],
  prefix: 'tr-',
};