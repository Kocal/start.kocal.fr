/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      zIndex: {
        '-2': '-2',
        '-1': '-1',
      },
      opacity: {
        40: '.4',
      },
      minWidth: {
        48: '12rem',
      },
    },
  },
};
