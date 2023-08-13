/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./navigation/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#f43f5e',
      'midnight': '#8b5cf6',
      'metal': '#a78bfa',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#94a3b8',
      'grey': '#cbd5e1',
    },
  },
  plugins: [],
}

