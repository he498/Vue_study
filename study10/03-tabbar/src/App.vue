<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/首页.svg" alt="">
        <img slot="item-icon-act" src="./assets/img/tabbar/首页act.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/分类.svg" alt="">
        <img slot="item-icon-act" src="./assets/img/tabbar/分类act.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/购物车.svg" alt="">
        <img slot="item-icon-act" src="./assets/img/tabbar/购物车act.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/我的.svg" alt="">
        <img slot="item-icon-act" src="./assets/img/tabbar/我的act.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
