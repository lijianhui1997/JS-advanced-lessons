// ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值
//- 这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值

//数组的解构赋值
let [x,y,z]=[1,3];
console.log(x,y,z)//2 1 3 undefined

var [a]=[];
var [b,c]=[1];
console.log(a,b,c)// undefined 1 undefined


var [a,b]=[1,2];//完成两个变量的定义
var a=1,b=2;//这两句话等效



//完成两个变量的交换
var [a,b]=[1,2];
console.log(a,b);//1 2
[a,b]=[b,a];
console.log(a,b);//2 1



//解构赋值中可以存在默认值
var [m]=[];
console.log(m);//undefined
var [n=3]=[];
console.log(n);//3

[x3,y3="b"]=["a"];
[x4,y4="b"]=["a",undefined];
console.log(x3,y3);//a b
console.log(x4,y4)//a b

[x3,y3="b"]=["a"];
[x4,y4="b"]=["a",null];
console.log(x3,y3);//a b
console.log(x4,y4)//a null
//如果后面给的值不是===undefined，那么输出后面的值，如果是===undefined，那么输出默认值
var [x1=1]=[undefined];
var [x2=1]=[null];
console.log(x1,x2);//1 null




//如果给出了值能匹配上，不会使用默认值
function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);// 1



let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);//false
//a和b中元素一致，但是是两个数组，指向不同内存空间，不相等



//提取b中奇数项的数字作为a中元素
let a = [];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2],]=b
console.log(a);//(3) [1, 3, 5]




//对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);//aaa bbb
//相当于下面
var { foo1:foo1, bar1:bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);//aaa bbb

var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//顺序不同，没关系
console.log(foo2,bar2);// ccc ddd


var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); //"World"

var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(p);//报错  p is not defined

var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: p } = obj2;
console.log(p);//(2) ["Hello", {…}]

//对象解构赋值也可以使用默认值
var {x2 = 3} = {};
console.log(x2); // 3

var {x3, y3 = 5} = {x3: 1};
console.log(x3); // 1
console.log(y3); // 5

var {x5:y5 = 3} = {x5: 5};
console.log(y5); // 5
var { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"