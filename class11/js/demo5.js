var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName('show')[0];

for(var i=0;i<tabs.length;i++) {

        tabs[i].onclick=function(){
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].className = '';
            }
            this.className = "active";
            contents.innerHTML = "导航" + i + "内容";
        };

}//因为tabs的长度就是4，实际上i j都变成了4，所以会出现点哪个都出现4的现象



//立即执行表达式的闭包变量共享解决
var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName('show')[0];

for(var i=0;i<tabs.length;i++) {
    (function (i) { 	//IIFE start
        tabs[i].onclick=function(){
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].className = '';
            }
            this.className = "active";
            contents.innerHTML = "导航" + i + "内容";
        };
    }(i));			//IIFE end
}


//同样的道理，下面
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}

//解决方案
for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}