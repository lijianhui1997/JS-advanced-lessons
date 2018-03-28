//函数对象的属性及方法
var x=45;
undefined
var obj={
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);
        }
        foo.bind(this)();//23
        foo();//45
    }
};
obj.test();

//length和arguments：length代表形参的个数，arguments代表实参个数
//length
function f(x,y,z){}
console.log(f.length);//3

//arguments
var foo = function (a,b){
    console.log(arguments);
    console.log(arguments === test.arguments);

    console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
};
foo(1,2,3,4);//?


//caller 获取调用当前函数的函数
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
test();//test is called from the toppest level


var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();//null
obj.foo2();//f abc(){this.foo1();}


//callee 返回正在被执行的Function对象
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
};
console.log(func(4));//24 递归乘法
//可以用  return n * arguments.callee(n - 1); 代替

(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));//匿名函数也可以运用


//prototype 对象的原型，每个构造函数都有一个prototype属性，指向另一个对象
var o={};
o.__proto__===Object.prototype;//返回true
Object.__proto__===Function.prototype;//true

function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true