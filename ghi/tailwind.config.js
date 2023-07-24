/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyan-700": "#4B838C",
      },
    },
  },
  plugins: [],
};
