//switch语句

//注意：switch语句比较值时使用的是全等操作符，因此不会发生类型转换
var i='1';
switch(i){
	case 1:
	console.log('case 1 Number');
	break;
	default:
	console.log('default');
}//会输出default，因为i是字符串类型，并不是number类型
var j = new Number(23);
switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}
//实际上输出case_default，因为j要和case里面的值进行引用比较，它们并不指向同一块内存
//所以实际上没有对应项，选择default项

//分数典例：表达式
var i=76;
switch(true){
	case i>60:
	console.log('及格');
	break;
	case i<60:
	console.log('不及格');
	break;
	default:
	console.log('default');
}//及格
//注意的是，如果每个case之后没有break，它会依次往下执行，会输出 及格 不及格 default