//添加的Object的方法


var obj={x:1,y:2}
var obj1={z:3,w:4};
Object.setPrototypeOf(obj1,obj);
console.log(obj1.x,obj1.y,obj1.z,obj1.w)//1 2 3 4
Object.keys(obj1)//["z", "w"]   只显示了两个属性，但是原型上有四个