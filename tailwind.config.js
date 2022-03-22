module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
      }
    },
  },
  plugins: [],
}
