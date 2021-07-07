<template>
    <div>
        <span class="head">vue基础学习</span>
        <hr/>
        <p>自定义组件</p>
        <carousel :info="infoList"></carousel>
        <hr>
        <p>原始HTML ---- v-html</p>
        <p v-html="message"></p>
        <hr>    
        <p>计算属性</p>
        <p>{{add_num}}</p>
        <hr>
        <p>监听属性</p>
        <el-input v-model="num"></el-input>
        <div v-for="item in changelist">{{item}}</div>
        <hr>
        <p>事件修饰符</p>
        <div @click.capture="bigger1" style="background:red">
            <div @click.capture="bigger2">capture:事件捕获模式，先交由父组件处理，处理完再交由子组件处理,所以先父组件加一，再子组件加一，即点击一次加2*********{{num}}</div>
        </div>
    </div>
</template>

<script>
import carousel from "../../components/carousel"
export default {
    components:{carousel},
    data(){
        return{
            infoList:["美女1","美女2","美女3","美女4"],
            message:"<p style='color:red'>Hello</p>",
            num:1,
            changelist:[]
        }
    },
    methods:{
        bigger1(){
            this.num += 1
        },
        bigger2(){
            this.num += 1
        }
    },
    computed:{
        add_num:function(){
            return this.num+1
        }
    },
    watch:{
        num(newval,oldval){
           let s =`num由${newval}变为${oldval}`
           this.changelist.push(s)
        }
    }
}
</script>

<style>

</style>