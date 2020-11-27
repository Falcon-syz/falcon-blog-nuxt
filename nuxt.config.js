export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'falcon-blog-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    { src: './directive/zoom-animation', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: { // 对象
    proxy: true, // 开启代理
    prefix: '/api' // 每个请求接口URL加上前缀 /api
  },
  proxy: { // 对象
    // 将 /api 替换为 '', 然后代理转发到 target 指定的 url
    '/api': {
      target: 'http://mengxuegu.com:7300/mock/5ea4394b2a2f716419f893be/blog-web',
      pathRewrite: { '^/api': '' } // 代理前将 /api 前缀去除
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
