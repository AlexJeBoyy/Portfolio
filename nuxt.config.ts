// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    // Set NUXT_APP_BASE_URL to /<repo-name>/ for GitHub project pages.
    baseURL: process.env.NUXT_APP_BASE_URL || '/'
  },
  nitro: {
    preset: 'github_pages'
  }
})