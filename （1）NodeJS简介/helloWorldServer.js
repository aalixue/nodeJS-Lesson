const http = require("http");
var server = http.createServer(function(req,res){//(请求对象，响应对象)
    res.write("hello world!");
    res.end();
});
server.listen(8080);//创建后端服务
console.log("server is listening 8080");