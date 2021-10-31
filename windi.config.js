import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {
    },
  },
  plugins: [],
})
