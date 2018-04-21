//原型链上遍历不到的属性是因为默认设置为false
var objProto = {
    z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log(obj.toString);

for(var k in obj){
    console.log(k,obj[k]);
}//遍历时却访问不到toString属性




//JS对象属性的可枚举型设置
var obj={
    m:1,n:2
}
undefined
for(var k in obj)
{
console.log(obj[k]);}
//1 2
Object.defineProperty(obj,'m',{enumerable:false});
for(var k in obj)
{
console.log(obj[k]);}
//2


Object.defineProperty(person,'name',{
    writable:false,
    configurable:false,
    enumerable:true,
    value:'Mike'});
    console.log(person.name)//'Mike'
    person.name="Lucy"
    console.log(person.name)//'Mike',已经设置的属性不可删除，不可修改
    delete person.name
    console.log(person.name)//'Mike'



var obj={
        m:1,n:2}
obj.o=3;//直接添加的属性，其所有特性默认都为true
for(var k in obj)
{
    console.log(k,obj[k]);
}
//m 1
//n 2
//o 3

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}//所以遍历不到w


