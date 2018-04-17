var obj={
    num:10,
    sex:'女',
    jump:function(){
        console.log(this.num);//this指向obj
    }
}
obj.jump();//10   调用方法
obj.sex;//"女"


//math JSON 是返回Object  其余都是构造函数，返回Function
//构造函数是函数，也是对象
//new function() 实例化出来一个函数  new new function()则是实例化出来一个对象
typeof Function//function
typeof Array//function
typeof Date//function
typeof String//function
typeof Number//function
typeof Math//Object
typeof JSON//Object

//math和JSON没有构造函数，只是对象
Function instanceof function//true
Function instanceof Object//true
Object instanceof Function//true
Object instanceof Object//true
Boolean instanceof Function//true
Boolean instanceof Object//true
String instanceof Function//true
String instanceof Object//true
Number instanceof Function//true
Number instanceof Object//true
Array instanceof Function//true
Array instanceof Object//true
Date instanceof Function//true
Date instanceof Object//true
Math instanceof Function//false
Math instanceof Object//true
JSON instanceof Function//false
JSON instanceof Object//true

