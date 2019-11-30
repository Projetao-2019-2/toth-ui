export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Journi",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo2.png" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/moment'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "@nuxtjs/proxy",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: "/auth", method: "post", propertyName: "token" },
          user: { url: "/users/me", method: "get", propertyName: "user" }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    }
  },

  axios: {
    proxy: true,
    prefix: "/api",
    https: true
  },

  proxy: {
    "/api/": {
      target: "https://project-toth.herokuapp.com/v1/",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  router: {
    middleware: "categories"
  }
};
