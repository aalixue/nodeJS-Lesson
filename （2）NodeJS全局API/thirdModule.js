/**
 * npm (node package manager) 包管理器
 * 会有大量第三方上传的模块
 * 
 * 它是一个远端的模块的服务器
 * 
 * npm install 模块名称‘
 * 回车，就会去npm服务器上查找该模块，如果存在该模块
 * 就会下载到当前目录的node_modules文件夹中
 * （1）需要网络  （2）需要该模块在npm上实际存在
 */
const now = require('date-now');
console.log(now);//[Function: now]
console.log(Date.now());//1568077086150
console.log(now());//1568077086150