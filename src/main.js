import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 引入element-ui
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
// 引入pikaday
import 'pikaday/css/pikaday.css'
// 引入测试组件
import Loading from  "@/components/Loading"
/** 拖拽组件 **/
import draggable from 'vuedraggable'
/** 引入nprogress **/
import nprogress from "nprogress"
import 'nprogress/nprogress.css'
Vue.use(nprogress)
Vue.use(Antd)
Vue.use(ElementUI)
Vue.use(draggable)

Vue.config.productionTip = false
// 引入命令式组件
import Confirm from "@/components/Confirm/index.js"
Vue.prototype.$confirm  = Confirm

// Title组件render渲染函数实现
Vue.component('RenderTitle',{
  render:function(createElement){
    return createElement(
      'h' + this.level,// tag name 标签名称
      this.$slots.default,// 子组件中的阵列
    )
  },
  props:{
    level:{
      type:Number,
      required:true
    }
  }
})
// 前置全局导航守卫
router.beforeEach((to,from,next)=>{
  // 进入页面调用进度条
  nprogress.start()
  next()
})
/** 后置全局导航守卫 **/
router.afterEach(()=>{
  nprogress.done()
})
// 根组件
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    // 中央事件总线
    Vue.prototype.$bus = this
    // 数值千分位过滤器
    Vue.filter("formatNum",function(num){
      num = num + ""
      let regex = /(\d)(?=(\d{3})+$)/g
      return num.replace(regex,'$1,')
    })
    /** nprogress配置 **/
    nprogress.configure({
      easing:'ease',// 动画方式
      speed:500,// 递增进度条的速度
      showSpinner:false,// 是否显示加载icon
      trickleSpeed:200,// 自动递增间隔
      minimum:0.3,// 初始化时最小百分比
    })
  }
}).$mount('#app')
