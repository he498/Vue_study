<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-act"></slot></div>
<!--    <div :class="{active:isActive}" ><slot name="item-text"></slot></div>-->
    <div :style="activeStyle" ><slot name="item-text"></slot></div>
<!--    <img src="../../assets/img/tabbar/首页.svg" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>
<script>
  export default {
    name: "TabBatItem",
    props:{
      path: String,
      activeColor: {
        type: String,
        default: 'blue'
      }
    },
    data() {
      return{
        // isActive: false
      }
    },
    computed: {
      isActive(){
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = false
        // /home -> item1(/profile) = false
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive? {color: this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1px;
    text-align: center;
    height: 49px;
    font-size: small;

  }
  .tab-bar-item img {
    height: 22px;
    width: 22px;
    margin-top: 4px;
    vertical-align: middle;
  }
  .active {
    color: deeppink;
  }
</style>
