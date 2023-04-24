module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ecf7ff',
        secondary: '#00288a',
        textPrimary: '#829dcd',
        blue: {
          300: '#1e49b3',
          400: '#113a9f',
        },
        lightblue: '#3dbcf9',
        orange: '#ff9b05',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateX(0px)',
            'timing-function': 'ease-in',
          },
          '25%': {
            transform: 'translateX(-35px)',
            'timing-function': 'ease-out',
          },
          '50%': {
            transform: 'translateX(+26px)',
            'timing-function': 'ease-in',
          },
          '75%': {
            transform: 'translateX(-15px)',
            'timing-function': 'ease-out',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s',
      },
    },
  },
  plugins: [],
};
