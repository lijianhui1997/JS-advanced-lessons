var a1=20;
var a2=23.4;
console.log(parseInt(a2));//23
console.log(parseFloat("23.456xy"));//23.456

console.log(parseInt === window.parseInt);//true
console.log(parseFloat === window.parseFloat);//true

console.log(Math.ceil(a2));//24
console.log(Math.floor(a2));//23
console.log(Math.round(a2));//23

a3 = 5e2;
console.log(a3);//500
console.log(typeof Math);//object

var x=Number('xis021');
console.log(x);//NaN
console.log(isNaN(x));//true
console.log(typeof NaN);//number

var y1=2/0;
console.log(y1);//Infinity

var y2 = -2/0;
console.log(y2);//-Infinity

console.log(isFinite(y2));//false，非有限数
console.log(isFinite(2));//true，有限数

var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0