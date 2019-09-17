var userName = process.argv[2];
var passWord = process.argv[3];

console.log(userName,passWord);

if(userName != undefined && passWord != undefined){
    var message = userName + ":" + passWord;
    var buf = Buffer.from(message,"utf8");
    var base = buf.toString("base64");
    console.log(base);
}
else{
    console.log("请完整输入用户名和密码！");
}