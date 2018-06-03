function Student(name,age,id){
    this.name=name;
    this.age=age;
    this.id=id;
}
Student.prototype.show=function(){
    console.log("I am "+this.name+", "+this.age+","+"my id is "+this.id);
}
module.exports=Student;



var a=0;
var b="lili";
var foo = function () {
    console.log(a,b);
    return 0;
}
module.exports.a = a;
module.exports.b = b;
module.exports.c = foo;