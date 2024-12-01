let plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    backgroundOpacity: false,
    backdropOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    ringOpacity: false,
    textOpacity: false
  },
  content: ["./*.html", "./*/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['SF Pro', 'Roboto', 'Helvetica', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sxs: '1.25rem',
          sm: '1.25rem',
          md: '1.25rem',
          lg: '2.5rem',
          xl: '2.5rem',
          '2xl': '2.5rem',
        },
        screens: {
          DEFAULT: '100%',
          lg: '992px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      lineHeight: {
        '4.125': '1.063rem',
        '5.25': '1.3125rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '14.25': '3.5625rem',
        '19': '4.75rem',
        '21.5': '5.375rem',
      },
      width: {
        '5.5': '1.375rem',
        '11.5': '2.875rem',
        '34': '8.5rem',
        '83.75': '20.938rem',
      },
      height: {
        '11.5': '2.875rem',
      },
      minHeight: {
        '120': '30rem',
      },
      maxHeight: {
        '320': '80rem',
      },
      gap: {
        '11.5': '2.875rem',
        '25': '6rem',
        '30': '7.5rem',
        '37.5': '9.375rem',
      },
      screens: {
        'sxs': '320px',
        'xs': '480px',
        'lg': '992px',
      },
      margin: {
        '15': '60px',
        '30': '120px',
        '37.5': '150px',
        '47.5': '190px',
      },
      padding: {
        '3.125': '0.781rem',
        '3.75': '0.938rem',
        '6.5': '1.625rem',
        '7.56': '1.891rem',
        '37.5': '9.375rem',
      },
      colors: {
        'grey-squirrel': '#6C757D',
        'grey-blue': '#212529',
        'blue-strong': '#0A1439',
        'blue-middle': '#1E274F',
        'blue-light': '#64A4D5',
        'blue-light-accent': '#A7D6FA',
        'blue-dark-accent': '#529AD0',
        'blue-extralight': '#DFE9F5',
        'parrot-green':'#2BC9AF '
      },
      backgroundImage: {
        'header': "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 1267 544'%3E%3Cpath fill='url(%23a)' fill-opacity='.7' d='M0 0h1267L663.5 543.349H0V0z'/%3E%3Cpath fill='url(%23b)' fill-opacity='.7' d='M0 0h869L265.5 543.349H0V0z'/%3E%3Cpath fill='url(%23c)' fill-opacity='.7' d='M0 0h459L0 413.251V0z'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='844' x2='1158.84' y1='40.951' y2='203.064' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230A1439'/%3E%3Cstop offset='1' stop-color='%23182451'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='578.876' x2='821.774' y1='40.951' y2='126.732' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230A1439'/%3E%3Cstop offset='1' stop-color='%23182451'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='305.758' x2='441.87' y1='31.146' y2='64.528' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%230A1439'/%3E%3Cstop offset='1' stop-color='%23182451'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\")",
      },
      fontSize: {
        '4.5xl': ['2.5rem', '2.75rem'],
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('penultimate', '&:nth-last-child(2)')
    })
  ],
}