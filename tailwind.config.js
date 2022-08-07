/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      'width': '90%',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'thatbg': '#FFFAFA',
      'red': '#ff0000',
      'white': '#000000'

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xlg: '1200px',
      xl: '1440px',

    },

    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
        '32\%': '32%'
      },
      backgroundImage: {
        'hero-bg': "url('asset\images\hero-bg.svg')"
      },
    },
    plugins: [],
  }
}