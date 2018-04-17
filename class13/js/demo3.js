//原型
var a={
    x:12
}
undefined
a.__proto__===Object.prototype//true

a.__proto__.__proto__===null//true

//创建对象
//通过字面量直接创建对象
var obj={
    name:'lili',
    age:10,
    p:function(){
        console.log(this.name);//“lili”
    }
}
//通过Object的create静态方法创建对象
var subObj=Object.create(obj);
obj.num=20;//赋值过程

//通过构造函数创建对象
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHi=function(){
    console.log("Hi,I'm"+this.name);
}
var p=new Person('lilili',20);
p.sayHi();//"Hi,I'mlilili"


//对象属性的增删改查
 //直接添加属性
 var obj1={};
 obj1.x=2//添加了一个属性x值为2
//通过.可以访问属性
obj1.x;
//通过[]访问
obj1['x']
//删除属性
delete obj1.x;


//[]的用途
var obj = {
    "username": "xyz",
    "age": 11,
    "sex": "nan"
};
var str = "";
for (var key in obj) {
   str += obj[key];  //xyzxyzxyz
//     str += obj.key;  //undefinedundefinedundefined
//     str += obj["username"];//xyzxyzxyz
//     str += obj.username;//xyzxyzxyz
}
console.log(str);//"xyz11nan"

var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}//9              obj3 {i: 9}

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}//9       obj4 {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}


