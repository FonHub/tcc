const webpack = require("webpack");

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TCC GROUP',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs:{
      class:"theme-orange"
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },



  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/plugins/bootstrap/css/bootstrap.min.css',
    '~/assets/plugins/jvectormap/jquery-jvectormap-2.0.3.css',
    '~/assets/plugins/morrisjs/morris.css',
    '~/assets/css/main.min.css',
    '~/assets/css/color_skins.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '~/static/assets/bundles/libscripts.bundle.js'},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $jqueçry: "jqueçry"
      })
    ],
  }
}
