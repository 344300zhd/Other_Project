<template>
  <div style="padding:20px">
      <el-row>
          <el-col :span="8">
              <el-input v-model="key" @keyup.enter.native="submit"></el-input>
          </el-col>
          <el-col :span="8">
              <Loading :loadingType='1' ref="loading"/>
          </el-col>
          <el-col :span="8">
              <el-button @click.enter="busEmit">中央事件总线</el-button>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="8">
              <component :is="'Content'"></component>
              <Content>
                  <template>
                      <div style="width:100px;height:100px;background:blue">
                          TEST
                      </div>
                  </template>
                  <template #green>
                      <div style="width:100px;height:100px;background:red">
                          <div style="height:50px;width:50px;background:yellow">TEST</div>
                      </div>
                  </template>
              </Content>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import Content from "@/components/Content";
export default {
  components:{
    Loading,Content
  },
  data(){
      return{
          key:"",
          watch_log:"",
      }
  },
  watch:{
      key:function(nval,oval){
        this.watch_log = oval + "=>" + nval
      }
  },
  methods:{
    busEmit(){
        this.$bus.$emit('busEmit',{id:1})
    },
    submit(){
        this.$message.success("尝试登录")
    }
  },
  computed:{
      computed_log:function(){
        return this.key
      }
  },
  mounted(){
      console.log("子组件 =>",this.$children);
      console.log("父组件 =>",this.$parent);
      console.log("ref =>",this.$refs.loading);

      this.$bus.$on("busEmit",(data)=>{
          console.log("中央事件触发" + data.id);
      })
  }
}
</script>

<style>

</style>