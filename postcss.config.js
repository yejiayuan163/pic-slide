// 需要手动引入, ts-import-plugin 实现 vant 按需引入时 postcss 会找不到 pxtorem
const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer(),
    pxtorem({
      rootValue: 20,
      propList: ['*']
    })
  ]
}
