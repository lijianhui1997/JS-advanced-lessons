function f1(){
    var x=1;
    function f2(){
        return x++;
    }
    return f2();
}
var f3=f1();
console.log(f3);//1
console.log(f3);//1

function f1(){
    var x=1;
    function f2(){
        return x++;
    }
    return f2;
}
var f3=f1();
console.log(f3());//1
console.log(f3());//2




//闭包：函数及其相关引用环境组合而成的实体
function createInc(startVaule){
    return function(step){
        startVaule+=step;
        return startVaule;
    }
}
var inc=createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
inc=createInc(5);
console.log(inc(1));//6


function foo(){
    var i=0;
    function bar(){
        console.log(++i);
    }
    return bar;
}
var a=foo();
var b=foo();
a();//1
a();//2
b();//1