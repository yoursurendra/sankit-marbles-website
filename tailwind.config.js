/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        ivory: "#f5f1e8",
        ink: "#252525",
        bronze: "#b8864b",
        "bronze-dark": "#8b633b",
        basalt: "#252525",
        stone: "#d6d3d1",
      },

      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
      },

      letterSpacing: {
        widest2: "0.2em",
      },

      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },

  plugins: [],
};