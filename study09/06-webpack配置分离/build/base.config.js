const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output:{
    //初始化npm init
    path: path.resolve(__dirname,'../dist'),     //要写绝对路径（动态获取）
    filename:'bundle.js'
  },
  mode:'development',
  module:{
    rules: [
      {
        test: /\.css$/i,
        //css-loader只负责将css文件加载
        //style-loader负责将css添加到DOM中
        use: ["style-loader", "css-loader"], //从右到左读取
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              //小于limit是会将图片编译成base64
              //大于时会使用fileloader
              limit: 14000,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      // {
      //   test: /\.(png|jpg|gif|jpeg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {},
      //     },
      //   ],
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      }
    ],
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  // plugins:[
  //   new htmlWebpackPlugin({
  //     template:'./index.html',
  //     filename:'index.html'
  //   }),
  //   new VueLoaderPlugin()
  // ]
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归ming所有'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ],
  // devServer:{
  //   contentBase:'./dist',
  //   inline:true,
  // }
}