//避免全局变量滥用
(function(){
	var x=10;
	document.onclick=funtion(){
		alert('x='+x);
	}
})