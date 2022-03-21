<template>
  <div style="width:100vw;height:100vh;display:flex;flex-wrap:wrap">
    <LineChart
     :title="'学习计划1月10日'"
     :width="50"
     :xData="xData_1"
     :yData="yData_1"/>  
    <LineChart
     :title="'学习计划1月11日'"
     :xData="xData_2"
     :yData="yData_2" />
  </div>
</template>

<script>
import LineChart from "@/components/Echarts/LineChart";
export default {
  components:{LineChart},
  data(){
      return{
          xData_1:['早上','中午','晚上','午夜'],
          yData_1:[
              {
                  name:"学习",
                  data:[1,2,3,4]
              },
              {
                  name:"娱乐",
                  data:[1,4,4,6]
              },
              {
                  name:"发呆",
                  data:[2,3,4,5]
              }
          ],
          xData_2:['12:00','14:00','16:00','18:00'],
          yData_2:[
              {
                  name:"直播",
                  data:[50,20,30,40]
              },
              {
                  name:"电视剧",
                  data:[10,90,40,60]
              },
              {
                  name:"电影",
                  data:[20,10,40,50]
              }
          ]
      }
  },
  mounted(){
      
  }
}
</script>

<style>

</style>