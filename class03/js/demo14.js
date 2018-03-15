//关于字符串的方法

//比较
console.log('A'>'a')//false
console.log("B".localeCompare("A"))//1
console.log("A".localeCompare("A"))//0
console.log("A".localeCompare("B"))//-1
//为什么会出现这个情况？与字符排序有关
//如果前者大于后者，则返回大于0的值，相等返回0，前者小于后者，返回小于0的值

//
var a='abc';
var b='def';
var c=a+b;
console.log(c)//'abcdef'

//字符串常用方法
//slice：切片
var str='abcdef';
console.log(str.slice(2));//cdef
console.log(str.slice(2,5));//cde
console.log(str.slice(-2));//ef
console.log(str.slice(2,-2));//cd

//split:分开字符串，返回数组
console.log(str.split('c'));// ["ab", "def"]
console.log(str.split('c',1));//["ab"]
console.log(str.split('c',2));// ["ab", "def"]

//charAt:字符串对应下标的值
console.log(str.charAt(2));//"c"
console.log(str.charCodeAt(3));//100

//indexOf:看字符串中是否含有要找字符,有则返回下标，没有则返回-1
console.log(str.indexOf('d',1));//3
console.log(str.indexOf('c',3));//-1

//substr:截取字符串,第二个参数是几个字符串；substring：第二个参数为截取位置的末尾下标
console.log(str.substr(2,3));//"cde"
console.log(str.substring(2,3));//"c"

//concat：拼接字符串
console.log(str.concat('gh'))//"abcdefgh"

//toUpperCase,toLowerCase:转换成对应的大小写
console.log(str.toUpperCase)//"ABCDEF"