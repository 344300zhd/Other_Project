<template>
  <div>
      <div v-if="type == 'success'" class="btn success">
          <!-- 默认的slot内容 -->
          <slot>Button</slot>
      </div>
      <div v-if="type == 'fail'" class="btn fail">
          <!-- 默认的slot内容 -->
          <slot>Button</slot>
      </div>
      <div v-if="type == 'warning'" class="btn warning">
          <!-- 默认的slot内容 -->
          <slot>Button</slot>
      </div>
  </div>
</template>

<script>
export default {
  props:{
      type:{
          type:String,
          validator:s=>['success','fail','warning'].includes(s) // 使用validator来规定按钮的类型
      }
  }
}
</script>

<style lang="scss">
.btn{
    width: 100px;
    height: 50px;
    margin:20px;
    border-radius: 30px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
}
.success{
    background: green;
}
.fail{
    background: red;
}
.warning{
    background: orange;
}
</style>