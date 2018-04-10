var a=10,b=20;
function fn(){
	var a=100,c=200;
	function bar(){
		var a=500,d=600;
		console.log(a,b,c,d);
	}
	bar();
}
fn();


var name="Jack";
function ec(){
	console.log(name);
}
ec();//Jack

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack 词法作用域 与调用形式无关



//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();