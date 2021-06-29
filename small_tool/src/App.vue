<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>


<style>
*{
  box-sizing: border-box;
}
body,html{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  padding:10px;
}
</style>
