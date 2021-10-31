import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    '@vueuse/core/nuxt',
    'nuxt-windicss',
  ],
  windicss: {
    analyze: true
  },
})
