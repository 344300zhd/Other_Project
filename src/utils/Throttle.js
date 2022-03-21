 /**
  * @description 函数节流:指定时间间隔内只会执行一次任务。
  * @param {Function} fn:需要节流的函数
  * @param {Number} wait:延时时间，默认500ms
  * @return 函数
  */
 export function throttle(fn,wait = 500){
   // 函数可执行标志:初始函数可执行
   let flag = true
   return function(){
     let _this = this,args = arguments
       // 如果函数不可执行，直接中断
       if(!flag) return
       // 防止函数再次执行
       flag = false
       setTimeout(function(){
           fn.apply(_this,args)
           // 执行完毕,函数重新变为可执行
           flag = true
       },wait)
   }
 }