//对象类型
var obj = {x:1,y:2};
var arr = [1,2,3,4,5];
function foo() {
    console.log("foo function!");
};
console.log(obj instanceof Object);//true
console.log(arr instanceof Object);//true
console.log(foo instanceof Object);//true
console.log(foo === window.foo);//true


for(var k in obj){
    console.log(k,obj[k]);
}//遍历对象

console.log(Object.keys(obj));

console.log("x" in obj);