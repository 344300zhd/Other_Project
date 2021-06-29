<template>
  <div class="all">
    <!-- 左侧导航栏 -->
    <div class="menu">
      <el-menu router :default-openeds="['1','2']">
      <el-menu-item index="welcome">
        <i class="el-icon-s-unfold"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>JS方法封装</span>
        </template>
        <el-menu-item index="formatDate">
          <i class="el-icon-sort"></i>
          <span>时间戳/时间格式转换</span>
        </el-menu-item>
         <el-menu-item index="ajax">
          <i class="el-icon-monitor"></i>
          <span>ajax--获取外部数据</span>
        </el-menu-item>
      </el-submenu> 
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>HTML功能实现</span>
        </template>
        <el-menu-item index="backtop">
          <i class="el-icon-top"></i>
          <span>jQuery--回到顶部功能</span>
        </el-menu-item>
        <el-menu-item index="slide">
          <i class="el-icon-s-ticket"></i>
          <span>jQuery--伸缩面板功能</span>
        </el-menu-item>
        <el-menu-item index="delete">
          <i class="el-icon-close"></i>
          <span>jQuery--删除动画效果</span>
        </el-menu-item>
        <el-menu-item index="animate">
          <i class="el-icon-loading"></i>
          <span>jQuery--HTML动画效果</span>
        </el-menu-item>
        <el-menu-item index="imglook">
          <i class="el-icon-zoom-in"></i>
          <span>jQuery--图片查看器</span>
        </el-menu-item>
        
      </el-submenu>
    </el-menu>
    </div>
    <!-- 主体内容 -->
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
   
  }
}
</script>

<style scoped>
.all{
  display: flex;
  width: 100%;
  min-height: 100%;
}
.menu{
  width: 250px;
  min-height: 100%;
  box-shadow: 2px 2px 2px 2px rgb(218, 216, 216);
}
.main{
  width: 100%;
  border:1px solid rgb(218, 216, 216);
  margin-left: 10px;
  padding: 10px;
}
</style>
