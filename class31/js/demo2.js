//ES6提供新的数据结构Set
var a1=new Set([1,2,3,4,3,2]);
console.log(a1)//[1,2,3,4]

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
    console.log(i);
}// 2 3 5 4
//set自动去掉重复项

var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);
// [1, 2, 3, 4]

var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5


var set = new Set();
set.add({});
console.log(set.size); // 1
set.add({});
console.log(set.size); // 2

//set的add
var properties = new Set();
properties.add('width');
properties.add('height');
console.log(properties.size);//2
if (properties.has('width')&&properties.has('height')) {
    console.log("do something!");//do something!
}


//keys方法、values方法、entries方法
var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());//object
console.log(typeof set.values());//object
console.log(typeof set.entries());//object


for (var item of set.keys()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.values()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]


//ES6新增的map数据结构
var m = new Map();
var o = {p: 'Hello World'};
m.set(o, 'content');
m.get(o); // "content"
m.has(o); // true
m.delete(o); // true
m.has(o); // false

//作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
var o = {};
var map = new Map([
    ['name', '张三'],
    [o, 'Author']
]);
map.size; // 2
map.has('name'); // true
map.get('name'); // "张三"
map.has(o); // true
map.get(o); // "Author"


let map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
map.get(1); // "bbb"


new Map().get('asfddfsasadf');
// undefined

var map = new Map();
map.set(['a'], 555);
map.get(['a']); // undefined

var map = new Map();
map.set('a', 555);
map.get('a'); //555


var map = new Map();
var k1 = ['a'];
var k2 = ['a'];
map.set(k1, 111);
map.set(k2, 222);
map.get(k1); // 111
map.get(k2); // 222


let map = new Map();
map.set(NaN, 123);
map.get(NaN); // 123
map.set(-0, 123);
map.get(+0); // 123


let map = new Map();
map.set('foo', true);
map.set('bar', false);
map.size // 2


var m = new Map();
m.set("edition", 6); // 键是字符串
m.set(262, "standard"); // 键是数值
m.set(undefined, "nah"); // 键是undefined


// set方法返回的是Map本身，因此可以采用链式写法
let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
// get方法读取key对应的键值，如果找不到key，返回undefined。
var m = new Map();
var hello = function() {console.log("hello");};
m.set(hello, "Hello ES6!"); // 键是函数
m.get(hello); // Hello ES6!


//has方法返回一个布尔值，表示某个键是否在Map数据结构中。
var m = new Map();
m.set("edition", 6);
m.set(262, "standard");
m.set(undefined, "nah");
m.has("edition"); // true
m.has("years"); // false
m.has(262); // true
m.has(undefined); // true