//E5中没有块作用域(和C语言等不同)
{
	var a=20;
}
console.log(a);//仍能访问到a


for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//out of for 5  不报错，因为没有块作用域之分


if(true){
	var a=20;
}
console.log(a);//20

if(false){
    var b = 30;
}
console.log(b);//undefined