//立即执行表达式的避免变量共享功能
function f(){
    var get=[];
    for(var i=0;i<10;i++){
        (function(j){
            get[j]=function(){
                return j;};
        })(i);
    }
    return get;
}
var tmp=f();
tmp[3]();//3




function f(){
    var get=[];
    for(var i=0;i<10;i++){
            get[i]=function(){
                return i;};
        };
    return get;
}
var tmp=f();
tmp[3]();//10
//没有函数作用域，所以变量共享，每次都输出10
