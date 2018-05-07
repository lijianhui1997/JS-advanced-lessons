var a=1;
function fn(){
    var b=2;
    function fu(){
        console.log(a,b);
    }
}
fu();
fn();//1 2
//1.一般函数下的this(非严格模式)
//this在非严格模式下指代全局对象，所以通过this可以修改，增加，删除全局对象属性
var a=20,b=20;
function thisTest(){
    this.a='num';
    delete this.b;
    this.c='addtion'
}
thisTest();
console.log(a,c);//'num' 'addtion'

//小扩展
function  fn(){
    var a=b=2;
}
fn();
console.log(a)//报错，因为全局并没有a变量
console.log(b)//2


//2.对象方法中的this（无函数嵌套时）
//对象方法中this指代调用此方法的对象
var person={
    name:'lucy',
    age:10,
    changTo:function(name,age){
        this.name=name;
        this.age=age;
    }
}
person.changTo('lili',20)
console.log(person)//{name: "lili", age: 20, changTo: ƒ}


//3.构造函数中的this
//构造函数中的this指代通过呢我、新创建的对象
//一般来说构造函数的首字母大写，非构造函数中国首字母不大写
var Person=function(name,age){
    this.name=name;
    this.age=age;
    this.showme=function(){
        console.log(this.name,this.age);}
}
var p1=new Person('Lucy',19);
var p2=new Person('lili',20);
p1.showme();//'Lucy' 19
p2.showme();//'lili' 20


//4.间接调用中的this
//通过call/apply间接调用的函数中的this（指代第一个参数）
objA={name:'lucy',x:1};
objB={name:'lili',x:5};
function test(){
    console.log(this.name,this.x);
}
objA.fun=test;
objA.fun();
objA.fun.call(objB);
//'lucy' 1
//'lili' 5