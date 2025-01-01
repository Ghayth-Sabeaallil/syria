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
        animationLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        animationRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
