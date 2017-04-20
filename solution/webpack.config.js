const
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
      template: __dirname + '/client/index.html',
      filename: 'index.html',
      inject: 'body'
    })
module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    './client/index.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}