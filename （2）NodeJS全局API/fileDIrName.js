//1、引入http原生模块
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// //2、创建一个服务器
// var server = http.createServer(function(req,res){//参数分别是请求对象，响应对象
//     //4、当客户端的http请求发起的时候，才会执行回调函数里面的内容
//     //5、process.platform得到当前程序执行所在操作系统
//     var sys = process.platform;
//     //console.log(sys);
//     var htmlPath = path.join(__dirname,"/views/view.html");
//     console.log(htmlPath);
//     var htmlContent = fs.readFileSync(htmlPath);//同步读取路径下文件的内容
//     htmlContent = htmlContent.toString("utf8");
//     //console.log(htmlContent);
//     res.writeHead(200,{"Content-Type":"text/html"});//写响应码的响应头
//     res.write(htmlContent);
//     res.end();
// });//函数客户端发生请求，访问服务监听端口时才会执行
// //3、服务监听一个端口
// server.listen(8080);
// console.log("server is listening 8080");



const http = require("http");
const fs = require("fs");//读
const path = require("path");
http.createServer(function(req,res){
    //读文件
    var filePath = path.join(__dirname,"/views/view.html");
    var fileContent = fs.readFileSync(htmlPath);//同步读取路径下文件的内容
    fileContent = fileContent.toString("utf8");
    res.writeHead(200,{"Content-Type":"text/html"});//写响应码的响应头
    res.write(fileContent);
    res.end();
}).listen(8080);
console.log("server is listening 8080");
