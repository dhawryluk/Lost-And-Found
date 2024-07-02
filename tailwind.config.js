/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primeColor: "#f5efe6",
        secondary: "#e8dfca",
        accent1: "#4f6f52",
        accent2: "#1a4d2e",
      },
      fontFamily: {
        bodyText: ["Source Sans 3", "sans-serif"],
        titleText: ["Playfair Display", "serif"],
      },
    },
    plugins: [],
  },
};
