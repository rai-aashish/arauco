// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    colors: {
      primary: {
        50: "#fbecdd",
        600: "#ce7924",
        900: "#b75d03",
      },
      grey: "#eeeeee",
      "light-grey": "#f5f0eb",
      white: "#ffffff",
      content: {
        DEFAULT: "#696158",
        placeholder: " rgba(95, 95, 95, 0.8)",
      },
      line: {
        DEFAULT: "#aaaaaa",
        focus: "#696158",
        disabled: "#efefef",
      },
      error: {
        base: "#f81e1e",
      },
    },
    extend: {
      spacing: {
        3.5: "0.875rem", //14px
        4.5: "1.125rem", //18px
        7.5: "1.875rem", //30px
        25: "6.25rem", //100px
      },
      boxShadow: {
        primary: " 0 1.25rem 2.5rem 0 rgba(105, 97, 88, 0.2)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
