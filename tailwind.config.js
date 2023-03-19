module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx, html}',
    './core/components/**/*.{js,ts,jsx,tsx, html}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      black: `rgb(${26}, ${25}, ${25})`,
      white: `#FFF6F3`,
      blurrRed: `rgb(${200}, ${4}, ${34}, ${0.8})`,
      menuBlack: `rgb(${0}, ${0}, ${0}, ${0.8})`,
    },
    extend: {
      fontFamily: {
        naruto: ['naruto'],
        capriola: ['capriola'],
      },
      fontSize: new Array(201)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`;
          return acc;
        }, {}),
      lineHeight: new Array(201)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`;
          return acc;
        }, {}),
      backgroundImage: {

        brush: "url('../public/static/assets/images/brush.webp')",

      },
      backgroundPosition: {
        topBar: '-150px',
        bottBar: '-70px',
      },
      screens: {
        smallPhone: { raw: '(max-height: 670px)' },
      },
    },
  },
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './core/components/**/*.{js,ts,jsx,tsx,}',
  ],
  /* plugins: [[require('prettier-plugin-tailwindcss')]], */
};