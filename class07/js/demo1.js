function max(a,b){
    return a>b?a:b;
}
max(2,3);

var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);

var max = new Function("a","b","return a>b?a:b");
max(2,3);