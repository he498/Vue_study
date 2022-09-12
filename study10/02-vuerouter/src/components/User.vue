<template>
  <div>
    <h2>用户界面</h2>
    <p>用户相关信息</p>
    <p>用户名为：{{userId}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      userId(){
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
