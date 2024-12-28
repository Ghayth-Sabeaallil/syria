/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        animation: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInOutWithBlack: {
          "0%": { opacity: "0" },
          "10%": { opacity: "1" },
          "30%": { opacity: "1", transform: "scale(1.06)" },
          "40%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
