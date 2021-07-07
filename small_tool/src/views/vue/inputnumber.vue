<template>
    <div>
        <span class="head">自定义计数器组件</span>
        <div class="m-t-10">
            <div v-for="item in goods" :key="item.id" class="flex">
                <div style="margin:20px">{{item.name}}****{{item.price}}x{{item.num}}</div>
                <inputnumber style="margin:20px" :id="item.id" :num="item.num" @post="getpost"></inputnumber>
            </div>
            <div style="margin-top:20px;color:red;font-weight:bold;font-size:24px">
                结算:{{total}}元
            </div>
        </div>
    </div>
</template>

<script>
import inputnumber from "../../components/inputnumber"
export default {
    components:{inputnumber},
    data(){
        return{
            total:0,
            goods:[
                {
                    name:"心相印纸巾",
                    num:12,
                    price:22,
                    id:1
                },
                {
                    name:"六味地黄王",
                    price:99,
                    num:2,
                    id:2
                },
                {
                    name:"香飘飘盒装",
                    price:3.5,
                    num:22,
                    id:3
                }
            ]
        }
    },
    mounted(){
        this.calc()
    },
    methods:{
        getpost(e){
            this.goods.find(item=>{return item.id == e.id}).num = e.num
            console.log("数据:",e);
            this.calc()
        },

        calc(){
            this.total = this.goods.reduce((sum,item)=>{return sum + item.num * item.price},0)
        }
    }
}
</script>

<style>

</style>