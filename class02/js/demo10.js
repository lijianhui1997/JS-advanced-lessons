//包装对象
//在基本类型中，如number，string， boolean，其实都有对应的临时包装对象，
//但是这不是真正的对象，临时对象用完就释放
var a = 123;
var b1 = new Number(a);

console.log(a == b1);//true,b1隐式转换为基本类型
console.log(a === b1);//false，类型本身就不同，所以为false

var b=false;
console.log(b.toString());//"false"

//基本类型和引用类型的对象区别
//基本类型
var str = "abcdef";
console.log(str.length);//6
str.length = 1;//但是临时包装对象并不会更改str原本的属性，临时对象用完就释放了

//引用类型
var arr = [1,2,3,4，5，6];
console.log(arr.length);//6
arr.length = 2;
console.log(arr.length,arr);//2 [1,2]

