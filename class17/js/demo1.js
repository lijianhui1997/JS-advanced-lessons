var obj={
    x:1,
    y:2};
var obj1=Object.create(obj);
var obj2=Object.create(obj);
obj1.__proto__.x=3;//通过原型修改属性的值
obj2.__proto__.x//3




//共享属性太多
function Person(name){
    this.name=name;};
Person.prototype.age=10;
10
Person.prototype.showName=function(){
    console.log(this.name);}
function Student(id){
    this.id=id;}
Student.prototype=new Person("Mike");
var s1=new Student(2017001)
var s2=new Student(2017002)
console.log(s1.name,s1.age,s1.showName)
console.log(s2.name,s2.age,s2.showName)
s1.__proto__.__proto__.age//10
//添加属性
s1.name = "Bill";
s1.age = 22;
s2.name = "Colin";
s2.age = 23;
//这样有可能造成内存浪费