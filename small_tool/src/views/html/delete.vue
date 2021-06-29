<template>
  <div>
      <span class="head">jQuery--删除动画效果</span>
      <div class="m-t-10 p-10 b-all">
          <p>elementui--标签删除效果</p>
          <el-tag v-for="(item,index) in taglist2" :key="index" class="m-r-20" type="success" :disable-transitions="false" closable @close="closetag(index)">{{item}}</el-tag>
      </div>
      <div class="m-t-10 p-10 b-all">
          <p>jQuery--标签删除效果(hide)</p>
          <el-tag v-for="(item,index) in taglist" :class="`tag${index}`"  class="m-r-20 pointer" :key="index">
              {{item}}
              <span class="circle" @click="closetag2(index)">X</span>
          </el-tag>
      </div>
      <div class="m-t-10 p-10 b-all">
          <p>jQuery--标签删除效果(淡出淡入)</p>
          <el-tag v-for="(item,index) in taglist" :class="`tag2${index}`"  class="m-r-20 pointer" :key="index">
              {{item}}
              <span class="circle" @click="closetag3(index)">X</span>
          </el-tag>
      </div>
  </div>
</template>

<script>
import $ from "jquery"
export default {
    data(){
        return{
            taglist:['标签一','标签二','标签三','标签四'],
            taglist2:['标签一','标签二','标签三','标签四'],
        }
    },
    methods:{
        closetag(index){
            this.taglist2.splice(index,1)
        },

        closetag2(index){
            $(`.tag${index}`).hide('slow')
        },

        closetag3(index){
            $(`.tag2${index}`).fadeOut('slow')
        }
    }
}
</script>

<style scoped>
.circle{
    background: rgb(206, 102, 102);
    color: #fff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
}
</style>