//基本类型和引用类型函数参数传递的不同
//基本类型值传递
var a=123;
function f(x){
	console.log(x);//123
	x=456;
	console.log(a,x);//123 456
}
f(a);
console.log(a);//123

//引用类型引用传递
var obj1={value:1};
function f1(x){
	x.value=3;
}
f1(obj1);
console.log(obj1);//此时obj1是{value:3}

function fn_b(arg){
    arg={value:2};
};
fn_b(obj1);
console.log(obj1);//此时obj1是{value:3}