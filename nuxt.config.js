export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'UserService',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/vuex-persistedstate',
    './plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  proxy: {
    '/listingapi/api/export/': {
      target: 'https://jwt-spring-first.herokuapp.com/',
      pathRewrite: { '^/listingapi/api/export/': '' },
      changeOrigin: true
    }
  },

  axios: {
    proxy: true,
    //baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
    baseURL: 'https://jwt-spring-first.herokuapp.com',
    withCredentials: true,
    headers: {
      Accept: 'application/json',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
