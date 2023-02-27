/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '2.000rem',
      'full': '9999px',
      'large': '50px',
    },
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        roboto: ["Robot", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "880px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};