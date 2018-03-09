//练习1:typeof instanceof
console.log(typeof 12);
console.log(typeof '123');
console.log(typeof false);
console.log(typeof null);//object
console.log(typeof undefined);
console.log(typeof {name:"Mike",age:20});//object
//instanceof用法：对象 instanceof 类型，返回true和false
var a={name:"mike",age:20};
console.log(a instanceof Object);
var b=[1,2,'i'];
console.log(b instanceof Array);
console.log(b instanceof Object);
var Person=function(){

};
var p1=new Person();
console.log(p1 instanceof Person);
console.log(p1 instanceof Object);//函数属于引用类型
