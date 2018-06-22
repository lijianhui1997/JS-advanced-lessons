var max=function(a,b){
    return a>b?a:b
    }
max(1,2)// 2
//ES6提供了箭头函数
//只有一行代码时，不用使用return，如果有多行或者大括号（语句块），那么要写return
var max=(a,b)=>a>b?a:b
max(1,2)//2

var max=(a,b)=>{return a>b?a:b}
max(1,2)//2

//参数只含有一个时，可以不加括号  不含参数和多个参数，必须加小括号
var nn=a=>a>3?a:"a<3"
nn(4)//4

var full=({first,last})=>last+" "+first
full({first:"ming",last:"li"})   //"li ming"


//箭头函数不用担心this绑定问题
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        var moveToX = ()=>this.x=x;
        //内部嵌套函数
        var moveToY = ()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//{x: 2, y: 2, moveTo: ƒ}

function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42


//ES6对于默认值是允许的
var sum = function(a,b=4,c=5){
    return a+b+c;
};
console.log(sum(1,2,3));//6 1+2+3
console.log(sum(1,2));//8   1+2+5
console.log(sum(1));//10    1+4+5
console.log(sum(1,0,0));//1    1+0+0



function foo(x=5){
    let x = 1;//报错
    const x = 2;//报错
    var x = 3;//正常
}
foo();


function f(x = 1,y) {
    return [x,y];
}
f();//[1,undefined]
f(2);//[2,undefined]
f(,3);//报错，无法使x用1，y用3
//一般默认值在后面   




//...Rest 相当于合并若干参数为一个数组，主要用于函数定义时，代替 arguments，组解决arguments的弊端
function f(...y){
    console.log(y);
}
f("a","b","c");//["a","b","c"]

function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
  }
  add(2, 5, 3) // 10



//...Spread 扩展操作符 相当于解数组为分散的参数，主要用于函数调用时，...Rest的逆运算
function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);
f("a");//"a",[]
f();//undefined,[]
