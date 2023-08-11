/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      zIndex: {
        "-2": "-2",
        "-1": "-1",
      },
      opacity: {
        40: ".4",
      },
      minWidth: {
        48: "12rem",
      },
    },
  },
};
