//undefined的情况
var a;
console.log(a);//此时定义了变量，但是没有具体值

function foo(){
	console.log(5);//5
}//此时没有返回值
var a=foo();
console.log(a);//undefined
//没有返回值的函数，实质上就是undefined

console.log(typeof null);//object