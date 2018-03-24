 function test() {
    console.log(arguments);
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"


var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10