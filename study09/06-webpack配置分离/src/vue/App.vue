<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button>按钮</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        message: 'Hello vue-Webpack',
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .title{
    color: #e9e9e9;
  }
</style>