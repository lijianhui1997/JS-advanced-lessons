//div2在里面
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");


    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);


    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },true);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },true);
}

//b 1 2 d  true false true false
//d b 2 1  false false true true   //此时第三项，即div2可以为true也可以为false
//课下看看顺序

