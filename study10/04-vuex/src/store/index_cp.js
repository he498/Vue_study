import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from "./mutations-types";

//安装插件
Vue.use(Vuex)

//创建对象

const moduleA = {
  state:{
    name:'zhangsan'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  actions:{
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName','wangwu')
      },1000)
    }
  },
  getters:{
    fullName(state) {
      return state.name + '1111'
    },
    fullName2(state,getters) {
      return getters.fullName + '222'
    },
    fullName3(state,getters,rootState) {
      return getters.fullName2 + rootState.counter
    }

  }

}

const  store = new Vuex.Store({
  state:{
    counter: 1000,
    students:[
      {id:110, name:'ming', age:18},
      {id:111, name:'kobe', age:24},
      {id:112, name:'james', age:30},
      {id:113, name:'curry', age:10}
    ],
    info:{
      name:'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations:{
    //方法
    [INCREMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,payload){
      // state.counter += count
      state.counter += payload.count
    },
    addstudent(state,stu){
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name='ming' //已初始化过的属性会有一个watcher,已经加入到响应式系统，会响应式变化
      // state.info['address'] = '洛杉矶' 未初始化过的属性没加入响应式系统
      Vue.set(state.info,'address','洛杉矶'); //通过vueset实现响应式
      // delete state.info.age;
      // Vue.delete(state.info,'age')
    }
    },
  //异步操作使用actions
  actions:{
    //context 上下文
    // aUpdateInfo(context,payload){
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success();
    //   },1000)
    // }
    aUpdateInfo(context,payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve(111)
        },1000)
      })
    }
  },
  getters:{
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >20)
    },
    more20stuLength(state,getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules:{
    a: moduleA
  }
})

export default store
