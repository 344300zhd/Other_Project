<template>
  <div>
      <span class="head">jQuery--实现图片查看器</span>
      <div class="m-t-10 w-100 flex jc-c">
          <el-button size="small" type="danger" @click="bigger">放大</el-button>
          <el-button size="small" type="warning" @click="small">缩小</el-button>
          <el-button size="small" type="success" @click="stop">暂停</el-button>
      </div>
      <div class="imgcontent flex jc-c m-t-10">
          <img src="../../assets/logo.png" alt="图片" class="db">
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods:{
        bigger(){
            $('.imgcontent').animate({height:'500px'},5000)
        },

        small(){
            $('.imgcontent').animate({height:'100px'},5000)
        },

        stop(){
            $('.imgcontent').stop()
        }
    }
}
</script>

<style>

</style>