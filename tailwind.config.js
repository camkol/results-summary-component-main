/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
