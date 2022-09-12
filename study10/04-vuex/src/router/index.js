import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [

]

const router = new VueRouter({
  routes,
  mode:'history'
})

//导出
export default router
