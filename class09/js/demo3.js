//声明前置和作用域的关系
//全局作用域和函数作用域
//全局作用域
if(true){
    var i = 0;
}
//相当于
var i;
if(true){
    i = 0;
}



//函数作用域
function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错
//相当于
function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错