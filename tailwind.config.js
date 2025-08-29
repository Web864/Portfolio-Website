/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",  // ✅ important
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
    sm: "640px",
    custom: "700px", // 👈 new custom breakpoint
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
