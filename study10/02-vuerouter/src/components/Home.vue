<template>
<div>
  <h2>首页</h2>
  <p>66666</p>
  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/messages">信息</router-link>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        message:'',
        path:'/home/news'
      }
    },
    created() {
      console.log('home created');
    },
    // 这两个函数，只有该组件被保持了状态keep-alive时才有效
    activated() {
      // console.log('activated');
      this.$router.push(this.path);
    },
    // deactivated() {
    //   // console.log('deactivated');
    //   this.path = this.$route.path;
    // }
    beforeRouteLeave(to,from,next){
      this.path = this.$route.path;
      next()
    }

  }
</script>

<style scoped>

</style>
