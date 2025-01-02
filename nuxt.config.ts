// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],

  plugins: [
    '~/plugins/bootstrap.js', // Add the Bootstrap JS plugin
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        },
      ],
    },
  },

  compatibilityDate: '2025-01-02',
})