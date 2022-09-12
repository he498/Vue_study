const path = require('path')

module.exports = {
  entry: './src/main.js',
  output:{
    path: path.resolve(__dirname,'dist'),     //要写绝对路径（动态获取）
    filename:'bundle.js'
  },
}