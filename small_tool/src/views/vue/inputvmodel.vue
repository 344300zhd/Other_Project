<template>
    <div>
        <input-vmodel v-model="msg"></input-vmodel>
        <p>{{msg}}</p>
        
        <div class="m-t-10">
            <el-button @click="show">显示内容</el-button>
            <transition name="fade">
                <p v-if="active">这是显示的内容{{active}}</p>
            </transition>
        </div>
    </div>
</template>

<script>
import InputVmodel from "../../components/InputVmodel"
export default {
    components:{InputVmodel},
    data(){
        return{
            msg:"这是一段信息",
            active:false
        }
    },
    methods:{
        show(){
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{
    transition:opacity 3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>