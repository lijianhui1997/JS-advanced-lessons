//ES6用const来表明常量，也经常来声明不变的函数
const PI=3.1415926;
console.log(PI);//3.1415926
PI=3;//再给常量赋值，会报错，
//只要加了const ，意味着这个值是常量，不能改变

//一旦定义一个常量，必须立即初始化，否则报错
const a;//报错
const a=1;//没问题


//const作用域同let
if(true){
    const MAX=5;
    console.log(MAX);//5
    }
console.log(MAX)//报错：MAX is not defined    此时MAX的作用域是函数作用域


//const也可以用来定义不改变的函数
const fee=function(){
	//console.log(window);
}


//const 指向的对象引用不可改变，但其属性或元素（如果是数组对象的话）是可变的
const a = [];
a.push(123,234);//可以
//此时   a [123, 234]




const a = [];
a.push(123,234);
a.length = 1;//可以  此时因为重新设置了长度，所以新数组为  [123]
a = "str";//不可以，报错  Assignment to constant variable.
//因为a是const，其元素或属性可改，但其引用不能修改类似于const指针  这里a就是引用
//回顾 常指针,指向常量的指针
