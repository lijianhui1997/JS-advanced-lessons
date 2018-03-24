//不同类型的表达式
var obj={x:2};
var arr=[1,2];
var foo=function(){
	console.log("函数定义表达式");
}
obj.x//属性访问表达式
foo()//函数调用表达式
1+2；//算术运算表达式
1>2；//关系运算表达式
0&&1；//逻辑运算表达式



//语句
2>3//表达式语句

//if else 条件语句
if(a>b){
	console.log("a>b");
}
else{
	console.log("b>a");
}



function foo(){
	var a=b=3;
}
//实际上是，var a=3;b=3;  b相当于一个全局变量,a是局部变量
foo();
console.log("b:",b);//b:3
console.log("a:",a);//报错，因为a是局部变量，在全局区并没有定义


//循环语句
var arr=[1,2,3]
for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);//1 2 3
};
console.log(i);//3