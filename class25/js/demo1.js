//JS事件：浏览器或者用户自身执行某种动作（比如 load click mouseover keydown keyup等等）
window.onload=function(){
    console.log("window onload");
    var div2=document.getElementById("div2");
        div2.onclick=function(){
            console.log("div2 click");}//点击事件
    }
    function div1click() {
        console.log("div1 click");
        //console.log("this:", this);
    }

