<template>
  <div id="app">
    <h2>APP组件</h2>
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-link :to="{path: '/profile', query:{name:'ming', age: 18, height: 1.88}}" tag="button">我的</router-link>
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

<!--    排除Profile和User组件，Profile和User组件不会被缓存-->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'ming'
    }
  },
  methods:{
    // homeClick(){
    //   this.$router.push('/home');
    //   // this.$router.replace('/home');
    // },
    // aboutClick(){
    //   this.$router.push('/about');
    //   // this.$router.replace('/about');
    // }
  }
}
</script>

<style>
  /*.router-link-active {*/
  /*  color: red;*/
  /*}*/
  .active {
    color: red;
  }
  body{
    background: black;
  }
  p{
    color: #42b983;
  }
  h2{
    color: chocolate;
  }
  button{
    background: chocolate;
  }
  ul{
    color: #f7f7f7;
  }
</style>
