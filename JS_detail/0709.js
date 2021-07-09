// setTimeout("内存泄漏",1000)  这样会造成内存泄漏

//eval():计算某个字符串，并执行其中的js代码
let s = "'  dd  '.trim()"
console.log(eval(s));

/**
 * 问题: 实现一个函数，使得add(2,5)和add(2)(5)的结果都为7
 * 关键：
 *   1.arguments:方法的属性，形参
 */
const fun1 = function (x,y){
    if(arguments.length == 2){
        return x + y 
    }else if(arguments.length == 1){
        return function(y){ return x+y}
    }
}
console.log(fun1(2,5));
console.log(fun1(2)(5));


/**
 * 逗号运算符:优先级最低
 * 关键:逗号运算符会依次执行逗号左边和右边的操作，但是它只会返回最右边的值
 */
let i = 0, j = 1, k = 2
console.log(i++,j++,k++); // 3
console.log(i); //1
console.log(j); //2
console.log(k); // 3

/**
 * 问题:输出结果
 * 关键：匿名函数归window所有，this指向全局作用域
 */
let out = 25
let inner = {
    out : 20,
    func: function(){
        let out = 30
        return this.out
    }
}
/**
 * 立即执行函数：在函数后面添加一个括号，可以让函数在定义之后立即执行
 */
// 逗号运算符返回inner.func，它是匿名函数，属于window，所以为25
console.log((inner.func,inner.func)()); //25
//执行inner.func,因为inner.func里面有out变量，所以输出20
console.log(inner.func());//20
//执行inner.func
console.log((inner.func)());//20
// 等号运算符，返回inner.func，它是匿名函数，所以为全局作用域
console.log((inner.func = inner.func)());


/**
 * 问题:输出的结果
 * 关键：
 *   1.所有的全局变量都是window的属性
 *   2.用var声明变量是存在变量提升的
 * 变形：
 *   由变量提升可以将下面的表达式变形为：
 *     var a
 *     if(!('a' in window)){
 *        a = 1
 *     }
 *     console.log(a)
 * 解答:所以很明显，由于a一定是存在的，所以输出的值一定是undefined
 */
// if(!('a' in window)){
//     var a = 1
// }
// console.log(a);

/**
 * 关键：
 *   1.函数声明会覆盖变量声明，但是不会覆盖变量赋值
 */
// let a
// function a() {}
// let b = 1 
// function b(){}
// console.log( typeof a)
// console.log(b)

console.log(typeof null)
console.log(typeof NaN)

let x = 1
function Test(){
    this.x = 2
}
let test = new Test()
console.log(test.x)

/**
 * 问题:从'abcdefg'里面截取 'efg'
 * 关键: 
 *   1.substr(index):从index开始截取，包括index
 *   2.slice(index):从index开始截取，包括index
 */
let content = 'abcdefg'
let subContent = content.substr(4)
console.log(subContent,content.slice(4))


/**
 * 问题：统计一个字符串中出现次数最多的字数
 * 关键:
 *   1.将字符串转换成数组:split("")
 */
let s2 = 'abbdskkksdnbbbbbb'
let sArray = s2.split("")
let json = {}
for(let i = 0; i < sArray.length; i++){
    if(json[sArray[i]]){
        json[sArray[i]] += 1
    }else{
        json[sArray[i]] = 1
    }
}

console.log(json)
let num = 0
let word = ""
for(let i in json){
    if(json[i]>num){
        num = json[i]
        word = i
    }
}
console.log(`${word}:${num}`)

let obj = {
    a:1,
    b:2
}
//可以使用下面的方式获取对象的值，类似于数组
console.log(obj['a'])

/**
 * 问题：编写一个方法，求一个字符串的字节长度
 * 关键：
 *   1.一个英文字符占一个字节
 *   2.一个中文字符占两个字节
 *   3.str.charCodeAt(i)>255(第i个索引处的字符) 为汉字
 * 思路：首先获取字符的长度，这个时候我们把所有的字符都当做英文字符，
 *   然后再去判断每个字符是否为中文字符，是的话长度再加一即可。
 */
function getByte(str){
    let length = str.length
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)>255){
            length++
        }
    }
    return length
}
console.log(getByte("sss你好，,")+"个byte")

/**
 * 问题：格式化数组，从后往前取，每三位添加一个逗号
 */
function formatNumber(number){
    let num = number.toString() 
    let result = ''
    console.log(num.length)
    while(num.length > 3){
        result = ',' + num.slice(-3) + result
        num = num.slice(0,num.length-3)
    }
    // 如果切割完最后还剩下内容，将内容拼接起来
    if(num){
        result = num + result
    }
    return result
}
console.log(formatNumber(56485848))

/**
 * 问题：合并数组
 * 关键点:
 *   1.concat():创建一个新的数组，内容为其他数组合并。缺点是不适合合并大的数组，会消耗很多的内存;
 *   2.array1.push(array2):将array2添加到array1内，不会创建新的数组，可以减少内存的消耗;
 */
let arr1 = [1,2,3]
let arr2 = [4,5,6]
// 方法2
arr1.push(...arr2)
// 方法1
let arrall = arr1.concat(arr2)
console.log(arrall,arr1 == arrall)
console.log(arr1)

/**
 * 问题：打乱数组元素的顺序
 * 关键点:
 *   1.sort():升序
 *   2.reverse():降序
 */  

 let arr5 = [1,2,3,4]
 /**
  * 比较函数：
  *   1.(a,b)=>{return a-b} ：升序
  *   2.(a,b)=>{return b-a} : 降序
  *   3.()=>{return Math.random()-0.5}:单纯打乱顺序，所以可能为升序也可能为降序
  */
 console.log(arr5.sort(()=>{return Math.random()-0.5}))

 /**
  * 关键
  *   1.原型对象：prototype,函数才有的属性
  *   2.原型链:_proto_，对象才有的属性
  */

  let obj3 = {}
  console.log(obj3.prototype)
  console.log(obj3.__proto__)

  let fun3 = function(){}
  console.log(fun3.prototype)
  console.log(fun3.__proto__)


  // 字面量方式构造对象
  let obj4 = {}
  console.log(obj4.__proto__ == obj4.constructor.prototype)

  //构造器方式
  let A = function(){}
  let a = new A()
  console.log(a.__proto__ == a.constructor.prototype)

  //Object.create()
  let obj5 = {a:2}
  let obj6 = Object.create(obj5)
  console.log(obj6.__proto__ == obj6.constructor.prototype)

  /**
   * 问题:闭包
   * 关键点：
   *   1.读取函数内部的变量
   *   2.让变量始终保存在内存中
   */

   function f1(){
       let  a = 3
       function f2(){
           return a
       }
       return f2()
   }
   console.log(f1())

   let aa1 = {a:1}
   let aa2 = [1,2,3]
   console.log(typeof aa1,typeof aa2)

   /**
    * 翻转字符串
    */
   let sss = "hello word"
   let array = [...sss].reverse().join("    ")
   console.log(array)