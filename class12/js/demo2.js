//
var tmp=100;//注意词法作用域
function foo(x){
    var tmp=3;
    return function(y){
        console.log(x+y+(++tmp));
    }
}
var fee=foo(2);
fee(10);//16
fee(10);//17
fee(10);//18


//tmp在不同作用域
var tmp=100;//注意词法作用域
function foo(x){
    //var tmp=3;
    return function(y){
        console.log(x+y+(++tmp));
    }
}
var fee=foo(2);
fee(10);//113
fee(10);//114
fee(10);//115

function foo(x){
    var tmp=3;
    return function(y){
        x.count=x.count?x.count+1:1;
        console.log(x+y+tmp,x.count)
    }
}
var age=new Number(2);
var bar=foo(age);
bar(10);//15 1
bar(10);//15 2
bar(10);//15 3



