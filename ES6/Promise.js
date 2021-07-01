/**
 * 异步编程：Promise
 */
const p1 = new Promise(function(resolve,reject){
    resolve("step 1")
    resolve("step 2")
})
const p2 = new Promise(function(resolve,reject){
    resolve("step 3")
    reject("fail")
})
p1.then(function(value){
    console.log(value);
})
p2.then(function(value){
    console.log(value);
})

/**
 * 异步编程：Generator
 */

//next()不传参
function* controll(){
    console.log("one");
    yield '1'
    console.log("two");
    yield '2'
    console.log("three");
    return '3'
}
let control = controll() //这一步是必须的，不能直接使用函数名来调用next()方法
console.log(control.next());
console.log(control.next());
console.log(control.next());
console.log(control.next());

//next():传参
function* fun2(){
    console.log("开始购物");
    let buy = yield '20分钟'
    console.log("购物时间:",buy);
    let money = yield '5分钟'
    console.log("付费时间:",money);
    let s = `此次购物耗费：${buy}分钟，花费${money}元`
    return s
}

let people = fun2()
console.log(people.next());
console.log(people.next(20));
console.log(people.next(5));


