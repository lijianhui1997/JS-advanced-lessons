//普通函数
function max(a,b){
    return a>b?a:b;
}
max(2,3);//3

//立即执行表达式，解决变量共享问题
(function max(a,b){
    return a>b?a:b;
}(2,3));//3

(function max(a,b){
    return a>b?a:b;
})(2,3);//3，这是另一种传参数的形式
//注意：立即执行表达式只是一个表达式，它对匿名函数有效



// 立即执行表达式与运算符结合
var i = function(){
    return 10;
}(); //i是函数的返回值，为10


true && function(a,b){
    return a>b?a:b;
}(5,9);//9


!function(x,y){
    return x==y?true:false; 
}("5",5);//false,因为x==y返回true，但是前面有!


