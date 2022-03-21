<template>
  <!-- 各种加载样式 -->
  <div>
    <div v-if="LoadingType == 1" class="loading_1"></div>
    <div v-if="LoadingType == 2" class="loading_2"></div>
  </div>
</template>

<script>
export default {
  props:{
    LoadingType:{
      type:Number,
      default:1
    }
  },
  mounted(){
    console.log("$options =>",this.$options);
  }
}
</script>

<style lang="scss">
.loading_1{
  width:30px;
  height: 30px;
  border: 2px solid #000;
  border-top-color: transparent;
  border-radius: 50%;
  margin:10px;
  animation:loading_1 infinite 0.75s linear; //linear-匀速，infinite-一直转 
}
@keyframes loading_1 {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.loading_2{
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border:2px #000 solid;
    border-right-color: rgba(0,0,0,0.2);
    border-left-color: rgba(0,0,0,0.2);
    border-top-color: rgba(0,0,0,0.2);
    margin: 10px;
    animation: loading_2 infinite 0.75s linear;
}
@keyframes loading_2 {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>