const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// const isProdMode = process.env.NODE_ENV === "production";
const isProdMode = true
const webpackChain = require('webpack-chain')
const config = new webpackChain()

const resolve = dir => path.resolve(__dirname, dir)

config.entry('main').add('./src/main.ts')
config.output
  .path(resolve('dist'))
  .filename('[name].js')
  .set('clean', true)
  // .chunkFilename("chunks/[name].[chunkhash].js")
  // .libraryTarget("umd")

config.resolve
  .alias
  .set('@',resolve('src'))
  .set('@style',resolve('src/styles'))
  .set('@components',resolve('src/components'))
  .end()
  .extensions
  .add('.ts')
  .add('.js')
  .add('.vue')
  .add('.json')

config.devServer
  .open(true)
  // .proxy({
  //   "/api": {
  //     target: "http://localhost:8080",
  //     changeOrigin: true,
  //     secure: false,
  //     pathRewrite: {
  //       "^/api": "/"
  //     }
  //   }
  // })

config.cache({
  type: 'filesystem',
})

config.module.rule('babel')
  .test(/\.(js|jsx|mjs|ts|tsx)$/)
  .include
  .add(path.resolve('src'))
  .end()
  .use('babel-loader')
  .loader('babel-loader')
  .options({
    'presets': ['@babel/preset-env']
  })
// vue
config.module.rule('vue')
  .test(/\.vue$/)
  .use('vue-loader')
  .loader('vue-loader')
  .end()
// css
config.module.rule('css')
  .test(/\.(sc|sa|c)ss$/)
  .use('style-loader')
  .loader(!isProdMode ? 'style-loader' : MiniCssExtractPlugin.loader,)
  .end()
  .use('css-loader')
  .loader('css-loader')
  .end()
  .use('postcss-loader')
  .loader('postcss-loader')
  .end()
  .use('sass-loader')
  .loader('sass-loader')
  .end()
  // images
config.module.rule('images')
  .test(/\.(png|svg|jpe?g|gif)$/)
  .type('asset')
  .set('generator', {
    filename: 'images/[name]-[hash][ext]',
  })
  .end()
  // fonts
config.module.rule('fonts')
  .test(/\.(eot|svg|ttf|woff2?|)$/)
  .type('asset/resource')
  .set('generator', {
    filename: 'fonts/[name]-[hash][ext]',
  })
  .end()
// svg
config.module.rule('svg')
  .test(/\.svg$/)
  .include
  .add(resolve('src/assets/icons'))
  .end()
  .use('svg-sprite-loader')
  .loader('svg-sprite-loader')
  .options({
    symbolId: 'icon-[name]',
    extract: true,
    outputPath: '/'
  })
  .end()
  .use('svgo-loader')
  .loader('svgo-loader')
  // .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
  .options({
    plugins: [{ removeAttrs: { attrs: 'path:fill' } }]
  })

config.plugin('HtmlWebpackPlugin')
  .use(HtmlWebpackPlugin, [
    {
      title: 'vue-template',
      template: './index.html'
    }
  ])
  .end()
  .plugin('VueLoaderPlugin')
  .use(VueLoaderPlugin)


config.when(isProdMode, config => {
  config.plugin('MiniCssExtractPlugin').use(MiniCssExtractPlugin)
  config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin)
})

console.log(config.toString())


module.exports = config.toConfig()