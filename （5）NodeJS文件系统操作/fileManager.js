const fs = require("fs");
const path = require("path");

// console.log("创建文件夹：");
// process.stdin.on("data",function(data){
//     var cmd = data.toString();
//     var cmdArr = cmd.split(" ");

//     switch(cmdArr[0]){
//         case "mkdir":
//             fs.mkdirSync(cmdArr[1].slice(0,-2));
//             break;
//         case "touch":
//             var filePath = path.join(__dirname,"/filedir/file.txt");
//             fs.writeFileSync(filePath,"hello node");
//             break;
//         case "delete":
//             var filePath = path.join(__dirname,"/filedir/file.txt");
//             fs.unlinkSync(filePath);
//             break;
//         default:
//             console.log("something error");
//             break;
//     }
// })

var message = ["请输入要创建的文件夹", "请输入要创建的文件", "请输入要删除的文件"];
var i = 0;
console.log(message[0] + "：");
process.stdin.on("data", function (data) {
    if (i < 3) {
        var cmd = data.toString();
        var cmdArr = cmd.split(" ");
        switch (cmdArr[0]) {
            case "mkdir":
                fs.mkdirSync(cmdArr[1].slice(0, -2));
                break;
            case "touch":
                var filePath = path.join(__dirname, "/filedir/file.txt");
                fs.writeFileSync(filePath, "hello node");
                break;
            case "delete":
                var filePath = path.join(__dirname, "/filedir/file.txt");
                fs.unlinkSync(filePath);
                break;
            default:
                console.log("something error");
                break;
        }
        i++;
        console.log(message[i++] + "：");
    }
    

})
