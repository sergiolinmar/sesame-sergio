const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          grey: {
            light: '#b5b5b5',
            'extra-light': '#f4f4f4',
            dark: '#707070',
            'extra-dark': '#3F3F3F'
          },
          green: {
            default: '#5EBEA3',
            light: '#D8F2EC'
          },
          salmon: '#FF9984'
        }
      },
      fontSize: {
        'xxs': '.62rem',
        'xs': '.75rem',
        'base': '0.94rem'
      }
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
