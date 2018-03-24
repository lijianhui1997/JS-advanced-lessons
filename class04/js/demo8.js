//switch语句中的break
//从满足第一case处开始执行，直到遇到break为止，
//若都没有break则直到default结束为止
var i = 1;
switch(i){
    case 1:
        console.log("case 1");
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
    case 4:
        console.log("case 4");
    default:
        console.log("default");
}//此时会输出case 1 case 2
//如果i=2  case2
//i=3 case 3 case 4 default
//i=4 case 4 default


//利用switch来实现累加计算
var year =2017,
    month = 3,
    date = 3,
    sum = 0;
switch(month-1){
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year%4==0&&year%100!=0||year%400==0?29:28;//闰年的判断
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);//62
