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
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
