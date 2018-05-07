//this缺陷及其解决方案
//this不进行作用域传递，函数嵌套情况不适用
var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        function moveTox(x){
            this.x=x;};
        function moveToy(y){
            this.y=y;};
        moveTox(x);
        moveToy(y);
    }
};
point.moveTo(1,2)
point//{x: 0, y: 0, moveTo: ƒ}，并没有修改成功


//解决方案
//1.使用变量that，self进行软绑定，使this指向正确