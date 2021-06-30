/**
 * Set唯一性
 */
let set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)
set1.add(4)
console.log("set内的值不重复:",set1);

/**
 * Set对象的妙用
 */
//数组去重
let array = [1,2,3,4,4,5,5]
let set2 = new Set(array)
//此处使用展开运算符将Set对象转化为数组，，如果直接输出则为一个Set对象
//就达不到数组去重的目的
console.log("数组去重:",[...set2]);

//数组并集
let array1 = [1,2,3]
let array2 = [1,3,4]
let set3 = new Set([...array1,...array2])
console.log("数组并集:",set3);

//数组交集
let set4 = new Set([...array1].filter(x=>new Set(array2).has(x)))
console.log("数组交集:",set4)

//数组差集
let set5 = new Set([...array1].filter(x=>!new Set(array2).has(x)))
console.log("数组差集:",set5);