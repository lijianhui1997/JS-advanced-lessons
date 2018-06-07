//let的使用：解决ES5的问题
//ES5中没有块作用域，原来变量污染和变量共享问题严重
//避免变量污染
let userId=123;
document.onclick=function(){
console.log(userId);}
let a=2,b=3;
if(a<b){
    let userId=234;}
//一点击，控制台输出123


//避免变量共享
for(let i=0;i<3;i++){
    setTimeout(function(){
console.log(new Date,i);},1000*i);
}
//Tue Jun 05 2018 19:29:34 GMT+0800 (中国标准时间) 0
//VM63:3 Tue Jun 05 2018 19:29:35 GMT+0800 (中国标准时间) 1
//VM63:3 Tue Jun 05 2018 19:29:36 GMT+0800 (中国标准时间) 2