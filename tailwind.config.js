const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit", //preview, compiles css on the file, making build times faster
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], //Purges unused css from final bundle. Ship very small css file to browser
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        foreground: "#d6deeb ",

        color1: "#011627",
        color2: "#01111d",
        color3: "#1d3b53",
        color4: "#4b6479 ",
        color5: "#c5e4fd  ",
        color6: "#7fdbca  ",
        color7: "#637777  ",
        color8: "#ef5350  ",
        color9: "#22da6e  ",
        color10: "#addb67  ",
        color11: "#82aaff  ",
        color12: "#f78c6c  ",
        color13: "#c792ea  ",
        color14: "#21c7a8  ",
        color15: "#575656  ",

        nightowlbg: "#011627",
        nightowlbg2: "#000b14",
        primary: "#202225",
        secondary: "#5865f2",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
    },
  },
  plugins: [],
};
