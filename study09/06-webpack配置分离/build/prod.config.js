const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge')
const baseConfig =require('./base.config')
module.exports = webpackMerge.merge(baseConfig,{
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归ming所有'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
})