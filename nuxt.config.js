export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '孙亚铮的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'IT技术交流，js开发问答_前端问答，生活随笔' }
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
    '~/api/article.js',
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
    'cookie-universal-nuxt'
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: { // 对象
    proxy: true, // 开启代理
    prefix: '/api' // 每个请求接口URL加上前缀 /api
  },
  proxy: { // 对象
    // 将 /api 替换为 '', 然后代理转发到 target 指定的 url
    '/api': {
      target: 'https://easydoc.xyz/mock/yQEZwmXR',
      pathRewrite: { '^/api': '' } // 代理前将 /api 前缀去除
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
