//JS中的严格模式
//一般啊函数中this（严格模式）为undefined，（非严格模式下）为全局变量
//严格模式下全局变量需要显示声明
function foo(){
	a=12;
}
console.log(a);//2


function foo(){
	'use strict'
	a=12;
}
console.log(a);//报错