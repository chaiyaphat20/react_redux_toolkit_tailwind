module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        980: '980px',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      height: {
        600: '600px',
        'full-4rem': 'calc(100% - 4rem)',
      },
      backgroundColor: (theme) => ({
        title_blue: '#61dbe1',
        title_red: '#ff5d5d',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
