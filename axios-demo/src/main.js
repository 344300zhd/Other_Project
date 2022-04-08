import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// router.beforeEach((to,from,next)=>{
//   if(to.path != '/login' && localStorage.getItem("token") == null ){
//     Message.error("您还未登录，请先登录!")
//     next({path:'/login'})
//   }else{
//     next()
//   }
// })


new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    console.log("程序启动！！",this.$el);
  }
}).$mount('#app')

