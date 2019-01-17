import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//引入组件mintui库Header
//-引入指定组件
import {Header,Swipe,SwipeItem,Button} from "mint-ui";
import { DatetimePicker } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);  //"mt-swipe"
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
import VueResource from "vue-resource";
import Vuex from "vuex"
Vue.use(Vuex)
//创建Vuex实例对象
 var store=new Vuex.Store({
   state:{count:0},//购物车中商品的数量
   mutations:{
     increment(state,c){state.count+=c},//修改共享数据的两个方法
     substract(state){state.count--}//参数共享数据属性
   },
   getters:{
     optCount:function(state){
        return state.count;
     }
   }
 });
Vue.use(VueResource)
//修改post请求头
Vue.http.options.emulateJSON=true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
