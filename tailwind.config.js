/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screen: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },

    extend: {
      fontFamily: {
        primary: ["JetBrains Mono"],
      },
      colors: {
        primary: "white",
        accent: {
          DEFAULT: "rgb(255, 119, 15)",
          hover: "rgb(235, 103, 0)",
        },
      },
    },
  },
  plugins: [],
};
