import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    '@vueuse/core/nuxt',
    'nuxt-windicss',
    '@pinia/nuxt',
  ],
  windicss: {
    analyze: true
  },
})
