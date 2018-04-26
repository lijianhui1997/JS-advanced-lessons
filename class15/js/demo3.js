//js对象属性访问链：自有属性和继承属性
var proObj={
    z:3
}
var obj=Object.create(proObj);
obj.x=1;
obj.y=2
console.log(obj.x)//1
console.log(obj.y)//2
console.log(obj.z)//3
delete obj.z;
obj.z//true
delete proObj.z
obj.z//undefined
proObj.z//undefined
//首先，他会在原型链上找对应属性
