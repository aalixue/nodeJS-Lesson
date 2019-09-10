// var i = 0;
// process.stdin.on("data",function(data){
//     i++;
//     if(i == 4){
//         process.exit();
//     }
//     else{
//         console.log(data.toString());
//     }
// })


var obj = {};
var message = ["Name","Email","QQ","Mobile"];
var i = 1;
console.log(message[0]+"：");
process.stdin.on("data",function(data){
    obj[message[i-1]] = data.toString("utf8");
    if(i == 4){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(message[i++]+"：");
    }
})//输入数据敲回车的时候接受
