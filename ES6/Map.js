/** key为字符串 */
let map1 = new Map()
let key1 = 'name'
map1.set(key1,'zhd')
console.log("map的key字符串:",map1.get(key1));

/** key为对象 */
let map2 = new Map()
let key2 = {}
map2.set(key2,'zly')
console.log("map的key是对象:",map2.get(key2));

/** key为函数 */
let map3 = new Map()
let key3 = function(){}
map3.set(key3,'zcd')
console.log("map的key是函数:",map3.get(key3));

/** key为NaN */
let map4 = new Map()
map4.set(NaN,'非数字')
console.log("map的key是非数字:",map4.get(NaN));

/** map的键值对是有序的(FIFO:先进先出原则) */
let map5 = new Map()
map5.set(1,'数字1')
map5.set(2,'数字2')
map5.set(3,'数字3')
map5.set(4,'数字4')

for(let item of map5){
    console.log("遍历map所有值:",item);
}

for(let [key,value] of map5){
    console.log(`遍历map的所有值：${key}:${value}`);
}

for(let key of map5.keys()){
    console.log("只遍历map的键:",key);
}

for(let value of map5.values()){
    console.log("只遍历map的值：",value);
}

/**
 * forEach():遍历
 */
map5.forEach((value,key)=>{
    console.log(`使用forEach遍历:${key}:${value}`);
})

/**
 * Map对象与数组的相互转换
 */
let arrar1 = [['a','a-word'],['b','b-word'],['c','c-word']]
let map6 = new Map(arrar1)
console.log("数组转换为map:",map6);
let array2 = Array.from(map6)
console.log("map转换为数组:",array2);

/**
 * map的克隆
 */
let map7 = new Map([[1,1],[2,2],[3,3]])
let copy  = new Map(map7)
//生成的是map的新的实例，所以结果为false
console.log("map的克隆：",map7 == copy);

/**
 * 合并map：使用展开运算符
 */
let map8 = [[1,1],[2,2],[3,3]]
let map9 = [[4,4],[5,5],[6,6]]
let map10 = [...map8,...map9]
console.log("合并map:",map10)