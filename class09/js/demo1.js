//JS预解析
//将变量和函数声明在当前作用域内提升
//变量提升例如
console.log(a);//undefined 
var a=1;
console.log(a);//1

//相当于
var a;
console.log(a);
a=1;
console.log(a);


//函数提升例如
f();
function f(){
	console.log("F");
}
function f(){
	console.log("f");
}//f
//等价于
function f(){
	console.log("F");
}
function f(){
	console.log("f");
}
f();


console.log(a,b);//1 undefined
var b = 23;
console.log(a,b);//1 23
var a = b;
console.log(a,b);//23 23


console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//{x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//{x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);//{x:25} {x:25}

//同时有var function的情况
foo();
var foo = function(){
    console.log("foo");
};//报错


//变量名和函数名一样的情况
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();
//AA_1
//AA_2

//相当于
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();