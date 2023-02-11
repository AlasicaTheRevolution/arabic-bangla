/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3ec37d",
          secondary: "#4F98CA",
          accent: "#272727",
          neutral: "#191D24",
          "base-100": "#F5FCF8",
          info: "#C5EDD8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
