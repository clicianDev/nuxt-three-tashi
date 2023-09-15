/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      colors: {
        tashi: {
          background: '#202327',
          primary: '#798BFF',
          secondary: '#A9AFBF',
          cyan: '#8EFFFF',
          purple: '#CF01F2',
          contrast: {
            100: '#27153EFF',
            90: '#27153EE6',
            80: '#27153ECC',
            70: '#27153EB3',
            60: '#27153E99',
            50: '#27153E80',
            blur: '#27153E30',
          },
          lightgray: '#FAF8F9',
          black: '#343434',
          secondary: '#DCE0FC',
          white: {
            100: '#FFFFFFFF',
            72: '#FFFFFFB8',
            40: '#FFFFFF66',
          },
          ash: '#F5F5F5',
          smoke: '#EEEEEE',
          silver: '#BFBFBF',
          coal: '#242424',
          blackish: '#212121',
        },
      },
    },
  },
  plugins: [],
}
