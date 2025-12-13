/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom green palette
        'primary': '#10b981',      // emerald-500 (bright accent green)
        'primary-dark': '#059669',  // emerald-600 (darker green)
        'bg-dark': '#0a0f0d',      // very dark green-tinted black
        'bg-card': '#1a2e23',      // dark green card background
        'text-primary': '#e8f5e9', // light green-tinted white
        'text-secondary': '#81c784', // softer green for secondary text
      },
    },
  },
  plugins: [],
}
