<template>
  <div class="container">
      <div class="danmu-item-1" v-for="(item,index) in messageList" :key="index" :style="item.style" :class="item.class">{{item.text}}</div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          messageList:[
              {
                  text:"我是小虎牙",
                  style:"border:1px solid blue;color:blue",
                  class:'speed5'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid red;color:red;top:50px",
                  class:'speed3'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid red;color:red;",
                  class:'speed11'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid green;color:green;top:100px",
                  class:'speed9'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid yellow;color:yellow;top:200px",
                  class:'speed7'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid pink;color:pink;top:200px",
                  class:'speed3'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid orange;color:orange;top:300px",
                  class:'speed7'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid black;color:black;top:400px",
                  class:'speed11'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid yellow;color:yellow;top:800px",
                  class:'speed9'
              },
              {
                  text:"我是小虎牙",
                  style:"border:1px solid black;color:black;top:500px",
                  class:'speed3'
              },

          ]
      }
  }
}
</script>

<style lang="scss" scoped>
.speed5{
    animation:move 5s linear 0s;
}
.speed7{
    animation:move 7s linear 0s;
}
.speed9{
    animation:move 9s linear 0s;
}
.speed11{
    animation:move 11s linear 0s;
}
.speed3{
    animation:move 3s linear 0s;
}
.container::-webkit-scrollbar {
  display: none;
}
.container{
    position: relative;
    .danmu-item-1{
        padding:10px;
        min-width: 200px;
        border-radius: 10px;
        position: absolute;
        animation-iteration-count: infinite;
    }
}
@keyframes move {
    from{
        left: 100%;
        transform: translateX(0);
    }
    to{
        left: 0;
        transform: translateX(-100%);
    }
}
</style>