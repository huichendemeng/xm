import Vue from 'vue'
import Router from 'vue-router'
//1.引入自定义组件
import HomeContainer from "./components/tabbar/HomeContainer"
import placelist from "./components/pintuan/placelist"
import js from "./components/pintuan/js"
import login from "./components/tabbar/login"
import personal from "./components/tabbar/personal"
import all from "./components/tabbar/all"
import qianzheng from "./components/tabbar/qianzheng"
import destination from "./components/tabbar/destination"
import qianzhengAll from "./components/tabbar/qianzhengAll"
import register from "./components/tabbar/register"
import setting from "./components/tabbar/setting"
import collection from "./components/tabbar/collection"
import update from "./components/tabbar/update"
import update_upwd from "./components/tabbar/update_upwd"
import server from "./components/sub/server"
import search from "./components/tabbar/search"
import America from "./components/tabbar/America"
import America_desc from "./components/tabbar/America_desc"
import shopping from "./components/tabbar/shopping"
import chat from "./components/tabbar/chat"
//import cal from "./components/sub/cal"
import purchase from "./components/tabbar/purchase"
import pay from "./components/tabbar/pay"
Vue.use(Router)
//2.配置访问自定义组件路径
export default new Router({
  routes: [
    {path:'/home/pay',component:pay},
    {path:'/home/purchase',component:purchase},
    {path:'/home/chat',component:chat},
    {path:'/home/shopping',component:shopping},
    {path:'/home/Amer/:id',component:America_desc},
    {path:'/home/America',component:America},
    {path:'/home/search',component:search},
    {path:'/home/sub/server',component:server},
    {path:'/home/setting/update_upwd',component:update_upwd},
    {path:'/home/setting/update',component:update},
    {path:'/home/setting/collection',component:collection},
    {path:'/home/setting',component:setting},
    {path:'/home/register',component:register},
    {path:'/home/qzall',component:qianzhengAll},
    {path:'/home/destination',component:destination},
    {path:'/home/qianzheng/:id',component:qianzheng},
    {path:'/home/all',component:all},
    {path:'/home/personal',component:personal},
    {path:'/home/login',component:login},
    {path:'/',component:HomeContainer},
    {path:'/home',component:HomeContainer},
    {path:'/home/placelist',component:placelist},
    {path:'/home/js',component:js}
  ]
})
