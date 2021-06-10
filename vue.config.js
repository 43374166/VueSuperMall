// const proxyObj = {}
//   proxyObj['/'] = {
//     target: 'http://php.test.com/data.php',
//     changeOrigin: true,
//     pathRewrite: {
//       '^/': ''
//     }
//   }
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        views: '@/views',
      }
    }
  },
  publicPath: './',
}