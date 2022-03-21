import Vue from "vue";
import Confirm from "./Confirm";

let newInstance;
// 创建构造函数
const confirmInstance = Vue.extend(Confirm)
// 执行构造函数并完成挂载
const initInstance = ()=>{
    // 实例化
    newInstance = new confirmInstance()
    // $mount挂载，得到$el真实DOM，将其添加到body最后
    document.body.appendChild(newInstance.$mount().$el)
}

export default options => {
    if(!newInstance){
        initInstance()
    }
    // 将传入的对象合并到实例下，供实例调用
    Object.assign(newInstance,options)
    // 显示弹窗
    return newInstance.show(vm => {
        newInstance = null// 将实例对象清空
    })
}
