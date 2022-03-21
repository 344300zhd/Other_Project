<template>
  <div style="display:flex">
      <Loading :LoadingType="1"/>
      <Loading :LoadingType="2"/>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
export default {
  components:{Loading}
}
</script>

<style>

</style>