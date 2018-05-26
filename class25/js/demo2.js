//事件对象（包含事件中的信息）：即事件发生时产生的事件对象（比如，鼠标事件对象，键盘事件对象）
window.onload=function(e){
    console.log("e:",e);//Event {isTrusted: true, type: "load", target: document, currentTarget: Window, eventPhase: 2, …}
    var div1=document.getElementById("div1");
    var eventHandle=function(e){
       /* console.log(e);
        console.log(e.target);//target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口
        console.log(e.clientX,e.clientY);//坐标信息
        */
        //console.log(e);//MouseEvent {isTrusted: true, screenX: 101, screenY: 188, clientX: 101, clientY: 122, …}
        //console.log(e.__proto__);//MouseEvent {…}
        //console.log(e.__proto__.__proto__);//UIEvent {initUIEvent: ƒ, …}
        //console.log(e.__proto__.__proto__.__proto__);//Event {NONE: 0, CAPTURING_PHASE: 1, AT_TARGET: 2, BUBBLING_PHASE: 3, …}
        //console.log(e.__proto__.__proto__.__proto__.__proto__);//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}




         for(var k in e){
             console.log(k,e[k]);
              }
         for(var k in e.__proto__){
             console.log(k);
         }
         for(var k in e.__proto__.__proto__){
            console.log(k);
         }
         for(var k in e.__proto__.__proto__.__proto__){
             console.log(k);
         }
    
    
    
    
    }

    div1.onclick=eventHandle;

}
        