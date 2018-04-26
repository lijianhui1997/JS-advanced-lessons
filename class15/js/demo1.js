//创建对象的三种方法
//第一种：直接用变量创建对象
var obj={
    name:'lili',
    age:20,
    jump:function(){
        console.log("I'm "+this.name+" jump");
    }
}
//第二种：用Object的静态方法创建变量
var subObj=Object.create(obj);
subObj.age=10;
subObj.name='lucy';
//第三种：构造函数实例化对象
function person(name,age){
    this.name=name;
    this.age=age;
}
var p=new person('Jack',22);