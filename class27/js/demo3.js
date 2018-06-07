//let变量和const常量的特性
//let在定义变量之前不能使用，而用var则可以使用
//即let   const 不提升，var 会进行变量提升
console.log(a);//报错：  a is not defined
let a=2;
console.log(a);//2

console.log(a);//undefined
var a=2;
console.log(a);//2



var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();// undefined   
//ES5 中变量提升，没有块作用域，所以if 里面的声明提升到console.log之前，输出undefined