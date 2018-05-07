//创建Date传入不同参数的情况
   //注意传入月份的时候要传入比想要月小一个月，因为月份是从零开始
var date=new Date(2017,9,10)//Tue Oct 10 2017 00:00:00 GMT+0800 (中国标准时间)
var date=new Date(2017,9,10,11,30,00)//Tue Oct 10 2017 11:30:00 GMT+0800 (中国标准时间)


var date1=new Date("2017-05-07")//Sun May 07 2017 08:00:00 GMT+0800 (中国标准时间)

var date2 = new Date(1000);//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)
//实际上以毫秒为单位

var date3=new Date();//Mon May 07 2018 19:18:23 GMT+0800 (中国标准时间)



//补充：无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date