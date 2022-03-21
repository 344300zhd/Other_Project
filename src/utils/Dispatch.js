export default{
    methods:{
        dispatch(componentName,eventName,params){
            let parent = this.$parent || this.$root // 寻找父组件
            let name = parent.$options.name // 父组件的name属性

            while(parent && (!name || name !== componentName)){
                parent = parent.$parent // 一直向上查找
                if(parent){
                    name = parent.$options.name // 重新赋值name
                }
            }
            if(parent){ // 找到匹配的组件实例
                parent.$emit.apply(parent,[eventName].concat(params)) // emit触发自定义事件
            }
        }
    }
}