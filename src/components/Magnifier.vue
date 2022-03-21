<template>
  <!-- 
      图片放大镜
      实现原理：借助宽高等比例放大的两张图片，结合js中鼠标偏移量，元素偏移量，
                元素自身宽高等属性完成；
      关键之处:
        a.小图遮罩移动Xpx,右侧大图移动X*倍数px;
        b.遮幕层的移动方向和大图的移动方向相反；
        c.大图和小图的尺寸比例相差要足够大，不然显示会不完全；
   -->
  <div>
      <!-- 小图与遮幕层 -->
      <div id="small">
          <img :src="imgUrl" alt="">
          <div id="mark"></div>
      </div>
      <!-- 等比例放大的大图 -->
      <div id="big">
          <img :src="imgUrl" alt="" id="bigImg">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        imgUrl:{
            type:String,
            require:true
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            // 获取小图
            let small = document.getElementById('small')
            // 获取遮幕层
            let mark = document.getElementById("mark")
            // 获取大图盒子
            let big = document.getElementById("big")
            // 获取大图
            let bigImg = document.getElementById("bigImg")
            // 小图区域获取鼠标移动事件，遮幕层跟随鼠标移动
            small.onmousemove = (e) => {
                // 遮幕层距离小图左侧的距离
                let s_left = e.pageX - small.offsetLeft - mark.offsetWidth / 2
                // 遮幕层距离小图顶部的距离
                let s_top = e.pageY - small.offsetTop - mark.offsetHeight / 2
                // 遮幕层水平方向可移动的最大距离
                let max_left = small.offsetWidth - mark.offsetWidth
                // 遮幕层垂直方向可移动的最大距离
                let max_top = small.offsetHeight - mark.offsetHeight
                // 遮幕层和大图移动的比例
                const n = bigImg.offsetWidth / small.offsetWidth
                // 判断边界
                s_left = s_left < 0 ? 0 : s_left > max_left ? max_left : s_left
                s_top = s_top < 0 ? 0 : s_top > max_top ? max_top : s_top
                // 移动遮幕层
                mark.style.left = s_left + 'px'
                mark.style.top = s_top + 'px'
                // 移动大图：注意，遮幕层的移动方向和大图的移动方向是相反的
                bigImg.style.left = -n * s_left + 'px'
                bigImg.style.top = -n * s_top + 'px'
                console.log(n);
            }
            // 鼠标移入：显示遮幕层和大图盒子
            small.onmouseenter = ()=>{
                mark.style.display = "block"
                big.style.display = 'block'
            }
            // 鼠标移出：隐藏遮幕层和大图盒子
            small.onmouseleave = ()=>{
                mark.style.display = 'none'
                big.style.display = 'none'
            }
        }
    }
}
</script>

<style lang="scss">
// 原图
#small{
  width: 300px;
  height: 200px;
  float: left;
  position: relative;
  img{
      width: 100%;
      height: 100%;
  }
}
// 放大图盒子
#big{
    width: 600px;
    height: 400px;
    background:#eee;
    display: none;
    float: left;
    overflow: hidden;
    margin-left: 10px;
    position: relative;
}
// 放大图
#bigImg{
    position: absolute;
    width: 1800px;
    height: 1000px;
    left: 0;
    top: 0;
}
// 遮幕层
#mark{
    width: 100px;
    height: 100px;
    background: #fff;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    cursor: move;
    display: none;
}
</style>
