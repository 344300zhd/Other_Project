<template>
  <div class="login_container">
      <div class="login" v-loading="loading">
        <el-tabs>
          <el-tab-pane label="登录">
            <div class="login_form">
              <el-form label-width="50px">
                <el-form-item label="账号:">
                  <el-input placeholder="请输入您的账号" v-model="login.username"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                  <el-input type="password" placeholder="请输入您的密码" v-model="login.password"></el-input>
                </el-form-item>
                <el-button type="primary" @click="doLogin(4)">登录</el-button>
              </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="注册">
             <div class="login_form">
              <el-form label-width="50px">
                <el-form-item label="账号:">
                  <el-input placeholder="请输入您想要创建的账号" v-model="regist.username"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                  <el-input type="password" placeholder="请输入您想要设置的密码" v-model="regist.password"></el-input>
                </el-form-item>
                <el-button type="primary" @click="doRegist">注册</el-button>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import qs from "qs"
import request from "../utils/request"
import user from "../api/user"
import {mapMutations,mapState} from "vuex"
export default {
    data(){
      return{
        login:{
          username:"",
          password:""
        },
        regist:{
          username:"",
          password:""
        },
        loading:false
      }
    },
    computed:{
      ...mapState(['token'])
    },
    methods:{
      ...mapMutations(['save_token']),
      doLogin(type){
        this.loading = true
        switch(type){
          case 1: //最原始的axios请求:以Content-Type:application/json 格式传递参数，无需手动序列化
            this.$axios({
              method:"post",
              url:"http://localhost:8090/user/login1",
              headers:{'Content-Type':'application/json;charset=UTF-8'},
              data:{username:this.login.username,password:this.login.password}
            }).then((resp)=>{
              if(resp.data.success == true){
                localStorage.setItem('token',new Date().getTime())
                this.$message.success("使用第一种方法:登录成功！")
                this.loading = false
                this.$router.push("/home")
              }
            })
            break;
          case 2: // 稍微简写的axios请求：以Content-Type/x-www-form-data 格式传递参数(默认方式)，参数需要序列化
            this.$axios.post("http://localhost:8090/user/login2",qs.stringify({username:this.login.username,password:this.login.password})).then(resp=>{
              if(resp.data.success == true){
                localStorage.setItem('token',new Date().getTime())
                this.$message.success("使用第二种方法：登录成功！")
                this.loading = false
                this.$router.push("/home")
              }
            })
            break;
          case 3: //使用封装的axios
            request.post('/user/login2',{username:this.login.username,password:this.login.password}).then((resp)=>{
              if(resp.data.success == true){
                localStorage.setItem('token',new Date().getTime())
                this.$message.success("使用封装方法：登录成功！")
                this.loading = false
                this.$router.push("/home")
              }
            })
            break;
          case 4: //深度封装
            this.$router.push("/home")
            // user.login({username:this.login.username,password:this.login.password}).then(resp=>{
            //    if(resp.data.success == true){
            //     this.save_token({token:String(new Date())})
            //     console.log("用户token:",this.token)
            //     this.$message.success("使用深度封装方法：登录成功！")
            //     this.loading = false
            //     this.$router.push("/home")
            //   }
            // })
        }
      },

      doRegist(){
        user.regist({username:this.regist.username,password:this.regist.password}).then(resp=>{
          if(resp.data.success == true){ 
            this.$message(resp.data.msg)
            this.regist.password = ""
            this.regist.username = ""
            }
        })
      }
    }
}
</script>

<style>
.login_container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.login{
  width: 400px;
  height: 300px;
  background: #fff;
  box-shadow: 4px 4px 4px 4px rgb(138, 137, 137);
}
.login .el-tabs__item{
  width: 50%;
  text-align: center;
}
.login .el-tabs__nav{
  width: 100%;
}
.login_form{
  padding: 40px;
}
.login_form .el-button{
  width: 100%;
}
</style>
