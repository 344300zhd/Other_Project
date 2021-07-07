<template>
    <div style="display:flex">
        <span class="opbtn" @click="op('add')">+</span>
        <input v-model="number"/>
        <span class="opbtn" @click="op('sub')">-</span>
    </div>
</template>

<script>
export default {
    props:{
        num:{
            type:Number,
            default:0,
        },
        id:{}
    },
    data(){
        return{
            number:this.num,
            goodid:this.id
        }
    },
    watch:{
        number(newval,oldval){
            if(newval) this.post()
            console.log("值发生变化：",newval);
        }
    },
    methods:{
        op(type){
            switch(type){
                case "add":
                    this.number += 1
                    break;
                case "sub":
                    if(this.number > 0){
                        this.number -= 1
                    }else{
                        this.$message.error("数量已达到最低值")
                    }
                    break;
            }
        },
        post(){
            this.$emit("post",{num:this.number,id:this.goodid})
        }
    }
}
</script>

<style scoped>
.opbtn{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgb(109, 223, 109);
    color: #fff;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
}
input{
    width: 80px;
    height: 30px;
    margin: 0 10px;
    text-align: center;
}
</style>