//基本类型和引用类型判等时的不同
//基本类型
var a=100;
var b=100;
console.log(a==b);//true
console.log(a===b);//true

var a2=new Number(200);
var b2=new Number(200);
console.log(a2==b2);//false
console.log(a2===b2);//false

var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);//true
console.log(a3 === b3);//true

b3 = new Number(200);
console.log(a3 === b3);//false

var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);//true 是
console.log(a4 === b4);//false

var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);//false，a5,b5是分配在堆区的，引用比较
console.log(a5.x === a5.x);//true，因为x其实是在栈区的，值比较