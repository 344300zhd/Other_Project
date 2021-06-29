<template>
  <div>
      <span class="head">使用不同方式实现动画效果动画</span>
      <div class="m-t-10 b-all p-10">
          <span class="head">动画--jQuery--animate()</span>
          <el-button class="m-l-20" type="success" size="small" @click="change1">变化</el-button>
          <div class="item"></div>
      </div>

      <div class="m-t-10 b-all p-10">
          <span class="head">动画--css3--@keyframes</span>
          <el-button class="m-l-20" type="danger" size="small">hover元素</el-button>
          <div class="item2"></div>
      </div>

       <div class="m-t-10 b-all p-10">
          <span class="head">过渡--css3--transition</span>
          <el-button class="m-l-20" type="primary" size="small">hover元素</el-button>
          <div class="item3"></div>
       </div>
      

  </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods:{
        change1(){
            let item = $(".item")
            item.animate({height:"300px",opacity:'0.4'},'slow')
            item.animate({width:"300px",opacity:'0.8'},'slow')
            item.animate({height:'100px',opacity:'0.4'},'slow')
            item.animate({width:'100px',opacity:'0.8'},'slow')
        }
    }
}
</script>

<style scope>
    .item{
        margin-top: 20px;
        width: 100px;
        height: 100px;
        position: relative;
        background: rgb(125, 230, 84);
    }
    .item2{
        margin-top: 20px;
        width: 100px;
        height: 100px;
        position: relative;
        background: rgb(223, 31, 31);
    }
    .item2:hover{
        animation: change 4s;
    }
    @keyframes change {
        25%{height: 300px;opacity: 0.4;}
        50%{width: 300px;opacity: 0.8;}
        75%{width: 100px;opacity: 0.4;}
        100%{height: 100px;opacity: 0.4;}
        
    }
    
    .item3{
        margin-top: 20px;
        width: 100px;
        height: 100px;
        position: relative;
        background: rgb(32, 171, 196);
        transition: width 2s,height 2s,opacity 2s;
    }
    .item3:hover{
        width: 300px;
        height: 300px;
        opacity: 0.4;
    }
</style>