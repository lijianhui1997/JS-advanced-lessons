//字符串的解构赋值
const [a,b,c,d,e]="Hello";//相当于将'Hello'转成了["h","e","l","l","o"]后解构
console.log(a); // "H"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"

let {length : len} = 'hello';
console.log(len); // 5

//数字的解构赋值
let {toString: s1} = 123;
console.log(s1); //ƒ toString() { [native code] }

Number.prototype.toString===s1//true   在Number的原型方法里的toString添加了s1


let {toString: s2} = true;
console.log(s2); 
s2 === Boolean.prototype.toString // true