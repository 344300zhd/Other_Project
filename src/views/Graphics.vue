<template>
  <div class="graphics-container">
    <a-card v-for="item in btnList" :title="item.title" style="width: 300px">
      <a slot="extra" href="#">more</a>
      <div class="btn" :class="item.type"></div>
    </a-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      btnList:[
        {
          title:"圆角矩形",
          type:"circle"
        },
        {
          title:"平行四边形",
          type:"parallelogram"
        },
        {
          title:"梯形",
          type:"trapezoid"
        },
        {
          title:"单个切角",
          type:"oneChing"
        },
        {
          title:"四个切角",
          type:"fourChing"
        },
        {
          title:"三角形-边框构造",
          type:"sj"
        },
        {
          title:"指示牌",
          type:"guide"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.graphics-container{
  display: flex;
  flex-wrap: wrap;
  .btn{
    width: 200px;
    height: 50px;
    background: red;
  }
  .circle{
    border-radius: 25px;
  }
  .parallelogram{
    transform: skewX(-20deg);
  }
  .trapezoid{
    transform: perspective(50px) rotateX(20deg);// 视距 + 旋转
  }
  .oneChing{
    background: linear-gradient(135deg,transparent 10px,#ff1493 0,red );
  }
  .fourChing{
    background: linear-gradient(135deg,transparent 10px,#ff1493 0,red ) top left,
                linear-gradient(-135deg,transparent 10px,#ff1493 0,red) top right,
                linear-gradient(45deg,transparent 10px,#ff1493 0,red) bottom left,
                linear-gradient(-45deg,transparent 10px,#ff1493 0,red) bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
  .sj{
    background: transparent;
    border-top: 25px solid green;
    border-bottom: 25px solid transparent;
    border-left: 100px solid yellow;
    border-right: 100px solid transparent;
  }
  .guide{
    background: linear-gradient(135deg,transparent 25px,#ff1493 0,red ) top left,
                linear-gradient(-135deg,transparent 25px,#ff1493 0,red) top right,
                linear-gradient(45deg,transparent 25px,#ff1493 0,red) bottom left,
                linear-gradient(-45deg,transparent 25px,#ff1493 0,red) bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
  }
}
</style>