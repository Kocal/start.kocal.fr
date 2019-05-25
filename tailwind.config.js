module.exports = {
  theme: {
    extend: {
      zIndex: {
        '-2': '-2',
        '-1': '-1'
      },
      opacity: {
        '40': '.4',
      },
      minWidth: {
        '48': '12rem'
      }
    },
  },
  plugins: [
    require('tailwindcss-transitions')(),
    require('tailwindcss-filters')(),
  ],
};
