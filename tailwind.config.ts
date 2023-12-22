import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%,50%,100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },
          "75%": {
            transform: "rotate(-5deg)",
          },
        },
        blob: {
          "0%": {
            // transform: "scale(1)",
            backgroundColor: "#fbe2e3",
          },
          "33%": {
            // transform: "scale(1.1)",
            backgroundColor: "#dbd7fb",
          },
          "66%": {
            // transform: "scale(0.9)",
            backgroundColor: "#eed7f8",
          },
          "100%": {
            // transform: "scale(1)",
            backgroundColor: "#f8ecd7",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config
