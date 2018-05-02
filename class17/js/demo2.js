//模拟类-类继承的形式一
function Person(name,age){
    this.name=name;
    this.age=age;
};
Person.prototype.showName=function(){
    console.log(this.name);
}
function Student(name,age,id){
    Person.call(this,name,age);//关键
    this.id=id;
}
Student.prototype.prototype=Person.prototype;//关键
var s1=new Student("xxx",22,2017001);
var s1=new Student("yyy",20,2017002);


//模拟类-类继承的形式二
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.showName=function(){
    console.log(this.name);
}
function Student(name,age,id){
    Person.call(this,name,age);this.id=id;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
var s1=new Student("xxx",22,2017001);
var s1=new Student("yyy",20,2017002);