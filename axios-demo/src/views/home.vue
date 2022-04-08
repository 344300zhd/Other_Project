<template>
  <div style="padding:20px">
    <el-button class="loginout" type="danger" size="smal" @click="loginout">退出登录 </el-button>
    <div style="display:flex;">
      <el-card class="card">
      <div slot="header" class="clearfix">
        <span>歌</span>
        <el-button type="text" style="float:right;padding:3px 0">详情</el-button>
      </div>
      <div>{{song}}</div>
    </el-card>
    <el-card class="card">
      <div slot="header" class="clearfix">
        <span>诗</span>
        <el-button type="text" style="float:right;padding:3px 0">详情</el-button>
      </div>
      <div>{{shi}}</div>
    </el-card>
    </div>

    <div style="margin-top:20px">
      <router-link to="/song" style="margin-right:20px">歌专场</router-link>
      <router-link to="/shi">诗专场</router-link>
      <router-view/>
    </div>
  </div>
</template>

<script>
import user from "../api/user"
import {mapMutations, mapState} from "vuex"
export default {
    data(){
      return{
        song:'',
        shi:''
      }
    },
    methods:{
      ...mapMutations(['clear_token']),
      getShi(){
        user.getShi().then(resp=>{this.shi = resp.data})
      },
      getSong(){
        user.getSong().then(resp=>{this.song = resp.data})
      },
      getInfo(){
        //并发执行请求
        this.$axios.all([this.getSong(),this.getShi()])
      },
      loginout(){
        this.clear_token()
        this.$router.push({name:'login'})
        console.log("缓存:",localStorage.getItem("token"));
      }
    },
    mounted(){
      this.getInfo()
    }
}
</script>

<style scope>
.loginout{
  position: fixed;
  top:10px;
  right: 10px;
}
.card{
  width: 400px;
  height: 200px;
  margin-left: 20px;
}
</style>