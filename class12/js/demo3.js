//闭包作为对象的方法返回
function counter(){
    var n=0;
    return{
        count:function(){
            return ++n;
        },
        reset:function(){
            n=0;return n;
        }//重置
    }
}
var c=counter(),d=counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2


function f1(){
    var n=999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f=f1();
f();//1000
f();//1001