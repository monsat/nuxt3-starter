import { defineNuxtConfig } from 'nuxt3'

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
