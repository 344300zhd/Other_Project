let reg = /^[a-zA-z][a-zA-z0-9_]{9,20}$/
let s = 'aa12fefr__34567890'
console.log("匹配正则表达式：",reg.test(s));

// 手机号码检验
function checkphone(number){
    let reg = /^1(3|4|5|7|8)\d{9}$/
    if(reg.test(number) == false){
        console.log(number + "手机号码格式错误");
    }else{
        console.log(number + "手机号码格式正确");
    }
}
let phone1 = '13030599572'
let phone2 = '23211224567'
checkphone(phone1)
checkphone(phone2)

// 手动实现string.trim()
function trim(s){
    return s.replace(/(^\s*)|(\s*$)/g,"")
}
console.log("  abcd  ");
console.log(trim("手动实现trim()方法:" + trim("  abcd  ")));
console.log("字符串trim()方法:"+"  abcd  ".trim());