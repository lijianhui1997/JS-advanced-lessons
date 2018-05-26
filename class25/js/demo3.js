//事件响应处理方式


//HTML事件响应处理
//最简单的事件绑定 <div id='div1' onclick='div1click()'></div>


//--DOM０级事件响应处理
 /*  window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//只输出了xx,说明发生了覆盖
    div2.onclick = eventHandler;//会输出坐标
    //div2.onclick = null;//取消事件响应
}
*/

//DOM2级事件响应处理
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.addEventListener("click",eventHandler);
    // div1.addEventListener("click",eventHandler,false);//第3个参数可选
    div1.addEventListener("click",function(){
        console.log("xx");
    });//两个语句都会输出

    div2.addEventListener("click",eventHandler);//输出坐标
    //div2.addEventListener("click",eventHandler,false);
    //div2.removeEventListener("click",eventHandler);//取消事件响应处理

    //自定义事件、事件分发、事件监听
    div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});//自定义处理事件
    div2.dispatchEvent(new Event("MyEvent"));

    //思考DOM节点对象的继承关系
    
    //原型的探究
     console.log(div2.__proto__);//HTMLDivElement {constructor: ƒ, Symbol(Symbol.toStringTag): "HTMLDivElement"}
     console.log(div2.__proto__.__proto__);//HTMLElement {…}
     console.log(div2.__proto__.__proto__.__proto__);//Element {…}
     console.log(div2.__proto__.__proto__.__proto__.__proto__);//Node {ELEMENT_NODE: 1, ATTRIBUTE_NODE: 2, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, ENTITY_REFERENCE_NODE: 5, …}
     console.log(div2.__proto__.__proto__.__proto__.__proto__);//Node {ELEMENT_NODE: 1, ATTRIBUTE_NODE: 2, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, ENTITY_REFERENCE_NODE: 5, …}
    console.log(div2.__proto__.__proto__.__proto__.__proto__.__proto__);//EventTarget {addEventListener: ƒ, removeEventListener: ƒ, dispatchEvent: ƒ, constructor: ƒ, Symbol(Symbol.toStringTag): "EventTarget"}
    //EventTarget 是一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器
    
}