<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
body,html,#app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: rgb(240, 236, 236);
}
</style>
