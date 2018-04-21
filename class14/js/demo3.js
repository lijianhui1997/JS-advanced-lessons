//属性特征描述符
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");
//{value: 5, writable: true, enumerable: true, configurable: true}
//默认为true
Object.getOwnPropertyDescriptor(obj,"y");
//{value: 6, writable: false, enumerable: true, configurable: false}
Object.getOwnPropertyDescriptor(obj,"z");
//{value: 7, writable: false, enumerable: false, configurable: false}



//给多个属性设置特性的方法，用逗号隔开
Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function (val) {
            this._x = val;
        }
    }
});



//属性继承
var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
});//writable是false
o1.x = 34;
console.log(o1.x);//12

var o2 = Object.create(o1);
o2.x = 56;//实际上是修改了o1的x属性
console.log(o2.x);//12



var o1 = {};
Object.defineProperty(o1,"x",{
    value:12,
    writable:true
});
o1.x = 34;
console.log(o1.x);//34

var o2 = Object.create(o1);
o2.x = 56;
console.log(o2.x);//56