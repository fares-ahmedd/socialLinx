/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        "primary-300": "#ad2f00",
        "primary-500": "#f93e00",
        "primary-700": "#e5795c",
        "secondary-500": "#FFB620",
        "off-white": "#D0DFFF",
        red: "#FF5A5A",
        "dark-1": "#0D1117",
        "dark-2": "#161B22",
        "dark-3": "#21262D",
        "dark-4": "#30363D",
        "light-1": "#cdcdcd",
        "light-2": "#EFEFEF",
        "light-3": "#EFEFEF",
      },
      screens: {
        xs: "480px",
      },
      width: {
        420: "420px",
        465: "465px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-down": {
          from: { transform: "translateY(-20px)", opacity: "0" },
          to: { transform: "translateY(0px)", opacity: "1" },
        },
        "fade-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0px)", opacity: "1" },
        },
        "fade-left": {
          from: { transform: "translateX(-20px)", opacity: "0" },
          to: { transform: "translateX(0px)", opacity: "1" },
        },
        "fade-right": {
          from: { transform: "translateX(20px)", opacity: "0" },
          to: { transform: "translateX(0px)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-down": "fade-down 0.8s ease-out",
        "fade-up": "fade-up 0.8s ease-out",
        "fade-left": "fade-left 0.8s ease-out",
        "fade-right": "fade-right 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
