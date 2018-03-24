//严格模式下的this应用
function thisTest(){
	'use strict'
	console.log(this);
}
thisTest();//输出undefined

//运用this的严格模式属性来判断当前是否处于严格模式
function isStrictMode(){
	if(this===undefined)
		return true;
	else
		return false;
}

function isStrictMode(){
	return this===undefined?true:false;
}