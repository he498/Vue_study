import axios from "axios";

export function request(config) {
    //1.创建实例
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })

    //2.axios拦截器
    //2.1请求拦截
    instance.interceptors.request.use(config => {
      console.log(config);
      //1.config中的一些信息不符合服务器的要求

      //2.每次发送网络请求时，在界面显示一个请求图标

      //3.某些网络请求（登陆(token)），必须携带一些信息
      return config
    }, err=> {

    })
    //2.2响应拦截
    instance.interceptors.response.use(res => {
      console.log(res);

      //拦截记得返回出去
      return res.data
    }, err => {
      console.log(err);
    })
    //3.发送真正的网络请求
    return instance(config)
}


// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1.创建实例
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     //发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


// export function request(config) {
//   //1.创建实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.succes(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }



// export function request(config,succes,failure) {
//   //1.创建实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       succes(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }
