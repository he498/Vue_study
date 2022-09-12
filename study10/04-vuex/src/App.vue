<template>
  <div id="app">
    <h2>------modules内容-------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>


    <h2>---------响应式内容---------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>



    <h2>------App组件-------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addstu">添加学生</button>

    <h2>--------getter相关信息--------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>

    <h2>------vuex组件------</h2>
    <Hellovuex/>
  </div>
</template>

<script>
  import Hellovuex from "./components/Hellovuex";
  import {
    INCREMENT
  } from "./store/mutations-types";

  export default {
    name: 'App',
    data(){
      return {
        message: 'APP组件'
      }
    },
    computed:{
      // more20stu(){
      //   return this.$store.state.students.filter(s => s.age >20)
      // }
    },
    components:{
      Hellovuex
    },
    methods:{
      addition(){
        this.$store.commit(INCREMENT)
      },
      subtraction(){
        this.$store.commit('decrement')
      },
      addCount(count) {
        //普通提交风格
        // this.$store.commit('incrementCount',count)

        //2.特殊提交风格
        this.$store.commit({
          type:'incrementCount',
          count
        })
      },
      addstu(){
        const stu = {
          id:114,
          name:'alan',
          age: 34
        }
        this.$store.commit('addstudent',stu)
      },
      updateInfo(){
        // this.$store.commit('updateInfo')

        // this.$store.dispatch('aUpdateInfo',{
        //   message: '携带的信息',
        //   success: () => {
        //     console.log('里面已经完成了');
        //   }
        // })
        this.$store
          .dispatch('aUpdateInfo','我是携带的信息')
          .then(res=> {
            console.log('里面完成了提交');
            console.log(res);
          })
      },
      updateName(){
        this.$store.commit('updateName','lisi')
      },
      asyncUpdateName(){
        this.$store.dispatch('aUpdateName')
      }
    },
  }
</script>

<style>

</style>
