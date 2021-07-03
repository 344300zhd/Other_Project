import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import("@/views/login")
    },
    {
      path:"/home",
      name:"home",
      component:()=>import("@/views/home"),
      children:[
        {
          path:"/song",
          name:"song",
          component:()=>import("@/views/song"),
          beforeEnter:(to,from,next)=>{
            if(localStorage.getItem("songer") != null){
              next()
            }else{
              alert("您不是歌手，不可进入该专场！")
            }
          }
        },
        {
          path:"/shi",
          meta:{shier:true},
          name:"shi",
          component:()=>import("@/views/shi")
        }
      ]
    }
  ],
})
