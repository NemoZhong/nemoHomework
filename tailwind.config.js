/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cardColor: '#101010',
        subTextColor: '#7D7D7D',
        textMainColor: ' #EDEDED',
        disabledTextColor: '#6F6F6F',
        avatarColor: '#D9D9D9',
        notActiveColor: '#444',
      },
      borderRadius: {
        cardRadius: '1rem',
      },
      fontFamily: {
        fontBold: ['NEXT Book Bold'],
        fontNormal: ['NEXT Book'],
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.cardColor'),
          borderRadius: theme('borderRadius.cardRadius'),
        },
      });
      addUtilities({});
    }),
  ],
};
