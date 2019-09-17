var circleModule = require("./circleModule.js");
//console.log(circleModule.circleFun(1));

var r =  process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log("圆的半径为："+r);
console.log("圆的周长为："+circleObj. circumference());
console.log("圆的面积为："+circleObj.area());

/**
 * 1、原生模块，随node环境安装就存在的
 * 2、自定义模块，自己编写的程序
 * 3、第三方模块，在命令行中进行安装的模块，从npm服务器上下载到本地的
 * 直接require("date-now");
 */

