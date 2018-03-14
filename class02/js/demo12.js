//隐式类型转换和显示类型转换

//隐式类型转换
var a=3;
var b=4;
console.log(typeof(a>b),a>b);//boolean false
console.log(typeof(a==b),a==b)//boolean false
console.log(typeof(a<b),a<b);//boolean true

//+ 一般转换为字符串类型
var c='img'+3+'.jpg';
console.log(c);//'img3.jpg'

//- 一般转换为number类型
var a='25'-3;
console.log(a);//22

var m=!23;
var n=!!34;
var p=!!{};
console.log(m,n,p);//false true true
var s=!!'';
console.log(s);//false
var q=!!0;
console.log(q)//false
var e=!!undefined;
console.log(e);//false
var f=!!null
console.log(f);//false

var g={x:1};
if(g){
	console.log("g:",g);
}//g:{x:1}

var h='';
if(h){
	console.log("h:",h)
}//不会输出


//显示类型转换：即demo11中的阐述