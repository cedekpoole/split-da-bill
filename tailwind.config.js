/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Fatface", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
