//ES6对于内置对象的扩展

//ES6对于string的扩展
//字符串的遍历接口（for...of）
for (let codePoint of 'foo') {
    console.log(codePoint)
}
// "f"
// "o"
// "o"


//ES6提供的新的查找方法
var a="hello world"
a.startsWith("hello")//true
a.endsWith("!")//true
a.includes("lo")//true
a.repeat(2)

//用正则表达式匹配    实现startswith
var regExp = /^Hello/gi;  //^ 以...开始
"Hello world".match(regExp)//["Hello"]



//ES6对于正则的扩展


//y 修饰符的作用与 g 修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。
//不同之处在于，g 修饰符只要剩余位置中存在匹配就可，而 y 修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的含义。
//粘连  y
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
r1.exec(s); // ["aaa"]
r2.exec(s); // ["aaa"]
r1.exec(s); // ["aa"]
r2.exec(s); // null

var s = 'aaa_aa_a';
var r1 = /_a+/g;
var r2 = /_a+/y;
console.log(r1.exec(s)); // ["_aa", index: 3, input: "aaa_aa_a", groups: undefined]
console.log(r2.exec(s)); //null
console.log(r1.exec(s)); //["_a", index: 6, input: "aaa_aa_a", groups: undefined]
console.log(r2.exec(s)); //null



var r = /hello\d/y;
r.sticky // true

// ES5的source属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6的flags属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'
/abc/gi.flags
//"gi"
/abc/gm.flags
//"gm"
/abc/mg.flags
//"gm"


//ES6对于Number的新的静态方法
//ES6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。
//静态方法：直接用构造函数使用

//Number.isFinite();//用来检查一个数值是否为有限的（finite）。
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
//NUmber.isNaN()//判断是否为NaN
window.isNaN===isNaN//true  全局
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN({});        // true

isNaN(true);      // false
isNaN(null);      // false
isNaN(37);        // false
isNaN("37");      // false: 可以被转换成数值37



///////Math的扩展
//Math.trunc方法用于去除一个数的小数部分，返回整数部分。
Math.trunc(4.1); // 4
Math.trunc(4.9); // 4
Math.trunc(-4.1); // -4
Math.trunc(-4.9); // -4
Math.trunc(-0.1234); // -0


//Math.sign方法用来判断一个数到底是正数、负数、还是零
Math.sign(-5); // -1
Math.sign(5); // +1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign('foo'); // NaN
Math.sign(); // NaN
