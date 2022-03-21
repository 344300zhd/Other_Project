/**
 * @description 函数防抖：任务频繁触发时，只有任务触发的间隔超过指定间隔，任务才会执行
 * @param {Function} fn：需要防抖的函数 
 * @param {Number} wait：延迟时间，默认500ms
 * @param {Boolean} immediately：是否立即执行，默认true
 * @return 函数
 */
export function debounce(fn,wait = 500,immediately = true) {
    let timer = null
    return function(){
        const _this = this,args = arguments
        // 获取异步任务返回值
        return new Promise((resolve,reject) => {
          timer && clearTimeout(timer)
          // 立即执行
          if(immediately){
            const flag = !timer
            timer= setTimeout(()=>{
              timer = null
            },wait)
            flag && resolve(fn.apply(_this,args))
          }else{
            // 非立即执行
            timer = setTimeout(()=>{
              resolve(fn.apply(_this,args))
            },wait)
          }
        })
    }
}


