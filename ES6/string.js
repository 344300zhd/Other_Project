/**
 * 识别子串
 */

//ES6之前使用的方法
let s = "never say never"
console.log("indexof():",s.indexOf("say"),s.indexOf("but"));

//ES6识别子串
console.log(`是否存在say:${s.includes("say")}`);
console.log(`头部存在ne:${s.startsWith("ne")}`);
console.log(`尾部存在ver:${s.endsWith("never")}`);

/**
 * 字符串重复
 */
console.log(`重复字串两次:${s.repeat(2)}`);

/**
 * 字符串不全
 */
//系统要求用户输入6位的数字字符串，但这样可能会增加用户的操作负担，此时可以使用字符串补全
let s2 = '112' //用户输入的数字字符串
s2 = s2.padStart(6,'0')
console.log("转化用户的数字:",s2);


/**
 * 字符串模板实际应用
 */

 //1.过滤HTML字符串，防止用户输入恶意内容
 function check(input,...value){
     let result = ""
     for(let i in input){
         if(value[i]){
             result += String(value[i]).replace(/&/g,"*").replace(/</g,"*").replace(/>/,"*")
         }
     }
     return result
 }
let name ="zhd"
console.log(check`<html>play&&${name}<body>`)