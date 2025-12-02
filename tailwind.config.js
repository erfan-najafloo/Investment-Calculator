/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // HTML اصلی
    "./src/**/*.{js,ts,jsx,tsx}", // تمام فایل‌های JSX/TSX
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['"Quicksand"', "sans-serif"],
        robotoCondensed: ['"Roboto Condensed"', "sans-serif"],
      },
    },
  },
};
