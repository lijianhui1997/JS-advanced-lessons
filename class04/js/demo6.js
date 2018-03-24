//严格模式的更多注意事项

//严格模式下禁止删除不可更改的属性变量
var str="abc";
str.length=5;
console.log(str.length);//3


function Func(){
	'use strict'
	str.length=5;
	console.log(str.length);
}
Func();//会报错


//严格模式下禁止删除未定义变量
delete m;
delete window.m;

'use stict';
delete m;
delete window.m;


//严格模式下禁止函数参数重名
function f(a,a,b){
	return a+b;
}
f(1,2,3)//非严格模式正常执行，结果为5，参数会自动覆盖留下后面的那个a

'use strict'
function f(a,a,b){
	return a+b;
}
f(1,2,3);//严格模式会报错


//严格模式下的arguments会更改
function f(a){
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);

console.log(pair[0]);//42
console.log(pair[1]);//17


function f(a){
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);

console.log(pair[0]);//42
console.log(pair[1]);//42
//非严格模式下的arguments不会更改








