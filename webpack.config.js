const path = require('path')
const isProdMode = process.env.NODE_ENV === 'production'
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const Config  = require('webpack-chain')
const config = new Config()

const resolve = dir => path.join(__dirname, dir)

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

// （新特性）文件缓存，加速二次构建，以前使用cache-loader 、hard-source-webpack-plugin
config.cache({
  type: 'filesystem',
})
// babel
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
  .exclude.add(resolve('src/assets/icons'))
  .end()
// fonts
config.module.rule('fonts')
  .test(/\.(eot|ttf|woff2?|)$/)
  .type('asset/resource')
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
    include: ['src/assets/icons']
  })
  .end()
  .use('svgo-loader')
  .loader('svgo-loader')
  .options({
    plugins: [
      {
        name: 'removeAttrs',
        params: {
          attrs: '(fill|stroke)'
        }
      }
    ]
  })

config.plugin('HtmlWebpackPlugin').use(HtmlWebpackPlugin, [
  { title: 'vue-template', template: './index.html' }
])
config.plugin('VueLoaderPlugin').use(VueLoaderPlugin)

config.plugin('ESLintPlugin').use(ESLintPlugin, [
  { extensions: ['js', 'ts', 'vue'] }
])

/**
 * productionModeConfig(生产模式下配置)
 */
config.when(isProdMode, config => {
  config.plugin('MiniCssExtractPlugin').use(MiniCssExtractPlugin)
  config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin, [
    {
      // 可以是`server`，`static`或`disabled`。
      // 在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
      // 在“静态”模式下，会生成带有报告的单个HTML文件。
      // 在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
      analyzerMode: 'static',
      // 将在“服务器”模式下使用的主机启动HTTP服务器。
      // analyzerHost: '127.0.0.1',
      // 将在“服务器”模式下使用的端口启动HTTP服务器。
      // analyzerPort: 7777
    }
  ])
})

// console.log(config.toString());
module.exports = config.toConfig()

// module.exports = {
//   entry: './src/main.ts',
//   output: {
//     path: resolve(__dirname, 'dist'),
//     filename: '[name].js',
//     clean: true
//   },
//   resolve: {
//     extensions: ['.ts', '.js', '.vue', '.json'],
//     alias: {
//       '@': resolve('src'),
//       '@style': resolve('src/style'),
//     }
//   },
//   // webpack升级到5.0后，target默认值值会根据package.json中的 browserslist 改变，导致devServer的自动更新失效
//   // 所以 development 环境下直接配置成 web
//   target: "web",
//   devServer: {
//     open: true,
//     // proxy: {
//     //   "/api": {
//     //     target: "http://localhost:8080",
//     //     changeOrigin: true,
//     //     secure: false,
//     //     pathRewrite: {
//     //       "^/api": "/"
//     //     }
//     //   }
//     // }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(t|j)s$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             cacheDirectory: true
//           }
//         }
//       },
//       {
//         test: /\.vue$/,
//         use: "vue-loader"
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: [
//           !isProdMode ? "style-loader" : MiniCssExtractPlugin.loader,
//           "css-loader",
//           "postcss-loader",
//           "sass-loader"
//         ],
//       },
//       {
//         test: /\.(png|svg|jpe?g|gif)$/,
//         type: "asset",
//         generator: {
//           filename: "images/[name]-[hash][ext]",
//         }
//       },
//       {
//         test: /\.(eot|svg|ttf|woff2?|)$/,
//         type: "asset/resource",
//         generator: {
//           filename: "fonts/[name]-[hash][ext]",
//         }
//       },
//       {
//         test: /\.svg$/,
//         loader: 'svg-sprite-loader',
//         include: resolve('src/assets/icons'),
//         options: {
//           symbolId: 'icon-[name]'
//         }
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: "vue-template",
//       template: "./index.html"
//     }),
//     new VueLoaderPlugin(),
//     isProdMode && new BundleAnalyzerPlugin()
//   ]
// }
