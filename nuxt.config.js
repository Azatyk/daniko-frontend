export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'daniko-frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css',
        rel: 'stylesheet',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/yandexMap.js', mode: 'client' },
    { src: '~/plugins/vueAwesomeSlider.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],

  styleResources: {
    scss: ['~/assets/styles/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
