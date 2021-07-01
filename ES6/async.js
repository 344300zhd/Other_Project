/**
 * async简单使用
 */
//可以用来封装函数
async function getInfo(){
    return "info"
}

console.log(getInfo()); //返回一个Promise对象
getInfo().then((val)=>{
    console.log(val);
})

/**
 * 使用await:等待异步函数执行完毕
 */
function eat(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("我在吃饭，你要等一会");
            resolve() //继续向下执行
        },2000)
    })
}

async function walk(){
    await eat()
    console.log("我吃完了，可以散步了");
}

walk()

/**
 * reject捕获
 */
function wrong(){
    return new Promise((resolve,reject)=>{
        console.log("发生了一个错误");
        reject("数组溢出") //这里的信息会被catch捕获到
    })
}

wrong().catch(err=>{
    console.log("错误类型:",err);
})