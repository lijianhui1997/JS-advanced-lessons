//对数组的扩展
var arraylike={
	'0':'a',
    '1':'b',
	'2':'c'}
console.log(arraylike[0])  // a
//默认转化
//而ES6提供了新的静态方法  Array.from(); 可将类数组对象或可遍历的对象（包括Map）转换为数组


let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES6的写法
let arr2 = Array.from(arrayLike); 
arr2//["a", "b", "c"]


Array.from('hello');
// ['h', 'e', 'l', 'l', 'o']

//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
Array.from([1, 2, 3], function(x){return x * x} );//[1, 4, 9]


//静态方法   Array.of( )  可将一组值，转换为数组，弥补数组构造函数Array()的不足
//静态方法必须掌握
Array.of(3, 11, 8); // [3,11,8]
Array.of(3); // [3]
Array.of(3).length; // 1

Array.of(); // []
Array.of(undefined); // [undefined]
Array.of(1); // [1]
Array.of(1, 2); // [1, 2]
//Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组

Array.of({'0':"a",'1':"b",'2':"c"})
//[{…}]      {0: "a", 1: "b", 2: "c"}length:1 __proto__:Array(0)


//arguments是典型的对象   只是类似于一个数组


//Array新增的原型方法
var arr=new Array("5","6","7");
arr.includes("6");//true

var arr1=new Array(1,2,3,4,5)
arr1.includes(3)//true
arr1.fill(6)//[6, 6, 6, 6, 6]      //fill方法使用给定值，填充一个数组。
arr1.find(function(n){return n<3})//1    从数组中寻找第一个符合条件的数
arr1.findIndex(function(n){return n<3})//0
//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。


//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['x', 'y', 'z'].fill(7, 1, 2);
// ['x', 7, 'z']


// ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。
// 它们都返回一个遍历器对象，可以用for...of循环进行遍历。
// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'
for (let [index, elem] of ['a', 'b'].entries()) { //[index,elem] 解构赋值
    console.log(index, elem);
}
// 0 "a"
// 1 "b"


//如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历
let letter = ['a', 'b', 'c'];  
let entries = letter.entries();  
console.log(entries.next().value); // [0, 'a']  
console.log(entries.next().value); // [1, 'b']  
console.log(entries.next().value); // [2, 'c']  