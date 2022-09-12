import {INCREMENT} from "./mutations-types";
import Vue from "vue";

export  default {
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
}
