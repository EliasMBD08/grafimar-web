/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primario: {
          DEFAULT: '#003764',
          1: '#59C7F3',
          2: '#0590C9',
        },
        secundario: {
          DEFAULT: '#E6E6E6'
        },
        terciario: {
          DEFAULT: '#FAD106'
        },
        cuaternario: {
          DEFAULT: '#222933'
        }
      }
    },
  },
  plugins: [],
  corePlugins: { preflight: false } // Esto es para que se combinen primeng y tailwind
}

