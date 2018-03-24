//值传递
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;
    console.trace("a:",a," x:",x);
}

//引用传递
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);//1
    o.x = 3;
    console.trace("obj.x :",obj.x," o.x :",o.x);//1
}

console.trace("obj.x :",obj.x);//3
fee(obj);
console.trace("obj.x :",obj.x);//3