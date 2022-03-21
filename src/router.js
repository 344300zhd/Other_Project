import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 系统首页
    {
      path: '/',
      component:() => import("@/views/Index/Index"),
      children:[
        // 防抖节流
        {
          path:'/',
          name:"submit",
          component:() => import("@/views/Submit")
        },
        // 插槽
        {
          path:"/slot",
          name:"slot",
          component:()=>import("@/views/Slot")
        },
        // 自定义表单验证
        {
          path:"/formValidate",
          name:"formValidate",
          component:()=>import("@/views/FormValidate")
        },
        // 特殊图形
        {
          path:"/graphics",
          name:"graphics",
          component:()=>import("@/views/Graphics")
        },
        // 自定义加载动画
        {
          path:"/loading",
          name:"loading",
          component:()=>import("@/views/Loading")
        },
        // 图片放大器
        {
          path:"/bigger",
          name:"bigger",
          component:()=>import("@/views/Bigger")
        },
        // Echart图表
        {
          path:"/chart",
          name:"chart",
          component:()=>import("@/views/Chart")
        },
        // 弹幕
        {
          path:"/trajectory",
          name:"trajectory",
          component:()=>import("@/views/Trajectory")
        },
        /** 拖拽组件 **/
        {
          path:'/draggable',
          name:'draggable',
          component:()=>import('@/views/Draggable')
        }  
      ]
    },
  ]
})
