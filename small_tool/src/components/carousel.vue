<template>
    <div>
        <el-carousel :interval="3000" height="300px" type="card">
            <el-carousel-item v-for="(item,index) in 4">
                <img src="../assets/girl.png" alt="" style="width:100%;height:100%">
            </el-carousel-item>
        </el-carousel>
        <span v-for="item in info">{{item}} --- </span>
    </div>
</template>

<script>
export default {
    props:{
        info:{
            type:Array
        }
    },
    data(){
        return{
            info:info
        }
    }
}
</script>

<style>

</style>