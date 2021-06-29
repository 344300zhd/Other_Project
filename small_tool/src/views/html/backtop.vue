<template>
  <div class="backtop_container">
    <span class="head">jQuery--回到顶部功能实现</span>
    <div class="backtop" @click="backtop">回到顶部</div>
    <div class="head" style="margin-top:10px" v-for="(item,index) in 15" :key="index">
      <p>当窗口滚动距离大于1000px时，回到顶部按钮显示，反之消失，显示和消失呈现淡出淡入效果。</p>
      <p>回到顶部功能呈现动画效果。</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods:{
      // 回到顶部
      backtop(){
        $('html,body').animate({scrollTop:0},500);
        return false
      }
    },
    // 淡出淡入效果
    mounted(){
      $(window).scroll(()=>{
        if($(window).scrollTop()>1000){
          $('.backtop').fadeIn(1500)
        }else{
          $('.backtop').fadeOut(1500)
        }
      })
    }
}
</script>

<style scoped>
.backtop_container{
  width: 100%;
}
.backtop{
  width: 40px;
  height: 40px;
  background: rgb(83, 207, 83);
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgb(218, 216, 216);
  text-align: center;
  line-height: 20px;
  color: #fff;
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: none;
}
.backtop:hover{
  opacity: 0.5;
  cursor: pointer;
}
</style>