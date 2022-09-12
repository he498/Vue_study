//commonjs的模块化规范
const {add,mul} = require('./js/mathUtils')

console.log(add(20, 30));
console.log(mul(20, 30));

//ES6的模块化规范
import  {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3.依赖css文件
require('./css/normal.css');

//4.依赖less文件
require('./css/special.less');

import Vue from 'vue'

// import App from './vue/app.js'
import App from './vue/App.vue'
new Vue({
  el:'#app',
  template:'<App/>',
  // data:{
  //   // message:'Hello vue-Webpack'
  // },
  components:{
    App
  }
})