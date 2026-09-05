/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Your Custom Executive Day Palette
        ivory: '#F5F3EE',       // Main background
        surface: '#FFFFFF',     // Cards / sections
        charcoal: '#202124',    // Main text
        slate: '#5F6368',       // Secondary text
        navy: '#172A3A',        // Headings / important UI
        gold: '#B08D57',        // Premium accent
        champagne: '#D6C2A3',   // Borders / subtle highlights
        softgray: '#E6E3DD',    // Dividers / backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}