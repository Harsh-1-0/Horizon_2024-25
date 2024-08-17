/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontSize: {
        "9xl": "9rem",
        "12xl": "12rem",
      },
      fontFamily: {
        tiffany: ["ITC Tiffany Std Demi", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        itc: ["ITC", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(70vw)" },
          "100%": { transform: "translateX(-70vw)" },
        },
      },
      animation: {
        marquee: "marquee 14s linear infinite ",
      },

      colors: {
        custom: "#FEFBEC",
        technica: "#B5DDC2",
        about: "#1E1E1E",
        button: "#F2C6AB",
        "button-click": "#F0B590",
        customColor: "#F2C6AB",
        greenish: "#171817",
        customGreen: "#B5DDC2",
        beige: "#FEFBEC",
        technicagrey: "#1E1E1E",
      },
      screens: {
        custom: "768px",
      },
      width: {
        "clamp-30vw-30vw-32vw": "clamp(30vw,30vw,32vw)",
        "clamp-85vw-85vw-85vw": "clamp(85vw,85vw,85vw)",
      },
      
      height: {
        "clamp-30vw-30vw-32vw": "clamp(30vw,30vw,32vw)",
        "clamp-40vw-55vw-60vw": "clamp(40vw,55vw,60vw)",
      },
      borderRadius: {
        tiny: "1rem",
      },
      borderWidth:{
        '1.75':'1.75px'
      },
    },
  },
  plugins: [],
};
