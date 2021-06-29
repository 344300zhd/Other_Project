<template>
    <div>
        <span class="head">时间戳/时间格式的相互转换</span>
        <div class="content">
            <div>请随机生成时间戳：<el-button type="danger" size="small" @click="get_timestep">生成</el-button></div>
            <el-row style="margin-top:10px">
                <el-col :span="8">
                    <el-input placeholder="请输入时间戳" v-model="timestep"></el-input>
                </el-col>
                <el-col :span="2" style="text-align:center">
                  <el-button size="small" type="success" @click="format_timestep">转换</el-button>
                </el-col>
                <el-col :span="8">
                    <el-input placeholder="转换时间格式" v-model="formatDate"></el-input>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import timer from "../../util/formatDate"
export default {
    data(){
        return{
            timestep:'',//时间戳
            formatDate:'',//格式化之后的时间
        }
    },
    methods:{
        //生成时间戳
        get_timestep(){
            try{
                this.timestep = new Date().getTime()
                this.$message.success("时间戳生成成功!")
            }catch(err){
                this.$message.error(err)
            }
        },

        //转换时间格式
        format_timestep(){
            this.formatDate = timer(this.timestep)
        }
    }
}
</script>

<style scope>
.content{
    border: 1px solid rgb(218,216,216);
    margin-top: 10px;
    padding: 10px;
}
</style>