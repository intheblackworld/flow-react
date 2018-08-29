const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const AsyncChunkNames = require('webpack-async-chunk-names-plugin') // replace the filename of dynamic imports file from number to name
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/main.jsx',
  },
  output: {
    filename: '[name].bundle.[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[hash:8].js', // TODO: change ENV config
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      containers: path.resolve(__dirname, './src/containers'),
      libs: path.resolve(__dirname, './src/libs'),
      middleware: path.resolve(__dirname, './src/middleware'),
      store: path.resolve(__dirname, './src/store'),
      utils: path.resolve(__dirname, './src/utils'),
      reducers: path.resolve(__dirname, './src/store/reducers'),
    },
  },
  // mode ex. development, production (默认提供所有可能的优化，如代码压缩 DefinePlugin, uglifyJS/作用域提升等)
  mode: 'development', // webpack4`s devtool: 'source-map' // TODO: change ENV config
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
    stats: 'errors-only', // slience terminal log
  },
  plugins: [
    // auto generage index.html base on template file and import xxx-bundle.js
    new HtmlWebpackPlugin({
      title: 'React base on flow',
      template: 'index.html',
      hash: true,
    }),
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'), // 將 production 加入了全局的環境變數之後，第三方函式庫或專案內代碼會根據 production 做打包優化的判斷
      // TODO: change ENV config
    }),
    new AsyncChunkNames(), // TODO: change ENV config
  ],
  /* 抽公共代碼用的 (防止重复)
   * Code Splitting 一般需要做这些事情：
   * https://zxc0328.github.io/2018/06/19/webpack-4-config-best-practices/
   * 为 Vendor 单独打包（Vendor 指第三方的库或者公共的基础组件，因为 Vendor 的变化比较少，单独打包利于缓存）
   * 为 Manifest （Webpack 的 Runtime 代码）单独打包
   * 为不同入口的公共业务代码打包（同理，也是为了缓存和加载速度）
   * 为异步加载的代码打一个公共的包
   */
  optimization: {
    splitChunks: {
      minChunks: 2, // 在分割之前，这个代码块最小应该被引用的次数（译注：保证代码块复用性，默认配置的策略是不需要多次引用也可以被分割）
      name: true,
      chunks: 'all', // 代码块类型 必须三选一： "initial"（初始化） | "all"(默认就是all) | "async"（动态加载）
      minSize: 30000, // 形成一个新代码块最小的体积

      /** 要切割成的每一个新chunk就是一个cache group
       * webpack根据下述条件自动进行代码块分割：
       * 新代码块可以被共享引用 or 这些模块都是来自node_modules文件夹里面
       * 新代码块大于30kb（min+gziped之前的体积）
       * 按需加载的代码块，最大数量应该小于或者等于5
       * 初始加载的代码块，最大数量应该小于或等于3
       */
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 打包優先度
        },
      },
    },
  },
}
