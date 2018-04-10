//变量的作用域
var name="Jack";
function ec(){
	console.log(name);
}
function foo(){
	var name="Bill";
	ec();
}
foo();//"Jack"
//因为jack在全局作用域，属于全局变量，而ec函数是全局函数，对应Jack


//全局变量和局部变量
//1
var x = "outside f1";
var f1 = function () {
    console.log(x);
};
f1();
console.log(x);
//outside f1
//outside f1


var x = "outside f1";
var f1 = function () {
    var x = "inside f1";
    console.log(x);
};
f1();
console.log(x);
//inside f1
//outside f1

var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();//局部
console.log(y);//报错

var f2 = function () {
	y = "全局";
    console.log(y);
};
f2();//全局
console.log(y);//全局

//分析：第一种情况就是局部变量，在全局域没有对应得y,所以第二行报错
//第二种情况没有写var ，实质上是全局变量，所以两个都可以输出全局

//单独
if(true){
    var z = 23;
}
console.log(z);//23


//单独
if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错