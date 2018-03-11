var x;
x=23;
if(x>22){
	x+=2;
	console.log(x);//25
}
else{
	console.log("x不大于22");
}
var xx=234;
if(234==xx){
	console.log('相等')
}

console.log(a);//undefined
if(true){
    var a = 2;
}
console.log(a);//2

console.log(b);//undefined
if(false){
    var b = 3;
}
console.log(b);//undefined

for(var i=0;i<3;i++){
    console.log("i:",i);//i:0 i:1 i:2
}
console.log(i);//3

function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,3));