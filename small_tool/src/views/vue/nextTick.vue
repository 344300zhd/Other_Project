<template>
    <div>
        <span class="head">全局函数nextTick()的使用</span>
        <div class="m-t-10">
          <h1 ref="content">{{msg}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"这是原始的信息"
        }
    },
    created(){
        // 必须使用这个函数才能获取dom元素的内容，因为在created（）钩子函数中视图是没有被渲染的，所以直接获取是获取不到的
        this.$nextTick(()=>{
            console.log(this.$refs['content'].innerText);
        })
    },
    mounted(){
        console.log(this.$refs['content'].innerText);
    }
}
</script>

<style>

</style>