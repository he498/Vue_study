一、高阶函数的使用：
filter,map,reduce

```javascript
const nums = [10,20,111,222,333,555,40,50]
//需求一：取出所有小于100的数字：
let newnums=[]
for (let n of nums) {
  if (n < 100){
    newnums.push(n)
  }
}
//需求二：将所有小于100的数字进行转化：全部乘以2
let newnums2=[]
for(let n of newnums){
  newnums2.push(n * 2)
}
//需求三：将所有newnums2数字相加得结果
let total = 0
for(let n of newnums2){
  total += n;
}

```
1.高阶函数使用：

```javascript
const nums = [10,20,111,222,333,555,40,50]
//filter/map/reduce

//1.filter
//filter中的回调函数有一个要求：必须返回一个boolean值
//true:当返回true时，函数内部会自动将这次回调的n计入到新数组中
//false:当返回为false是内部会过滤掉此次n
let newNums = nums.filter(function (n) {
  return n < 100;
})

//2.map
let newNums2 = newNums.map(function () {
  return n * 2;
})

//3.reduce
//reduce作用对数组中的所有内容进行汇总
//reduce(function:callback(prevValue,n){},参数2)
let total = newNums2.reduce(function(prevValue,n) {
  return preValue + n;
},0)
```

2.复合使用：

```javascript
const nums = [10,20,111,222,333,555,40,50]
let total = nums.filter(function(n) {
  return n < 100
}).map(function(n) {
  return n * 2
}).reduce(function(prevValue,n) {
  return prevValue + n
},0)

//究极写法：
let tatal2 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n);

```

二、Webpack

①webpack安装

1.查看node版本：
```shell script
node -v
```
2.全局安装webpack
```shell script
npm install webpack@3.6.0 -g
```
3.局部安装webpack
```
cd 对应目录
npm install webpack@3.6.0 --save-dev
```
②初始化npm
```shell script
npm init
```
css-loader
```shell script
npm install css-loader@2.0.2 --save-dev
```
style-loader
```shell script
npm install style-loader@0.23.1 --save-dev
```
url-loader
```shell script
npm install url-loader --save-dev
```
file-loader
```shell script
npm install file-loader --save-dev
```
搭建本地服务器：
```shell script
npm install --save-dev webpack-dev-server
```
webpack.config.js:
```javascript
const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output:{
    //初始化npm init
    path: path.resolve(__dirname,'dist0 '),     //要写绝对路径（动态获取）
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
  devServer:{
    contentBase:'./dist',
    inline:true,
  }
}
```
三、CLI脚手架
```text
Node 版本要求

Vue CLI 4.x 需要 Node.js v8.9 或更高版本 (推荐 v10 以上)。
你可以使用 n，nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。
```
#全局安装vue cli:
```shell script
npm install -g @vue/cli
```
#CLI2项目创建：
如果你仍然需要使用旧版本的 vue init 功能，你可以全局安装一个桥接工具：
```shell script
npm install -g @vue/cli-init
# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同
vue init webpack my-project
```
#创建一个项目：
运行以下命令来创建一个新项目：
```shell script
vue create hello-world
```
#图形化界面：
通过以下命令来图形化创建和管理项目
```shell script
vue ui
```
