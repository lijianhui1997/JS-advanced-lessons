//交换变量
var [x,y]=[1,2];
console.log(x,y);//1 2
[x,y]=[y,x];
console.log(x,y);//2 1


//从函数中返回多个值
//- 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回
//但是有了解构赋值，取出这些值就非常方便
function example(){
    return [1,2,3];
}
var [a,b,c]=example();//将函数返回值1 2 3 赋值给了前面的a b c
console.log(a,b,c)//1 2 3

function example() {
    return {
        foo: undefined,
        bar: null
    };
}
var { foo=1, bar=2 } = example();
console.log(foo,bar)// 1 null

//提取JSON数据
var jsondata={id:1,status:"OK",data:[123,456]};
let {id,status,data:number}=jsondata;
console.log(id,status,number);//1 "OK" (2) [123, 456]
//可以去掉number,如果去掉  键值自动添加一个data 同名的value
//还可以单独提取想要的数据，不想要的数据不在console.log里输出就可以
console.log(id,status)//1 "OK"
id=2//重新赋值
console.log(id,status)// 2 "OK"


//给函数指定默认参数
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
// ... more config
}) {
// ... do stuff
};