<template>
    <div>
        <input v-model="curValue" style="border:1px solid #aaa;" type="text"/>
        <span style="color:red;" v-show="showTip">输入不能为空</span>
    </div>
</template>

<script>
import emitter from "@/utils/Dispatch";
export default {
    name:"FormItem",
    mixins:[emitter],//混入
    data(){
        return{
            curValue:"",
            showTip:false
        }
    },
    created(){
        this.dispatch("Form","on-form-item-add",this)
    },
    methods:{
        validataVal(){
            if(this.curValue === ""){
                this.showTip = true
            }
        }
    } 
}
</script>

<style>

</style>