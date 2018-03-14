//数据类型转换

//转换为boolean类型
console.log(Boolean(undefined));//false

console.log(Boolean(null));//false

console.log(true);//true，与输入相同 不用转化

console.log(Boolean(0));//false
console.log(Boolean(1));//true

console.log(Boolean(NaN));//false,单独记，比较特殊

console.log(Boolean(''));//false
console.log(Boolean('hello'));//true
//字符串类型空串为false，其余为true


//注意：对象总是为true
console.log(Boolean({a:1,b:2}));//true

if(new Boolean(false)){
    console.log("执行");
}//会输出执行，因为new了一个对象，实际上if的条件为true（if里面要转化为布尔型）


//转换为Number类型
console.log(Number(undefined));//NaN

console.log(Number(null));//0

console.log(Number(false));//0
console.log(Number(true));//1

console.log(123);//123 没什么好转换的，本身就是number类型

console.log(Number('123'));//123
console.log(parseInt('123'))//123
console.log(Number('123xx'));//NaN
console.log(Number(''));//0，空字符转化为0

console.log(Number({a:1,b:2}));//NaN

console.log(parseFloat("123.345xx"));//123.345


//转换为string类型
console.log(String(undefined))//'undefined'

console.log(String(null))//'null'

console.log(String(false));//'false'
console.log(String(true))//'true'

console.log(String(123))//'123'

console.log(String({a:1,b:2}));//"[object Object]"

