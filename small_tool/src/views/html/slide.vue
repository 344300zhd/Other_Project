<template>
  <div>
      <span class="head">jQuery--伸缩面板功能实现</span>
      <div class="b-all m-t-10 p-10">
          <div class="flex sb">
              <div>娱乐节目</div>
              <div @click="slide" class="pointer">{{flag == false ? "展开" : "收缩"}}</div>
          </div>
          <div class="more m-t-10">
              <el-tag v-for="(item,index) in 20" class="m-r-20 m-t-10">娱乐节目----{{index}}</el-tag>
          </div>
      </div>
  </div> 
</template>

<script>
import $ from "jquery"
export default {
    data(){
        return{
            flag:true
        }
    },
    methods:{
        slide(){
            $(".more").slideToggle('slow')
            this.flag = !this.flag
        }
    }
}
</script>

<style scoped>
</style>