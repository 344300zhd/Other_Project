<template>
  <div :style="`width:${width}%;height:${height}%`">
      <div ref="lineChart" class="lineChart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props:{
    title:{
        type:String
    },
    width:{
        type:Number,
        default:45
    },
    height:{
        type:Number,
        default:45
    },
    xData:{
        type:Array
    },  
    yData:{
        type:Array
    }
  },
  mounted(){
      this.init()
      this.resize()
  },
  destroyed(){
      window.removeEventListener("resize",()=>{
          this.resize()
      })
  },
  methods:{
      resize(){
          let lineChart = echarts.init(this.$refs.lineChart)
          window.addEventListener("resize",()=>{
              lineChart.resize()
          })
      },
      init() {
        // 获取dom元素
        let lineChartDom = this.$refs.lineChart
        // 创建echarts实例
        let lineChart = echarts.init(lineChartDom);
        let series = []
        for(let i in this.yData){
            series.push({name:this.yData[i].name,data:this.yData[i].data,type:this.yData[i].type || 'line'})
        }
        // 参数配置
        let option = {
        // 标题，包含主标题和副标题
        title:{
          show:this.title ? true : false,
          text:this.title,
          textStyle:{
            color:'#40a9ff',
          },
          left:'center',// 标题距离左侧的距离
        },
        // 图例：图例组件展示了不同系列的标记(symbol),颜色和名字
        legend:{
          show:true,
          type:'plain',
          top: 30,
          left: 'center',
          tooltip:{
            show:true,
            trigger:"axis"
          },
        },
        // 网格
        grid:{
          show:true,
        },
        // 提示框
        tooltip:{
          show:true,
          trigger:'axis',
        },
        // x轴
        xAxis: {
          type: "category",
          data: this.xData,
        },
        // y轴
        yAxis: {
          type: "value",
        },
        series: series
      };
      option && lineChart.setOption(option);
    },
  }
}
</script>

<style lang="scss" scoped>
.lineChart{
    width: 100%;   
    height: 100%;
}
</style>