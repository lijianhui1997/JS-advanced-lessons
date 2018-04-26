//构造函数有一个prototype属性，该属性就是实例化对象的原型
function person(age,name){
    this.name=name;
    this.age=age;
}
person.prototype.sayHi=function(){
    console.log("Hi,I'm "+this.name)}

var p1=new person(20,'lili')
p1.sayHi();//"Hi，I'm lili"
p1.age//20
//实际上我们可以创建很多对象，但共用一个原型链


//确认对象原型的方法，__proto__
//通过判断对象的额__proto__就是构造函数的prototype属性
function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);//"Mike"
console.log(p1.age);//21
p1.sayHi();//"Hi,I'm Mike 21 years old!"
console.log(p1.__proto__ === Person.prototype);//true


var arr=[];
arr.__proto__===Array.prototype//true
