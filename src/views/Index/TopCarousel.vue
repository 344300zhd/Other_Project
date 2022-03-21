<template>
  <div class="container"> 
    <a-dropdown class="theme">
      <span style="color:#fff">主题</span>
      <a-menu slot="overlay" @click="changeTheme">
        <a-menu-item key="default">默认主题</a-menu-item>
        <a-menu-item key="light">亮色主题</a-menu-item>
        <a-menu-item key="dark">深色主题</a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-carousel autoplay :dots=false>
      <div v-for="item in eventList" :key="item.date"><h3>{{ item.date }}****{{ item.city }}****{{ item.content }}</h3></div>
    </a-carousel>
  </div>
</template>

<script>
import { getAllEvent } from "@/api/EventApi"; 
export default {
  data(){
    return{
      eventList:[
        {date:"暂无1",city:"暂无1",content:"暂无1"},
        {date:"暂无2",city:"暂无2",content:"暂无2"},
        {date:"暂无3",city:"暂无3",content:"暂无3"}
      ]
    }
  },
  methods:{
    /** 选择主题 **/
    changeTheme({key}){
      window.document.documentElement.setAttribute("data-theme",key)
      console.log(key);
    },
    getAllEvent(){
      getAllEvent().then(res => {
        if(res.status === 200){
          this.eventList = res.data
          console.log("res =>",this.eventList);
        }
      })
    }
  },
  mounted(){
    this.getAllEvent()
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/theme/_theme.scss";
@import "@/assets/theme/mixin.scss";
.container{
  width:100%; 
  height: 100%;
  position: relative;
  .theme{
    position:absolute;
    right: 30px;
    cursor: pointer;
    line-height: 50px;
    z-index: 2;
  }
  /deep/ .ant-carousel .slick-slide {
    text-align: center;
    height: 50px !important;
    line-height: 50px;
    overflow: hidden;
    @include theme($theme-default)
  }
  /deep/ .ant-carousel .slick-slide h3 {
    color: #fff !important;
    font-weight: bold;
  }
}
</style>