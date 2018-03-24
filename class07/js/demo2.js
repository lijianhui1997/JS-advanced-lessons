//普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();//this is window

function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window

var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//23

objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);//i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);//i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);//i'm:ABC i can fly ___ 7 8