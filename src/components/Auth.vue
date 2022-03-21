<script>
/**
 * 知识：函数式组件
 */
const data = "<div>123<div>"
export default {
  name:"Auth",
  functional:true,// 函数式组件
  props:{
      auth:{
          type:String,
          required:true
      }
  },
  render(createElement,context){
      const {props,scopedSlots} = context
      return props.auth == 'reader' ? createElement('div',context.children) : null
  }
}
</script>

<style>

</style>