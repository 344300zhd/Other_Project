<template>
    <div>
        <span class="head">ECharts基础使用</span>
        <div class="b-all m-t-10 p-10 flex" style="flex-wrap:normal">
            <!-- 绘制柱状图的容器 -->
            <div id="p1" style="margin-top:30px"></div>
            <!-- 绘制饼图 --> 
            <div>
                <div style="margin-bottom:10px;text-align:center">
                    <el-switch @change="changePie" active-color="#13ce66" inactive-text="浅色模式" active-text="深色模式" v-model="deep"></el-switch>
                </div>
                <div id="p2"></div>
            </div>
            <!-- 使用dataset -->
            <div id="p3" style="margin-top:30px"></div>
        </div>
    </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts"
export default {
    data(){
        return{
            deep:false,
        }
    },
    methods:{
        changePie(e){
            this.drawPie()
        },
        // 绘制柱状图
        drawBar(){
            // 获取echarts实例
        let mychart = echarts.init(document.getElementById("p1"))
        // 指定图表的配置项和数据
        let option = {
            // 图表的标题
            title:{
                text:"邹轩的生活"
            },
            tooltip:{},
            // 指示块，必须和series的name值一致时才会显示
            legend:{
                data:['时间']
            },
            xAxis:{
                data:['睡觉','吃饭','学习','娱乐','学习','运动','学习']
            },
            yAxis:{},
            series:[
                {
                    name:"时间",
                    type:"bar",
                    data:[8,1,4,3,4,1,4]
                }
            ]
        };
        // 绘制图表
        mychart.setOption(option)
        },


        // 使用dataset
        useDataset(){
            let mychart3 = echarts.init(document.getElementById("p3"))
            let optin = {
                legend:{},
                tooltip:{},
                dataset:{
                    source:[
                        ['active','学习','吃饭','娱乐','睡觉'],
                        ['学习',2,3,4,6],
                        ['娱乐',4,5,3,1],
                        ['睡觉',4,1,8,6],
                        ['吃饭',2,2,4,9]
                    ]
                },
                 xAxis: [
        {type: 'category', gridIndex: 0},
        {type: 'category', gridIndex: 1}
    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1}
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    series: [
        // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        {type: 'bar', seriesLayoutBy: 'row'},
        // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
        {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
    ]
            }
            mychart3.setOption(optin)
        },

        // 绘制饼图
        drawPie(){
            let mychart2 = echarts.init(document.getElementById("p2"),this.deep ? 'dark' : 'light')
            let optin2 = {
                tooltip:{},
                legend:{
                    grid:{
                        top:20,
                    }
                },
                series:[
                    {
                        name:"时间",
                        type:"pie",
                        // 图表的圆角（形状)
                        radius:"55%",
                        data:[
                            {value:8,name:"睡觉"},
                            {value:1,name:"吃饭"},
                            {value:4,name:"学习"},
                            {value:3,name:"娱乐"},
                            {value:4,name:"学习"},
                            {value:1,name:"运动"},
                            {value:4,name:"学习"},
                        ]
                    }
                ]
            }
            mychart2.setOption(optin2)
        }
    },
    // 渲染图表必须在这个钩子函数或之后，因为只有这样才可以获取图表容器元素
    mounted(){
        this.drawBar()
        this.drawPie()
        this.useDataset()
    }
}
</script>

<style scoped>
#p1,#p2,#p3{
    width: 400px;
    height: 400px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-right: 20px;
}
</style>