/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*{js,jsx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        '200': '200px',
        '400': '400px'
      },
      maxHeight: {
        '500': '500px'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f7e879",
          "secondary": "#6dbced",
          "accent": "#07577f",
          "neutral": "#252D41",
          "base-100": "#263254",
          "info": "#136DEC",
          "success": "#26C06B",
          "warning": "#EB9814",
          "error": "#F25F77",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

