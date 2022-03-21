<template>
  <div class="home">
    <div class="leftMenu">
      <a-menu
        class="menu"
        mode="inline"
        theme="dark"
        :default-selected-keys="[current]"
        @click="selectMenuItem"
      >
        <a-menu-item v-for="item in menuList" :key="item.key">
          <a-icon :type="item.icon" style="font-size: 24px"></a-icon>
          <span>{{ item.title }}</span>
          <router-link :to="item.path"></router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="rightContent">
      <!-- 顶部走马灯 -->
      <div class="topCarousel">
        <TopCarousel />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
    <!-- 返回顶部 -->
    <a-icon type="up-circle" id="backUp" class="backUp" />
  </div>
</template>

<script>
import $ from "jquery";
import menuList from "@/common/menu.js";
import TopCarousel from "@/views/Index/TopCarousel";
export default {
  components: {
    TopCarousel,
  },
  data() {
    return {
      menuList: menuList,
      current: "submit",
    };
  },
  methods: {
    selectMenuItem(val) {
      this.current = val.key;
    },
  },
  mounted() {
    /** 返回按钮初始隐藏 **/
    $("#backUp").hide();
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $("#backUp").fadeIn(200);
      } else {
        $("#backUp").fadeOut(200);
      }
    });
    $("#backUp").click(function(){
      $('body,html').animate({
        scrollTop:0
      },500) 
    })
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  display: flex;
  .leftMenu {
    .menu {
      height: 100%;
      min-height: 100vh;
    }
  }
  .rightContent {
    background: #f0f4f8;
    overflow: hidden;
    .topCarousel {
      margin-left: 10px;
      height: 50px;
      margin-bottom: 10px;
    }
    .content {
      padding: 10px;
      margin: 0 10px;
      min-height: calc(100% - 60px);
      background: #fff;
    }
  }
  .backUp {
    font-size: 40px;
    position: fixed;
    bottom: 50px;
    right: 20px;
    color: pink;
  }
}
</style>