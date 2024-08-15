/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "auto" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "auto" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 2s ease-out",
        "accordion-up": "accordion-up 2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}