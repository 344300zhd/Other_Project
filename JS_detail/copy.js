/**
 * 深拷贝：自力更生
 * 浅拷贝：拿人手短
 */

 //引用数据类型拷贝--浅拷贝：源数据发生改变，复制数据也会发生变化
 let a = [1,2,3,4]
 let b = a
 a[0] = 'a'
 console.log(b);

 //基本数据类型拷贝--深拷贝：源数据发生变化，复制数据不会发生变化
 let s = 1
 let s2 = s
 s = 2
 console.log(s2);

 //Object.assgin():浅拷贝
 let obj1 = {name:"zhd",age:22}
 let obj2 = Object.assign({},obj1)
 obj2.age = 50
 console.log(obj2);

/**
 * 引用数据类型实现深拷贝
 */
function deepClone(obj){
    let objClone = Array.isArray(obj) ? [] : {}
    //判断obj是否为对象
    if(obj && typeof obj === "object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断对象的键值是否为对象
                if(obj[key] && typeof obj[key] === "object"){
                    objClone[key] = deepClone(obj[key])
                }else{
                    objClone[key] = obj[key]
                }
            }
        }
    }
    return objClone
}

let o = [1,2,3,4]
let o1 = deepClone(o)
o[0] = 10
console.log(o1);

//2.使用JSON对象的parse和stringify实现深拷贝
function deepClone2(obj){
    let temp = JSON.stringify(obj)
    let objClone = JSON.parse(temp)
    return objClone
}
let array = [1,1,1,1]
let array2 = deepClone2(array)
array[0] = 100
console.log(array2);