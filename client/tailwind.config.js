/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        gray1: "#D9D9D9",
        gray2: "#6A6767",
        gray3: "#302D2D",
        gray4: "#FFFFFF57",
        blue1: "#00A7DC",
        blue2: "#A1E3F9",
        blue3: "#05022C",
        blue4: "#30F",
      },
      fontSize: {
        xlg: "30px",
        lg: "24px",
        md: "20px",
        sm:"16px",
        xsm:"14px"
      },
    },
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1300px",
      xl: "1440px",
    },
  },
  plugins: [],
}

