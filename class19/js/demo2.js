//Date的方法
//静态方法
//1.Date.now()
Date.now();//1525692211504  以毫秒为单位，从1970年1月日00:00:00开始计算
(new Date()).getTime()
//2.Date.parse(dateTimeString)      dateTimeString字符串转换成毫秒
Date.parse("1970-01-01")//0
Date.parse("1970-01-02")//86400000=24*3600*1000
//3.Date.UTC()         将给定的日期转换成毫秒,解释为UTC 协调世界时间
Date.UTC(2016,1,6)//1454716800000


//原型方法
//getFullYear() 年        getMonth() 月-1    getDay()  星期几     getDate() 日期      getHours()小时
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());//1978 10 6 25 8
console.log(d.getTimezoneOffset());//-480
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());//1978 10 6 11 8
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());//1999 5 4 3 8

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());//15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
console.log(d.toDateString(),"___",d.toLocaleDateString());//Sat Apr 21 2012 ___ 2012/4/21
console.log(d.toJSON());//2012-04-21T07:07:23.234Z




//课上练习例子
//可以利用Date 知道下个月或者指定月的今天是星期几
var today=new Date();
today.setMonth(6);//1530945895870
today//Sat Jul 07 2018 14:44:55 GMT+0800 (中国标准时间)
today.getDay();//6


var today=new Date();
today.getTime();//1525676464047
var future=new Date(today.getTime()+3600*1000*24*60);//60天之后的时间
future.getDate();//6
future//Fri Jul 06 2018 15:01:04 GMT+0800 (中国标准时间)