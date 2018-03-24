//for in
//1.遍历对象
var obj={x:1,y:2,z:"3"};
for(var k in obj){
	console.log(k,obj[k]);
}
//x 1
//y 2
//z '3'
//为什么不是obj.k?
//   javascript的数组是一种特殊的对象，因此for/in循环可以像枚举对象属性一样枚举数组下标。
//可以把一个对象的所有属性名复制到一个数组中,所以用下标形式


var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;
obj2.z = 3;
for(var k in obj2){
    console.log(k,obj2[k]);
}
//y 2
//z 3
//x 1

//2.遍历数组
var arr = [1,2,3];
for(var i in arr){
    console.log(i,arr[i]);
}
//0 1
//1 2
//2 3