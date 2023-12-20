export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false
      }
    }
  },
  modules: [
    'nuxt-simple-sitemap',
    'nuxt-gtag',
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    // '@nuxtjs/plausible'
  ],
  gtag: {
    id: 'G-0VEZY7GBEH'
  },
  site: {
    url: 'https://softwareengineeringpro.com',
  },
})