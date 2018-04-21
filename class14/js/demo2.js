//set get的访问设置
var person={_name:"jack"}
Object.defineProperty(person,'name',{
    set:function(val){this._name=val;
                     },
    get:function(){return this._name}
});
person._name//"jack"
person._name='Lucy';
person._name//'Lucy'
//此时是可读可写的，因为set和get都存在

var person={_name:"jack"}
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"jack"
obj1.name="Lucy";//只定义了get访问器，因此写入失效
console.log(obj1.name);//"jack"


var person={_name:"jack"}
Object.defineProperty(person,'name',{
    configurable:false,//此时不能更改
    enumerable:true,
    set:function(val){this._name=val;
                     },
    get:function(){return this._name}
});