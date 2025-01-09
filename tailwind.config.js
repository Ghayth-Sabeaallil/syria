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
        slideDown: {
          "0%": { top: "-100%", opacity: "0" },
          "100%": { top: "100%", opacity: "1" },
        },
        slideUp: {
          "0%": { top: "100%", opacity: "1" },
          "100%": { top: "-100%", opacity: "0" },
        },
      },
      rotate: {
        360: "360deg",
        180: "180deg",
      },
      fontFamily: {
        Amiri: ["Amiri", "serif"],
        Kufi: ["Reem Kufi", "serif"], // Map 'roboto' to the Google Font
      },
    },
  },
  variants: {},
  plugins: [],
};
