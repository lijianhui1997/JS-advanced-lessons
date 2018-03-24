var a=[1,2,3];
var b=a;
console.log(a,b);//[1, 2, 3] [1, 2, 3]
b.pop();
console.log(a,b);//[1,2] [1,2]
b=[4,5,6];
console.log(a,b);//[1,2] [4,5,6]

function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    //console.log(x);//[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a);//[1,2,3,4]


//要二义性的情况
var max=function(x,y){
	return x>y?x:y;
}
{
	foo:max(2,3)
}