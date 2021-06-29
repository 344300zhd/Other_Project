import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import formatDate from './views/js/formatDate.vue'
import welcome from './views/js/welcome.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'index',
      redirect:'welcome',
      component: index,
      children:[
        {
          path:'formatDate',
          name:'formatDate',
          component:formatDate
        },
        {
          path:'welcome',
          name:'welcome',
          component:welcome
        },
        {
          path:'backtop',
          name:'backtop',
          component:()=>import('@/views/html/backtop')
        },
        {
          path:'slide',
          name:'slide',
          component:()=>import('@/views/html/slide')
        },
        {
          path:'delete',
          name:'delete',
          component:()=>import('@/views/html/delete')
        },
        {
          path:'animate',
          name:'animate',
          component:()=>import('@/views/html/animate')
        },
        {
          path:'imglook',
          name:'imglook',
          component:()=>import('@/views/html/imglook')
        },
        {
          path:'ajax',
          name:'ajax',
          component:()=>import("@/views/js/ajax")
        }
      ]
    }
  ]
})
