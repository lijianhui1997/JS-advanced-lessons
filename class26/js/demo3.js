var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    //console.log(Object.keys(req),"___",Object.keys(res));
    //console.log("req.url：",req.url);
    // var getDataObj = url.parse(req.url,true).query;//parse函数中第二个参数为true的话返回一个对象
    var getDataStr = url.parse(req.url).query;//parse函数中第二个参数为true的话返回一个对象

    res.writeHead(200, {
        "Content-Type": "text/plain",
        // res.writeHead(200, {"Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
        "Access-Control-Allow-Methods": "GET, POST"
    });
    setTimeout(function () {
        res.end("你好，我已收到你发的信息："+getDataStr);
    },20000*Math.random());
    //res.end("你的输入信息是："+getDataStr);
}).listen(8080,"127.0.0.1");
console.log("start server!");


//结果
/*Server {
    domain:
     Domain {
       domain: null,
       _events: { error: [Function: debugDomainError] },
       _eventsCount: 1,
       _maxListeners: undefined,
       members: [] },
    _events:
     { request: [Function],
       connection: [Function: connectionListener] },
    _eventsCount: 2,
    _maxListeners: undefined,
    _connections: 0,
    _handle: null,
    _usingSlaves: false,
    _slaves: [],
    _unref: false,
    allowHalfOpen: true,
    pauseOnConnect: false,
    httpAllowHalfOpen: false,
    timeout: 120000,
    keepAliveTimeout: 5000,
    _pendingResponseData: 0,
    maxHeadersCount: null,
    [Symbol(asyncId)]: -1 }
  > console.log("start server!");*/