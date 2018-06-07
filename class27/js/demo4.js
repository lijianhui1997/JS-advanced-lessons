//重点      //暂时性死区（temporal dead zone）特性
//- 只要块级作用域内存在let，它所声明的变量就“绑定”在这个区域，不再受外部影响
//- let对这个块从一开始就形成了封闭的作用域，凡是在声明之前使用该变量，就会报错
//即let的作用域

var tmp=123;
if(true){
    tmp="abc";//报错   Uncaught ReferenceError: tmp is not defined
    let tmp;
}

var tmp=123;
if(true){
	let tmp;
    tmp="abc";//这样就是合法的   在各自的作用域
console.log(tmp);//"abc"
}
console.log(tmp);//123



//let const不能重复声明
let abc;
let abc;//报错  Identifier 'abc' has already been declared


function foo1() {
    let x;
    var x;//报错在这   Identifier 'x' has already been declared
}
foo1();//报错 重复定义



typeof b;//ES5中不会报错 会输出"undefined""

typeof b//有let定义时  报错：b is not defined
let b;
