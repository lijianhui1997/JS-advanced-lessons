//基本类型和引用类型的区别，赋值方式不同
//基本类型为值赋值
var a=1;
var b=a;
console.log(a,b)
b=2;
console.log(a,b)
//引用类型为引用赋值
var a={v:'a'};
var b=a;
b.v='c';
console.log(a,b);
b={v:'d'};
console.log(a,b);

//课上例子
var a=123;
function foo0(x){
	x=345;
}
foo0(a);
console.log(a);//123


var a={y:123};
function foo1(x){
	x=345;
}
foo1(a);
console.log(a.y);//123


var a ={y:123};
function foo3(x){
	x.y = 345;
	x = {y:456};
}
foo3(a);
console.log(a.y);//345


var a ={y:123};
function foo4(x){
    x = {y:456};	
    x.y = 345;	
}
foo4(a);
console.log(a.y);//123