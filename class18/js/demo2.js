var a1 = [,"abc"];
console.log(a1.length);//2

for(var i in a1){
    console.log(i,a1[i]);//1 abc
}
console.log(0 in a1,1 in a1);//false true

var a2 = new Array(3);
console.log(a2.length);//3
console.log(a2);//[empty × 3]

var a3 = [,,];
console.log(a3.length);//2



// 多维数组 实例一 矩形数组和交错数组
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);
// 合并一起的写法
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product = table[2][4];
console.log(table);


//数组的方法
var arr2 = [1,3,5,7];
var shiftElement = arr2.shift();//返回去除的元素
console.log(shiftElement,arr2);//1 (3) [3, 5, 7]

var newLength = arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);//5 (5) [1, 2, 3, 5, 7]

var popElement = arr2.pop();//返回pop出去的元素
console.log(popElement,arr2);//7 (4) [1, 2, 3, 5]

var newLength = arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);//6 (6) [1, 2, 3, 5, 77, 88]


var arr3 = ["a","b"];
var arr4 = ["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);//(4) ["a", "b", "c", "d"]


var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);//(4) ["banana", "pear", "apple", "orange"]


//forEach
var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
console.log(arr1);
//2 "不大于3"
//5 "大于3"
//8 "大于3"
//[2,5,8]


//every
var arr2= [2,5,8];
var returnValue = arr2.every(function (a) {
    return a%2===0;
});
console.log(returnValue);//false   判断是否全是偶数

//map
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);//(5) [1, 9, 25, 49, 81] (5) [1, 3, 5, 7, 9]


