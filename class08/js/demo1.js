//函数对象
//变量是函数时，用typeof返回function，而不是object
function foo(){}
console.log(foo);
console.log(typeof foo)//function
console.log(foo instanceof Object)//true
console.log(foo instanceof Function)//true
console.log(foo===window.foo)//true


//构造函数的对象，即内置的函数对象（Array Function Date Error）
//非内置函数对象（Math JSON　Error）
console.log(typeof Function);//Function
console.log(typeof Array);//Function
console.log(typeof Date);//Function
console.log(typeof Error);//Function
console.log(typeof Math);//Object
console.log(typeof JSON);//Object

console.log(typeof new Function());// function
console.log(typeof new new Function());//object
console.log(typeof new Array()); //object
console.log(typeof new Date());	//object

console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true