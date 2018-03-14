var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4


//math的方法
console.log(NaN === NaN);//false，记住
console.log(isNaN("12,3"));//true
console.log(Math.floor(2.1));//2
console.log(Math.floor(-2.1));//-3
console.log(Math.ceil(2.1));//3
console.log(Math.ceil(-2.1));//-2
console.log(Math.round(-2.1));//-2
console.log(Math.round(-2.5));//-2
console.log(Math.round(-2.8));//-3