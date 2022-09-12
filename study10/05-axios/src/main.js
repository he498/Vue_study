import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//5.封装request模块
import {request} from "../network/request";
// request({
//   url:'/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: {
//     url:'/home/mutidata'
//   },
//   success: function () {
//
//   },
//   failure: function () {
//
//   }
//
// })

request({
  url:'/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})





//axios的基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(res =>{
//   console.log(res);
// })

//2.axios发送并发请求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })]).then(res => {
//   console.log(res);
// })

//axios.spread
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })]).then(axios.spread(res1, res2 =>{
//   console.log(res1);
//   console.log(res2);
// }))

//3.axios配置信息

// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   // baseURL: 'http://123.207.32.32:8000',
//   // timeout: 5000,
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })]).then(axios.spread((res1, res2) =>{
//   console.log(res1);
//   console.log(res2);
// }))


//4.创建axios实例

// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// instance1({
//   url: '/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

