/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "b-4xl": "0 0 3rem 3rem",
        "4xl": "3rem",
      },
    },
  },
  plugins: [],
};
