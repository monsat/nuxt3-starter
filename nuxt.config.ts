import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    '@vueuse/core/nuxt',
    'nuxt-windicss',
  ],
  windicss: {
    analyze: true
  },
})
