<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"app",
  provide(){
    return{
      app:this
    }
  },
  data(){
    return{
      info:"root info"
    }
  }
}
</script>

<style lang="scss">
#nprogress .bar{
    background: red !important;
    height: 5px !important;
}
#app{
  padding: 0;
  overflow: hidden;
  margin: 0;
  box-sizing: border-box;
}
</style>
