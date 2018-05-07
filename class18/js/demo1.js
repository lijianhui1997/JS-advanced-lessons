//创建数组的方法
var arr = [1,2,3,"4"];

var arr1=new Array(5);//arr是一个长度为5的空数组，值为undefined
var arr2 = new Array("5");//定义一个数组，其中元素是字符串5





//异步初始化
var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
//arr22     (6) [empty × 5, 5]
//访问arr[0]时候会沿作用域链向上查询变量i，但此时的box作用域里的i因为循环早已变成5了，i的作用域在全局

////增删改查
var a = ["hello"];
a[1] = 3.14;//增
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改
console.log(a[0]);//查

//思考
var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];
console.log(b);//[empty × 2, 3, undefined]


//注意特例，添加的可能是属性
var a = [];
a[-1.23] = true; //创建一个名为“-1,23”的属性
a["100"] = 0;   // 数组的第101个元素
a[1.00] = "Hi"; //和a[1]相当
console.log(a.length);
console.log(a);
