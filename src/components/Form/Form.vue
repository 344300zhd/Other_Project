<template>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    name:"Form",
    data(){
        return{
            fields:[],// 收集表单项
        }
    },
    created(){
        this.$on('on-form-item-add',field=>{
            this.fields.push(field)// 添加到集合内
        })
        console.log("fileds =>",this.fields);
    },
    methods:{
        // 验证所有接口
        validataAll(){
            this.fields.forEach(item => {
                item.validataVal()// 执行每个表单项验证方法
            });
        }
    }
}
</script>

<style>

</style>