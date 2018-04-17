//set和get函数
var o={
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x=val;}
};
console.log(o.x)//1
o.x=2;
console.log(o.x,o._x)//2 2
//注意使用的时候不要加小括号，只用点就可以了

var p1={
    name:"lili",
    age:23,
    set age(val){
        if(val>0&&val<150){
            this.age=val;
        }
        else{
            console.log("请设置年龄");
        }
    },
    get age()
    {
        return this.age;
    }
};
p1.age = 178;
console.log(p1.age);//请设置年龄
