import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import './registerServiceWorker'
import './plugins/element.js'
import {Message} from "element-ui"

//prototype属性用来给Vue实例添加属性和方法
Vue.prototype.$axios = axios
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  if(to.path != '/login' && localStorage.getItem("token") == null ){
    Message.error("您还未登录，请先登录!")
    next({path:'/login'})
  }else{
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

