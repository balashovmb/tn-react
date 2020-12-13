const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js'
  },
  devServer: {
    contentBase: path.join(process.cwd(), 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js/, use: 'babel-loader' },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      base: '/'
    }),
    new MiniCssExtractPlugin()
  ]
};
