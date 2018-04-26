//动态修改原型的属性
var obj={};
var obj1=new Object();
//两者原型是相等的,都为Object.prototype
obj1.__proto__==obj.__proto__//true
obj1.__proto__===obj.__proto__//true
obj.__proto__//Object.prototype
obj.__proto__.__proto__//null



var obj={
    num:10,
    name:'lili',
    jump:function(){
        console.log("Jump")}
}
var newobj=Object.create(obj)
newobj.num=12;
newobj.__proto__===obj//true   即表示newobj的原型就是obj
//修改原型的属性值
newobj.__proto__.num=5;
obj.num//5
