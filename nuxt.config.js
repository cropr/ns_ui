import colors from 'vuetify/es5/util/colors'

export default {

  axios: {
    baseURL: '/'
  },

  build: {
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  components: true,

  content: {},

  css: [
  ],

  head: {
    titleTemplate: '%s - ns_ui',
    title: 'ns_ui',
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

  modules: [
    '@nuxtjs/axios',
    '@nuxt/content'
  ],

  plugins: [
  ],

  target: 'static',

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    }
  },

}
