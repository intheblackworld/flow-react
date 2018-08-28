const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.jsx',
  output: {
    filename: '[hash:8]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
  mode: 'development', // webpack4`s devtool: 'source-map'
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
  ],

  optimization: {
    splitChunks: {
      minChunks: 1,
      name: true,
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
}