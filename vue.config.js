const path = require('path')
const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
// const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

// const resolve = dir => path.join(__dirname, dir)
// 基础路径 注意发布之前要先修改这里
// const cdn = {
//   js: ['https://cdn.bootcss.com/vue/2.6.10/vue.min.js'],
//   css: []
// }

module.exports = {
  // baseUrl: process.env.BASE_URL, // 根据你的实际情况更改这里
  // lintOnSave: process.env.NODE_ENV !== 'production',
  // devServer: {
  //   publicPath: process.env.BASE_URL, // 和 baseUrl 保持一致
  //   open: false,
  //   // 跨域
  //   proxy: {
  //     '/postemall-api/api/': {
  //       target: 'https://wx.emspost.com.cn/postemall-api/api/',
  //       pathRewrite: { '^/postemall-api/api/': '' },
  //       changeOrigin: true
  //     }
  //   }
  // },
  // parallel: false,
  // outputDir: process.env.VUE_OUTPUTDIR,
  // css: {
  //   loaderOptions: {
  //     less: {
  //       // modifyVars 通过 @hack:true; 拼接字符串 @import '/src/assets/styles/theme.less' 导入主题样式，覆盖vant原来的主题样式
  //       modifyVars: {
  //         hack: `true; @import "${resolve('/src/assets/css/mixin.less')}";`
  //       }
  //     }
  //   }
  // },
  configureWebpack: config => {
    // 如果需要 cdn 请先将代码中的依赖提取出来
    if (process.env.VUE_IS_CDN === 'true') {
      config.externals = {
        vue: 'Vue'
      }
    }
  },

  // chainWebpack: config => {
  //   // 设置 alias
  //   config.resolve.alias
  //   .set('@', resolve('src'))
  //   .set('api', resolve('src/api'))
  //   .set('assets', resolve('src/assets'))
  //   .set('components', resolve('src/components'))
  //   .set('pages', resolve('src/pages'))
  //   .set('plugin', resolve('src/plugin'))
  //   .set('router', resolve('src/router'))
  //   .set('store', resolve('src/store'))
  //   .set('utils', resolve('src/utils'))
  //
  //   // 配置 ts-import-plugin 让 vant可以按需引入
  //   // https://github.com/youzan/vant-demo/blob/master/typescript/vue.config.js
  //   // https://github.com/Brooooooklyn/ts-import-plugin
  //   config.module
  //   .rule('ts')
  //   .use('ts-loader')
  //   .tap(options => {
  //     options = merge(options, {
  //       transpileOnly: true,
  //       getCustomTransformers: () => ({
  //         before: [
  //           tsImportPluginFactory({
  //             libraryName: 'vant',
  //             libraryDirectory: 'es',
  //             style: 'less'
  //           })
  //         ]
  //       }),
  //       compilerOptions: {
  //         module: 'es2015'
  //       }
  //     })
  //     return options
  //   })
  //
  //   // config.plugin('html').tap(args => {
  //   //   args[0].cdn =
  //   //       process.env.VUE_IS_CDN === 'true' ? cdn : { js: [], css: [] }
  //   //   return args
  //   // })
  //   // config.plugin('build-notify').use(WebpackBuildNotifierPlugin, [
  //   //   {
  //   //     title: '浦发H5商城',
  //   //     suppressSuccess: true
  //   //   }
  //   // ])
  //   // config.output.filename('[name].[hash].js').end()
  // },
}
