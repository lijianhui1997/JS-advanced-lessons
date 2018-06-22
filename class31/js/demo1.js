//ES6中引入新的数据结构Symbol
//Symbol属于基本数据类型，不是对象，不能用new
let s=Symbol();
typeof s//"symbol"
var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1,s2)//Symbol(foo) Symbol(bar)
var s3=Symbol('bar')
console.log(s2,s3)//Symbol(bar) Symbol(bar)

//Symbol的唯一性,表示独一无二的值
s1 instanceof Object//false
s2===s3//false
s2==s3//false
var sym=Symbol('My school');
String(sym)
"Symbol(My school)"


var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1); // Symbol(foo)
console.log(s2); // Symbol(bar)
console.log(s1.toString()); // "Symbol(foo)"
console.log(s2.toString()); // "Symbol(bar)"


//参数相同的Symbol函数的返回值是不相等的
// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false
// 有参数的情况
var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 // false

//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
console.log(sym)//Symbol(abc)

//Symbol值不能与其他类型的值进行运算，会报错。
var sym = Symbol('My symbol');
//"your symbol is " + sym;//报错
//但是，Symbol值可以显式转为字符串。
var sym = Symbol('My symbol');
String(sym); // 'Symbol(My symbol)'
sym.toString(); // 'Symbol(My symbol)'


//作为属性的Symbol
var mySymbol=Symbol();
var a={};
a[mySymbol] = 'Hello!';//"Hello!"

var mySymbol=Symbol();
var a = {
    [mySymbol]: 'Hello!'
};
a[mySymbol]//"Hello!"

var mySymbol=Symbol()
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });//其余属性都为默认值false
a[mySymbol] // "Hello!"



//作为属性名的Symbol
// 区分使用点操作符和中括号操作符时，访问对象属性的不同，Symbol需使用[]，而不是点
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';//a的属性名实际上是一个字符串
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);//123 undefined
console.log(obj[myS2],obj["xx"]);//456 456
console.log(obj["myS1"]);//undefined
console.log(obj["myS2"]);//undefined


let s = Symbol();
let obj = {
    [s]: function (arg) {console.log("xx");}
};
obj[s](123);//xx




//遍历实例一
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);// [Symbol(a), Symbol(b)]

//遍历实例二
var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i); // 无输出
}
Object.getOwnPropertyNames(obj);// []
Object.getOwnPropertySymbols(obj);// [Symbol(foo)]

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true



